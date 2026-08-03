import type { TeamMember } from '@/lib/team-data'

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="group flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-8 text-center transition-colors hover:border-primary/50">
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-full border border-border font-mono text-2xl font-bold ${member.avatarClass}`}
        aria-hidden="true"
      >
        {initials}
      </div>
      <h3 className="mt-5 font-mono text-lg font-bold tracking-tight text-foreground">
        {member.name}
      </h3>
      <span className="mt-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
        {member.role}
      </span>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {member.bio}
      </p>
    </article>
  )
}