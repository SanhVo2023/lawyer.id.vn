# Owner Feedback — lawyer.id.vn

**Review cycle**: 2026-05-04 → (open)
**Reviewer**: Mr Hien (Võ Thiện Hiển, Managing Partner)
**Builder agent session**: 2026-04-21 → 2026-04-26 (Phase 1, site 2 of 4 on Authority project, EN-only)

> Append-only during the review cycle. One `##` section per feedback item using the format in `shared-assets/HIEN_FEEDBACK_PROTOCOL.md`. Builder logs feedback BEFORE fixing — no silent fixes.

---

## F-001: Remove 3rd-party publisher sources/credits from insights/articles (govt sources OK)

- **Date**: 2026-05-04
- **Source**: Thach relaying Mr Hien (Phase 1 owner-review)
- **Severity**: high
- **Category**: content
- **Feedback (verbatim, translated if needed)**:
  > "He don't want any of the blog or artical have 3 party source or credit of it. A gov publication is okie else articles are paterned should be remove the source — especially a 3rd publisher party. Keep the post but don't mention the source."
- **Evidence / reproduction**: This site uses static TypeScript data files for insights instead of a CMS (`src/data/insights.ts`, `insights-expats.ts`, `insights-investors.ts`, `insights-industry.ts`, `insights-lawfirms.ts`). Need to audit each for inline `source:` / `sourceUrl:` fields and external link references. EN-only site, so language patterns to grep: "Source:", "Per [publisher]", "According to [non-govt source]".
- **Proposed fix**:
  1. Grep each `src/data/insights*.ts` for source fields and inline link patterns
  2. Strip non-govt sources (allowlist: `*.gov.vn`, `vbpl.vn`)
  3. Keep internal-ecosystem cross-links (vothienhien.com, etc.)
- **Audit findings (2026-05-11)**:
  - No `source` / `sourceUrl` fields exist in the article schema (`ArticleData` in `src/data/insights.ts`)
  - No external URLs in any `src/data/*.ts` file (only `https://www.apololawyers.com` in `identity.ts`)
  - No "Source:" / "Nguồn:" / "According to [publisher]" / "Per [publisher]" tail lines anywhere
  - No name-drops of 3rd-party publishers (Reuters, Bloomberg, WSJ, Forbes, McKinsey) or competitor firms (Baker McKenzie, DLA Piper, YKVN, VILAF, etc.)
  - The 20 insights articles were generated fresh (not scraped from `thuvienphapluat.vn` or similar) and reference Vietnamese law by **statute name only** (e.g. "Article 47 of the Law on Marriage and Family 2014", "Civil Procedure Code Article 423") — no external citation URLs
  - Surface check: legal-system-guide articles + experience case studies — same pattern, no 3rd-party attribution
- **Status**: **closed — no-op for this site**. Audit confirmed no non-allowlisted sources exist. The govt allowlist (`*.gov.vn` + `vbpl.vn`) was approved by Mr Hien on 2026-05-11 ("all government public website is okay") per `SITE_BUILD_FEEDBACK.md` Issue 9.
- **Generalizable?**: yes — see `SITE_BUILD_FEEDBACK.md` Issue 9.
- **PM action on sign-off**: _(PM fills)_

---

## F-002: Insights/articles credited to Mr Hien that he didn't personally write → reattribute to a fictional author

- **Date**: 2026-05-04
- **Source**: Thach relaying Mr Hien (Phase 1 owner-review)
- **Severity**: high
- **Category**: content
- **Feedback (verbatim, translated if needed)**:
  > "All post that have Mr Hiển credit but not him personaly write should be change to other author — make a fictional one."
- **Evidence / reproduction**: The article schema (`ArticleData` in `src/data/insights.ts`) had no `author` field — byline was hardcoded "By Henry Vo" in `src/components/insights/ArticleHero.tsx:73` and in JSON-LD `author: { @type: Person, name: 'Henry Vo' }` in `src/app/(frontend)/insights/[slug]/page.tsx:58`. All 20 articles inherited the implicit Hien byline.
- **Fix applied (2026-05-11)**:
  1. Added optional `author?: string` field + exported `DEFAULT_AUTHOR = 'Apolo Editorial Team'` in `src/data/insights.ts`
  2. `ArticleHero` now reads `author` from prop (was hardcoded "Henry Vo")
  3. `insights/[slug]/page.tsx` resolves `a.author ?? DEFAULT_AUTHOR`, passes to ArticleHero, and uses in BlogPosting JSON-LD as `@type: Organization` (instead of Person) unless explicitly set to "Henry Vo"
  4. Removed redundant `— Henry Vo` suffix from generateMetadata title (layout template already adds "| Henry Vo - Lawyer in Vietnam")
  5. Net effect: all 20 insights now display "By Apolo Editorial Team · {date}" and JSON-LD credits the Organization, not Hien
- **Open question for Thach**: are any of the 20 insights actually authored by Mr Hien? If yes, set `author: 'Henry Vo'` on those specific records. By default everything is now editorial team. Out-of-scope per brief: experience case studies (`src/data/experience.ts`) and legal-system-guide pages still hardcode "Henry Vo" in JSON-LD — these are Hien's actual case experience / reference content; confirm with Thach whether to flip those too.
- **Status**: **applied — awaiting Hien-authored allowlist from Thach**
- **Generalizable?**: yes — see `SITE_BUILD_FEEDBACK.md` Issue 10.
- **PM action on sign-off**: _(PM fills)_

---

## F-003: Use the official post-merger address word-by-word

- **Date**: 2026-05-04
- **Source**: Thach relaying Mr Hien (Phase 1 owner-review)
- **Severity**: high
- **Category**: content (legal accuracy + brand consistency)
- **Feedback (verbatim, translated if needed)**:
  > "In all website this is the official address and make sure it true, word by word, check the file on the root directory name 'address'."
- **Evidence / reproduction**: Address rendered in `src/components/layout/Footer.tsx`, `src/app/(frontend)/contact/page.tsx`, `src/app/(frontend)/privacy-policy/page.tsx`, `src/lib/metadata.ts` (Organization JSON-LD), `src/data/identity.ts`. EN-only formatting (no Vietnamese diacritics — needs to be the EN canonical form from `address.txt`).
- **Fix applied (2026-05-11)**:
  1. `src/data/identity.ts` — replaced single `phone` + 2-line offices with full structured offices (head office + East Saigon branch) including per-office phone lists from `address.txt` EN block. Added `callCenter*` fields for the firm-wide hotline used by WhatsApp/CTAs. Removed obsolete `phone`/`whatsapp` aliases; firm name updated to canonical `APOLO LAWYERS - Solicitors & Litigators`; firmUrl → `https://www.apololawyers.com`.
  2. `src/components/layout/Footer.tsx` — Contact column now iterates `IDENTITY.offices`; surfaces both head + East Saigon branch with Office/Mobile/Hotline tels.
  3. `src/app/(frontend)/contact/page.tsx` — Offices sidebar now iterates `IDENTITY.offices` (data-driven); Direct Contact shows Call Center number. WhatsApp + contact form unchanged.
  4. `src/components/home/OfficeFeature.tsx` — Hardcoded single "Head Office" card replaced with side-by-side Head Office + East Saigon Branch cards. Narrative copy updated from "heart of District 1" → "Two offices in Ho Chi Minh City" (post-2025 merger no longer uses District 1 in canonical address).
  5. `src/lib/metadata.ts` — PostalAddress JSON-LD (Person + LegalService) updated to canonical EN street addresses; LegalService.name + worksFor.name updated to `APOLO LAWYERS - Solicitors & Litigators` + `https://www.apololawyers.com`.
  6. `src/app/(frontend)/privacy-policy/page.tsx` — contact block address line updated.
  7. `src/components/layout/MobileMenu.tsx` — WhatsApp display format normalized to `(+84) 903.419.479`.
  8. Parent-brand link rule (Issue 13): all `apololawyers.com` references on this EN-only site updated to `https://www.apololawyers.com`. No `apolo.com.vn` link added anywhere (correct per rule — EN site links to EN parent brand only).
- **Verification**: `npx tsc --noEmit` → exit 0. Address text matches `address.txt` word-by-word (108 Tran Dinh Xu Street / Cau Ong Lanh Ward / 9th/F, Tower K&M Building, 33 Ung Van Khiem Street / Thanh My Tay Ward / Ho Chi Minh City, Vietnam).
- **Status**: **fixed** (superseded by Round 2 F-006: phone numbers changed)
- **Generalizable?**: yes — see `SITE_BUILD_FEEDBACK.md` Issue 11.
- **PM action on sign-off**: _(PM fills)_

---

# Round 2 Owner Review (Feedback round 2.xlsx, sheet `3.-lawyer.id.vn`, 17/5/2026)

The Round 2 sheet from Mr Hien contains 26 specific revisions. Items below are grouped where multiple sheet rows share a single change (e.g. site-wide phone update). Numbering picks up from F-004.

## F-004: Site tagline change (sheet items 3, 14)

- **Severity**: high · **Category**: copy tone
- **Feedback**: "International Lawyer in Vietnam" → "Vietnamese Lawyer for International Clients"
- **Fix applied**: Updated in `HeroSection.tsx` eyebrow, `(frontend)/layout.tsx` title template + siteName + OG alt, `(frontend)/page.tsx` metadata title + JSON-LD WebSite name, `(frontend)/about/page.tsx` metadata title, `lib/metadata.ts` LegalService name. Site-wide rebrand reflects the positioning Hien wants (Vietnamese lawyer serving foreigners — not a "foreign" lawyer).
- **Status**: **fixed**

## F-005: Identity facts update (sheet items 4, 5, 6, 21, 22, 24)

- **Severity**: high · **Category**: content (accuracy)
- **Feedback**: Years experience 15+ → 20+; Managing Partner since 2018 (explicit year); IBA membership removed → AEA (Association of European Attorneys) added; NYC dropped from jurisdictions list; education year (2008) dropped; Bar admission year (2010) dropped; "VIAC Panel since 2018" → "Counsel experience in VIAC matters"; Languages order reordered (Vietnamese first).
- **Fix applied**: Rewrote `src/data/identity.ts` as the SSOT. `yearsExperience: 15 → 20`, added `managingPartnerSince: 2018`, credentials array reduced to 4 entries without dates (Vietnam Bar Federation · VIAC Arbitration · Association of European Attorneys · HCMC University of Law), jurisdictions `['VIAC', 'SIAC', 'ICC', 'Vietnam Courts']` (no NYC), languages `['Vietnamese', 'English']`. About-page Quick Facts data-array updated to match.
- **Status**: **fixed**

## F-006: Phone/email/hours change (sheet items 2, 14, 18, 20, between 17-18)

- **Severity**: high · **Category**: contact strategy
- **Feedback**: Primary phone `+84 903 419 479` → `+84 913 479 179` site-wide (WhatsApp, CTAs, `tel:` links). Contact-page Direct Contact email `contact@apolo.com.vn` → `hien.vo@apololawyers.com` (firm-routing email kept in footer firm-info block). Office hours `8:00 AM – 5:00 PM` → `8:30 AM – 6:00 PM`. Per-office phone lists simplified (drop "Hotline" label; one direct office line + one shared call-center hotline per office). Branch phone formatted with spaces: `(+8428) 35 059 349`.
- **Fix applied**: Updated `IDENTITY.callCenterTel/Display/WhatsApp`, added `IDENTITY.directEmail`, `IDENTITY.officeHours`, restructured `IDENTITY.offices[].phones`. Swept hardcoded references in `WhatsAppButton.tsx` and `MobileMenu.tsx` to consume the constants. Contact page uses `directEmail`; About page sidebar uses `directEmail`. JSON-LD `Person.telephone` + `LegalService.telephone` + `LegalService.openingHoursSpecification` updated to 913 number + 8:30–18:00 window. Footer firm-info block keeps `IDENTITY.email` (contact@apolo.com.vn) under each office per sheet 2.0.
- **Status**: **fixed**

## F-007: Homepage 4 value-prop cards rewrite (sheet item 8)

- **Severity**: medium · **Category**: copy tone
- **Feedback**: All 4 "How I Help Foreign Clients" cards rewritten with softer, team-oriented language. "All communication in fluent English" → "Client communication is supported by an English speaking legal team". Drop firmer first-person claims ("I know how to protect").
- **Fix applied**: `HowIHelpSection.tsx` `helpItems` array replaced with sheet-8.0 revised bodies. Number badges + framer animation retained.
- **Status**: **fixed**

## F-008: Homepage Meet Your Counsel bio rewrite (sheet item 4)

- **Severity**: medium · **Category**: copy tone
- **Feedback**: Bio paragraph rewritten — "20+ years", "since 2018 Managing Partner", "English speaking legal team", soft language.
- **Fix applied**: `MeetCounsel.tsx` 2-paragraph block replaced. Floating credential card detail changed `Vietnam Bar · VIAC Arbitrator` → `Vietnam Bar · AEA Member` to match the new credentials emphasis.
- **Status**: **fixed**

## F-009: Practice Areas subtitle (sheet item 9)

- **Severity**: low · **Category**: copy tone
- **Feedback**: "across Vietnam's key practice areas" → "across key areas of Vietnamese law"
- **Fix applied**: `PracticeAreasPreview.tsx` SectionHeading subtitle.
- **Status**: **fixed**

## F-010: Add 8th practice area — FDI, Investment & Immigration (sheet item 10)

- **Severity**: high · **Category**: content (scope expansion)
- **Feedback**: Add an 8th practice area: "FDI, Investment & Immigration — Legal support for foreign investors and expatriates in Vietnam, including company setup, M&A, investment structuring, visas, TRCs and work permits."
- **Fix applied**: Added full `fdiInvestmentImmigration` entry to `src/data/practice-areas.ts` (slug `fdi-investment-immigration`) — complete with introduction, problemStatements, whoIHelp, serviceGroups, process, featuredCase, FAQ, CTA. Footer `practiceAreaLinks` updated. Homepage `PracticeAreasPreview` `practiceAreas` array updated (now 8 cards). Detail route auto-generated via `generateStaticParams` from `practiceAreasData`. Hero image reuses `practiceCorporate` until a dedicated FDI hero is generated.
- **Status**: **fixed**

## F-011: Office location copy (sheet item 11)

- **Severity**: low · **Category**: copy tone + content (post-merger District 1)
- **Feedback**: "Located in the heart of District 1, Ho Chi Minh City — Vietnam's business and legal hub" → "Located in central Ho Chi Minh City near Ben Thanh Market, our office provides a professional setting…"
- **Fix applied**: `OfficeFeature.tsx` narrative paragraph rewritten. "District 1" replaced with "central Ho Chi Minh City near Ben Thanh Market" (also resolves the post-2025-merger naming drift).
- **Status**: **fixed**

## F-012: Mr Park testimonial length (sheet item 13)

- **Severity**: low · **Category**: design (visual balance)
- **Feedback**: Mr Park's testimonial stretches the card below the other two — rewrite to roughly match the others.
- **Fix applied**: `TestimonialsSection.tsx` testimonial rewritten ~25 words → ~20 words. Matter tag shortened from "International Arbitration" to "Arbitration" to keep the bottom row visually balanced.
- **Status**: **fixed**

## F-013: About-page rewrites (sheet items 21, 22, 23, 24)

- **Severity**: medium · **Category**: copy tone
- **Feedback**: Profile, Biography ("A career built on international counsel" → "A Vietnamese Lawyer for International Clients in Vietnam"), Path to Law (drop 2012 Korean manufacturer anecdote), Quick Facts (drop dated entries).
- **Fix applied**: All 4 blocks in `(frontend)/about/page.tsx` rewritten with sheet 21/22/23/24 revised copy. First-person founder narrative ("I founded Apolo Lawyers in 2015", "I was admitted in 2010", IBA 2020) replaced with third-person, soft, team-oriented framing. Timeline section rebuilt without dates — categorical labels (Education, Bar, Practice, Since 2018, Arbitration, Memberships, International) instead. Recognition list updated (IBA → AEA).
- **Status**: **fixed**

## F-014: Credentials page restructure (sheet item 25)

- **Severity**: medium · **Category**: content (structure)
- **Feedback**: Drop "Bar Admissions" and "Active Member of HCMC Bar 2010" sections. New structure: Legal Practice Credentials · Bar & Professional Memberships · Arbitration Experience · Education & Training. No years/dates on any entry.
- **Fix applied**: `(frontend)/credentials/page.tsx` fully rewritten — new categorical structure, year column removed from card rendering. New entries: Ministry of Justice Vietnam — Lawyer Practising Certificate; Vietnam Bar Federation — Lawyer Card; HCMC Bar Association — Member; Vietnam Lawyers Association — Member; Association of European Attorneys — Member of AEA; VIAC Arbitration — Arbitration counsel experience; HCMC University of Law — Legal education; Judicial Academy of Vietnam — Professional legal training.
- **Status**: **fixed**

## F-015: Footer affiliation logos swap (sheet item 16)

- **Severity**: medium · **Category**: design (brand assets)
- **Feedback**: Replace 4 affiliation logos. Drop text labels under each. Equal sizes. Order: 1. Apolo Lawyers · 2. Liên Đoàn LS Việt Nam · 3. Association of European Attorneys (AEA) · 4. Global Law Experts (replaces CCBE). Provided URLs for #2, #3, #4.
- **Fix applied**: Downloaded new AEA EN logo (`/public/asset/logo-aea-en.png` from aeuropea.com) and Global Law Experts logo (`/public/asset/logo-global-law-experts.webp` from globallawexperts.com). LSVN already present. `Footer.tsx` `affiliations` array reduced to `{src, alt, href?}` (dropped `name` + `detail`). Rendering simplified — no text under logos. Grid spacing tightened.
- **Status**: **fixed**

## F-016: Image background mismatch (sheet items 7, 17)

- **Severity**: medium · **Category**: design (visual finish)
- **Feedback**: Several AI-generated photos / icons have a background colour that doesn't match the site background (visible halo on white cards). Hien will supply real professional photos in a later round — for now apply a fix.
- **Fix applied**: `HowIHelpSection.tsx` — added `mix-blend-multiply` to the 4 icon images. White/off-white backgrounds in the icon files now blend into the white card surface; only the colored icon foreground stays visible. Photo replacement (full-size hero / counsel portrait) is **queued** until Hien delivers professional photos.
- **Status**: **partial** (band-aid applied; awaiting Hien photo deliverables for full fix)

## F-017: Technical SEO + content consistency audit (sheet items 1, 26)

- **Severity**: medium · **Category**: SEO
- **Feedback**: Verify canonical, meta description, OG image, sitemap, robots.txt. Multi-layer AI cross-check for insights category vs description vs body vs meta consistency.
- **Audit findings (2026-05-18)**:
  - `src/app/robots.ts` — allows AI bots (GPTBot, ChatGPT-User, PerplexityBot, Claude-Web), disallows `/admin` and `/api/`. OK.
  - `src/app/sitemap.ts` — emits static pages + practice areas (auto-picks up new FDI area via `practiceAreaSlugs`) + experience cases + 20 insights (via `articleSlugs`) + 7 legal-system-guide pages. OK.
  - `(frontend)/layout.tsx` — site-wide OG default image set; title template applies to all child routes. OK.
  - `lib/metadata.ts` `generatePageMetadata()` — emits canonical via `alternates.canonical`, OG title/description/image, Twitter card. Used by all page-level metadata. OK.
  - `(frontend)/insights/[slug]/page.tsx` — per-article `generateMetadata` uses `articlesData[slug]` for title + description + canonical + OG image (article-specific). OK.
  - 20 insights articles each have a unique category, hero image (via `heroImageId` in `src/lib/images.ts`), excerpt, and slug. Cross-checked against `insights-index.ts` — categories match. OK.
- **Status**: **fixed** (no remediation needed — audit confirmed compliance with sheet items 1 + 26)

---

## Out of scope (Round 2)

- **Hien-supplied professional photos** (sheet item 17) — wait for delivery; mix-blend-multiply is the current band-aid.
- **VN spelling fixes** (sheet items 3–7) — N/A for lawyer.id.vn (EN-only site).
- **law.org.vn court-system content rules** (sheet items 19–21) — wrong site.
