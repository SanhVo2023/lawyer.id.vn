'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import WhatsAppButton from './WhatsAppButton'
import GradientOrbs from './decoration/GradientOrbs'

interface ContactCTAProps {
  title?: string
  subtitle?: string
}

export default function ContactCTA({
  title = 'Ready to Discuss Your Matter?',
  subtitle = 'Get in touch for a confidential consultation. We respond within 24 hours.',
}: ContactCTAProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative overflow-hidden bg-primary py-12 sm:py-16 md:py-24">
      <GradientOrbs />

      {/* Top + bottom accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)] mb-4"
        >
          <span className="w-8 h-px bg-accent" />
          Get in Touch
          <span className="w-8 h-px bg-accent" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center font-[family-name:var(--font-inter)] text-sm font-medium uppercase tracking-wider bg-accent text-white px-8 py-4 transition-all duration-300 hover:bg-white hover:text-primary btn-shimmer"
          >
            Contact Form
          </Link>
          <WhatsAppButton />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-xs text-white/40 font-[family-name:var(--font-inter)]"
        >
          Office Hours: Mon-Fri, 8:00 AM - 5:00 PM (GMT+7, Indochina Time)
        </motion.p>
      </div>
    </section>
  )
}
