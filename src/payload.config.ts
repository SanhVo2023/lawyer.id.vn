import dns from 'dns'
import path from 'path'
import { fileURLToPath } from 'url'

// Force Node.js to prefer IPv4 — fixes Supabase IPv6-only DNS on some networks
dns.setDefaultResultOrder('ipv4first')
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  lexicalEditor,
  HeadingFeature,
  BlockquoteFeature,
  LinkFeature,
  UnorderedListFeature,
  OrderedListFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  InlineCodeFeature,
  HorizontalRuleFeature,
  UploadFeature,
  FixedToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import sharp from 'sharp'

// Collections
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { PracticeAreas } from './collections/PracticeAreas'
import { Experience } from './collections/Experience'
import { Insights } from './collections/Insights'
import { FaqPages } from './collections/FaqPages'
import { NationalityGuides } from './collections/NationalityGuides'
import { LegalGuides } from './collections/LegalGuides'
import { Credentials } from './collections/Credentials'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Testimonials } from './collections/Testimonials'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Profile } from './globals/Profile'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

if (!process.env.PAYLOAD_SECRET || process.env.PAYLOAD_SECRET === 'default-secret-change-me') {
  throw new Error('PAYLOAD_SECRET env var must be set to a real random 32+ char string')
}
if (!process.env.DATABASE_URI) {
  throw new Error('DATABASE_URI env var must be set (pooled Supabase connection)')
}

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET,

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    Media,
    Users,
    Pages,
    PracticeAreas,
    Experience,
    Insights,
    FaqPages,
    NationalityGuides,
    LegalGuides,
    Credentials,
    ContactSubmissions,
    Testimonials,
  ],

  globals: [
    SiteSettings,
    Profile,
    Header,
    Footer,
  ],

  editor: lexicalEditor({
    features: () => [
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      BlockquoteFeature(),
      LinkFeature({ enabledCollections: ['pages'] }),
      UnorderedListFeature(),
      OrderedListFeature(),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      InlineCodeFeature(),
      HorizontalRuleFeature(),
      UploadFeature({ collections: { media: { fields: [] } } }),
      FixedToolbarFeature(),
    ],
  }),

  db: postgresAdapter({
    push: process.env.NODE_ENV !== 'production',
    // Isolation: lawyer.id.vn lives entirely in `lid.*` Postgres schema.
    // PAYLOAD_SETUP_SPEC.md mandated `tablePrefix: 'lid_'`, but tablePrefix is not a real
    // option in @payloadcms/db-postgres v3.81 (no effect, doesn't prefix enums).
    // schemaName is the proper isolation mechanism. PM should update the spec.
    schemaName: 'lid',
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),

  plugins: [
    seoPlugin({
      collections: [
        'pages',
        'practice-areas',
        'experience',
        'insights',
        'faq-pages',
        'nationality-guides',
        'legal-guides',
      ],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) =>
        `${typeof doc?.title === 'string' ? doc.title : 'Henry Vo'} | International Lawyer in Vietnam`,
      generateDescription: ({ doc }) =>
        typeof doc?.excerpt === 'string' ? doc.excerpt : '',
    }),
  ],

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  sharp,
})
