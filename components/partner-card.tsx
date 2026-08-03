import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { Partner, PartnerTier } from '@/lib/partners-data'

const tierStyles: Record<
  PartnerTier,
  { badge: string; border: string; dot: string }
> = {
  strategic: {
    badge: 'border-violet/40 bg-violet/10 text-violet-foreground',
    border: 'hover:border-violet/60',
    dot: 'bg-violet',
  },
  community: {
    badge: 'border-sky-500/40 bg-sky-500/10 text-sky-300',
    border: 'hover:border-sky-500/60',
    dot: 'bg-sky-500',
  },
  supporter: {
    badge: 'border-border bg-muted text-muted-foreground',
    border: 'hover:border-border',
    dot: 'bg-muted-foreground',
  },
}

const tierLabels: Record<PartnerTier, string> = {
  strategic: 'Strategic',
  community: 'Community',
  supporter: 'Supporter',
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('')
}

export function PartnerCard({ partner }: { partner: Partner }) {
  const style = tierStyles[partner.tier]

  return (
    <article
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors',
        style.border,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary font-mono text-sm font-bold text-foreground">
            {initials(partner.name)}
          </div>
          <h3 className="font-mono text-lg font-bold tracking-tight text-foreground">
            {partner.name}
          </h3>
        </div>
        <span
          className={cn(
            'inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs font-semibold',
            style.badge,
          )}
        >
          <span className={cn('size-1.5 rounded-full', style.dot)} />
          {tierLabels[partner.tier]}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {partner.description}
      </p>

      <div className="mt-5 flex-1">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          What they provide
        </p>
        <ul className="mt-3 space-y-2">
          {partner.contributions.map((contribution) => (
            <li
              key={contribution}
              className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
            >
              <span
                className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', style.dot)}
              />
              {contribution}
            </li>
          ))}
        </ul>
      </div>

      {partner.website && (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-foreground transition-colors hover:text-accent"
        >
          Visit website
          <ArrowUpRight size={15} />
        </a>
      )}
    </article>
  )
}