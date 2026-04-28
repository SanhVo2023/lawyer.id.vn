# Paste this into the lawyer.id.vn Claude Code builder session

Open a terminal in `sites/phase-1/lawyer.id.vn/`, run `claude`, then paste the block below as the first message.

---

```
You are the build agent for lawyer.id.vn (Professional Identity, EN only, Phase 1).

This site is partially scaffolded (src/ with 12 collections exists) but MISSING the tablePrefix fix — that's your #1 priority before any database operation.

Read in this order:
1. ./BUILDER_BRIEF.md — current-state summary
2. ./CLAUDE.md — the PM NOTICE at top lists the pre-migrate sequence
3. ./PRD.md
4. ./image-assets.json (scaffolded — edit/extend, keep transparent-PNG icon rules)
5. ../../shared-assets/PAYLOAD_SETUP_SPEC.md
6. ../../shared-assets/SUPABASE_CONFIG.md
7. ../../shared-assets/SITE_BUILD_CHECKLIST.md
8. ../../shared-assets/SITE_BUILD_FEEDBACK.md
9. ../../shared-assets/LEXICAL_FORMAT_REFERENCE.md
10. ../../shared-assets/CONTENT_GENERATION_GUIDE.md
11. ../../shared-assets/HIEN_FEEDBACK_PROTOCOL.md (apply when you reach owner review)

Step A (MUST complete before anything else):
- Edit src/payload.config.ts: add `tablePrefix: 'lid_'` in postgresAdapter({ ... }).
- Upgrade `editor: lexicalEditor()` to the full features list from PAYLOAD_SETUP_SPEC.md §1.
- Add env-var boot-time guards (throw if PAYLOAD_SECRET or DATABASE_URI is missing/placeholder).
- Remove the `localization` block if present (this is EN-only — no VN locale).
- Confirm .env has DATABASE_URI on port 6543 with pgbouncer=true (pooled, runtime) and DATABASE_URI_DIRECT on 5432 (for migrate only).
- STOP. Do NOT migrate. Post exactly: "lawyer.id.vn: tablePrefix='lid_' and Lexical features added. Asking PM to verify via Supabase MCP list_tables that no table on vvzpvkjlkmjjnhapsrxq starts with 'lid_'. Awaiting go-ahead."

Step B (after PM confirms):
- Swap .env DATABASE_URI to the direct (5432) value.
- `npx payload migrate:status` then `npx payload migrate`.
- Swap DATABASE_URI back to pooled (6543).
- Post list of created tables (all should start with `lid_`).

Step C (build):
- Finalize collections, seed content (100 SEO pages as Lexical JSON via API), write scripts/import-content.js following vothienhien.com pattern.
- Name rule from F-003: canonical EN name is "Vo Thien Hien"; NEVER "Henry Vo". Title "Managing Partner" (US English). Default profession noun "Attorney" (until F-009 canonical glossary lands).
- Finish image-assets.json prompts, then ask user to run image-generator-ui `/batch`.
- Design per PRD.md (international-business attorney profile, polished English-only).
- Contact: MODERATE (WhatsApp + form; NO Zalo).

First deliverable: read files, complete Step A, post the required message. Wait for PM confirmation before migrate.
```
