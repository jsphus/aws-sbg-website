import ical from 'node-ical'
import type { MeetupEvent } from './events-data'

/**
 * Strip HTML tags from a string, returning plain text.
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

/**
 * Resolve a ParameterValue (which may be a plain string or { val, params })
 * to its underlying string value.
 */
function resolveParam(val: string | { val: string; params: Record<string, string> }): string {
  return typeof val === 'string' ? val : val.val
}

/**
 * Fetch and parse the Meetup iCal feed into a clean, typed list of upcoming
 * events, sorted soonest-first with HTML-stripped descriptions.
 *
 * Reads the feed URL from process.env.MEETUP_ICAL_URL.
 * Throws a clear error if that env var is missing or the fetch fails.
 */
export async function fetchMeetupEvents(): Promise<MeetupEvent[]> {
  const feedUrl = process.env.MEETUP_ICAL_URL
  if (!feedUrl) {
    throw new Error(
      'MEETUP_ICAL_URL environment variable is not set. ' +
        'Add your Meetup group iCal feed URL to .env.local and Vercel Project Settings.',
    )
  }

  const response = await fetch(feedUrl, {
    next: { revalidate: 21600 }, // 6 hours — matches the API route and page revalidation
  })

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Meetup iCal feed: ${response.status} ${response.statusText}`,
    )
  }

  const icsText = await response.text()
  const parsed = ical.parseICS(icsText)
  const now = new Date()

  const events: MeetupEvent[] = []

  for (const key of Object.keys(parsed)) {
    const component = parsed[key]
    if (!component || component.type !== 'VEVENT') continue

    const event = component as ical.VEvent

    // Skip events without a start date or that are in the past
    if (!event.start || event.start < now) continue

    const startDate = new Date(event.start)
    const endDate = event.end ? new Date(event.end) : undefined

    // Format date as ISO date string (YYYY-MM-DD)
    const dateStr = startDate.toISOString().split('T')[0]

    // Format time as HH:MM
    const hours = String(startDate.getHours()).padStart(2, '0')
    const minutes = String(startDate.getMinutes()).padStart(2, '0')
    const timeStr = `${hours}:${minutes}`

    // Extract and clean description
    const rawDescription = event.description ? resolveParam(event.description) : ''
    const description = stripHtml(rawDescription)

    // Extract location
    const location = event.location ? resolveParam(event.location) : 'TBA'

    // Extract URL (use the iCal URL property or fall back to feed URL)
    const url = event.url || feedUrl

    events.push({
      id: event.uid || `event-${key}`,
      name: event.summary ? resolveParam(event.summary) : 'Untitled Event',
      description,
      date: dateStr,
      time: timeStr,
      location,
      url,
      status: 'upcoming',
      group: {
        name: 'AWS Student Builder Group',
        url: 'https://meetup.com/aws-student-builder-group',
      },
    })
  }

  // Sort soonest-first
  events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return events
}
