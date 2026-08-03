'use client'

import { useEffect, useState } from 'react'
import { animate, motion, useReducedMotion } from 'framer-motion'
import { PixelCloud } from '@/components/pixel-icons'

const MISSION_TEXT =
  'AWS Student Builder Group at Cebu Technological University - Cebu City is a student-led, student-driven user group focused on learning about the Cloud via AWS technologies.'

export function MissionSection() {
  const shouldReduceMotion = useReducedMotion()
  const [visibleChars, setVisibleChars] = useState(
    shouldReduceMotion ? MISSION_TEXT.length : 0,
  )

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleChars(MISSION_TEXT.length)
      return
    }

    const controls = animate(0, MISSION_TEXT.length, {
      duration: 1.6,
      ease: 'linear',
      onUpdate: (latest) => setVisibleChars(Math.round(latest)),
    })

    return () => controls.stop()
  }, [shouldReduceMotion])

  return (
    <section id="mission" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 opacity-40"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -40 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <PixelCloud size={72} />
        </motion.div>

        <motion.span
          className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.3 }}
        >
          Our mission
        </motion.span>
        <motion.h2
          className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Our Mission
        </motion.h2>

        {/* Fixed-height container so layout doesn't jump while typing */}
        <div className="mt-6 min-h-[6.5rem] text-pretty text-lg leading-relaxed text-foreground">
          {MISSION_TEXT.slice(0, visibleChars)}
          <span className="inline-block h-[1em] w-[0.6ch] translate-y-[0.15em] bg-accent" aria-hidden="true" />
        </div>

        <motion.p
          className="mt-4 text-pretty leading-relaxed text-muted-foreground"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          We teach students about the AWS Cloud and its various use cases —
          security, AI, business analytics, and business transformation.
          Through hands-on projects, we develop both technical and business
          expertise in the cloud, providing students with industry skills
          currently in high demand.
        </motion.p>
      </div>
    </section>
  )
}