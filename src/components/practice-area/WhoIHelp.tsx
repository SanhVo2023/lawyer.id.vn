'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import { IMAGES, type ImageId } from '@/lib/images'

export interface PersonaItem {
  persona: string
  needs: string
  iconId: ImageId
  examples?: string[]
}

interface WhoIHelpProps {
  personas: PersonaItem[]
  label?: string
  title?: string
  subtitle?: string
}

export default function WhoIHelp({
  personas,
  label = 'Who I Help',
  title = 'Built for International Clients',
  subtitle = 'My practice is structured around the specific needs of clients who are new to — or unfamiliar with — Vietnam\'s legal system.',
}: WhoIHelpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label={label} title={title} subtitle={subtitle} />

        <div ref={ref} className={`grid grid-cols-1 gap-6 ${personas.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
          {personas.map((p, i) => {
            const icon = IMAGES[p.iconId]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-sm border border-border bg-white p-8 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <Image
                  src={icon.cdn}
                  alt=""
                  width={56}
                  height={56}
                  className="opacity-90"
                />
                <h3 className="mt-6 text-lg font-semibold text-primary">{p.persona}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.needs}</p>

                {p.examples && p.examples.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {p.examples.map((ex, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-text-secondary font-[family-name:var(--font-inter)]">
                        <svg className="w-3 h-3 mt-0.5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
