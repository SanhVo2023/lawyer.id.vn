import type { MetadataRoute } from 'next'
import { practiceAreaSlugs } from '@/data/practice-areas'
import { caseSlugs } from '@/data/experience'
import { articleSlugs } from '@/data/insights'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lawyer.id.vn'

const staticPages = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/practice-areas', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/experience', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/insights', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/working-with-foreign-clients', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/vietnam-legal-system-guide', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  { path: '/credentials', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
]

// Vietnam Legal System Guide slugs — kept in sync with the Record in
// `src/app/vietnam-legal-system-guide/[slug]/page.tsx`. Update both together.
const legalGuideSlugs = [
  'court-system',
  'civil-procedure',
  'foreign-ownership',
  'dispute-resolution',
  'contract-law',
  'labor-law',
  'family-law',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const practiceAreaEntries: MetadataRoute.Sitemap = practiceAreaSlugs.map((slug) => ({
    url: `${siteUrl}/practice-areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const experienceEntries: MetadataRoute.Sitemap = caseSlugs.map((slug) => ({
    url: `${siteUrl}/experience/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  const insightEntries: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${siteUrl}/insights/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const legalGuideEntries: MetadataRoute.Sitemap = legalGuideSlugs.map((slug) => ({
    url: `${siteUrl}/vietnam-legal-system-guide/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticEntries,
    ...practiceAreaEntries,
    ...experienceEntries,
    ...insightEntries,
    ...legalGuideEntries,
  ]
}
