import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'
import { practiceAreasData, practiceAreaSlugs } from '@/data/practice-areas'
import { articlesIndex } from '@/data/insights-index'

import PracticeHero from '@/components/practice-area/PracticeHero'
import ProblemStatement from '@/components/practice-area/ProblemStatement'
import WhoIHelp from '@/components/practice-area/WhoIHelp'
import ProcessTimeline from '@/components/practice-area/ProcessTimeline'
import ServicesAccordion from '@/components/practice-area/ServicesAccordion'
import FeaturedCase from '@/components/practice-area/FeaturedCase'
import RelatedInsights from '@/components/practice-area/RelatedInsights'
import LegalFrameworkBox from '@/components/practice-area/LegalFrameworkBox'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = practiceAreasData[slug]
  if (!data) return {}
  return generatePageMetadata({
    title: `${data.title} — Henry Vo | International Lawyer in Vietnam`,
    description: data.metaDescription,
    path: `/practice-areas/${slug}`,
  })
}

export function generateStaticParams() {
  return practiceAreaSlugs.map((slug) => ({ slug }))
}

export default async function PracticeAreaDetailPage({ params }: Props) {
  const { slug } = await params
  const data = practiceAreasData[slug]
  if (!data) notFound()

  const relatedInsights = data.relatedInsightSlugs
    .map((s) => articlesIndex[s])
    .filter((x): x is NonNullable<typeof x> => Boolean(x))

  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Practice Areas', url: '/practice-areas' },
      { name: data.title, url: `/practice-areas/${slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: `${data.title} — Henry Vo`,
      description: data.metaDescription,
      url: `https://lawyer.id.vn/practice-areas/${slug}`,
      provider: {
        '@type': 'Person',
        name: 'Henry Vo',
        jobTitle: 'Managing Partner',
      },
    },
    ...(data.faq.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faq.map((q) => ({
              '@type': 'Question',
              name: q.question,
              acceptedAnswer: { '@type': 'Answer', text: q.answer },
            })),
          },
        ]
      : []),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <PracticeHero
        title={data.title}
        tagline={data.tagline}
        heroImageId={data.heroImageId}
        introTagline={data.introTagline}
      />

      <ProblemStatement problems={data.problemStatements} />

      {/* Introduction + Why It Matters with sticky framework sidebar */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
                  <span className="w-8 h-px bg-accent" />
                  About this practice
                </span>
                <h2 className="mt-6 text-3xl font-bold text-primary md:text-4xl leading-tight">
                  {data.title} in Vietnam
                </h2>
                <div className="mt-6 h-[2px] w-20 bg-accent" />
                <div className="mt-8 space-y-6">
                  {data.introduction.map((p, i) => (
                    <p key={i} className="text-lg text-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-12">
                <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
                  <span className="w-8 h-px bg-accent" />
                  Why it matters
                </span>
                <h3 className="mt-6 text-2xl md:text-3xl font-bold text-primary leading-tight">
                  Why expert local counsel matters here
                </h3>
                <div className="mt-8 space-y-6">
                  {data.whyItMatters.map((p, i) => (
                    <p key={i} className="text-lg text-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <LegalFrameworkBox framework={data.keyLegalFramework} sticky />
            </div>
          </div>
        </div>
      </section>

      <WhoIHelp personas={data.whoIHelp} />

      <ServicesAccordion groups={data.serviceGroups} />

      <ProcessTimeline steps={data.process} />

      <FeaturedCase
        slug={data.featuredCase.slug}
        title={data.featuredCase.title}
        country={data.featuredCase.country}
        flag={data.featuredCase.flag}
        area={data.featuredCase.area}
        outcome={data.featuredCase.outcome}
        matterValue={data.featuredCase.matterValue}
        imageId={data.featuredCase.imageId}
      />

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
              <span className="w-8 h-px bg-accent" />
              Common Questions
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQList items={data.faq} />
        </div>
      </section>

      <RelatedInsights insights={relatedInsights} />

      <ContactCTA title={data.cta.headline} subtitle={data.cta.subline} />
    </>
  )
}

import FAQAccordion from '@/components/ui/FAQAccordion'

function FAQList({ items }: { items: { question: string; answer: string }[] }) {
  return <FAQAccordion items={items} />
}
