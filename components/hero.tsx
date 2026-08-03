'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PixelHeroRocket } from '@/components/pixel-icons'

const headlineWords = ['Build.', 'Learn.', 'Ship.', 'Together.']

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, [0, 600], [0, -120])

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Parallax pixel grid */}
      <motion.div
        className="pixel-grid absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{ y: gridY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs font-medium text-violet-foreground"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Student-led AWS community
          </motion.span>

          <h1 className="mt-5 font-mono text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-3"
                initial={shouldReduceMotion ? false : { opacity: 0, x: (i % 2 === 0 ? -8 : 8), y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
              >
                {word}
                {i === 2 && <br />}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            The AWS Student Builder Group is a community where students learn
            cloud skills, build real projects, and grow together through
            hands-on workshops, study jams, and hackathons.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <Button render={<a href="#join" />} size="lg">
              Join the group
              <ArrowUpRight size={16} />
            </Button>
            <Button render={<a href="#events" />} variant="outline" size="lg">
              See events
            </Button>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div
            className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur sm:p-10"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
          >
            <PixelHeroRocket size={240} title="Pixel rocket launching" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}