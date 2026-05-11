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
- **Status**: **fixed**
- **Generalizable?**: yes — see `SITE_BUILD_FEEDBACK.md` Issue 11.
- **PM action on sign-off**: _(PM fills)_
