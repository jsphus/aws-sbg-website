import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EventsGrid } from '@/components/events-grid'
import { fetchMeetupEvents } from '@/lib/meetup'
import { pastEvents } from '@/lib/events-data'

// Revalidate every 6 hours (21600 seconds). Adjust as needed:
// 3600 = hourly, 86400 = daily.
export const revalidate = 21600

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + 'T00:00:00')
  const dayName = d.toLocaleDateString('en-US', { weekday: 'short' })
  const monthName = MONTHS[d.getMonth()]
  return `${dayName}, ${monthName} ${d.getDate()}`
}

export async function EventsSection() {
  let upcoming: { date: string; location: string; title: string; body: string }[] = []
  let hasLiveEvents = false

  try {
    const meetupEvents = await fetchMeetupEvents()
    if (meetupEvents.length > 0) {
      hasLiveEvents = true
      upcoming = meetupEvents.slice(0, 3).map((e) => ({
        date: formatDate(e.date),
        location: e.location,
        title: e.name,
        body: e.description || '',
      }))
    }
  } catch {
    // Feed unreachable — show past events instead
  }

  const showPastInstead = upcoming.length === 0

  // Map past events into the same card shape
  const pastCards = pastEvents.slice(0, 3).map((e) => ({
    date: formatDate(e.date),
    location: e.location,
    title: e.name,
    body: e.description || '',
    url: e.url,
  }))

  return (
    <section id="events" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
              {showPastInstead ? 'Recent activity' : "What's next"}
            </span>
            <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {showPastInstead ? 'No upcoming events' : 'Upcoming events'}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {showPastInstead
                ? "We're planning our next round of events. Here's what we've been up to."
                : 'Free for members and open to newcomers. Save your spot and come build with us.'}
            </p>
          </div>
          <Button render={<a href="/events" />} variant="outline">
            View all events
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <EventsGrid
          events={showPastInstead ? pastCards : upcoming}
          showPastInstead={showPastInstead}
        />

        {!hasLiveEvents && (
          <p className="mt-6 text-center text-xs text-muted-foreground/60">
            Connect your Meetup iCal feed for live upcoming events.
          </p>
        )}
      </div>
    </section>
  )
}
