import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import ContactCTA from '@/components/ContactCTA'
import ArticleHero from '@/components/insights/ArticleHero'
import TableOfContents from '@/components/insights/TableOfContents'
import PullQuote from '@/components/insights/PullQuote'
import KeyTakeaways from '@/components/insights/KeyTakeaways'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'
import { articlesData, articleSlugs, DEFAULT_AUTHOR } from '@/data/insights'
import { practiceAreasData } from '@/data/practice-areas'
import { articlesIndex } from '@/data/insights-index'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const a = articlesData[slug]
  if (!a) return {}
  return generatePageMetadata({
    title: a.title,
    description: a.excerpt,
    path: `/insights/${slug}`,
  })
}

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }))
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params
  const a = articlesData[slug]
  if (!a) notFound()

  const author = a.author ?? DEFAULT_AUTHOR
  const isHenry = author === 'Henry Vo'

  const relatedArticleEntries = a.relatedArticles
    .map((s) => articlesIndex[s])
    .filter((x): x is NonNullable<typeof x> => Boolean(x))

  const relatedAreaEntries = a.relatedPracticeAreas
    .map((s) => ({ slug: s, title: practiceAreasData[s]?.title }))
    .filter((x) => x.title)

  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Legal Insights', url: '/insights' },
      { name: a.title, url: `/insights/${slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: a.title,
      datePublished: a.date,
      author: isHenry
        ? { '@type': 'Person', name: 'Henry Vo', url: 'https://lawyer.id.vn/about' }
        : { '@type': 'Organization', name: author, url: 'https://www.apololawyers.com' },
      publisher: { '@type': 'LegalService', name: 'APOLO LAWYERS - Solicitors & Litigators', url: 'https://www.apololawyers.com' },
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <ArticleHero
        title={a.title}
        category={a.category}
        date={a.date}
        readTime={a.readTime}
        heroImageId={a.heroImageId}
        excerpt={a.excerpt}
        author={author}
      />

      <article className="py-10 sm:py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* TOC sidebar */}
            <div className="lg:col-span-3 order-1 lg:order-1">
              <TableOfContents items={a.tableOfContents} />
            </div>

            {/* Article body */}
            <div className="lg:col-span-9 order-2 lg:order-2 max-w-3xl">
              {/* Intro */}
              <div className="space-y-5 mb-12">
                {a.intro.map((p, i) => (
                  <p key={i} className="text-lg text-text-secondary leading-relaxed first:text-xl first:text-primary first:font-medium">
                    {p}
                  </p>
                ))}
              </div>

              {/* Sections */}
              {a.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-6">
                    {section.heading}
                  </h2>
                  <div className="space-y-5">
                    {section.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-lg text-text-secondary leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: p
                            .replace(/\*\*(.+?)\*\*/g, '<strong class="text-primary">$1</strong>')
                            .replace(/\n/g, '<br />'),
                        }}
                      />
                    ))}
                  </div>
                  {section.pullQuote && <PullQuote>{section.pullQuote}</PullQuote>}
                </section>
              ))}

              {/* Practical checklist */}
              {a.practicalChecklist && (
                <section className="my-12 rounded-sm border border-border bg-surface p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-6">
                    {a.practicalChecklist.title}
                  </h3>
                  <ol className="space-y-3">
                    {a.practicalChecklist.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-accent text-accent text-xs font-bold font-[family-name:var(--font-inter)]">
                          {i + 1}
                        </span>
                        <span className="text-base text-primary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Key takeaways */}
              <KeyTakeaways items={a.keyTakeaways} />

              {/* Author note */}
              <aside className="my-12 rounded-sm border-l-4 border-accent bg-surface p-6">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium font-[family-name:var(--font-inter)]">
                  Author Note
                </span>
                <p className="mt-2 text-base text-text-secondary leading-relaxed italic">
                  {a.authorNote}
                </p>
              </aside>

              {/* Related */}
              <div className="mt-16 border-t border-border pt-12">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-6">
                  Continue Reading
                </h3>

                {relatedArticleEntries.length > 0 && (
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-wider text-text-secondary font-[family-name:var(--font-inter)] mb-4">
                      Related Articles
                    </p>
                    <ul className="space-y-3">
                      {relatedArticleEntries.map((r) => (
                        <li key={r.slug}>
                          <Link
                            href={`/insights/${r.slug}`}
                            className="block group p-4 rounded-sm border border-border hover:border-accent/40 hover:bg-surface transition-all"
                          >
                            <div className="text-base font-semibold text-primary group-hover:text-accent transition-colors">
                              {r.title}
                            </div>
                            <p className="mt-1 text-sm text-text-secondary line-clamp-2">{r.excerpt}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {relatedAreaEntries.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-text-secondary font-[family-name:var(--font-inter)] mb-4">
                      Related Practice Areas
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {relatedAreaEntries.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/practice-areas/${p.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-accent/30 bg-accent/5 text-sm text-accent font-medium hover:bg-accent hover:text-white transition-colors"
                        >
                          {p.title}
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  )
}
