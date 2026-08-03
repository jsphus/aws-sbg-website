import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EventsGrid } from '@/components/events-grid'
import { getAllEvents } from '@/lib/meetup'
import { SITE_CONFIG } from '@/lib/config'

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
  let upcoming: { date: string; location: string; title: string; body: string; imageUrl?: string; url?: string }[] = []
  let past: { date: string; location: string; title: string; body: string; url?: string }[] = []

  try {
    const { upcoming: upcomingRaw, past: pastRaw } = await getAllEvents()
    upcoming = upcomingRaw.slice(0, 3).map((e) => ({
      date: formatDate(e.date),
      location: e.location,
      title: e.name,
      body: e.description || '',
      imageUrl: e.imageUrl,
      url: e.url,
    }))
    past = pastRaw.slice(0, 3).map((e) => ({
      date: formatDate(e.date),
      location: e.location,
      title: e.name,
      body: e.description || '',
      url: e.url,
    }))
  } catch {
    // Feed/store unreachable — show empty state
  }

  const showPastInstead = upcoming.length === 0 && past.length > 0

  return (
    <section id="events" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
              {showPastInstead ? 'Recent activity' : upcoming.length > 0 ? "What's next" : 'Events'}
            </span>
            <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {showPastInstead ? 'Past events' : 'Upcoming events'}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {showPastInstead
                ? "We're planning our next events. Here's what we've built so far."
                : 'Free for members and open to newcomers. Save your spot and come build with us.'}
            </p>
          </div>
          <Button render={<a href="/events" />} variant="outline">
            View all events
            <ArrowUpRight size={16} />
          </Button>
        </div>

        {upcoming.length > 0 ? (
          <EventsGrid events={upcoming} showPastInstead={false} />
        ) : past.length > 0 ? (
          <EventsGrid events={past} showPastInstead={true} />
        ) : (
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="font-mono text-lg font-bold text-foreground">
              No events yet
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Join our Meetup group to be the first to know when events are posted.
            </p>
            <Button render={<a href={SITE_CONFIG.meetupGroupUrl} />} className="mt-6">
              Join on Meetup
              <ArrowUpRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
