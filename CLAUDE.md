# lawyer.id.vn - Professional Identity

> **PM NOTICE (2026-04-16)** — Before any further Payload work, read these new docs:
> - `../../shared-assets/PAYLOAD_SETUP_SPEC.md` — canonical Payload config
> - `../../shared-assets/BUILDER_AGENT_BRIEF.md` — kickoff brief format
> - `../../shared-assets/HIEN_FEEDBACK_PROTOCOL.md` — owner feedback capture
>
> **CRITICAL — Do NOT run `npx payload migrate` yet.**
> `src/payload.config.ts` is currently missing `tablePrefix`. This site shares Supabase project `vvzpvkjlkmjjnhapsrxq` with vothienhien.com (which is grandfathered with no prefix). Without a prefix here, migration will collide with vothienhien.com's `users`, `media`, `pages`, etc.
>
> **Fix before migrating**:
> 1. Edit `src/payload.config.ts` → `postgresAdapter({ ..., tablePrefix: 'lid_', ... })`.
> 2. Ask PM (user/Thach) to verify via Supabase MCP `list_tables` on `vvzpvkjlkmjjnhapsrxq` that no tables currently start with `lid_`.
> 3. Switch `.env` temporarily to the direct (5432) connection string.
> 4. Run `npx payload migrate:status`, then `npx payload migrate`.
> 5. Re-run `list_tables` via PM — all new tables should be `lid_*`; existing unprefixed tables from vothienhien.com untouched.
> 6. Switch `.env` back to pooled (6543) for runtime.
>
> Your table prefix is `lid_` (from `../../shared-assets/SUPABASE_CONFIG.md`).

## Project Overview
- **Domain**: lawyer.id.vn
- **Role in Ecosystem**: International lawyer identity hub. English-only site positioning Vietnamese lawyer for foreign clients.
- **Language**: EN only
- **Phase**: Phase 1
- **Target Audience**: Foreign clients, expats, international businesses seeking a lawyer in Vietnam

## Tech Stack
- **Framework**: Next.js 15 (App Router) with TypeScript
- **CMS**: PayloadCMS v3 (embedded in Next.js)
- **Database**: Supabase PostgreSQL
- **Styling**: Tailwind CSS v4 + @tailwindcss/typography
- **Animations**: GSAP (ScrollTrigger for scroll) + Framer Motion (UI transitions)
- **Font**: Be_Vietnam_Pro (Vietnamese diacritics) for VN sites, Inter for EN-only sites
- **i18n**: next-intl (if bilingual)
- **SEO**: Built-in metadata API + schema-dts + @payloadcms/plugin-seo
- **Image Processing**: sharp
- **Deployment**: Vercel (frontend) + Supabase (database)
- **AI Images**: Generated with Nano Banana 2 (Google Gemini 3.1 Flash Image)

## Coding Conventions
- Use TypeScript strict mode
- Use Server Components by default, Client Components only when needed ('use client')
- Use App Router file conventions (page.tsx, layout.tsx, loading.tsx, error.tsx)
- Every page must export generateMetadata or have static metadata
- Every page must include JSON-LD structured data via <JsonLd> component
- Use next/image for all images with descriptive alt text
- Use next/font for font loading (Be_Vietnam_Pro or Inter)
- SSG for all public pages, ISR (revalidate: 3600) for blog/article content
- Tailwind for all styling - no CSS modules, no styled-components
- GSAP for scroll animations, Framer Motion for page transitions and hover effects
- Mobile-first responsive design (breakpoints: sm:640, md:768, lg:1024, xl:1280)

## PayloadCMS Conventions
- Collections use kebab-case slugs
- All content fields that contain text should be localized (if bilingual site)
- Use Lexical editor for rich text
- SEO plugin enabled on main content collections
- Media collection with image sizes: thumbnail (400x300), card (768x512), hero (1920x1080), og (1200x630)
- Hooks: auto-slug generation, ISR revalidation on publish
- Users collection with admin/editor roles

## SEO Requirements
- Every page: meta title, description, OG image, canonical URL
- Bilingual sites: hreflang alternates for vi/en
- robots.ts: Allow AI bots (GPTBot, ChatGPT-User, PerplexityBot, Claude-Web)
- sitemap.ts: Dynamic from CMS, include lastModified and priority
- Schema.org JSON-LD on every page (minimum: BreadcrumbList)
- FAQ schema on pages with FAQ sections
- Core Web Vitals targets: LCP <2.5s, CLS <0.1, INP <200ms

## Internal Linking Rules
- Link TO: apololawyers.com, lawyersinvietnam.com (authority positioning)
- Supported BY: vothienhien.com, i-lawyers.net

## Contact Strategy
MODERATE - WhatsApp, contact form. No Zalo.

## Key Commands
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Generate PayloadCMS types
npx payload generate:types

# Run database migration
npx payload migrate

# Build for production
npm run build
```

## Important Notes
- Read PRD.md in this directory for full requirements, design direction, and content plan
- This site needs 100 SEO content pages created in the CMS
- All non-logo images should be generated with Nano Banana 2
- The site must be production-ready, responsive, and optimized for Core Web Vitals
- Follow the ecosystem's internal linking strategy strictly
