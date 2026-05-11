import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactForm from './ContactForm'
import { generatePageMetadata, generateBreadcrumbJsonLd, generatePersonJsonLd } from '@/lib/metadata'
import { IDENTITY } from '@/data/identity'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Henry Vo — International Lawyer in Vietnam',
  description: 'Get in touch with Henry Vo for a confidential consultation. WhatsApp, email, or contact form. We respond within 24 hours. Two offices in Ho Chi Minh City.',
  path: '/contact',
})

export default function ContactPage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      mainEntity: generatePersonJsonLd(),
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <HubHero
        imageId="heroInternationalClients"
        eyebrow="Get in Touch"
        title="Contact"
        subtitle="Ready to discuss your legal matter? Reach out through any channel below. We respond within 24 hours."
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* Contact content */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-primary mb-8">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 space-y-8">
                {/* WhatsApp */}
                <div className="rounded-sm border border-border bg-surface p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-4">
                    Preferred: WhatsApp
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    The fastest way to reach me, especially across time zones.
                  </p>
                  <WhatsAppButton />
                </div>

                {/* Direct contact */}
                <div className="rounded-sm border border-border bg-surface p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-4">
                    Direct Contact
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-text-secondary">Email</dt>
                      <dd>
                        <a href={`mailto:${IDENTITY.email}`} className="text-primary hover:text-accent transition-colors">
                          {IDENTITY.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-text-secondary">Call Center</dt>
                      <dd>
                        <a href={`tel:${IDENTITY.callCenterTel}`} className="text-primary hover:text-accent transition-colors">
                          {IDENTITY.callCenterDisplay}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Office addresses */}
                <div className="rounded-sm border border-border bg-surface p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-4">
                    Offices
                  </h3>
                  <div className="space-y-6 text-sm">
                    {IDENTITY.offices.map((office) => (
                      <div key={office.label}>
                        <p className="font-medium text-primary mb-1">{office.label}</p>
                        <p className="text-text-secondary">
                          {office.lines.map((line, idx) => (
                            <span key={line}>
                              {line}
                              {idx < office.lines.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                        <dl className="mt-2 space-y-0.5">
                          {office.phones.map((p) => (
                            <div key={p.tel} className="flex gap-2">
                              <dt className="text-text-secondary/70 min-w-[3.5rem]">{p.label}:</dt>
                              <dd>
                                <a href={`tel:${p.tel}`} className="text-primary hover:text-accent transition-colors">
                                  {p.display}
                                </a>
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office hours */}
                <div className="rounded-sm border border-accent/20 bg-accent/5 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-2">
                    Office Hours
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Monday - Friday<br />
                    8:00 AM - 5:00 PM (GMT+7, Indochina Time)
                  </p>
                  <p className="text-xs text-text-secondary mt-3">
                    Languages: English, Vietnamese
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
