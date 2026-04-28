import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'

// Placeholder data — will come from CMS
const guidesData: Record<string, {
  title: string
  description: string
  content: string[]
}> = {
  'court-system': {
    title: 'Understanding Vietnam\'s Court System',
    description: 'How Vietnamese courts are organized and what to expect as a foreign litigant.',
    content: [
      'Vietnam\'s court system is organized in a hierarchical structure with four levels: District People\'s Courts, Provincial People\'s Courts, High People\'s Courts (in Hanoi, Da Nang, and Ho Chi Minh City), and the Supreme People\'s Court.',
      'For foreign litigants, most first-instance cases are heard at the Provincial People\'s Court level, which has jurisdiction over cases with foreign elements. Understanding this jurisdictional rule is important for planning your legal strategy.',
      'Content will be expanded from CMS with 2,000-3,000 words of comprehensive, accessible content.',
    ],
  },
  'civil-procedure': {
    title: 'How Civil Lawsuits Work in Vietnam',
    description: 'Step-by-step overview of civil proceedings from filing to enforcement.',
    content: [
      'Civil litigation in Vietnam follows the Civil Procedure Code, which governs the process from filing a claim through trial and enforcement. The procedure differs from common law systems in several important ways.',
      'Content will be expanded from CMS.',
    ],
  },
  'foreign-ownership': {
    title: 'Foreign Ownership of Property in Vietnam',
    description: 'What foreigners can and cannot own, and how to protect your investment.',
    content: [
      'Vietnam\'s land law operates on the principle that all land belongs to the state. Individuals and organizations hold "land use rights" rather than ownership. For foreigners, the rules are more restrictive but still allow meaningful property investment.',
      'Content will be expanded from CMS.',
    ],
  },
  'dispute-resolution': {
    title: 'Dispute Resolution in Vietnam: Your Options',
    description: 'Comparing litigation, arbitration, and mediation for international disputes.',
    content: [
      'When disputes arise in Vietnam, foreign parties have several resolution options: negotiation, mediation, arbitration, and litigation. Each has distinct advantages and is suited to different types of disputes.',
      'Content will be expanded from CMS.',
    ],
  },
  'contract-law': {
    title: 'Vietnam Contract Law: Key Principles for Foreign Businesses',
    description: 'Essential contract law principles that differ from common law jurisdictions.',
    content: [
      'Vietnam\'s Civil Code governs contract law and contains principles that may surprise businesses from common law jurisdictions. Understanding these differences before entering contracts with Vietnamese parties is essential.',
      'Content will be expanded from CMS.',
    ],
  },
  'labor-law': {
    title: 'Vietnam Labor Law: What Foreign Employers Must Know',
    description: 'Employment regulations, termination rules, and compliance requirements.',
    content: [
      'Vietnam\'s Labor Code provides strong protections for employees. Foreign employers operating in Vietnam must comply with these regulations, which include restrictions on termination, mandatory benefits, and work permit requirements for foreign staff.',
      'Content will be expanded from CMS.',
    ],
  },
  'family-law': {
    title: 'Vietnam Family Law: Marriage, Divorce, and Child Custody',
    description: 'Family law framework for marriages and divorces involving foreign nationals.',
    content: [
      'Vietnam\'s Law on Marriage and Family governs marriages, divorces, and child custody. When a foreign national is involved, these matters take on additional complexity, including questions of jurisdiction and applicable law.',
      'Content will be expanded from CMS.',
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = guidesData[slug]
  if (!guide) return {}

  return generatePageMetadata({
    title: `${guide.title} — Vietnam Legal System Guide | Henry Vo`,
    description: guide.description,
    path: `/vietnam-legal-system-guide/${slug}`,
  })
}

export function generateStaticParams() {
  return Object.keys(guidesData).map((slug) => ({ slug }))
}

export default async function LegalGuideDetailPage({ params }: Props) {
  const { slug } = await params
  const guide = guidesData[slug]

  if (!guide) {
    notFound()
  }

  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Vietnam Legal System Guide', url: '/vietnam-legal-system-guide' },
      { name: guide.title, url: `/vietnam-legal-system-guide/${slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      author: { '@type': 'Person', name: 'Henry Vo' },
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="bg-primary pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Vietnam Legal System Guide', href: '/vietnam-legal-system-guide' },
              { label: guide.title },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-4 text-lg text-white/60">{guide.description}</p>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-6">
          {guide.content.map((para, i) => (
            <p key={i} className="text-lg text-text-secondary leading-relaxed">
              {para}
            </p>
          ))}

          <div className="border-t border-border pt-8 mt-12 flex items-center gap-4">
            <Link
              href="/vietnam-legal-system-guide"
              className="text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors"
            >
              ← All Guides
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors"
            >
              Need Help? Contact Us →
            </Link>
          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  )
}
