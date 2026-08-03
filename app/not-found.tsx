import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PixelAstronaut } from '@/components/pixel-icons'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="pixel-grid absolute inset-0 opacity-70" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
            aria-hidden="true"
          />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-32">
            <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur sm:p-10">
              <PixelAstronaut size={160} title="Lost astronaut drifting in the cloud" />
            </div>

            <h1
              className="mt-10 text-6xl text-violet sm:text-8xl"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              404
            </h1>

            <p className="mt-6 max-w-md text-pretty font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
              This page has drifted into the cloud.
              <br />
              Let&apos;s get you back to solid ground.
            </p>

            <Link
              href="/"
              className="mt-10 inline-block border-2 border-[#8b5cf6] bg-[#8b5cf6] px-6 py-3 text-[11px] font-normal text-[#0c1017] transition-all hover:bg-[#a78bfa] pixel-shadow"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              Go Home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}