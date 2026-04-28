'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import StatCounter from '@/components/ui/StatCounter'

const stats = [
  { value: 15, label: 'Years of Experience', suffix: '+' },
  { value: 500, label: 'Cases Handled', suffix: '+' },
  { value: 20, label: 'Countries Served', suffix: '+' },
  { value: 100, label: 'International Matters', suffix: '+' },
]

export default function TrustIndicators() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="relative bg-surface py-10 sm:py-14 md:py-20 border-y border-border overflow-hidden">
      {/* Subtle background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute left-0 top-1/2 w-1/3 h-px bg-accent" />
        <div className="absolute right-0 top-1/2 w-1/3 h-px bg-accent" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block w-px h-12 bg-border" />
              )}
              <StatCounter
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
