'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import { IMAGES } from '@/lib/images'

const helpItems = [
  {
    icon: IMAGES.iconGlobe,
    title: 'Bridge the Legal Gap',
    description:
      'Vietnam\'s civil law system can feel unfamiliar. I translate complex Vietnamese legal concepts into clear, actionable advice for clients from any legal tradition.',
  },
  {
    icon: IMAGES.iconHandshake,
    title: 'No Language Barrier',
    description:
      'All communication in fluent English. Documents, court proceedings, and negotiations — nothing gets lost in translation.',
  },
  {
    icon: IMAGES.iconScales,
    title: 'Protect Your Interests',
    description:
      'Deep experience with foreign clients in Vietnamese courts and arbitration tribunals. I know how to protect your rights in cross-border matters.',
  },
  {
    icon: IMAGES.iconContract,
    title: 'Across Time Zones',
    description:
      'International matters don\'t wait for office hours. WhatsApp, email, and video calls to accommodate your time zone — wherever you are.',
  },
]

export default function HowIHelpSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Faint corner ornament */}
      <div className="absolute top-20 right-12 w-32 h-32 opacity-[0.04] pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="#0F2B5B" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="#0F2B5B" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" stroke="#0F2B5B" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#0F2B5B" strokeWidth="0.5" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#0F2B5B" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Me"
          title="How I Help Foreign Clients"
          subtitle="Navigating Vietnam's legal system shouldn't feel like navigating a foreign country alone."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {helpItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group card-lift relative rounded-sm border border-border bg-white p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Number badge top-right */}
              <span className="absolute top-4 right-4 font-[family-name:var(--font-inter)] text-xs text-accent/30 tracking-[0.2em]">
                0{index + 1}
              </span>

              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="mb-6 inline-block"
              >
                <Image
                  src={item.icon.cdn}
                  alt={item.icon.alt}
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </motion.div>

              <h3 className="text-lg font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
