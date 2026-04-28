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
  title: 'Henry Vo — International Lawyer in Vietnam | Apolo Lawyers',
  description:
    'Henry Vo (Vo Thien Hien), Managing Partner at Apolo Lawyers. International lawyer in Vietnam representing foreign clients in civil litigation, corporate law, family law, criminal defense, and international arbitration. 15+ years, 500+ matters, 20+ countries.',
  path: '/',
})

export default function HomePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Henry Vo - International Lawyer in Vietnam',
      alternateName: 'Vo Thien Hien - Lawyer in Vietnam',
      url: 'https://lawyer.id.vn',
      inLanguage: 'en',
      publisher: {
        '@type': 'Person',
        name: 'Henry Vo',
        alternateName: 'Vo Thien Hien',
        jobTitle: 'Managing Partner',
        worksFor: {
          '@type': 'LegalService',
          name: 'Apolo Lawyers',
          url: 'https://apololawyers.com',
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
