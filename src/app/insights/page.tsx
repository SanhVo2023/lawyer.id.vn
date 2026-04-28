import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import Badge from '@/components/ui/Badge'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Legal Insights — Henry Vo | International Lawyer in Vietnam',
  description: 'Practical legal analysis and guides for foreign clients, investors, expats, and law firms navigating Vietnam\'s legal system.',
  path: '/insights',
})

const articles = [
  { slug: 'top-legal-risks-foreign-investors-vietnam', title: 'Top 5 Legal Risks for Foreign Investors in Vietnam (2026)', category: 'For Foreign Investors', date: '2026-03-15', excerpt: 'Understanding the key legal risks before entering the Vietnamese market can save your business millions.' },
  { slug: 'getting-divorced-vietnam-foreigner-guide', title: 'Getting Divorced in Vietnam as a Foreigner: Complete Guide', category: 'For Expats', date: '2026-03-10', excerpt: 'Everything you need to know about international divorce proceedings under Vietnamese family law.' },
  { slug: 'enforcement-foreign-arbitral-awards-vietnam', title: 'Enforcement of Foreign Arbitral Awards in Vietnam', category: 'For Foreign Law Firms', date: '2026-03-05', excerpt: 'A practical guide to enforcing foreign arbitral awards under Vietnam\'s New York Convention obligations.' },
  { slug: 'due-diligence-checklist-vietnam', title: 'Due Diligence Checklist for Vietnam Market Entry', category: 'For Foreign Investors', date: '2026-02-28', excerpt: 'A comprehensive checklist for foreign companies conducting due diligence before investing in Vietnam.' },
  { slug: 'buying-property-vietnam-foreigner', title: 'Buying Property in Vietnam as a Foreigner: What You Can and Cannot Do', category: 'For Expats', date: '2026-02-20', excerpt: 'The complete guide to foreign property ownership rights, limitations, and practical steps.' },
  { slug: 'instructing-local-counsel-vietnam', title: 'Instructing Local Counsel in Vietnam: A Guide for Foreign Law Firms', category: 'For Foreign Law Firms', date: '2026-02-15', excerpt: 'How foreign law firms can effectively instruct and work with Vietnamese local counsel.' },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function InsightsPage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Legal Insights', url: '/insights' },
    ]),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <HubHero
        imageId="heroAboutPortrait"
        eyebrow="Knowledge"
        title="Legal Insights"
        subtitle="Practical legal analysis and guides for foreign clients navigating Vietnam's legal system."
        breadcrumb={[{ label: 'Legal Insights' }]}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group block rounded-sm border border-border bg-white overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="h-2 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
                <div className="p-6">
                  <Badge variant="teal">{article.category}</Badge>
                  <h2 className="mt-3 text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-text-secondary font-[family-name:var(--font-inter)]">
                      {formatDate(article.date)}
                    </span>
                    <span className="text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read →
                    </span>
                  </div>
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
