'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PixelTrophy } from '@/components/pixel-icons'

export function JoinSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section id="join" ref={sectionRef} className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-12 sm:py-16">
        <motion.div
          className="pixel-grid absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{ y: gridY }}
        />
        <div className="relative flex flex-col items-center text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
          >
            <PixelTrophy size={56} title="Trophy" />
          </motion.div>

          <motion.h2
            className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Ready to start building on AWS?
          </motion.h2>

          <motion.p
            className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Membership is free. Join the group, hop into our chat, and come to
            your first session this week.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.4 }}
          >
            <Button render={<a href="#top" />} size="lg">
              Join the group
              <ArrowUpRight size={16} />
            </Button>
            <Button render={<a href="#events" />} variant="outline" size="lg">
              See upcoming events
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}