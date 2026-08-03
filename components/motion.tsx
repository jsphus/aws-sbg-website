'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

// Shared timing
export const DURATION = 0.4
export const FAST = 0.3

// Scroll-triggered container that plays once when in view
export function RevealOnScroll({ children, className, variants }: {
  children: ReactNode
  className?: string
  variants?: Variants
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants ?? defaultRevealVariants}
    >
      {children}
    </motion.div>
  )
}

const defaultRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: 'easeOut' } },
}

// Stagger container for children
export function StaggerContainer({ children, className, staggerDelay = 0.1 }: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger child item
export function StaggerItem({ children, className }: {
  children: ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  )
}