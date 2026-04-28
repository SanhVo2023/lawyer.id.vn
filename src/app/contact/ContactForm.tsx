'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

const matterTypes = [
  { label: 'Civil Dispute', value: 'civil' },
  { label: 'Land & Property', value: 'land' },
  { label: 'Family / Divorce', value: 'family' },
  { label: 'Corporate & Commercial', value: 'corporate' },
  { label: 'Criminal Defense', value: 'criminal' },
  { label: 'Labor & Employment', value: 'labor' },
  { label: 'Arbitration', value: 'arbitration' },
  { label: 'Other', value: 'other' },
]

const countries = [
  'United States', 'United Kingdom', 'Australia', 'Canada', 'South Korea', 'Japan',
  'China', 'Singapore', 'France', 'Germany', 'Netherlands', 'India', 'Thailand',
  'Malaysia', 'Indonesia', 'Philippines', 'Taiwan', 'New Zealand', 'Other',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      country: formData.get('country'),
      matterType: formData.get('matterType'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-sm border border-success/30 bg-success/5 p-8 text-center">
        <svg className="w-12 h-12 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-primary mb-2">Message Sent</h3>
        <p className="text-text-secondary">
          Thank you for reaching out. We will respond within 24 hours.
        </p>
      </div>
    )
  }

  const inputClasses = 'w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Phone (with country code)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClasses}
            placeholder="+1 234 567 8900"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-primary mb-2">
            Country
          </label>
          <select id="country" name="country" className={inputClasses}>
            <option value="">Select your country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="matterType" className="block text-sm font-medium text-primary mb-2">
          Type of Matter
        </label>
        <select id="matterType" name="matterType" className={inputClasses}>
          <option value="">Select matter type</option>
          {matterTypes.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          How can I help? <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClasses}
          placeholder="Please briefly describe your legal matter..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or contact us directly via WhatsApp.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="btn-shimmer" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-text-secondary">
        Your information is kept strictly confidential and protected by attorney-client privilege.
      </p>
    </form>
  )
}
