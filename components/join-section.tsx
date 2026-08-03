import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PixelTrophy } from '@/components/pixel-icons'

export function JoinSection() {
  return (
    <section id="join" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-12 sm:py-16">
        <div
          className="pixel-grid absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center text-center">
          <PixelTrophy size={56} title="Trophy" />
          <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to start building on AWS?
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Membership is free. Join the group, hop into our chat, and come to
            your first session this week.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button render={<a href="#top" />} size="lg">
              Join the group
              <ArrowUpRight size={16} />
            </Button>
            <Button render={<a href="#events" />} variant="outline" size="lg">
              See upcoming events
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
