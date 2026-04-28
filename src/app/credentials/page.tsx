import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Credentials & Memberships — Henry Vo',
  description: 'Bar admissions, certifications, professional memberships, and education credentials of Henry Vo (Vo Thien Hien), Managing Partner at Apolo Lawyers.',
  path: '/credentials',
})

const credentials = {
  'Bar Admissions': [
    { title: 'Vietnam Bar Federation', institution: 'Licensed Attorney', year: 2010, description: 'Full license to practice law in all Vietnamese courts and arbitration tribunals.' },
    { title: 'Ho Chi Minh City Bar Association', institution: 'Active Member', year: 2010, description: 'Member in good standing of the HCMC Bar Association.' },
  ],
  'Education': [
    { title: 'Juris Doctor (J.D.) Equivalent', institution: 'Ho Chi Minh City University of Law', year: 2008, description: 'Graduated with honors in civil and commercial law.' },
    { title: 'Legal Practice Certificate', institution: 'Judicial Academy of Vietnam', year: 2009, description: 'Completed professional legal practice training.' },
  ],
  'Memberships': [
    { title: 'Vietnam International Arbitration Centre (VIAC)', institution: 'Arbitrator Panel', year: 2018, description: 'Recognized arbitrator for international commercial disputes.' },
    { title: 'Vietnam Lawyers Association', institution: 'Member', year: 2010, description: 'Active member contributing to legal practice development.' },
    { title: 'International Bar Association', institution: 'Associate Member', year: 2020, description: 'Connected to the global legal community for cross-border matters.' },
  ],
  'Certifications': [
    { title: 'International Commercial Arbitration', institution: 'VIAC Training Program', year: 2017, description: 'Specialized training in international arbitration procedures and enforcement.' },
    { title: 'Cross-Border Dispute Resolution', institution: 'Singapore International Arbitration Centre', year: 2019, description: 'Advanced training in multi-jurisdictional dispute resolution.' },
  ],
}

export default function CredentialsPage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Credentials', url: '/credentials' },
    ]),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <HubHero
        imageId="heroAboutPortrait"
        eyebrow="Professional Background"
        title="Credentials & Memberships"
        subtitle="Professional qualifications, bar admissions, and memberships that underpin my legal practice serving international clients in Vietnam."
        breadcrumb={[{ label: 'Credentials' }]}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {Object.entries(credentials).map(([category, items]) => (
            <div key={category} className="mb-16 last:mb-0">
              <SectionHeading label={category} title={category} align="left" />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-sm border border-border p-6 transition-all duration-300 hover:border-accent/30"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                        <p className="text-sm text-accent mt-1">{item.institution}</p>
                      </div>
                      <span className="text-sm font-bold text-accent font-[family-name:var(--font-inter)]">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
