'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Experience', href: '/experience' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md border-b border-accent/15'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-heading)] text-lg font-normal tracking-[0.1em] text-white transition-colors duration-300 group-hover:text-accent sm:text-xl">
                  HENRY VO
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[10px] font-medium uppercase tracking-[0.3em] text-accent/70">
                  Attorney at Law
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-[family-name:var(--font-inter)] text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                    scrolled
                      ? 'text-white/80 hover:text-accent'
                      : 'text-white/80 hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right section: CTA + Mobile menu */}
            <div className="flex items-center gap-5">
              {/* Schedule a Call CTA */}
              <Link
                href="/contact"
                className="hidden font-[family-name:var(--font-inter)] text-xs font-medium uppercase tracking-wider text-primary bg-accent px-5 py-2.5 transition-all duration-300 hover:bg-white hover:text-primary sm:inline-flex items-center btn-shimmer"
              >
                Schedule a Call
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
                aria-label="Open menu"
              >
                <span
                  className={`block h-px w-6 transition-colors duration-300 ${
                    scrolled ? 'bg-white/90' : 'bg-white/90'
                  }`}
                />
                <span className="block h-px w-4 bg-accent" />
                <span
                  className={`block h-px w-6 transition-colors duration-300 ${
                    scrolled ? 'bg-white/90' : 'bg-white/90'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  )
}
