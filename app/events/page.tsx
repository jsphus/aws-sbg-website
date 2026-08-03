import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { FeaturedEventCard, UpcomingEventCard } from '@/components/event-card'
import { getAllEvents } from '@/lib/meetup'
import { SITE_CONFIG } from '@/lib/config'

// Revalidate every 6 hours (21600 seconds). Adjust as needed:
// 3600 = hourly, 86400 = daily.
export const revalidate = 21600

export const metadata = {
  title: 'Events',
  description:
    'Workshops, study jams, hackathons, and career sessions hosted by the AWS Student Builder Group.',
}

export default async function EventsPage() {
  let upcoming: Awaited<ReturnType<typeof getAllEvents>>['upcoming'] = []
  let past: Awaited<ReturnType<typeof getAllEvents>>['past'] = []
  let feedError = false

  try {
    const result = await getAllEvents()
    upcoming = result.upcoming
    past = result.past
  } catch {
    feedError = true
  }

  const featuredEvent = upcoming[0]
  const remainingUpcoming = upcoming.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Page header */}
        <section className="border-b border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
              Community calendar
            </span>
            <h1 className="mt-3 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Events
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Join us for workshops, hackathons, and cloud study sessions. Free
              for members and open to newcomers.
            </p>
          </div>
        </section>

        {/* Featured event */}
        {featuredEvent ? (
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <FeaturedEventCard event={featuredEvent} />
          </section>
        ) : (
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="font-mono text-lg font-bold text-foreground">
                No upcoming events
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;re planning our next events. Check back soon or join our Meetup group to stay updated.
              </p>
              <Button render={<a href={SITE_CONFIG.meetupGroupUrl} />} className="mt-6">
                Join on Meetup
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </section>
        )}

        {/* Upcoming events */}
        {remainingUpcoming.length > 0 && (
          <section className="border-y border-border bg-card/40">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground">
                    Upcoming Events
                  </h2>
                  <p className="mt-3 text-pretty text-muted-foreground">
                    Save your spot and come build with us.
                  </p>
                </div>
                <Button
                  render={<a href={featuredEvent.url} />}
                  variant="outline"
                >
                  View on Meetup
                  <ArrowUpRight size={16} />
                </Button>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {remainingUpcoming.map((event) => (
                  <UpcomingEventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Past events */}
        {past.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div>
              <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground">
                Past Events
              </h2>
              <p className="mt-3 text-pretty text-muted-foreground">
                A look back at what we&apos;ve built together.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {past.map((event) => (
                <UpcomingEventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Want to host an event?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Have an idea for a workshop, talk, or study session? Join our
              Meetup group and pitch it to the community.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                render={<a href={SITE_CONFIG.meetupGroupUrl} />}
                size="lg"
              >
                Join our Meetup group
                <ArrowUpRight size={16} />
              </Button>
              <Button
                render={<a href="/#join" />}
                variant="outline"
                size="lg"
              >
                Join the group
              </Button>
            </div>
          </div>
        </section>

        {feedError && (
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
            <p className="text-center text-xs text-muted-foreground/60">
              Live events are temporarily unavailable. Check back soon.
            </p>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
