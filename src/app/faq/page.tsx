import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import HubHero from '@/components/layout/HubHero'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions — Henry Vo | International Lawyer in Vietnam',
  description: 'Common questions from foreign clients about hiring a lawyer in Vietnam, legal fees, property rights, divorce, starting a business, and more.',
  path: '/faq',
})

const faqSections = [
  {
    title: 'Hiring a Lawyer',
    items: [
      { question: 'How do I know if I need a lawyer in Vietnam?', answer: 'If you are involved in any legal matter in Vietnam — a dispute, transaction, or regulatory matter — having local legal representation is strongly recommended. Vietnam\'s legal system is based on civil law and operates very differently from common law systems.' },
      { question: 'Can a foreign lawyer represent me in Vietnamese courts?', answer: 'No. Only lawyers licensed by the Vietnam Bar Federation can represent clients in Vietnamese courts. Foreign lawyers can advise on foreign law aspects but cannot appear in Vietnamese court proceedings.' },
      { question: 'How do I verify a Vietnamese lawyer\'s credentials?', answer: 'Licensed lawyers in Vietnam hold a Practicing Certificate issued by the provincial Bar Association. You can verify credentials through the Vietnam Bar Federation or ask the lawyer directly for their certificate number.' },
    ],
  },
  {
    title: 'Property & Investment',
    items: [
      { question: 'Can foreigners own land in Vietnam?', answer: 'Foreigners cannot own land in Vietnam. However, foreign individuals can own apartments for up to 50 years (renewable), and foreign-invested enterprises can hold land use rights for the duration of their investment certificate.' },
      { question: 'What is the process for setting up a foreign-owned company in Vietnam?', answer: 'The process involves obtaining an Investment Registration Certificate (IRC) and Enterprise Registration Certificate (ERC) from the local Department of Planning and Investment. Processing typically takes 15-30 working days. Additional licenses may be required depending on your business sector.' },
    ],
  },
  {
    title: 'Family Law',
    items: [
      { question: 'Can I get divorced in Vietnam if I was married in another country?', answer: 'Yes. Vietnamese courts have jurisdiction if at least one spouse is Vietnamese or if both foreign spouses reside in Vietnam. The marriage does not need to have been registered in Vietnam.' },
      { question: 'How does child custody work for international couples in Vietnam?', answer: 'Vietnamese courts apply the "best interests of the child" standard. Both parents have equal rights regardless of nationality. Courts consider factors including each parent\'s ability to care for the child, the child\'s wishes (if old enough), and maintaining stability.' },
    ],
  },
  {
    title: 'Criminal Matters',
    items: [
      { question: 'What should I do if I\'m detained by police in Vietnam?', answer: 'Stay calm, ask to contact a lawyer and your embassy immediately. Do not sign any documents you don\'t understand. You have the right to legal representation from the first moment of detention.' },
      { question: 'Can I leave Vietnam while a legal matter is pending?', answer: 'It depends on the matter. In criminal cases, courts may impose exit bans. In civil matters, exit bans are rare but possible when significant amounts are in dispute. Consult your lawyer before making travel plans.' },
    ],
  },
]

export default function FAQPage() {
  const allFaqs = faqSections.flatMap((s) => s.items)

  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'FAQ', url: '/faq' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allFaqs.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.answer },
      })),
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <HubHero
        imageId="heroAboutPortrait"
        eyebrow="Questions"
        title="Frequently Asked Questions"
        subtitle="Common questions from foreign clients about legal matters in Vietnam."
        breadcrumb={[{ label: 'FAQ' }]}
      />

      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-16">
          {faqSections.map((section) => (
            <div key={section.title}>
              <SectionHeading title={section.title} align="left" />
              <FAQAccordion items={section.items} />
            </div>
          ))}
        </div>
      </section>

      <ContactCTA
        title="Have a Question Not Listed Here?"
        subtitle="Get in touch and we'll provide a clear, straightforward answer."
      />
    </>
  )
}
