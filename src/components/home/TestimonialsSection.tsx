'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import Flag from '@/components/ui/Flag'
import MobileCarousel from '@/components/ui/MobileCarousel'
import { IMAGES } from '@/lib/images'

const testimonials = [
  {
    quote:
      'Henry resolved a complex contract dispute that had stalled for months. His command of English and clear strategic thinking made working across continents effortless.',
    name: 'James W.',
    role: 'CFO',
    country: 'France',
    flag: '🇫🇷',
    matter: 'Commercial Litigation',
  },
  {
    quote:
      'Going through divorce in a foreign country was terrifying. Henry handled everything with empathy and precision. The custody outcome exceeded what I thought possible.',
    name: 'Sarah M.',
    role: 'Expat Resident',
    country: 'Australia',
    flag: '🇦🇺',
    matter: 'Family Law',
  },
  {
    quote:
      'We needed local counsel we could fully trust. Henry delivered exceptional VIAC arbitration representation, and his coordination with our Korean legal team was seamless.',
    name: 'Mr. Park',
    role: 'General Counsel',
    country: 'South Korea',
    flag: '🇰🇷',
    matter: 'International Arbitration',
  },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle office texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <Image
          src={IMAGES.bgOfficeTexture.cdn}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Client Voices"
          title="What International Clients Say"
          subtitle="Real outcomes for real foreign clients navigating Vietnam's legal system."
        />

        <div ref={ref}>
        <MobileCarousel smGridCols="sm:grid-cols-2 md:grid-cols-3" gap="gap-4 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-sm border border-border bg-white p-8 group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
            >
              {/* Big decorative quote mark */}
              <div className="absolute top-4 right-6 text-7xl leading-none text-accent/15 font-[family-name:var(--font-heading)] select-none">
                &ldquo;
              </div>

              {/* Country flag corner */}
              <div className="absolute top-6 left-6">
                <Flag emoji={t.flag} size={28} className="rounded-sm shadow-sm" />
              </div>

              <blockquote className="relative pt-12 pl-2">
                <p className="text-base text-primary leading-relaxed font-[family-name:var(--font-heading)] italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-text-secondary font-[family-name:var(--font-inter)]">
                    {t.role} · {t.country}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium font-[family-name:var(--font-inter)]">
                  {t.matter}
                </span>
              </figcaption>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500" />
            </motion.figure>
          ))}
        </MobileCarousel>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center text-xs text-text-secondary font-[family-name:var(--font-inter)] italic"
        >
          Names anonymized to protect client confidentiality. Quotes used with permission.
        </motion.p>
      </div>
    </section>
  )
}
