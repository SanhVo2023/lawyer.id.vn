import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Badge from '@/components/ui/Badge'
import Flag from '@/components/ui/Flag'
import ContactCTA from '@/components/ContactCTA'
import LegalFrameworkBox from '@/components/practice-area/LegalFrameworkBox'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'
import { casesData, caseSlugs } from '@/data/experience'
import { IMAGES } from '@/lib/images'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = casesData[slug]
  if (!c) return {}
  return generatePageMetadata({
    title: `${c.title} — Henry Vo`,
    description: `Case study: ${c.title}. ${c.area} matter for a ${c.country} client. ${c.outcome.split('.')[0]}.`.slice(0, 160),
    path: `/experience/${slug}`,
  })
}

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }))
}

function paragraphsFrom(text: string) {
  return text.split('\n\n').map((p) => p.trim()).filter(Boolean)
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params
  const c = casesData[slug]
  if (!c) notFound()

  const heroImg = c.heroImageId ? IMAGES[c.heroImageId] : IMAGES.heroHome

  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Experience', url: '/experience' },
      { name: c.title, url: `/experience/${slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: c.title,
      author: { '@type': 'Person', name: 'Henry Vo' },
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="relative bg-primary pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImg.cdn} alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/50" />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none select-none">
          <Flag emoji={c.flag} size={500} className="rounded-md" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Experience', href: '/experience' },
              { label: c.title },
            ]}
          />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            <div className="lg:col-span-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Flag emoji={c.flag} size={36} className="rounded-sm shadow-md" />
                <Badge variant="teal">{c.area}</Badge>
                <Badge>{c.country}</Badge>
                <Badge>{String(c.year)}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
                {c.title}
              </h1>
              <div className="mt-6 h-[2px] w-20 bg-accent" />
            </div>

            {c.matterValue !== 'N/A' && (
              <div className="rounded-sm border border-accent/30 bg-primary/40 backdrop-blur-md p-6 lg:p-8">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)]">
                  Matter Value
                </span>
                <div className="mt-2 text-4xl font-bold text-white font-[family-name:var(--font-inter)]">
                  {c.matterValue}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                  <Image src={IMAGES.iconScales.cdn} alt="" width={20} height={20} className="opacity-70" />
                  Successfully Resolved
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Client Context */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <Image src={IMAGES.iconHandshake.cdn} alt="" width={48} height={48} className="flex-shrink-0 opacity-80" />
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)]">
                Client Context
              </span>
              <p className="mt-2 text-lg text-text-secondary leading-relaxed">{c.clientContext}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-[family-name:var(--font-inter)] text-5xl font-bold text-accent/15 leading-none">
                    01
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">The Challenge</h2>
                </div>
                <div className="space-y-5">
                  {paragraphsFrom(c.challenge).map((p, i) => (
                    <p key={i} className="text-lg text-text-secondary leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-[family-name:var(--font-inter)] text-5xl font-bold text-accent/15 leading-none">
                    02
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Approach</h2>
                </div>
                <div className="space-y-5">
                  {paragraphsFrom(c.approach).map((p, i) => (
                    <p key={i} className="text-lg text-text-secondary leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-[family-name:var(--font-inter)] text-5xl font-bold text-accent/15 leading-none">
                    03
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">The Outcome</h2>
                </div>
                <div className="space-y-5">
                  {paragraphsFrom(c.outcome).map((p, i) => (
                    <p key={i} className="text-lg text-text-secondary leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-sm border-l-4 border-accent bg-surface p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <Image src={IMAGES.iconScales.cdn} alt="" width={48} height={48} className="flex-shrink-0 opacity-80" />
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium font-[family-name:var(--font-inter)]">
                      Lessons & Generalisable Insight
                    </span>
                    <p className="mt-3 text-lg text-primary font-[family-name:var(--font-heading)] italic leading-relaxed">
                      {c.lessonsLearned}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <aside className="lg:sticky lg:top-32 space-y-8">
                <div className="rounded-sm border border-border bg-white p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-5">
                    Legal Issues
                  </h3>
                  <ul className="space-y-3">
                    {c.legalIssues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-primary leading-relaxed">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <LegalFrameworkBox framework={c.applicableLaw} title="Applicable Vietnamese Law" />

                <div className="rounded-sm border border-accent/20 bg-accent/5 p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium font-[family-name:var(--font-inter)]">
                    Related Practice Area
                  </span>
                  <Link
                    href={`/practice-areas/${c.practiceAreaSlug}`}
                    className="mt-2 block text-base font-semibold text-primary hover:text-accent transition-colors"
                  >
                    {c.area} →
                  </Link>
                </div>
              </aside>
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/experience"
              className="text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors"
            >
              ← All Experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center font-[family-name:var(--font-inter)] text-sm font-medium uppercase tracking-wider bg-accent text-white px-8 py-4 transition-all duration-300 hover:bg-primary btn-shimmer"
            >
              Discuss a Similar Matter
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
