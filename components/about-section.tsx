'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { DURATION } from '@/components/motion'

const points = [
  'Beginner-friendly — no cloud experience required',
  'Hands-on labs on real AWS accounts',
  'A network of peers, mentors, and alumni',
  'Free credits, swag, and certification vouchers',
]

// Mosaic tile grid dimensions
const TILE_COLS = 8
const TILE_ROWS = 6

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion()

  // Diagonal wave delay based on tile position
  const tileDelay = (col: number, row: number) =>
    (col + row) * 0.05

  return (
    <section id="about" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div className="relative order-last overflow-hidden rounded-2xl border border-border md:order-first">
          <Image
            src="/images/community.png"
            alt="Students collaborating at an AWS Student Builder Group meetup"
            width={720}
            height={560}
            className="h-full w-full object-cover"
          />

          {/* Mosaic tile overlay — builds the image up from pixel tiles */}
          {!shouldReduceMotion && (
            <div
              className="absolute inset-0 grid"
              style={{
                gridTemplateColumns: `repeat(${TILE_COLS}, 1fr)`,
                gridTemplateRows: `repeat(${TILE_ROWS}, 1fr)`,
              }}
              aria-hidden="true"
            >
              {Array.from({ length: TILE_COLS * TILE_ROWS }).map((_, i) => {
                const col = i % TILE_COLS
                const row = Math.floor(i / TILE_COLS)
                return (
                  <motion.div
                    key={i}
                    className="bg-background"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: tileDelay(col, row), ease: 'easeOut' }}
                  />
                )
              })}
            </div>
          )}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-foreground">
            Who we are
          </span>
          <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A community that builds in the open
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We&apos;re students helping students go from curious to confident on
            AWS. Whether you want to earn your first certification, launch a
            side project, or land a cloud internship, you&apos;ll find people
            here building right alongside you.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-violet-soft text-accent">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}