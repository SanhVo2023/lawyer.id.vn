# Builder Brief — lawyer.id.vn

**Site**: lawyer.id.vn — Professional Identity (Phase 1)
**Language**: EN only (foreign clients — no VN locale)
**Supabase project**: `vvzpvkjlkmjjnhapsrxq` (region ap-northeast-2)
**Table prefix**: `lid_` — **MUST** appear in `postgresAdapter({ tablePrefix: 'lid_' })` (see CLAUDE.md PM NOTICE — site is currently missing this)
**Audience**: foreign clients, expats, international businesses seeking a lawyer in Vietnam

## Role in ecosystem
International-facing personal identity for the Managing Partner. Links to apololawyers.com, lawyersinvietnam.com. Supports vothienhien.com and i-lawyers.net.

## Current state (as of 2026-04-20)
- `src/` scaffold present with 12 collections (ContactSubmissions, Credentials, Experience, FaqPages, Insights, LegalGuides, Media, NationalityGuides, Pages, PracticeAreas, Testimonials, Users).
- `src/payload.config.ts` present but **MISSING `tablePrefix`** — must fix before first migrate.
- No migrations folder yet; no `./scripts/`; no `./image-assets.json` (scaffolded now — edit before running generator).
- No `HIEN_FEEDBACK.md` (not at owner review yet).

## Reading order
1. `./CLAUDE.md` (PM NOTICE at top — tablePrefix warning)
2. `./PRD.md`
3. `./BUILDER_BRIEF.md` (this file)
4. `../../shared-assets/PAYLOAD_SETUP_SPEC.md`
5. `../../shared-assets/SUPABASE_CONFIG.md`
6. `../../shared-assets/SITE_BUILD_CHECKLIST.md`
7. `../../shared-assets/SITE_BUILD_FEEDBACK.md`
8. `../../shared-assets/LEXICAL_FORMAT_REFERENCE.md`
9. `../../shared-assets/CONTENT_GENERATION_GUIDE.md`

## Immediate priorities
1. **Add `tablePrefix: 'lid_'`** to `src/payload.config.ts` + upgrade `lexicalEditor()` with features list per PAYLOAD_SETUP_SPEC.md §1 + boot-time env guards.
2. **Ask PM to verify** no `lid_*` tables exist on the shared Supabase project BEFORE migrating.
3. Proceed to collections finalization, 100 SEO pages, then image pipeline.

## Design direction (EN-only, international-facing)
See PRD.md. Target feel: polished, confident international law practice profile. No bilingual concerns (single-locale site — delete the `localization` block from payload.config.ts per PAYLOAD_SETUP_SPEC.md §1).

## Image workflow
`./image-assets.json` scaffolded. Icon entries follow F-010 pattern (transparent PNG, antique gold, strong/sturdy). Hero entries target international-audience visuals (HCMC business district, professional portrait, modern office). User runs image-generator-ui `/batch`.

## Contact strategy
**MODERATE** — WhatsApp link, contact form. **No Zalo** (Vietnamese-only channel, wrong audience). No floating CTA.

## Internal linking
- **Link TO**: apololawyers.com, lawyersinvietnam.com
- **Supported BY**: vothienhien.com, i-lawyers.net

## Exit criteria
Standard 8-task checklist (see `../../shared-assets/BUILDER_AGENT_BRIEF.md`).

## Name / terminology rules (from vothienhien.com F-003 + F-009 — apply here too)
- Canonical EN name: **"Vo Thien Hien"**. NO "Henry Vo".
- Title: **"Managing Partner"** (US English).
- Profession noun: pending canonical decision (F-009 open). Default to **"Attorney"** until overridden.
- Keep one canonical term per concept site-wide.
