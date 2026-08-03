'use client'

import { useEffect, useRef } from 'react'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'
import { DURATION } from '@/components/motion'

const stats = [
  { value: '600+', label: 'Student members' },
  { value: '40+', label: 'Workshops run' },
  { value: '12', label: 'Hackathon wins' },
  { value: '8', label: 'Partner companies' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest).toString())

  useEffect(() => {
    if (!inView) return
    if (shouldReduceMotion) {
      count.set(value)
      return
    }
    const controls = animate(count, value, { duration: DURATION + 0.4, ease: 'easeOut' })
    return () => controls.stop()
  }, [inView, value, shouldReduceMotion, count])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 md:grid-cols-4">
        {stats.map((s) => {
          const match = s.value.match(/^(\d+)(.*)$/)
          const number = match ? parseInt(match[1], 10) : 0
          const suffix = match ? match[2] : ''
          return (
            <div key={s.label} className="px-2 py-8 text-center">
              <div className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
                <Counter value={number} suffix={suffix} />
              </div>
              <motion.div
                className="mt-1 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {s.label}
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}