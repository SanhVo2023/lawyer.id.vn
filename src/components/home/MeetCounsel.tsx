'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CredentialsBlock from '@/components/identity/CredentialsBlock'
import JurisdictionsRow from '@/components/identity/JurisdictionsRow'
import { IDENTITY } from '@/data/identity'
import { IMAGES } from '@/lib/images'

export default function MeetCounsel() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait — left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-sm overflow-hidden img-zoom max-w-md mx-auto lg:mx-0">
              <Image
                src={IMAGES.heroAboutPortrait.cdn}
                alt={`${IDENTITY.name} — ${IDENTITY.title}`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>

            {/* Gold inset frame ornament */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/20 pointer-events-none max-w-md mx-auto lg:mx-0" />
            <div className="absolute -top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-accent pointer-events-none lg:left-2" />
            <div className="absolute -bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-accent pointer-events-none lg:right-auto lg:left-[calc(min(28rem,100%)-3rem)]" />

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 mx-auto md:mt-0 md:absolute md:-bottom-4 md:left-1/2 md:-translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-sm shadow-2xl border border-accent/30 w-fit"
            >
              <Image
                src={IMAGES.iconScales.cdn}
                alt=""
                width={28}
                height={28}
                className="opacity-90"
              />
              <div className="font-[family-name:var(--font-inter)]">
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent">Verified Identity</div>
                <div className="text-xs text-white/90 mt-0.5">Vietnam Bar · VIAC Arbitrator</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content — right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
              <span className="w-8 h-px bg-accent" />
              Meet Your Counsel
            </span>

            <h2 className="mt-6 text-3xl font-bold text-primary md:text-4xl lg:text-5xl leading-tight">
              {IDENTITY.name}
            </h2>
            <p className="mt-2 text-xl text-accent/80 italic font-[family-name:var(--font-heading)]">
              {IDENTITY.vietnameseName}
            </p>
            <p className="mt-1 text-sm text-text-secondary uppercase tracking-wider font-[family-name:var(--font-inter)]">
              {IDENTITY.title}, {IDENTITY.firm}
            </p>

            <div className="mt-6 h-[2px] w-20 bg-accent" />

            <div className="mt-6 space-y-4 text-base text-text-secondary leading-relaxed">
              <p>
                Henry Vo is a Vietnamese-licensed attorney with over {IDENTITY.yearsExperience} years
                of experience representing foreign clients in Vietnam. As Managing Partner at{' '}
                {IDENTITY.firm}, he leads cross-border matters spanning civil litigation, corporate
                law, family law, criminal defense, and international arbitration.
              </p>
              <p>
                His practice has served clients from {IDENTITY.countriesServed}+ countries — Fortune
                500 companies, family-owned businesses, expat individuals, and foreign law firms
                seeking trusted local counsel. Communication is direct, in fluent English, and
                responsive across time zones.
              </p>
            </div>

            <div className="mt-8">
              <CredentialsBlock variant="horizontal" showLabel={false} />
            </div>

            <div className="mt-8">
              <JurisdictionsRow showLabel />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center font-[family-name:var(--font-inter)] text-sm font-medium uppercase tracking-wider bg-accent text-white px-7 py-3.5 transition-all duration-300 hover:bg-primary btn-shimmer"
              >
                Read Full Profile
              </Link>
              <Link
                href="/credentials"
                className="inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors"
              >
                View Credentials
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
