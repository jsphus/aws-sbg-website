import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TeamCard } from '@/components/team-card'
import { Button } from '@/components/ui/button'
import {
  PixelWrench,
  PixelPeople,
  PixelReady,
  PixelOpen,
} from '@/components/pixel-icons'
import { teamMembers } from '@/lib/team-data'

export const metadata = {
  title: 'About Us — AWS Student Builder Group',
  description:
    'Meet the AWS Student Builder Group — a student-led community learning cloud skills and building in the open.',
}

const values = [
  {
    icon: PixelWrench,
    title: 'Hands-On Learning',
    body: 'We learn by doing — real labs, real projects, real AWS accounts.',
  },
  {
    icon: PixelPeople,
    title: 'Community First',
    body: 'Everyone helps everyone. We grow together, not alone.',
  },
  {
    icon: PixelReady,
    title: 'Industry Ready',
    body: 'We build skills employers actually look for in the cloud.',
  },
  {
    icon: PixelOpen,
    title: 'Open to All',
    body: 'No experience required. If you are curious, you belong here.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pixel-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-28">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
              About us
            </span>
            <h1 className="mt-4 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Us
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Meet the people building the AWS community at CTU.
            </p>
          </div>
        </section>

        {/* Mission recap */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
              What we stand for
            </span>
            <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A student-led community for the cloud
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              AWS Student Builder Group at Cebu Technological University - Cebu
              City is a student-led, student-driven user group focused on
              learning about the Cloud via AWS technologies. Through hands-on
              projects, we develop both technical and business expertise in the
              cloud, giving students the industry skills in high demand today.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
                The crew
              </span>
              <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Team
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                The students leading workshops, events, and partnerships — all
                volunteers building the community alongside you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
              Our values
            </span>
            <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What drives us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-8 text-center transition-colors hover:border-primary/50"
              >
                <value.icon size={40} title={value.title} />
                <h3 className="mt-5 font-mono text-base font-bold tracking-tight text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
            <div className="pixel-grid absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-xl text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Want to join our team?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                We are always looking for passionate students to help lead
                workshops, plan events, and grow the community.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button render={<a href="/partners" />} size="lg">
                  Get involved
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}