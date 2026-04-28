'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import MobileCarousel from '@/components/ui/MobileCarousel'

const insights = [
  {
    title: 'Top 5 Legal Risks for Foreign Investors in Vietnam (2026)',
    category: 'For Foreign Investors',
    excerpt: 'Understanding the key legal risks before entering the Vietnamese market can save your business millions.',
    href: '/insights/top-legal-risks-foreign-investors-vietnam',
    date: '2026-03-15',
    readTime: '8 min',
  },
  {
    title: 'Getting Divorced in Vietnam as a Foreigner: Complete Guide',
    category: 'For Expats',
    excerpt: 'Everything you need to know about international divorce proceedings under Vietnamese family law.',
    href: '/insights/getting-divorced-vietnam-foreigner-guide',
    date: '2026-03-10',
    readTime: '12 min',
  },
  {
    title: 'Enforcement of Foreign Arbitral Awards in Vietnam',
    category: 'For Foreign Law Firms',
    excerpt: 'A practical guide to enforcing foreign arbitral awards under Vietnam\'s New York Convention obligations.',
    href: '/insights/enforcement-foreign-arbitral-awards-vietnam',
    date: '2026-03-05',
    readTime: '10 min',
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function InsightsPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative bg-surface py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative left edge gradient */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Knowledge"
          title="Latest Legal Insights"
          subtitle="Practical legal analysis and guides for foreign clients navigating Vietnam's legal system."
        />

        <div ref={ref}>
        <MobileCarousel smGridCols="sm:grid-cols-2 md:grid-cols-3">
          {insights.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={item.href}
                className="group relative block h-full card-lift rounded-sm border border-border bg-white overflow-hidden hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Top accent bar that grows on hover */}
                <div className="h-1 bg-accent/10 group-hover:bg-accent transition-colors duration-500" />

                {/* Decorative gradient header */}
                <div className="relative h-40 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="w-full h-full">
                      <defs>
                        <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1A9DB0" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#1A9DB0" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <circle cx={40 + i * 30} cy="50" r="40" fill={`url(#grad-${i})`} />
                      <circle cx={150} cy={30 + i * 10} r="30" fill={`url(#grad-${i})`} />
                    </svg>
                  </div>
                  {/* Category badge floating */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="teal">{item.category}</Badge>
                  </div>
                  {/* Read time floating */}
                  <div className="absolute bottom-4 right-4 text-xs text-white/60 font-[family-name:var(--font-inter)]">
                    {item.readTime} read
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-text-secondary font-[family-name:var(--font-inter)]">
                      {formatDate(item.date)}
                    </span>
                    <span className="text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
                      Read →
                    </span>
                  </div>
                </div>
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
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors group"
          >
            View All Insights
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
