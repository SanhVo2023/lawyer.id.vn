import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/layout/Breadcrumb'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = generatePageMetadata({
  title: 'Working with Foreign Clients — Henry Vo | International Lawyer in Vietnam',
  description: 'What to expect when hiring a lawyer in Vietnam. Learn about the process, fees, communication, timelines, and how to prepare for your first consultation.',
  path: '/working-with-foreign-clients',
})

const steps = [
  {
    number: '01',
    title: 'Initial Contact',
    description: 'Reach out via WhatsApp, email, or the contact form. Briefly describe your matter and we\'ll respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Free Assessment',
    description: 'We\'ll review your situation and provide an initial assessment of your legal options, likely outcomes, and estimated costs.',
  },
  {
    number: '03',
    title: 'Engagement',
    description: 'If you decide to proceed, we\'ll send a clear engagement letter outlining scope, fees, and timelines. No surprises.',
  },
  {
    number: '04',
    title: 'Case Management',
    description: 'Regular updates in English via your preferred channel. You\'ll always know where your case stands and what comes next.',
  },
  {
    number: '05',
    title: 'Resolution',
    description: 'We pursue the best possible outcome through negotiation, mediation, arbitration, or litigation as appropriate.',
  },
]

const faqItems = [
  { question: 'How much does it cost to hire a lawyer in Vietnam?', answer: 'Legal fees in Vietnam are significantly lower than in Western countries. Depending on the matter, we may charge hourly rates, flat fees, or a combination. We always provide a clear fee estimate before beginning work.' },
  { question: 'Do I need to be in Vietnam to hire a lawyer?', answer: 'No. Many matters can be handled entirely remotely. We communicate via video calls, WhatsApp, and email across time zones. Some court appearances may require your presence, but we\'ll coordinate this in advance.' },
  { question: 'What languages do you work in?', answer: 'All client communication is in English. Legal documents in Vietnamese are translated for your review. Court proceedings are in Vietnamese, with real-time translation provided when you attend.' },
  { question: 'How long do legal matters take in Vietnam?', answer: 'Timelines vary widely. Simple matters may resolve in weeks. Civil litigation typically takes 6-18 months at first instance. We provide realistic timeline estimates for each specific matter.' },
  { question: 'Can you recommend other professionals (accountants, translators)?', answer: 'Yes. We maintain a network of trusted English-speaking professionals including accountants, notaries, translators, and business consultants who regularly work with foreign clients.' },
]

export default function WorkingWithForeignClientsPage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Working with Foreign Clients', url: '/working-with-foreign-clients' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.answer },
      })),
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="relative bg-primary pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.heroInternationalClients.cdn}
            alt={IMAGES.heroInternationalClients.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Working with Foreign Clients' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
              <span className="w-8 h-px bg-accent" />
              Your Guide
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Working with a Vietnamese Lawyer
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Everything you need to know about hiring and working with a lawyer in Vietnam
              as a foreign client. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Process"
            title="What to Expect"
            subtitle="From first contact to resolution — here's how we work together."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-bold text-accent/10 font-[family-name:var(--font-inter)]">
                  {step.number}
                </span>
                <h3 className="mt-2 text-base font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Commitments */}
      <section className="bg-surface py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Commitments"
            title="Our Promises to International Clients"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: '24-Hour Response', description: 'We respond to all inquiries within 24 hours, regardless of your time zone.' },
              { title: 'Transparent Fees', description: 'Clear fee estimates upfront. No hidden charges. Regular billing updates.' },
              { title: 'English Communication', description: 'All communication in fluent English. Legal documents translated as needed.' },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-accent/20 bg-accent/5 p-8 text-center">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            label="Questions"
            title="Frequently Asked Questions"
          />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-text-secondary mb-4">Learn more about Vietnam&apos;s legal system:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/vietnam-legal-system-guide" className="text-sm text-accent hover:underline font-[family-name:var(--font-inter)]">
              Vietnam Legal System Guide
            </Link>
            <span className="text-border">|</span>
            <Link href="/practice-areas" className="text-sm text-accent hover:underline font-[family-name:var(--font-inter)]">
              Practice Areas
            </Link>
            <span className="text-border">|</span>
            <Link href="/faq" className="text-sm text-accent hover:underline font-[family-name:var(--font-inter)]">
              More FAQ
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
