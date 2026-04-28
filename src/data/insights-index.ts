// Lightweight index of insights articles for cross-linking from other pages.
// Full article content lives in `src/data/insights.ts` (created in Stream C4).
// This index is populated synchronously on first import.

export interface InsightIndexEntry {
  slug: string
  title: string
  category: string
  excerpt: string
  readTime?: string
  date: string
}

export const articlesIndex: Record<string, InsightIndexEntry> = {
  'top-legal-risks-foreign-investors-vietnam': {
    slug: 'top-legal-risks-foreign-investors-vietnam',
    title: 'Top 5 Legal Risks for Foreign Investors in Vietnam (2026)',
    category: 'For Foreign Investors',
    excerpt:
      'Understanding the key legal risks before entering the Vietnamese market can save your business millions — from sectoral access to capital structuring to dispute resolution.',
    readTime: '12 min',
    date: '2026-03-15',
  },
  'getting-divorced-vietnam-foreigner-guide': {
    slug: 'getting-divorced-vietnam-foreigner-guide',
    title: 'Getting Divorced in Vietnam as a Foreigner: Complete Guide',
    category: 'For Expats',
    excerpt:
      'A practical step-by-step guide to international divorce in Vietnam — jurisdiction, custody, property division, and what foreign clients can realistically expect.',
    readTime: '14 min',
    date: '2026-03-10',
  },
  'enforcement-foreign-arbitral-awards-vietnam': {
    slug: 'enforcement-foreign-arbitral-awards-vietnam',
    title: 'Enforcement of Foreign Arbitral Awards in Vietnam',
    category: 'For Foreign Law Firms',
    excerpt:
      "A practitioner's guide to enforcing foreign arbitral awards under Vietnam's New York Convention obligations — procedure, refusal grounds, and strategy.",
    readTime: '11 min',
    date: '2026-03-05',
  },
  'due-diligence-checklist-vietnam': {
    slug: 'due-diligence-checklist-vietnam',
    title: 'Due Diligence Checklist for Vietnam Market Entry',
    category: 'For Foreign Investors',
    excerpt:
      'A comprehensive pre-investment checklist covering corporate, regulatory, tax, employment, IP, and dispute risks for foreign companies entering Vietnam.',
    readTime: '10 min',
    date: '2026-02-28',
  },
  'buying-property-vietnam-foreigner': {
    slug: 'buying-property-vietnam-foreigner',
    title: 'Buying Property in Vietnam as a Foreigner: What You Can and Cannot Do',
    category: 'For Expats',
    excerpt:
      'Everything you need to know about foreign property ownership rights, eligible projects, ownership caps, the 50-year term, and inheritance.',
    readTime: '12 min',
    date: '2026-02-20',
  },
  'instructing-local-counsel-vietnam': {
    slug: 'instructing-local-counsel-vietnam',
    title: 'Instructing Local Counsel in Vietnam: A Guide for Foreign Law Firms',
    category: 'For Foreign Law Firms',
    excerpt:
      'How foreign law firms can effectively engage Vietnamese local counsel — scope, communication, fees, document handling, and managing the bilingual workflow.',
    readTime: '9 min',
    date: '2026-02-15',
  },
}

export const insightSlugs = Object.keys(articlesIndex)
