import type { Metadata } from 'next'
import { IMAGES } from '@/lib/images'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lawyer.id.vn'

interface GeneratePageMetadataParams {
  title: string
  description: string
  path: string
  ogImage?: string
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
}: GeneratePageMetadataParams): Metadata {
  const url = `${siteUrl}${path}`
  const finalOgImage = ogImage ?? IMAGES.ogDefault.cdn

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Henry Vo - International Lawyer in Vietnam',
      locale: 'en_US',
      type: 'website',
      images: [{ url: finalOgImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [finalOgImage],
    },
  }
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }
}

export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Person', 'Attorney'],
    name: 'Henry Vo',
    alternateName: 'Vo Thien Hien',
    jobTitle: 'Managing Partner',
    worksFor: {
      '@type': 'LegalService',
      name: 'APOLO LAWYERS - Solicitors & Litigators',
      url: 'https://www.apololawyers.com',
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '108 Tran Dinh Xu Street, Cau Ong Lanh Ward',
        addressLocality: 'Ho Chi Minh City',
        addressCountry: 'VN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '9th/F, Tower K&M Building, 33 Ung Van Khiem Street, Thanh My Tay Ward',
        addressLocality: 'Ho Chi Minh City',
        addressCountry: 'VN',
      },
    ],
    telephone: '+84903419479',
    email: 'contact@apolo.com.vn',
    url: siteUrl,
    sameAs: [
      'https://www.apololawyers.com',
      'https://vothienhien.com',
      'https://lawyersinvietnam.com',
    ],
    knowsLanguage: ['en', 'vi'],
  }
}

export function generateLegalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Henry Vo - International Lawyer in Vietnam',
    url: siteUrl,
    telephone: '+84903419479',
    email: 'contact@apolo.com.vn',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '108 Tran Dinh Xu Street, Cau Ong Lanh Ward',
      addressLocality: 'Ho Chi Minh City',
      addressCountry: 'VN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    priceRange: '$$',
  }
}
