'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import MobileCarousel from '@/components/ui/MobileCarousel'

export interface InsightLink {
  slug: string
  title: string
  category: string
  excerpt: string
  readTime?: string
}

interface RelatedInsightsProps {
  insights: InsightLink[]
  label?: string
  title?: string
}

export default function RelatedInsights({
  insights,
  label = 'Continue Reading',
  title = 'Related Insights',
}: RelatedInsightsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (insights.length === 0) return null

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label={label} title={title} />

        <div ref={ref}>
        <MobileCarousel smGridCols={insights.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-3'}>
          {insights.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/insights/${item.slug}`}
                className="group block h-full rounded-sm border border-border bg-surface overflow-hidden card-lift hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="h-1 bg-accent/10 group-hover:bg-accent transition-colors duration-500" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="teal">{item.category}</Badge>
                    {item.readTime && (
                      <span className="text-xs text-text-secondary font-[family-name:var(--font-inter)]">
                        {item.readTime}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
                    Read Article
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </MobileCarousel>
        </div>
      </div>
    </section>
  )
}
