'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { IMAGES } from '@/lib/images'

const connectionCities = [
  { name: 'New York', x: 25, y: 35 },
  { name: 'London', x: 47, y: 28 },
  { name: 'Tokyo', x: 82, y: 35 },
  { name: 'Sydney', x: 85, y: 70 },
  { name: 'Singapore', x: 73, y: 53 },
  { name: 'Seoul', x: 80, y: 33 },
  { name: 'Frankfurt', x: 49, y: 30 },
]

const vietnamPos = { x: 72, y: 45 }

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] sm:min-h-screen overflow-hidden bg-primary flex items-center">
      {/* Hero photo background — HCMC skyline from law office */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroHome.cdn}
          alt={IMAGES.heroHome.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/20" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Animated world map SVG overlay */}
      <div className="absolute inset-0 flex items-center justify-end opacity-25 pointer-events-none">
        <svg viewBox="0 0 100 60" className="w-full max-w-5xl mr-[-10%]" fill="none">
          <defs>
            <radialGradient id="vn-glow">
              <stop offset="0%" stopColor="#1A9DB0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1A9DB0" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1A9DB0" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#1A9DB0" stopOpacity="1" />
              <stop offset="100%" stopColor="#1A9DB0" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <circle cx={vietnamPos.x} cy={vietnamPos.y} r="8" fill="url(#vn-glow)" className="connection-pulse" />

          {connectionCities.map((city, i) => (
            <motion.line
              key={city.name}
              x1={vietnamPos.x}
              y1={vietnamPos.y}
              x2={city.x}
              y2={city.y}
              stroke="url(#line-grad)"
              strokeWidth="0.18"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, delay: 1.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}

          {connectionCities.map((city, i) => (
            <motion.g
              key={`dot-${city.name}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5 + i * 0.18, duration: 0.5, ease: 'backOut' }}
            >
              <circle cx={city.x} cy={city.y} r="0.6" fill="#1A9DB0" />
              <circle cx={city.x} cy={city.y} r="1.4" fill="none" stroke="#1A9DB0" strokeWidth="0.1" className="dot-pulse" />
            </motion.g>
          ))}

          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'backOut' }}
          >
            <circle cx={vietnamPos.x} cy={vietnamPos.y} r="1.4" fill="#1A9DB0" />
            <circle cx={vietnamPos.x} cy={vietnamPos.y} r="2.5" fill="none" stroke="#1A9DB0" strokeWidth="0.2" className="dot-pulse" />
          </motion.g>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40 w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]"
          >
            <span className="w-8 h-px bg-accent" />
            Vietnamese Lawyer for International Clients
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Your Trusted{' '}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-accent font-[family-name:var(--font-heading)]">
                Legal Partner
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/15 -skew-y-1" />
            </span>
            <br />
            in Vietnam
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
            Helping foreign clients, international businesses, and expats navigate
            Vietnam&apos;s legal system with confidence and clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Cases Handled' },
              { value: '20+', label: 'Countries Served' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                className="flex flex-col"
              >
                <span className="font-[family-name:var(--font-inter)] text-2xl font-bold text-accent md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50 font-[family-name:var(--font-inter)]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg" className="btn-shimmer">
                Schedule a Consultation
              </Button>
            </Link>
            <Link href="/practice-areas">
              <Button variant="outline" size="lg">
                View Practice Areas
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating jurisdiction badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-3"
        >
          {['VIAC', 'SIAC', 'ICC', 'Vietnam'].map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.7 + i * 0.1 }}
              className="float-y rounded-sm border border-accent/30 bg-primary/40 backdrop-blur-md px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)]"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent/70 font-[family-name:var(--font-inter)]">
          Scroll
        </span>
        <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  )
}
