/**
 * Single source of truth for the identity facts referenced across the site.
 * Used by: CredentialsBlock, JurisdictionsRow, MeetCounsel, contact pages,
 * SEO metadata helpers, and JSON-LD generators.
 */

export const IDENTITY = {
  name: 'Henry Vo',
  vietnameseName: 'Vo Thien Hien',
  title: 'Managing Partner',
  firm: 'Apolo Lawyers',
  firmUrl: 'https://apololawyers.com',

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
  phone: '+84903419479',
  whatsapp: '+84903419479',
  officeHours: 'Mon–Fri · 8:00 AM – 5:00 PM (GMT+7)',

  offices: [
    {
      label: 'Head Office',
      lines: [
        '108 Tran Dinh Xu, Nguyen Cu Trinh Ward',
        'District 1, Ho Chi Minh City, Vietnam',
      ],
    },
    {
      label: 'Branch Office',
      lines: [
        'K&M Tower, 33 Ung Van Khiem, Ward 25',
        'Binh Thanh District, Ho Chi Minh City',
      ],
    },
  ],
} as const

export type IdentityCredential = (typeof IDENTITY)['credentials'][number]
