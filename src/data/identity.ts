/**
 * Single source of truth for the identity facts referenced across the site.
 * Used by: CredentialsBlock, JurisdictionsRow, MeetCounsel, contact pages,
 * SEO metadata helpers, and JSON-LD generators.
 *
 * Address block is post-2025 administrative-merger official EN canonical text
 * sourced from workspace-root `address.txt`. Contact info (phone, hours, direct
 * email, credentials, jurisdictions) reflects Round 2 owner-review revisions
 * (Feedback round 2.xlsx sheet `3.-lawyer.id.vn`, 17/5/2026). Do not paraphrase.
 */

export const IDENTITY = {
  name: 'Henry Vo',
  vietnameseName: 'Vo Thien Hien',
  title: 'Managing Partner',
  firm: 'APOLO LAWYERS - Solicitors & Litigators',
  firmShort: 'Apolo Lawyers',
  firmUrl: 'https://www.apololawyers.com',
  managingPartnerSince: 2018,

  yearsExperience: 20,
  casesHandled: 500,
  countriesServed: 20,

  credentials: [
    { label: 'Vietnam Bar Federation', detail: 'Member' },
    { label: 'VIAC Arbitration', detail: 'Arbitration counsel experience' },
    { label: 'Association of European Attorneys', detail: 'Member of AEA' },
    { label: 'Ho Chi Minh City University of Law', detail: 'Legal education' },
  ],

  jurisdictions: ['VIAC', 'SIAC', 'ICC', 'Vietnam Courts'],

  languages: ['Vietnamese', 'English'],

  // Firm-routing email (footer firm-info block, both offices).
  email: 'contact@apolo.com.vn',
  // Direct partner email (contact-page Direct Contact card).
  directEmail: 'hien.vo@apololawyers.com',

  // Primary CTA / WhatsApp number (Henry Vo's direct line, per Round 2).
  callCenterDisplay: '(+84) 913.479.179',
  callCenterTel: '+84913479179',
  callCenterWhatsApp: '84913479179',

  officeHours: 'Mon–Fri · 8:30 AM – 6:00 PM (GMT+7)',

  offices: [
    {
      label: 'Head Office',
      lines: [
        '108 Tran Dinh Xu Street, Cau Ong Lanh Ward',
        'Ho Chi Minh City, Vietnam',
      ],
      phones: [
        { label: 'Office', display: '(+8428) 66.701.709', tel: '+842866701709' },
        { label: 'Direct', display: '(+84) 913.479.179', tel: '+84913479179' },
      ],
    },
    {
      label: 'East Saigon Branch — Apolo Lawyers Lawfirm',
      lines: [
        '9th/F, Tower K&M Building, 33 Ung Van Khiem Street',
        'Thanh My Tay Ward, Ho Chi Minh City, Vietnam',
      ],
      phones: [
        { label: 'Office', display: '(+8428) 35 059 349', tel: '+842835059349' },
        { label: 'Direct', display: '(+84) 913.479.179', tel: '+84913479179' },
      ],
    },
  ],
} as const

export type IdentityCredential = (typeof IDENTITY)['credentials'][number]
export type IdentityOffice = (typeof IDENTITY)['offices'][number]
