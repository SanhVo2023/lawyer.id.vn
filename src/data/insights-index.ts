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

  // For Foreign Investors
  'vietnam-foreign-investment-law-2026': {
    slug: 'vietnam-foreign-investment-law-2026',
    title: "Vietnam's 2026 Foreign Investment Law Updates: What Has Changed",
    category: 'For Foreign Investors',
    excerpt:
      "A practitioner's guide to the 2025-2026 amendments to Vietnam's investment regime — conditional sectors, sectoral access, treaty obligations, and what foreign investors should do now.",
    readTime: '13 min',
    date: '2026-04-22',
  },
  'protecting-ip-vietnam': {
    slug: 'protecting-ip-vietnam',
    title: 'How to Protect Your IP in Vietnam: A Practical Guide',
    category: 'For Foreign Investors',
    excerpt:
      "A foreign investor's guide to Vietnamese IP — registration, trade secret protection, enforcement options, and the most common mistakes to avoid.",
    readTime: '14 min',
    date: '2026-04-18',
  },
  'representative-office-vs-subsidiary-vietnam': {
    slug: 'representative-office-vs-subsidiary-vietnam',
    title: 'Representative Office vs. Subsidiary in Vietnam: Which Vehicle Fits Your Strategy',
    category: 'For Foreign Investors',
    excerpt:
      'A practical comparison of the two principal foreign-presence options in Vietnam — what each can and cannot do, capital and tax implications, and a five-question decision framework.',
    readTime: '11 min',
    date: '2026-04-12',
  },
  'exit-strategies-foreign-investors-vietnam': {
    slug: 'exit-strategies-foreign-investors-vietnam',
    title: 'Exit Strategies for Foreign Investors in Vietnam',
    category: 'For Foreign Investors',
    excerpt:
      "A practitioner's guide to exiting Vietnamese investments — share sale, asset sale, M&A approvals, foreign-exchange remittance, tax leakage, and treaty-based protections during exit.",
    readTime: '14 min',
    date: '2026-04-04',
  },

  // For Expats
  'arrested-in-vietnam-foreign-national': {
    slug: 'arrested-in-vietnam-foreign-national',
    title: 'What to Do If Arrested in Vietnam as a Foreign National',
    category: 'For Expats',
    excerpt:
      'A practical step-by-step guide for foreign nationals facing detention or arrest in Vietnam — your rights under the Criminal Procedure Code, the role of your consulate, bail, and the first 24 hours.',
    readTime: '14 min',
    date: '2026-04-22',
  },
  'prenuptial-agreements-vietnam': {
    slug: 'prenuptial-agreements-vietnam',
    title: 'Prenuptial Agreements in Vietnam: Are They Enforceable?',
    category: 'For Expats',
    excerpt:
      'A practical guide to prenuptial and post-nuptial agreements under Vietnamese law — what Article 28 of the Law on Marriage and Family permits, notarisation requirements, and how foreign-couple prenups are recognised.',
    readTime: '11 min',
    date: '2026-04-15',
  },
  'child-custody-across-borders-vietnam': {
    slug: 'child-custody-across-borders-vietnam',
    title: 'Child Custody Across Borders: Vietnam and International Law',
    category: 'For Expats',
    excerpt:
      'How Vietnamese courts handle international custody disputes — jurisdiction, non-removal orders, parenting plans, and the recognition and enforcement of orders abroad in a non-Hague Convention country.',
    readTime: '14 min',
    date: '2026-04-08',
  },
  'work-permit-disputes-vietnam': {
    slug: 'work-permit-disputes-vietnam',
    title: "Work Permit Disputes in Vietnam: A Foreign Employee's Guide",
    category: 'For Expats',
    excerpt:
      'A practical guide for foreign employees in Vietnam — the work-permit framework under Decree 152/2020, exemption categories, what happens on termination, dispute paths, and worst-case planning.',
    readTime: '12 min',
    date: '2026-04-02',
  },

  // For Foreign Law Firms
  'enforcement-foreign-judgments-vietnam': {
    slug: 'enforcement-foreign-judgments-vietnam',
    title: 'Enforcement of Foreign Court Judgments in Vietnam',
    category: 'For Foreign Law Firms',
    excerpt:
      "A practitioner's guide to enforcing foreign court judgments in Vietnam — the bilateral treaty and reciprocity framework, procedure, refusal grounds, and how it differs from arbitral-award enforcement.",
    readTime: '12 min',
    date: '2026-04-22',
  },
  'vietnam-court-system-common-law-differences': {
    slug: 'vietnam-court-system-common-law-differences',
    title: 'Vietnam Court System: Key Differences from Common Law Jurisdictions',
    category: 'For Foreign Law Firms',
    excerpt:
      "A briefing for foreign-firm partners on the structural and procedural differences between Vietnam's civil-law court system and common-law expectations — what changes, and what your team needs to know.",
    readTime: '13 min',
    date: '2026-04-18',
  },
  'cross-border-service-of-process-vietnam': {
    slug: 'cross-border-service-of-process-vietnam',
    title: 'Cross-Border Service of Process Involving Vietnam',
    category: 'For Foreign Law Firms',
    excerpt:
      'How to serve process on respondents in Vietnam — and from Vietnam to abroad — under the Hague Service Convention, mutual legal assistance treaties, and Vietnamese procedural law. With practical timeline guidance.',
    readTime: '10 min',
    date: '2026-04-12',
  },

  // Industry-Specific
  'vietnam-real-estate-foreign-investment': {
    slug: 'vietnam-real-estate-foreign-investment',
    title: 'Legal Issues in Vietnam Real Estate Development for Foreign Investors',
    category: 'Industry-Specific',
    excerpt:
      'A practical map of the development cycle for foreign investors in Vietnamese real estate under the Land Law 2024 — from in-principle approval to sales licence and exit.',
    readTime: '14 min',
    date: '2026-04-22',
  },
  'vietnam-manufacturing-employment-law': {
    slug: 'vietnam-manufacturing-employment-law',
    title: 'Vietnam Manufacturing: Employment Law Essentials for Foreign Operators',
    category: 'Industry-Specific',
    excerpt:
      'A practitioner guide to running a Vietnamese manufacturing workforce — Labour Code 2019, work permits, mandatory benefits, trade unions, and large-workforce termination — for FIE operators.',
    readTime: '15 min',
    date: '2026-04-18',
  },
  'vietnam-fintech-regulations': {
    slug: 'vietnam-fintech-regulations',
    title: 'Vietnam Fintech Regulations: What Foreign Companies Should Know',
    category: 'Industry-Specific',
    excerpt:
      'Licensing, foreign-ownership caps, data localisation, sandbox programmes, and AML/CFT obligations for foreign fintech companies entering the Vietnamese market.',
    readTime: '12 min',
    date: '2026-04-12',
  },
}

export const insightSlugs = Object.keys(articlesIndex)
