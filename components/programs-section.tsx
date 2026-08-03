import { BookOpen, Users, Rocket, Compass } from 'lucide-react'

const programs = [
  {
    Icon: BookOpen,
    title: 'Study Jams',
    body: 'Guided, hands-on sessions where you work through AWS labs together and prep for certifications.',
  },
  {
    Icon: Rocket,
    title: 'Build Sprints',
    body: 'Ship a real project in a weekend — from idea to a deployed app running on AWS.',
  },
  {
    Icon: Users,
    title: 'Mentorship',
    body: 'Get paired with senior builders and AWS Community members for guidance and code reviews.',
  },
  {
    Icon: Compass,
    title: 'Career Prep',
    body: 'Mock interviews, resume reviews, and referrals to internships across our partner network.',
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
          What we do
        </span>
        <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Programs built for student builders
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Everything we run is practical, project-first, and free for members.
          Come for one session or plug into all of them.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p) => (
          <div
            key={p.title}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-violet-soft text-accent">
              <p.Icon size={22} />
            </div>
            <h3 className="mt-5 font-mono text-lg font-bold text-foreground">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
