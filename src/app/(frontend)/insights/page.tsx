import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import Badge from '@/components/ui/Badge'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'
import { articlesData } from '@/data/insights'

export const metadata: Metadata = generatePageMetadata({
  title: 'Legal Insights — Henry Vo | International Lawyer in Vietnam',
  description:
    "Practical legal analysis and guides for foreign clients, investors, expats, and law firms navigating Vietnam's legal system.",
  path: '/insights',
})

const articles = Object.values(articlesData)
  .map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    date: a.date,
    excerpt: a.excerpt,
    readTime: a.readTime,
  }))
  .sort((a, b) => (a.date < b.date ? 1 : -1))

const categoryOrder = ['For Foreign Investors', 'For Expats', 'For Foreign Law Firms', 'Industry-Specific']
const categories = Array.from(new Set(articles.map((a) => a.category))).sort(
  (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
)

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
          <div className="mb-8 sm:mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider font-[family-name:var(--font-inter)]">
            <span className="text-text-secondary">Browse:</span>
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                className="text-accent hover:text-primary transition-colors"
              >
                {cat}
              </a>
            ))}
            <span className="text-text-secondary ml-auto">{articles.length} articles</span>
          </div>

          {categories.map((category) => {
            const categoryArticles = articles.filter((a) => a.category === category)
            const anchor = category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
            return (
              <div key={category} id={anchor} className="mb-12 sm:mb-16 last:mb-0 scroll-mt-24">
                <div className="mb-6 flex items-baseline gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">{category}</h2>
                  <span className="text-xs uppercase tracking-wider text-text-secondary font-[family-name:var(--font-inter)]">
                    {categoryArticles.length} {categoryArticles.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/insights/${article.slug}`}
                      className="group block rounded-sm border border-border bg-white overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                    >
                      <div className="h-2 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
                      <div className="p-6">
                        <Badge variant="teal">{article.category}</Badge>
                        <h3 className="mt-3 text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-text-secondary font-[family-name:var(--font-inter)]">
                            {formatDate(article.date)} · {article.readTime}
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
            )
          })}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
