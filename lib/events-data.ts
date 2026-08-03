/**
 * Shared event type used across the site.
 * All event data now comes from the Meetup iCal feed — no mock data.
 */

export interface MeetupEvent {
  id: string
  name: string
  description: string
  date: string // ISO date
  time: string
  location: string
  url: string
  imageUrl?: string
  status: 'upcoming' | 'past'
  featured?: boolean
  attendeeCount?: number
  group: {
    name: string
    url: string
  }
}
