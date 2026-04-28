'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode[]
  staggerDelay?: number
  className?: string
}

export function StaggerReveal({ children, staggerDelay = 0.08, className }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: i * staggerDelay, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
