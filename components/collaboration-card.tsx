import { CalendarDays, TrendingUp } from 'lucide-react'

import type { Collaboration } from '@/lib/partners-data'

export function CollaborationCard({
  collaboration,
}: {
  collaboration: Collaboration
}) {
  return (
    <article className="relative flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-sm font-bold tracking-tight text-foreground">
          {collaboration.partnerName}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <CalendarDays size={13} />
          {collaboration.date}
        </span>
      </div>

      <h3 className="mt-3 font-mono text-base font-bold leading-snug text-violet-foreground">
        {collaboration.eventName}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {collaboration.description}
      </p>

      <div className="mt-4 rounded-lg border border-border bg-secondary/60 p-3">
        <p className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
          <TrendingUp size={13} />
          Outcome
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
          {collaboration.outcome}
        </p>
      </div>
    </article>
  )
}