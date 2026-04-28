import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd, generateLegalServiceJsonLd } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Practice Areas — Henry Vo | International Lawyer in Vietnam',
  description: 'Comprehensive legal services for foreign clients in Vietnam: civil litigation, land & property, family law, corporate law, labor disputes, criminal defense, and international arbitration.',
  path: '/practice-areas',
})

const practiceAreas = [
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    description: 'Representing foreign clients in Vietnamese courts for contract disputes, debt recovery, tort claims, and complex civil proceedings. Experience with multi-party disputes involving international elements.',
    icon: '⚖️',
  },
  {
    slug: 'land-and-property',
    title: 'Land & Property',
    description: 'Real estate disputes, land use rights, property investment matters, and development projects involving foreign investors. Navigating Vietnam\'s unique land ownership framework for foreigners.',
    icon: '🏢',
  },
  {
    slug: 'family-law-and-divorce',
    title: 'Family Law & Divorce',
    description: 'International divorce, child custody across borders, prenuptial agreements, and cross-border family matters involving Vietnamese and foreign nationals.',
    icon: '👨‍👩‍👧',
  },
  {
    slug: 'corporate-and-commercial',
    title: 'Corporate & Commercial',
    description: 'Foreign direct investment, joint ventures, M&A, corporate governance disputes, and commercial law matters for foreign-invested enterprises in Vietnam.',
    icon: '💼',
  },
  {
    slug: 'labor-and-employment',
    title: 'Labor & Employment',
    description: 'Employment disputes for foreign employers and employees, work permit issues, termination disputes, and labor law compliance for international businesses.',
    icon: '🤝',
  },
  {
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    description: 'Criminal matters involving foreign nationals — from arrest and investigation through trial. Protecting the rights of foreigners in the Vietnamese criminal justice system.',
    icon: '🛡️',
  },
  {
    slug: 'arbitration',
    title: 'International Arbitration',
    description: 'Commercial arbitration with international parties at VIAC and other institutions. Enforcement of foreign arbitral awards and alternative dispute resolution.',
    icon: '🏛️',
  },
]

export default function PracticeAreasPage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Practice Areas', url: '/practice-areas' },
    ]),
    generateLegalServiceJsonLd(),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <HubHero
        imageId="practiceOverview"
        eyebrow="Expertise"
        title="Practice Areas"
        subtitle="Comprehensive legal services tailored for foreign clients navigating Vietnam's legal system."
        breadcrumb={[{ label: 'Practice Areas' }]}
        showJurisdictionsRow
      />

      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group rounded-sm border border-border p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="text-3xl mb-4 block">{area.icon}</span>
                <h2 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {area.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent">
                  Learn More
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Working with foreign clients CTA */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <SectionHeading
            label="Process"
            title="New to Working with a Vietnamese Lawyer?"
            subtitle="Learn what to expect, how fees work, and how to prepare for your first consultation."
          />
          <Link
            href="/working-with-foreign-clients"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm font-medium uppercase tracking-wider text-white bg-accent px-8 py-4 transition-all duration-300 hover:bg-primary btn-shimmer"
          >
            Working with Foreign Clients Guide
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
