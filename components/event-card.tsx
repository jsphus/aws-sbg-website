import type { ReactNode } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Users, ArrowUpRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { MeetupEvent } from '@/lib/events-data'

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

function formatDate(date: string) {
  const d = new Date(date)
  return {
    day: d.getDate(),
    month: MONTHS[d.getMonth()],
    year: d.getFullYear(),
  }
}

function formatTime(time: string) {
  const [hour, minute] = time.split(':').map(Number)
  const period = hour >= 12 ? 'PM' : 'AM'
  const h = hour % 12 === 0 ? 12 : hour % 12
  return `${h}:${String(minute).padStart(2, '0')} ${period}`
}

/** Compact date block used across all card variants. */
function DateBlock({ date }: { date: string }) {
  const { day, month } = formatDate(date)
  return (
    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg border-2 border-[#8b5cf6]/40 bg-[#8b5cf6]/10">
      <span className="font-mono text-xl font-bold leading-none text-[#c4b5fd]">
        {day}
      </span>
      <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {month}
      </span>
    </div>
  )
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
      {children}
    </span>
  )
}

function MetaRow({ event }: { event: MeetupEvent }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <Calendar size={13} />
        {formatTime(event.time)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <MapPin size={13} />
        {event.location}
      </span>
    </div>
  )
}

/** Large, prominent card for the next big event. */
export function FeaturedEventCard({ event }: { event: MeetupEvent }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border-2 border-[#8b5cf6] bg-card pixel-shadow">
      <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-[auto_1fr]">
        <DateBlock date={event.date} />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>
              <Star size={11} />
              Featured
            </Badge>
            <span className="font-mono text-xs uppercase tracking-widest text-[#c4b5fd]">
              {event.group.name}
            </span>
          </div>
          <h2 className="mt-4 font-mono text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            {event.name}
          </h2>
          <MetaRow event={event} />
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {event.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button render={<a href={event.url} />} size="lg">
              Register for this event
              <ArrowUpRight size={16} />
            </Button>
            {typeof event.attendeeCount === 'number' && (
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users size={15} />
                {event.attendeeCount} attending
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

/** Medium card for upcoming or past events. */
export function UpcomingEventCard({
  event,
  variant = 'upcoming',
}: {
  event: MeetupEvent
  variant?: 'upcoming' | 'past'
}) {
  const isPast = variant === 'past'

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50">
      {event.imageUrl && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={event.imageUrl}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-4">
          <DateBlock date={event.date} />
          <div className="min-w-0">
            <h3 className="font-mono text-lg font-bold leading-snug text-foreground">
              {event.name}
            </h3>
            <MetaRow event={event} />
          </div>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users size={13} />
            {event.attendeeCount ?? 0} {isPast ? 'attended' : 'attending'}
          </span>
          <Button
            render={<a href={event.url} />}
            variant="link"
            className="text-sm font-semibold text-violet-foreground hover:text-accent hover:no-underline"
          >
            {isPast ? 'See details' : 'Register'}
            <ArrowUpRight size={15} />
          </Button>
        </div>
      </div>
    </article>
  )
}