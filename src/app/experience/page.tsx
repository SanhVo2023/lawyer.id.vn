import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import Badge from '@/components/ui/Badge'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'
import { casesData } from '@/data/experience'

export const metadata: Metadata = generatePageMetadata({
  title: 'Representative Experience — Henry Vo | International Lawyer in Vietnam',
  description: 'Selected international matters handled by Henry Vo: contract disputes, international divorce, joint ventures, arbitration, and criminal defense involving foreign clients in Vietnam.',
  path: '/experience',
})

// Drive the hub directly from the source-of-truth case data so all 12 cases
// appear automatically when new entries are added.
const experiences = Object.entries(casesData)
  .map(([slug, c]) => ({
    slug,
    title: c.title,
    country: c.country,
    area: c.area,
    year: c.year,
    outcome: c.outcome.split('.')[0] + '.',
  }))
  .sort((a, b) => b.year - a.year)

export default function ExperiencePage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Experience', url: '/experience' },
    ]),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <HubHero
        imageId="heroHome"
        eyebrow="Track Record"
        title="Representative Experience"
        subtitle="Selected international matters demonstrating experience across practice areas and jurisdictions. All matters anonymized per professional obligations."
        breadcrumb={[{ label: 'Experience' }]}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <Link
                key={exp.slug}
                href={`/experience/${exp.slug}`}
                className="group block rounded-sm border border-border p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="teal">{exp.area}</Badge>
                  <Badge>{exp.country}</Badge>
                </div>
                <h2 className="text-base font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                  {exp.title}
                </h2>
                <p className="mt-3 text-sm text-text-secondary">
                  <span className="font-medium text-success">Outcome:</span> {exp.outcome}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-text-secondary font-[family-name:var(--font-inter)]">{exp.year}</span>
                  <span className="text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Details →
                  </span>
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
