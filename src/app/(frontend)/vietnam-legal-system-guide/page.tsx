import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Vietnam Legal System Guide — Henry Vo | International Lawyer in Vietnam',
  description: 'A plain-English guide to Vietnam\'s legal system for foreign clients. Understand courts, civil procedure, foreign ownership, and dispute resolution options.',
  path: '/vietnam-legal-system-guide',
})

const guides = [
  { slug: 'court-system', title: 'Understanding Vietnam\'s Court System', description: 'How Vietnamese courts are organized and what to expect as a foreign litigant.' },
  { slug: 'civil-procedure', title: 'How Civil Lawsuits Work in Vietnam', description: 'Step-by-step overview of civil proceedings from filing to enforcement.' },
  { slug: 'foreign-ownership', title: 'Foreign Ownership of Property in Vietnam', description: 'What foreigners can and cannot own, and how to protect your investment.' },
  { slug: 'dispute-resolution', title: 'Dispute Resolution in Vietnam: Your Options', description: 'Comparing litigation, arbitration, and mediation for international disputes.' },
  { slug: 'contract-law', title: 'Vietnam Contract Law: Key Principles for Foreign Businesses', description: 'Essential contract law principles that differ from common law jurisdictions.' },
  { slug: 'labor-law', title: 'Vietnam Labor Law: What Foreign Employers Must Know', description: 'Employment regulations, termination rules, and compliance requirements.' },
  { slug: 'family-law', title: 'Vietnam Family Law: Marriage, Divorce, and Child Custody', description: 'Family law framework for marriages and divorces involving foreign nationals.' },
]

export default function LegalSystemGuidePage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Vietnam Legal System Guide', url: '/vietnam-legal-system-guide' },
    ]),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <HubHero
        imageId="heroHome"
        eyebrow="Education"
        title="Vietnam Legal System Guide"
        subtitle="A plain-English overview of Vietnam's legal system, written specifically for foreign clients. No legal jargon, just clear explanations."
        breadcrumb={[{ label: 'Vietnam Legal System Guide' }]}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {guides.map((guide, index) => (
              <Link
                key={guide.slug}
                href={`/vietnam-legal-system-guide/${guide.slug}`}
                className="group flex gap-6 rounded-sm border border-border p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-[family-name:var(--font-inter)] font-bold text-sm">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
