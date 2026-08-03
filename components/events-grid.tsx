'use client'

import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StaggerContainer, StaggerItem } from '@/components/motion'

export type EventCard = {
  date: string
  location: string
  title: string
  body: string
  url?: string
}

export function EventsGrid({
  events,
  showPastInstead,
}: {
  events: EventCard[]
  showPastInstead: boolean
}) {
  return (
    <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
      {events.map((event) => (
        <StaggerItem key={event.title} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50">
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} />
                  {event.location}
                </span>
              </div>
              <h3 className="mt-3 font-mono text-lg font-bold leading-snug text-foreground">
                {event.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {event.body}
              </p>
              <Button
                render={<a href={event.url ?? '/events'} />}
                variant="link"
                className="mt-4 text-sm font-semibold text-violet-foreground hover:text-accent hover:no-underline"
              >
                {showPastInstead ? 'See details' : 'Register'}
                <ArrowUpRight size={15} />
              </Button>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}