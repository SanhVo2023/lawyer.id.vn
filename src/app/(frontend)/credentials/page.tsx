import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Credentials & Memberships — Henry Vo',
  description:
    'Professional background, legal practice credentials, memberships and experience supporting the representation of international clients in Vietnam.',
  path: '/credentials',
})

type CredentialItem = { title: string; institution: string; description?: string }

const credentials: Record<string, CredentialItem[]> = {
  'Legal Practice Credentials': [
    {
      title: 'Ministry of Justice of Vietnam',
      institution: 'Lawyer Practising Certificate',
      description:
        'Official Lawyer Practising Certificate issued by the Ministry of Justice of Vietnam.',
    },
    {
      title: 'Vietnam Bar Federation',
      institution: 'Lawyer Card',
      description:
        'Lawyer Card issued by the Vietnam Bar Federation — full authorisation to practice law in Vietnam.',
    },
  ],
  'Bar & Professional Memberships': [
    {
      title: 'Ho Chi Minh City Bar Association',
      institution: 'Member',
      description:
        'Member of the Ho Chi Minh City Bar Association, the bar association for lawyers practising in HCMC.',
    },
    {
      title: 'Vietnam Lawyers Association',
      institution: 'Member',
      description:
        'Member of the Vietnam Lawyers Association — contributing to legal practice development.',
    },
    {
      title: 'Association of European Attorneys',
      institution: 'Member of AEA',
      description:
        'Member of the Association of European Attorneys — cross-border working relationships with foreign law firms.',
    },
  ],
  'Arbitration Experience': [
    {
      title: 'VIAC Arbitration',
      institution: 'Arbitration counsel experience',
      description:
        'Arbitration counsel experience in matters before the Vietnam International Arbitration Centre, working with clients across multiple jurisdictions.',
    },
  ],
  'Education & Training': [
    {
      title: 'Ho Chi Minh City University of Law',
      institution: 'Legal education',
      description:
        'Legal education in civil and commercial law at Ho Chi Minh City University of Law.',
    },
    {
      title: 'Judicial Academy of Vietnam',
      institution: 'Professional legal training',
      description:
        'Post-graduate professional legal practice training at the Judicial Academy of Vietnam.',
    },
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
        subtitle="Professional background, legal practice credentials, memberships and experience supporting the representation of international clients in Vietnam."
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
                    <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                    <p className="text-sm text-accent mt-1">{item.institution}</p>
                    {item.description && (
                      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    )}
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
