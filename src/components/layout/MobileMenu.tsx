'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { IDENTITY } from '@/data/identity'

interface NavItem {
  label: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-primary"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center text-white/80 hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-[family-name:var(--font-heading)] text-3xl text-white/90 hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navItems.length * 0.05 }}
              className="mt-4"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center font-[family-name:var(--font-inter)] text-sm font-medium uppercase tracking-wider text-primary bg-accent px-8 py-3 transition-all duration-300 hover:bg-white"
              >
                Schedule a Call
              </Link>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-center"
            >
              <a
                href={`https://wa.me/${IDENTITY.callCenterWhatsApp}`}
                className="text-sm text-accent font-[family-name:var(--font-inter)]"
              >
                WhatsApp: {IDENTITY.callCenterDisplay}
              </a>
              <p className="mt-1 text-xs text-white/40 font-[family-name:var(--font-inter)]">
                Mon-Fri, 8:30 AM - 6:00 PM (GMT+7)
              </p>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
