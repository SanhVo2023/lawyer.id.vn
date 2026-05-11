/**
 * Single source of truth for the identity facts referenced across the site.
 * Used by: CredentialsBlock, JurisdictionsRow, MeetCounsel, contact pages,
 * SEO metadata helpers, and JSON-LD generators.
 *
 * Address block is post-2025 administrative-merger official EN canonical text
 * sourced verbatim from workspace-root `address.txt`. Do not paraphrase.
 */

export const IDENTITY = {
  name: 'Henry Vo',
  vietnameseName: 'Vo Thien Hien',
  title: 'Managing Partner',
  firm: 'APOLO LAWYERS - Solicitors & Litigators',
  firmShort: 'Apolo Lawyers',
  firmUrl: 'https://www.apololawyers.com',

  yearsExperience: 15,
  casesHandled: 500,
  countriesServed: 20,

  credentials: [
    {
      label: 'Vietnam Bar Federation',
      detail: 'Licensed Attorney since 2010',
      year: 2010,
    },
    {
      label: 'VIAC Arbitrator',
      detail: 'Panel member since 2018',
      year: 2018,
    },
    {
      label: 'International Bar Association',
      detail: 'Associate member since 2020',
      year: 2020,
    },
    {
      label: 'HCMC University of Law',
      detail: 'JD-equivalent, graduated 2008',
      year: 2008,
    },
  ],

  jurisdictions: ['VIAC', 'SIAC', 'ICC', 'NYC', 'Vietnam Courts'],

  languages: ['English', 'Vietnamese'],

  email: 'contact@apolo.com.vn',

  // Call-center / firm hotline (used by WhatsApp button and primary CTA)
  callCenterDisplay: '(+84) 903.419.479',
  callCenterTel: '+84903419479',
  callCenterWhatsApp: '84903419479',

  officeHours: 'Mon–Fri · 8:00 AM – 5:00 PM (GMT+7)',

  offices: [
    {
      label: 'Head Office',
      lines: [
        '108 Tran Dinh Xu Street, Cau Ong Lanh Ward',
        'Ho Chi Minh City, Vietnam',
      ],
      phones: [
        { label: 'Office', display: '(+8428) 66.701.709', tel: '+842866701709' },
        { label: 'Mobile', display: '(+84) 908.043.086', tel: '+84908043086' },
        { label: 'Hotline', display: '(+84) 903.600.347', tel: '+84903600347' },
      ],
    },
    {
      label: 'East Saigon Branch — Apolo Lawyers Lawfirm',
      lines: [
        '9th/F, Tower K&M Building, 33 Ung Van Khiem Street',
        'Thanh My Tay Ward, Ho Chi Minh City, Vietnam',
      ],
      phones: [
        { label: 'Office', display: '(+8428) 35.059.349', tel: '+842835059349' },
        { label: 'Mobile', display: '(+84) 908.097.068', tel: '+84908097068' },
        { label: 'Hotline', display: '(+84) 979.48.98.79', tel: '+84979489879' },
      ],
    },
  ],
} as const

export type IdentityCredential = (typeof IDENTITY)['credentials'][number]
export type IdentityOffice = (typeof IDENTITY)['offices'][number]
