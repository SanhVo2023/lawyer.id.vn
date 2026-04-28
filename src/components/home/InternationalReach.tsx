'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import Flag from '@/components/ui/Flag'
import { IMAGES } from '@/lib/images'

const clientCountries = [
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇯🇵', name: 'Japan' },
  { flag: '🇰🇷', name: 'Korea' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇮🇹', name: 'Italy' },
  { flag: '🇨🇳', name: 'China' },
  { flag: '🇹🇼', name: 'Taiwan' },
  { flag: '🇲🇾', name: 'Malaysia' },
  { flag: '🇹🇭', name: 'Thailand' },
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇳🇱', name: 'Netherlands' },
  { flag: '🇪🇸', name: 'Spain' },
  { flag: '🇸🇪', name: 'Sweden' },
  { flag: '🇨🇭', name: 'Switzerland' },
  { flag: '🇳🇿', name: 'New Zealand' },
]

export default function InternationalReach() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative bg-primary py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Animated grid backdrop */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="reach-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reach-grid)" />
        </svg>
      </div>

      {/* Globe icon as decorative anchor */}
      <div className="absolute -top-20 -left-20 w-96 h-96 opacity-[0.04] pointer-events-none">
        <Image
          src={IMAGES.iconGlobe.cdn}
          alt=""
          width={400}
          height={400}
          className="w-full h-full"
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]"
          >
            <span className="w-8 h-px bg-accent" />
            International Reach
            <span className="w-8 h-px bg-accent" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Trusted by Clients from{' '}
            <span className="italic text-accent font-[family-name:var(--font-heading)]">
              20+ Countries
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-white/60"
          >
            From Silicon Valley startups to European manufacturers, from individual expats
            to major Asian corporations.
          </motion.p>
        </div>

        {/* Country flag grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } },
          }}
          className="mt-16 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-3"
        >
          {clientCountries.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="group relative aspect-square rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-1 hover:border-accent/40 hover:bg-accent/5 transition-colors duration-300"
            >
              <Flag emoji={c.flag} alt={`${c.name} flag`} size={36} className="rounded-sm shadow-md" />
              <span className="mt-1 text-[9px] md:text-[10px] uppercase tracking-wider text-white/60 group-hover:text-accent font-[family-name:var(--font-inter)] transition-colors">
                {c.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom line stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 border-t border-white/10"
        >
          {[
            { value: '60%', label: 'International Clients' },
            { value: '8', label: 'Languages Worked With' },
            { value: '24h', label: 'Response Time' },
            { value: '100+', label: 'Cross-Border Matters' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-[family-name:var(--font-inter)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
