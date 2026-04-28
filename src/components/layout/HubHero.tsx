'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Breadcrumb from '@/components/layout/Breadcrumb'
import JurisdictionsRow from '@/components/identity/JurisdictionsRow'
import { IMAGES, type ImageId } from '@/lib/images'

interface HubHeroProps {
  imageId: ImageId
  eyebrow: string
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href?: string }[]
  /** `default` strong gradient, `subtle` lighter overlay for legal/utility pages */
  variant?: 'default' | 'subtle'
  /** Optional row of jurisdiction pills below the subtitle */
  showJurisdictionsRow?: boolean
}

export default function HubHero({
  imageId,
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  variant = 'default',
  showJurisdictionsRow = false,
}: HubHeroProps) {
  const image = IMAGES[imageId]
  const overlayClass =
    variant === 'subtle'
      ? 'bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50'
      : 'bg-gradient-to-r from-primary via-primary/90 to-primary/40'

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={image.cdn}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/30" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`hub-grid-${imageId}`} width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#hub-grid-${imageId})`} />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}

        <div className="mt-8 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]"
          >
            <span className="w-8 h-px bg-accent" />
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 h-[2px] w-20 bg-accent origin-left"
          />

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {showJurisdictionsRow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-8"
            >
              <JurisdictionsRow light />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
