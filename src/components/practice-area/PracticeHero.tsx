'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Button from '@/components/ui/Button'
import { IMAGES, type ImageId } from '@/lib/images'

interface PracticeHeroProps {
  title: string
  tagline: string
  heroImageId: ImageId
  introTagline: string
  primaryCTAHref?: string
  primaryCTALabel?: string
  secondaryCTAHref?: string
  secondaryCTALabel?: string
}

export default function PracticeHero({
  title,
  tagline,
  heroImageId,
  introTagline,
  primaryCTAHref = '/contact',
  primaryCTALabel = 'Schedule a Consultation',
  secondaryCTAHref = '/experience',
  secondaryCTALabel = 'Read Case Studies',
}: PracticeHeroProps) {
  const hero = IMAGES[heroImageId]

  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-primary flex items-center">
      <div className="absolute inset-0">
        <Image
          src={hero.cdn}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
      </div>

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-pa" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pa)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40 w-full">
        <Breadcrumb
          items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: title },
          ]}
        />

        <div className="mt-8 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]"
          >
            <span className="w-8 h-px bg-accent" />
            {introTagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 h-[2px] w-20 bg-accent origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href={primaryCTAHref}>
              <Button variant="primary" size="lg" className="btn-shimmer">
                {primaryCTALabel}
              </Button>
            </Link>
            <Link href={secondaryCTAHref}>
              <Button variant="outline" size="lg">
                {secondaryCTALabel}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
