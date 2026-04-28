'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

export interface ServiceItem {
  title: string
  description: string
}

export interface ServiceGroup {
  groupTitle: string
  services: ServiceItem[]
}

interface ServicesAccordionProps {
  groups: ServiceGroup[]
  label?: string
  title?: string
  subtitle?: string
}

export default function ServicesAccordion({
  groups,
  label = 'Detailed Services',
  title = 'What I Handle in This Practice Area',
  subtitle,
}: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<string | null>(`0-0`)

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading label={label} title={title} subtitle={subtitle} />

        <div className="space-y-12">
          {groups.map((group, gi) => (
            <div key={gi}>
              <h3 className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
                {group.groupTitle}
              </h3>
              <div className="divide-y divide-border border-y border-border bg-white">
                {group.services.map((service, si) => {
                  const key = `${gi}-${si}`
                  const isOpen = openIndex === key
                  return (
                    <div key={si}>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-surface"
                      >
                        <span className="text-base font-medium text-primary md:text-lg">
                          {service.title}
                        </span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="h-5 w-5 flex-shrink-0 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-5 text-text-secondary leading-relaxed">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
