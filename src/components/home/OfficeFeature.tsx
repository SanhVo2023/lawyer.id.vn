'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export default function OfficeFeature() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-surface overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-sm overflow-hidden img-zoom">
              <Image
                src={IMAGES.heroInternationalClients.cdn}
                alt={IMAGES.heroInternationalClients.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Gold inset frame ornament */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/20 pointer-events-none" />
            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-accent" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-accent" />

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 md:mt-0 md:absolute md:bottom-8 md:-right-6 bg-primary text-white p-6 rounded-sm shadow-2xl border border-accent/30 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={IMAGES.iconScales.cdn}
                  alt=""
                  width={32}
                  height={32}
                  className="opacity-90"
                />
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)]">
                  Apolo Lawyers
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                Premier international legal practice in Ho Chi Minh City since 2015.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
              <span className="w-8 h-px bg-accent" />
              Our Office
            </span>
            <h2 className="mt-6 text-3xl font-bold text-primary md:text-4xl lg:text-5xl leading-tight">
              Where{' '}
              <span className="italic text-accent font-[family-name:var(--font-heading)]">
                excellence
              </span>{' '}
              meets accessibility
            </h2>
            <div className="mt-6 h-[2px] w-20 bg-accent" />

            <p className="mt-8 text-lg text-text-secondary leading-relaxed">
              Located in the heart of District 1, Ho Chi Minh City — Vietnam&apos;s
              business and legal hub. Our offices are designed for international clients,
              with private consultation rooms, video-conferencing facilities, and
              English-speaking support staff.
            </p>

            {/* Address features */}
            <div className="mt-10 space-y-5">
              {[
                { icon: IMAGES.iconGlobe, label: 'Global Practice', desc: 'Clients from 20+ countries' },
                { icon: IMAGES.iconHandshake, label: 'Personal Service', desc: 'Direct partner-level attention' },
                { icon: IMAGES.iconContract, label: 'English Documentation', desc: 'All materials available in English' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                    <Image
                      src={item.icon.cdn}
                      alt=""
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary">{item.label}</h3>
                    <p className="mt-0.5 text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-sm border border-border bg-white p-6">
              <p className="text-sm font-medium text-primary mb-1">Head Office</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                108 Tran Dinh Xu, Nguyen Cu Trinh Ward<br />
                District 1, Ho Chi Minh City, Vietnam
              </p>
              <p className="mt-3 text-xs text-text-secondary font-[family-name:var(--font-inter)]">
                Mon–Fri · 8:00 AM – 5:00 PM (GMT+7)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
