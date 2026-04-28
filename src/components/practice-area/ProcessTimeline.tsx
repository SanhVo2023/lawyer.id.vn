'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

export interface ProcessStep {
  step: number
  title: string
  description: string
  duration?: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
  label?: string
  title?: string
  subtitle?: string
}

export default function ProcessTimeline({
  steps,
  label = 'How We Work',
  title = 'A Clear Process from Day One',
  subtitle = 'No surprises, no hidden steps. Here\'s exactly what happens after you reach out.',
}: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label={label} title={title} subtitle={subtitle} />

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="h-full origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>

          <div className={`grid grid-cols-1 gap-10 ${steps.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3 lg:grid-cols-5'}`}>
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto w-24 h-24 rounded-full border-2 border-accent bg-white flex items-center justify-center shadow-lg shadow-accent/10">
                  <span className="font-[family-name:var(--font-inter)] text-3xl font-bold text-accent">
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-base font-semibold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{step.description}</p>
                  {step.duration && (
                    <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.2em] text-accent font-medium font-[family-name:var(--font-inter)]">
                      {step.duration}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
