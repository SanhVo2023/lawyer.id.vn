'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Badge from '@/components/ui/Badge'
import Flag from '@/components/ui/Flag'
import { IMAGES, type ImageId } from '@/lib/images'

interface FeaturedCaseProps {
  slug: string
  title: string
  country: string
  flag: string
  area: string
  outcome: string
  matterValue?: string
  imageId?: ImageId
}

export default function FeaturedCase({
  slug,
  title,
  country,
  flag,
  area,
  outcome,
  matterValue,
  imageId = 'caseDocumentSigning',
}: FeaturedCaseProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const image = IMAGES[imageId]

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="absolute -top-10 -right-10 opacity-[0.05] pointer-events-none select-none">
        <Flag emoji={flag} size={420} className="rounded-md" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
            <span className="w-8 h-px bg-accent" />
            Featured Case
            <span className="w-8 h-px bg-accent" />
          </span>
        </motion.div>

        <Link
          href={`/experience/${slug}`}
          className="group block"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-sm overflow-hidden img-zoom">
                <Image
                  src={image.cdn}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/20 pointer-events-none" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-accent" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-accent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Flag emoji={flag} size={36} className="rounded-sm shadow-md" />
                <Badge variant="teal">{area}</Badge>
                <Badge>{country}</Badge>
                {matterValue && <Badge>{matterValue}</Badge>}
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-accent transition-colors duration-300">
                {title}
              </h3>

              <div className="mt-8 rounded-sm border-l-4 border-accent bg-white/5 backdrop-blur-sm p-6">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium font-[family-name:var(--font-inter)]">
                  Outcome
                </span>
                <p className="mt-2 text-base md:text-lg text-white/90 italic leading-relaxed font-[family-name:var(--font-heading)]">
                  &ldquo;{outcome}&rdquo;
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent">
                Read Full Case Study
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  )
}
