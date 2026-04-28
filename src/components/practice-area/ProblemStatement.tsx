'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import { IMAGES, type ImageId } from '@/lib/images'

export interface ProblemItem {
  title: string
  description: string
  iconId: ImageId
}

interface ProblemStatementProps {
  label?: string
  title?: string
  subtitle?: string
  problems: ProblemItem[]
}

export default function ProblemStatement({
  label = 'The Challenge',
  title = 'What Foreign Clients Face',
  subtitle,
  problems,
}: ProblemStatementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label={label} title={title} subtitle={subtitle} />

        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((problem, i) => {
            const icon = IMAGES[problem.iconId]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-sm border border-border bg-surface p-8 hover:border-accent/30 transition-colors duration-500"
              >
                <span className="absolute top-4 right-4 font-[family-name:var(--font-inter)] text-xs text-accent/30 tracking-[0.2em]">
                  PAIN POINT 0{i + 1}
                </span>

                <div className="flex items-start gap-5">
                  <Image
                    src={icon.cdn}
                    alt=""
                    width={48}
                    height={48}
                    className="flex-shrink-0 opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{problem.title}</h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
