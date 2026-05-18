import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustIndicators from '@/components/home/TrustIndicators'
import MeetCounsel from '@/components/home/MeetCounsel'
import HowIHelpSection from '@/components/home/HowIHelpSection'
import PracticeAreasPreview from '@/components/home/PracticeAreasPreview'
import InternationalReach from '@/components/home/InternationalReach'
import OfficeFeature from '@/components/home/OfficeFeature'
import ExperienceHighlights from '@/components/home/ExperienceHighlights'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import InsightsPreview from '@/components/home/InsightsPreview'
import ContactCTA from '@/components/ContactCTA'
import JsonLd from '@/components/JsonLd'
import {
  generatePageMetadata,
  generatePersonJsonLd,
  generateLegalServiceJsonLd,
} from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Henry Vo — Vietnamese Lawyer for International Clients | Apolo Lawyers',
  description:
    'Henry Vo (Vo Thien Hien), Managing Partner of Apolo Lawyers since 2018. Vietnamese lawyer with over 20 years of practice representing foreign clients in civil litigation, corporate law, family law, criminal defence, and arbitration. Clients from 20+ countries.',
  path: '/',
})

export default function HomePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Henry Vo - Vietnamese Lawyer for International Clients',
      alternateName: 'Vo Thien Hien - Lawyer for International Clients',
      url: 'https://lawyer.id.vn',
      inLanguage: 'en',
      publisher: {
        '@type': 'Person',
        name: 'Henry Vo',
        alternateName: 'Vo Thien Hien',
        jobTitle: 'Managing Partner',
        worksFor: {
          '@type': 'LegalService',
          name: 'APOLO LAWYERS - Solicitors & Litigators',
          url: 'https://www.apololawyers.com',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lawyer.id.vn',
        },
      ],
    },
    generatePersonJsonLd(),
    generateLegalServiceJsonLd(),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />
      <HeroSection />
      <TrustIndicators />
      <MeetCounsel />
      <HowIHelpSection />
      <PracticeAreasPreview />
      <InternationalReach />
      <OfficeFeature />
      <ExperienceHighlights />
      <TestimonialsSection />
      <InsightsPreview />
      <ContactCTA />
    </>
  )
}
