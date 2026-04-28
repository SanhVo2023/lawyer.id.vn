'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import Flag from '@/components/ui/Flag'
import MobileCarousel from '@/components/ui/MobileCarousel'

const highlights = [
  {
    title: 'Representing a European Company in a $2M Contract Dispute',
    country: 'France',
    practiceArea: 'Civil Litigation',
    outcome: 'Favorable settlement achieved through court-annexed mediation',
    href: '/experience/european-company-contract-dispute',
    flag: '🇫🇷',
  },
  {
    title: 'International Divorce: Australian National and Vietnamese Spouse',
    country: 'Australia',
    practiceArea: 'Family Law',
    outcome: 'Successful custody arrangement and property division under Vietnamese law',
    href: '/experience/international-divorce-australian',
    flag: '🇦🇺',
  },
  {
    title: 'Joint Venture Dispute Between Vietnamese and Korean Partners',
    country: 'South Korea',
    practiceArea: 'Corporate',
    outcome: 'VIAC arbitration with award enforced in favor of client',
    href: '/experience/joint-venture-dispute-korean',
    flag: '🇰🇷',
  },
]

export default function ExperienceHighlights() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Track Record"
          title="Representative Experience"
          subtitle="Selected matters demonstrating experience with international clients across practice areas."
        />

        <div ref={ref}>
        <MobileCarousel smGridCols="sm:grid-cols-2 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={item.href}
                className="group relative block h-full card-lift rounded-sm border border-border bg-white p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
              >
                {/* Country flag corner */}
                <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-90 transition-opacity duration-500">
                  <Flag emoji={item.flag} size={32} className="rounded-sm shadow-sm" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="teal">{item.practiceArea}</Badge>
                  <Badge>{item.country}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  <span className="font-medium text-success">Outcome:</span> {item.outcome}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
                  Read Case Study
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            </motion.div>
          ))}
        </MobileCarousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors group"
          >
            View All Experience
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
