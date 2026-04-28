# PRD: lawyer.id.vn -- International Lawyer Identity Hub

**Document Version**: 1.0
**Created**: 2026-04-03
**Project Owner**: Apolo Lawyers (CONG TY LUAT APOLO LAWYERS)
**Managing Partner**: Luat su Vo Thien Hien (Henry Vo)
**Status**: Phase 1

---

## 1. Project Overview

| Field | Detail |
|---|---|
| **Domain** | lawyer.id.vn |
| **Role in Ecosystem** | Professional Identity -- International-facing lawyer identity hub |
| **Language** | English only |
| **Target Audience** | Foreign nationals, international businesses, expats in Vietnam, foreign law firms seeking local counsel, embassies, international organizations, cross-border dispute parties |
| **Core Function** | International positioning of a Vietnamese lawyer for foreign clients. English-language professional profile, practice areas, experience with international matters, legal insights tailored to foreign clients navigating Vietnam's legal system. |
| **CMS** | Independent PayloadCMS v3 instance |
| **Database** | Supabase PostgreSQL |
| **Tech Stack** | Next.js 15 (App Router) + PayloadCMS v3 + Supabase PostgreSQL + Tailwind CSS v4 + GSAP + Framer Motion |
| **Content Target** | 100 SEO-optimized content pages |

### Strategic Purpose

lawyer.id.vn positions Henry Vo as the go-to international lawyer in Vietnam. Unlike vothienhien.com (which serves both markets), this site is laser-focused on English-speaking foreign clients. It:

1. Captures English-language search traffic for "lawyer in Vietnam" queries
2. Provides foreigners with the context they need to trust a Vietnamese lawyer
3. Addresses specific pain points of foreign clients (unfamiliar legal system, language barriers, different legal traditions)
4. Links directly to apololawyers.com and lawyersinvietnam.com for service delivery

---

## 2. Design Direction

### Visual Identity: "International Law Firm Partner Page"

The design should feel like the personal page of a partner at a Magic Circle or Big Law firm -- global, polished, trustworthy. Think **Baker McKenzie partner pages meets Freshfields Bruckhaus Deringer meets Singapore arbitration boutique** -- international sophistication, clean corporate lines, subtle geographic elements positioning Vietnam within the global legal landscape.

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary | Deep Blue | #0F2B5B |
| Secondary | Steel Slate | #3D5A80 |
| Accent | Bright Teal | #1A9DB0 |
| Accent Secondary | Silver | #C0C0C0 |
| Background | Clean White | #FFFFFF |
| Surface | Cool Gray | #F5F7FA |
| Text Primary | Dark Navy | #0D1B2A |
| Text Secondary | Medium Slate | #5B6B7D |
| Border | Light Blue-Gray | #D1D9E6 |
| Success/Trust | Forest Green | #2D6A4F |

### Typography

- **Headings**: DM Serif Display or Libre Baskerville -- authoritative serif with international feel
- **Body**: Source Sans 3 or DM Sans -- clean, highly readable sans-serif
- **Stats/Numbers**: Inter (tabular figures) -- professional data presentation
- **Accents**: DM Serif Display Italic -- for pull quotes and emphasis

### Mood & Tone

- International and cosmopolitan -- not "local firm trying to look foreign"
- Trustworthy, competent, approachable
- Clear communication for non-native English speakers (simple sentences, no legal jargon in headings)
- Confident without being aggressive
- Solution-oriented -- every page answers "how can this lawyer help ME?"

### Key Design Elements

- **World map hero element** -- subtle animated map with Vietnam highlighted, connecting lines to key jurisdictions
- **Trust indicators above the fold**: bar memberships, years of experience, international cases handled
- **"How I Help Foreign Clients" section** -- immediately addresses the visitor's concern
- **Jurisdiction badges** -- visual indicators of cross-border experience
- **Client journey infographic** -- "Working with a Vietnamese lawyer: what to expect"
- **Flag/language indicators** for international context without being kitschy
- **Comparison tables** -- Vietnam legal system vs. common law, side-by-side
- **Testimonial blocks** with country of origin flags (if approved)
- **FAQ accordions** addressing common foreigner concerns
- **Clean card grid** for practice areas with descriptive icons
- **Sticky header** with subtle scroll effect -- always accessible navigation and contact CTA
- **Mobile-first responsive** -- international travelers search from mobile

### Animations

- GSAP: World map connection line drawing animation on hero, stat counter animations, scroll-triggered section reveals, subtle globe rotation or map pulse
- Framer Motion: Card grid stagger animations, page transitions, FAQ accordion smooth open/close, navigation effects
- Animations should feel modern and tech-forward -- reflecting a lawyer who embraces innovation

### Reference Sites

- bakermckenzie.com/en/people -- international law firm partner pages
- freshfields.com/en-gb/contacts -- clean professional profile
- rajahtan.com -- Southeast Asian international law firm
- withfriday.com -- modern professional services branding
- stripe.com/atlas -- clean, international, trust-building design for a specific audience

---

## 3. Sitemap & Page Structure

### English-Only Site Structure

| URL | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, intro, key stats, practice areas preview, trust indicators, latest insights |
| `/about` | About Henry Vo | Full professional biography, credentials, international experience |
| `/practice-areas` | Practice Areas | Overview of all practice areas |
| `/practice-areas/civil-litigation` | Civil Litigation | Civil dispute representation for foreign clients |
| `/practice-areas/land-and-property` | Land & Property | Real estate and land disputes involving foreigners |
| `/practice-areas/family-law-and-divorce` | Family Law & Divorce | International divorce, custody, cross-border family matters |
| `/practice-areas/corporate-and-commercial` | Corporate & Commercial | FDI, joint ventures, M&A, corporate disputes |
| `/practice-areas/labor-and-employment` | Labor & Employment | Employment disputes for foreign employers/employees |
| `/practice-areas/criminal-defense` | Criminal Defense | Criminal matters involving foreign nationals |
| `/practice-areas/arbitration` | International Arbitration | Commercial arbitration with international parties |
| `/experience` | Experience | Representative international matters overview |
| `/experience/[slug]` | Case Detail | Individual case studies (anonymized) |
| `/working-with-foreign-clients` | Working with Foreign Clients | Guide: what to expect, process, communication, fees |
| `/vietnam-legal-system-guide` | Vietnam Legal System Guide | Accessible overview for foreigners |
| `/vietnam-legal-system-guide/court-system` | Court System for Foreigners | Courts explained for international clients |
| `/vietnam-legal-system-guide/civil-procedure` | Civil Procedure Overview | How lawsuits work in Vietnam |
| `/vietnam-legal-system-guide/foreign-ownership` | Foreign Ownership Rules | Property and business ownership for foreigners |
| `/vietnam-legal-system-guide/dispute-resolution` | Dispute Resolution Options | Litigation vs. arbitration vs. mediation |
| `/insights` | Legal Insights | Blog/article hub for international audience |
| `/insights/[slug]` | Insight Article | Individual articles |
| `/faq` | Frequently Asked Questions | Common questions from foreign clients |
| `/contact` | Contact | Contact form, WhatsApp, office locations, map |
| `/credentials` | Credentials & Memberships | Bar admissions, certifications, memberships |

### Utility Pages

| URL | Purpose |
|---|---|
| `/sitemap.xml` | SEO sitemap |
| `/robots.txt` | Crawl rules |
| `/privacy-policy` | Privacy policy (GDPR-aware for EU clients) |

---

## 4. SEO Strategy

### Primary Keywords

| Keyword | Search Intent | Target Page |
|---|---|---|
| lawyer in Vietnam | Commercial | / (homepage) |
| Vietnam litigation lawyer | Commercial | /practice-areas/civil-litigation |
| international lawyer Vietnam | Commercial | / and /about |
| civil litigation lawyer Vietnam | Commercial | /practice-areas/civil-litigation |
| foreign divorce lawyer Vietnam | Commercial | /practice-areas/family-law-and-divorce |
| Vietnam property lawyer foreigner | Commercial | /practice-areas/land-and-property |
| English speaking lawyer Vietnam | Commercial | / |
| Vietnam arbitration lawyer | Commercial | /practice-areas/arbitration |

### Secondary Keywords

- lawyer Ho Chi Minh City English
- Vietnam corporate lawyer for foreigners
- criminal defense lawyer Vietnam foreigner
- how to hire a lawyer in Vietnam
- Vietnam legal system explained
- land dispute lawyer Vietnam
- labor dispute lawyer Vietnam foreigner
- Vietnam law firm international clients
- best lawyer in Vietnam for foreigners
- Vietnamese lawyer who speaks English

### Schema.org Markup

| Page Type | Schema Types |
|---|---|
| Homepage | WebSite, Person (Attorney), LegalService, LocalBusiness |
| About page | Person, Attorney, ProfilePage |
| Practice area pages | LegalService, Service, BreadcrumbList |
| Case studies | Article, CreativeWork |
| Legal guide pages | Article, HowTo (where applicable), FAQPage |
| Insights | Article, BlogPosting, Person (author) |
| FAQ page | FAQPage, Question, Answer |
| Contact page | ContactPage, Person, PostalAddress, LocalBusiness |
| All pages | BreadcrumbList |

### Technical SEO

- English-only: no hreflang needed (but consider hreflang pointing to vothienhien.com/vi/ as Vietnamese alternate)
- Canonical URLs for all pages
- Rich snippets for FAQ and HowTo content
- Local business schema with both office addresses
- Google Business Profile linked
- Open Graph with professional imagery
- Target featured snippets for "how to" queries about Vietnam legal system

### Geographic SEO

- Target: "lawyer in Vietnam" (country-level)
- Secondary: "lawyer Ho Chi Minh City" (city-level)
- International reach: target from US, UK, Australia, Singapore, Japan, Korea search markets
- Content addressing specific nationalities: "American getting divorced in Vietnam", "Korean company labor dispute Vietnam"

---

## 5. Content Plan for 100 SEO Pages

### Content Distribution

| Category | Pages |
|---|---|
| Core pages (home, about, contact, credentials) | 5 |
| Practice Areas | 8 |
| Representative Experience / Case Studies | 12 |
| Working with Foreign Clients guide | 5 |
| Vietnam Legal System Guide | 8 |
| Legal Insights (articles) | 40 |
| FAQ pages (main + sub-topic FAQs) | 8 |
| Nationality-specific guides | 8 |
| Hub/Index pages | 6 |
| **Total** | **100** |

### Practice Areas (8 pages)

1. Civil Litigation in Vietnam: What Foreign Clients Need to Know
2. Land and Property Disputes for Foreign Investors
3. International Divorce and Family Law in Vietnam
4. Corporate and Commercial Law for Foreign-Invested Enterprises
5. Labor and Employment Disputes: A Guide for Foreign Employers
6. Criminal Defense for Foreign Nationals in Vietnam
7. International Commercial Arbitration in Vietnam
8. Practice Areas Overview (hub page)

### Representative Experience (12 pages)

9. Representing a European Company in a $2M Contract Dispute
10. International Divorce: Australian National and Vietnamese Spouse
11. Land Use Rights Dispute for Foreign-Invested Real Estate Project
12. Criminal Defense of Foreign National in Ho Chi Minh City
13. Joint Venture Dispute Resolution Between Vietnamese and Korean Partners
14. Employment Termination Dispute for Japanese Manufacturer
15. Cross-Border Inheritance Matter Involving US and Vietnam
16. VIAC Arbitration for International Trade Dispute
17. Protecting Foreign Investor Rights in Corporate Governance Dispute
18. Complex Multi-Jurisdictional Divorce with Child Custody
19. Construction Dispute Involving Foreign Contractor
20. Franchise Agreement Dispute for International Brand

### Working with Foreign Clients (5 pages)

21. What to Expect When Hiring a Lawyer in Vietnam
22. How Legal Fees Work in Vietnam
23. Communication and Language: Working Across Cultures
24. Timeline: How Long Do Legal Matters Take in Vietnam?
25. Your First Consultation: How to Prepare

### Vietnam Legal System Guide (8 pages)

26. Vietnam Legal System: A Plain-English Overview
27. Understanding Vietnam's Court System
28. How Civil Lawsuits Work in Vietnam
29. Foreign Ownership of Property in Vietnam
30. Dispute Resolution in Vietnam: Your Options
31. Vietnam Contract Law: Key Principles for Foreign Businesses
32. Vietnam Labor Law: What Foreign Employers Must Know
33. Vietnam Family Law: Marriage, Divorce, and Child Custody

### Legal Insights -- Articles (40 pages)

**For Foreign Investors (10 articles)**:
34. Top 5 Legal Risks for Foreign Investors in Vietnam (2026)
35. Due Diligence Checklist for Vietnam Market Entry
36. Understanding Vietnam's Foreign Investment Law Changes
37. How to Protect Your IP in Vietnam
38. Navigating Vietnam's Tax System as a Foreign Business
39. Vietnam's New Data Privacy Law: What Foreign Companies Need to Know
40. Setting Up a Representative Office vs. a Subsidiary in Vietnam
41. Vietnam Free Trade Agreements: Opportunities for Foreign Businesses
42. Resolving Commercial Disputes in Vietnam: Practical Steps
43. Exit Strategies for Foreign Investors in Vietnam

**For Expats and Individuals (10 articles)**:
44. Getting Divorced in Vietnam as a Foreigner: Complete Guide
45. Buying Property in Vietnam as a Foreigner: What You Can and Cannot Do
46. What to Do If Arrested in Vietnam as a Foreign National
47. Prenuptial Agreements in Vietnam: Are They Enforceable?
48. Inheritance Law in Vietnam for Foreign Nationals
49. Child Custody Across Borders: Vietnam and International Law
50. Work Permit Disputes in Vietnam
51. Traffic Accidents in Vietnam: Legal Rights for Foreigners
52. Landlord-Tenant Disputes in Vietnam
53. Consumer Protection for Foreigners in Vietnam

**For Foreign Law Firms (10 articles)**:
54. Instructing Local Counsel in Vietnam: A Guide for Foreign Law Firms
55. Vietnam Court System: Key Differences from Common Law Jurisdictions
56. Enforcement of Foreign Judgments in Vietnam
57. Enforcement of Foreign Arbitral Awards in Vietnam
58. Legal Professional Privilege in Vietnam
59. Discovery and Disclosure in Vietnamese Litigation
60. Expert Witnesses in Vietnamese Courts
61. Interim and Conservatory Measures in Vietnam
62. Cross-Border Service of Process Involving Vietnam
63. Vietnam's Approach to International Commercial Arbitration

**Industry-Specific (10 articles)**:
64. Legal Issues in Vietnam Real Estate Development for Foreign Investors
65. Vietnam Manufacturing: Employment Law Essentials
66. Restaurant and Hospitality Business Legal Requirements in Vietnam
67. E-Commerce Legal Framework in Vietnam for Foreign Companies
68. Vietnam Fintech Regulations: What Foreign Companies Should Know
69. Construction Law in Vietnam: A Guide for International Contractors
70. Vietnam Healthcare Regulations for Foreign Investment
71. Education Sector Legal Requirements in Vietnam
72. Tourism and Travel Business Legal Compliance in Vietnam
73. Vietnam Agricultural Land: Legal Framework for Foreign Investment

### FAQ Pages (8 pages)

74. General FAQ: Hiring a Lawyer in Vietnam
75. FAQ: Foreign Divorce in Vietnam
76. FAQ: Property Rights for Foreigners in Vietnam
77. FAQ: Starting a Business in Vietnam as a Foreigner
78. FAQ: Criminal Law and Foreign Nationals in Vietnam
79. FAQ: Employment Law for Foreign Workers in Vietnam
80. FAQ: Vietnam Visa and Legal Status Issues
81. FAQ: Costs and Timeline of Legal Proceedings in Vietnam

### Nationality-Specific Guides (8 pages)

82. Legal Guide for Americans in Vietnam
83. Legal Guide for Australians in Vietnam
84. Legal Guide for British Nationals in Vietnam
85. Legal Guide for Korean Nationals in Vietnam
86. Legal Guide for Japanese Nationals in Vietnam
87. Legal Guide for Chinese Nationals in Vietnam
88. Legal Guide for European Union Citizens in Vietnam
89. Legal Guide for Singaporean and ASEAN Nationals in Vietnam

### Hub/Index Pages (6 pages)

90-95. Category index pages for Practice Areas, Experience, Insights, Guides, FAQ, Nationality Guides

### Content Types

- **Core Pages** (1,500-3,000 words): Profile, credentials, "working with" guide
- **Practice Area Pages** (2,000-3,000 words): Comprehensive with FAQ section
- **Case Studies** (1,000-1,500 words): Challenge/approach/outcome format
- **Legal Insights** (1,500-2,500 words): Practical, actionable, SEO-optimized
- **FAQ Pages** (1,500-2,000 words): Schema.org FAQ markup, 10-15 Q&As each
- **Nationality Guides** (2,000-3,000 words): Country-specific legal considerations
- **System Guides** (2,000-3,000 words): Educational, accessible, jargon-free

---

## 6. Contact Strategy

### Approach: Moderate / International-Friendly

Contact should be frictionless for international clients across time zones. Multiple channels for different preferences.

| Element | Included | Notes |
|---|---|---|
| Footer contact info | Yes | Both office addresses, phone, email |
| Contact page form | Yes | Comprehensive: name, email, phone, country, matter type, description |
| Phone number | Yes | On contact page with international format (+84 903 419 479) |
| WhatsApp | Yes | Prominent -- international clients' preferred channel |
| Email link | Yes | Direct mailto link |
| Floating CTA | No | Per specification |
| Zalo | No | English-only international site -- Zalo not relevant |
| "Schedule a Call" CTA | Yes | Subtle button in header and practice area pages |
| Time zone indicator | Yes | "Office hours: 8:00 - 17:00 (GMT+7, Indochina Time)" |

### Contact Page Design

- Professional layout with portrait
- Both office addresses with Google Maps embed
- International phone format
- WhatsApp click-to-chat button (prominent)
- Email address displayed
- Contact form with country dropdown and matter type selector
- "We respond within 24 hours" guarantee
- Time zone information
- Languages spoken: Vietnamese, English

### Contact Information Displayed

```
Henry Vo (Vo Thien Hien)
Managing Partner, Apolo Lawyers

Head Office:
108 Tran Dinh Xu, Nguyen Cu Trinh Ward, District 1
Ho Chi Minh City, Vietnam

Branch Office:
K&M Tower, 33 Ung Van Khiem, Ward 25, Binh Thanh District
Ho Chi Minh City, Vietnam

Phone: +84 903 419 479
Email: contact@apolo.com.vn
WhatsApp: +84 903 419 479

Office Hours: Monday - Friday, 8:00 AM - 5:00 PM (GMT+7)
```

---

## 7. CMS Collections (PayloadCMS v3)

### Collections

| Collection | Purpose | Key Fields |
|---|---|---|
| `pages` | Static pages (home, about, contact, etc.) | title, slug, content (rich text), seo, heroImage, layout (flexible blocks) |
| `practice-areas` | Practice area descriptions | title, slug, description, icon, featuredImage, keyServices (array), relatedExperience (relation), faq (array of Q&A), seo |
| `experience` | Representative matters | title, slug, practiceArea (relation), country (client origin), challenge, approach, outcome, year, matterValue (range), seo |
| `insights` | Legal articles | title, slug, content (rich text), excerpt, publishedDate, category, tags, practiceArea (relation), targetAudience (investor/expat/lawfirm/industry), featuredImage, seo |
| `faq-pages` | FAQ compilations | title, slug, topic, questions (array: question, answer), seo |
| `nationality-guides` | Country-specific guides | title, slug, country, flagIcon, content (rich text), keyTopics (array), relatedInsights (relation), seo |
| `legal-guides` | Vietnam legal system guides | title, slug, content (rich text), relatedGuides (relation), seo |
| `credentials` | Qualifications and memberships | type, title, institution, year, description |
| `media` | Images and files | file, alt_text, caption |
| `contact-submissions` | Form submissions | name, email, phone, country, matterType, message, submittedAt, status |
| `testimonials` | Client testimonials (if approved) | quote, clientName, clientCountry, matterType, approved (boolean) |

### Globals

| Global | Purpose |
|---|---|
| `site-settings` | Site config, default SEO, analytics, office hours |
| `profile` | Core profile data, stats, tagline |
| `footer` | Footer content, ecosystem links |
| `header` | Navigation, contact CTA config |

---

## 8. AI Image Asset List (Nano Banana 2)

### Hero & Primary Images

| ID | Prompt | Usage | Size |
|---|---|---|---|
| IMG-001 | "Clean modern world map with Southeast Asia and Vietnam highlighted in teal blue, subtle connecting lines from Vietnam to major cities (New York, London, Tokyo, Sydney, Singapore), dark navy background, professional infographic style, flat design" | Homepage hero background | 1920x1080 |
| IMG-002 | "Professional male Vietnamese lawyer in dark navy suit, confident standing pose, modern international law office setting, clean white and blue interior, warm natural light, global business atmosphere, 50mm portrait lens feel" | About/Profile hero (placeholder for real photo) | 1600x1000 |
| IMG-003 | "Aerial view of Ho Chi Minh City business district, modern skyscrapers, Saigon River, clear day, vibrant but professional color grading, showing Vietnam as a modern business destination" | Location/context image | 1920x800 |

### Practice Area Images

| ID | Prompt | Usage | Size |
|---|---|---|---|
| IMG-004 | "Modern courtroom interior, clean lines, professional atmosphere, abstract representation with blue and white tones, no specific country identifiers, universal justice concept" | Civil Litigation | 1200x800 |
| IMG-005 | "Aerial view of modern Vietnamese urban development, apartment towers and commercial buildings, clean professional photography, showing real estate investment potential" | Land & Property | 1200x800 |
| IMG-006 | "International family -- diverse, warm, seated on modern furniture, professional studio portrait feel, soft natural lighting, suggesting family unity and legal protection" | Family Law | 1200x800 |
| IMG-007 | "Modern glass corporate office building exterior in Ho Chi Minh City, sleek architecture, blue sky, international business district atmosphere" | Corporate & Commercial | 1200x800 |
| IMG-008 | "Professional business meeting between Western and Vietnamese professionals, handshake across conference table, modern office, warm lighting, cross-cultural collaboration" | Labor & Employment | 1200x800 |
| IMG-009 | "Dramatic exterior of Vietnam courthouse with modern architectural elements, low angle, deep blue sky, institutional authority" | Criminal Defense | 1200x800 |
| IMG-010 | "Modern arbitration hearing room, long table with microphones, neutral tones, international dispute resolution setting, clean and professional" | Arbitration | 1200x800 |

### Nationality Guide Images

| ID | Prompt | Usage | Size |
|---|---|---|---|
| IMG-011 | "Collage-style flat illustration: American flag elements subtly blended with Vietnamese architectural landmarks, modern design, blue-red-white-yellow color merge, professional" | American guide | 800x600 |
| IMG-012 | "Collage-style flat illustration: Australian elements (harbor bridge silhouette) blended with Vietnamese motifs, modern design, professional cross-cultural" | Australian guide | 800x600 |
| IMG-013 | "Collage-style flat illustration: British elements (Big Ben silhouette) blended with Vietnamese landmarks (Bitexco Tower), modern professional design" | British guide | 800x600 |
| IMG-014 | "Collage-style flat illustration: Korean elements (Namsan Tower) blended with Vietnamese landmarks, modern K-V cultural bridge, professional" | Korean guide | 800x600 |
| IMG-015 | "Collage-style flat illustration: Japanese elements (torii gate) blended with Vietnamese landmarks, modern J-V cultural bridge, professional" | Japanese guide | 800x600 |

### Supporting & Decorative Images

| ID | Prompt | Usage | Size |
|---|---|---|---|
| IMG-016 | "Abstract geometric pattern suggesting global network connections, nodes and lines, deep blue and teal on white, modern data visualization aesthetic, suitable as section background" | Background pattern | 1920x1080 |
| IMG-017 | "Clean infographic-style illustration of Vietnam's court system hierarchy, boxes connected by lines, blue and white color scheme, English labels, modern flat design" | Legal system guide illustration | 1200x800 |
| IMG-018 | "Professional desk flat lay: international passport, legal documents, premium pen, world clock showing multiple time zones, business cards, top-down view, clean white surface" | Working with foreign clients | 1200x800 |
| IMG-019 | "Vietnam map outline with major cities marked (Hanoi, HCMC, Da Nang), modern cartographic style, blue tones, showing office locations with pin markers" | Contact page map illustration | 1200x800 |
| IMG-020 | "Abstract teal and navy gradient background with subtle geometric mesh pattern, modern corporate feel, suitable as card background or section divider" | Decorative background | 1920x600 |

**Note**: IMG-002 is a placeholder. Real professional photographs of Henry Vo should replace all portrait placeholders. Nano Banana 2 generates layout comps; final production uses actual photography.

---

## 9. Internal Linking Strategy

### Outbound Links (lawyer.id.vn links TO)

| Target Site | Link Context | Link Type |
|---|---|---|
| **apololawyers.com** | "Visit our firm" -- footer and about page | Footer, contextual |
| **lawyersinvietnam.com** | "Find lawyers for your matter" -- practice areas and insights | Contextual CTA |
| **vothienhien.com** | "Full profile in Vietnamese" -- about page | Language alternate link |

### Inbound Links (sites linking TO lawyer.id.vn)

| Source Site | Link Context |
|---|---|
| **vothienhien.com** | "International profile" links from EN pages |
| **i-lawyers.net** | International lawyer directory listing |

### Internal Cross-Linking Rules

1. Every practice area page links to related experience/case studies
2. Every case study links back to relevant practice area
3. Insights articles link to relevant practice areas and guides
4. Nationality guides link to relevant practice areas and insights
5. Legal system guides link to practice areas ("need help with this? see our practice area")
6. FAQ pages link to detailed guide and insight articles
7. Contact page is linked from every practice area, case study, and guide page
8. Homepage features 3 latest insights and 3 highlighted practice areas
9. "Working with Foreign Clients" page linked from all practice area pages

---

## 10. Conversion Funnel

### Primary Conversion: Foreign Visitor to Consultation Request

```
Stage 1: Discovery (International Search)
  Foreign client searches "lawyer in Vietnam" or "foreign divorce lawyer Vietnam"
  --> Lands on lawyer.id.vn homepage or practice area page
  --> Immediately sees: English-fluent, internationally experienced, professional

Stage 2: Trust Building
  --> Reviews practice area relevant to their need
  --> Sees experience with clients from their country (nationality guides)
  --> Reads case study similar to their situation
  --> Checks credentials and professional background

Stage 3: Education
  --> Reads "Working with Foreign Clients" -- understands the process
  --> Reviews Vietnam Legal System Guide -- understands context
  --> Reads relevant FAQ -- common concerns addressed
  --> Total engagement: 8-15 minutes, 4-6 pages

Stage 4: Contact
  --> Clicks WhatsApp (immediate, across time zones)
  --> OR fills contact form with matter description
  --> OR sends direct email
  --> Receives response within 24 hours with next steps
```

### Secondary Conversion: Referral Source

```
Foreign law firm searches "local counsel Vietnam"
  --> Lands on insights article or practice area
  --> Reviews credentials and international experience
  --> Reads "Instructing Local Counsel in Vietnam" guide
  --> Contacts for referral partnership
```

### Conversion Optimization Elements

| Element | Location | Purpose |
|---|---|---|
| Trust indicators | Homepage above fold | Immediate credibility (years, cases, countries served) |
| WhatsApp button | Contact page + sticky header CTA | Low friction for international clients |
| Nationality flags in experience | Case studies | "Someone from my country used this lawyer" |
| Process transparency | "Working with Foreign Clients" | Reduces anxiety about hiring a foreign lawyer |
| Fee transparency | FAQ and guide pages | Addresses cost concerns upfront |
| Time zone display | Contact page | Shows awareness of international client needs |
| Response time guarantee | Contact page | Sets expectations, builds confidence |
| Legal system guides | Educational content | Demonstrates expertise and builds trust |

### KPIs

| Metric | Target (12 months) |
|---|---|
| Monthly organic sessions | 3,000+ |
| Contact form submissions | 20+ per month |
| WhatsApp inquiries | 15+ per month |
| Average pages per session | 4+ |
| Average session duration | 5+ minutes |
| Bounce rate | < 50% |
| International traffic share | 60%+ (non-Vietnam) |
| Top traffic countries | US, Australia, UK, Korea, Japan, Singapore |
| Referral clicks to apololawyers.com | 150+ monthly |
| Backlinks from international legal directories | 20+ referring domains |

### Lead Qualification

- Track country of origin via form and analytics
- Matter type distribution to inform content strategy
- Response time tracking (target: < 12 hours for international leads)
- Lead-to-client conversion rate target: 15%+
- Average matter value tracking for ROI calculation

---

## Appendix: Technical Notes

### Internationalization Considerations

- English-only site: no i18n routing needed
- However, implement hreflang tag pointing to vothienhien.com/vi/ as Vietnamese alternate
- Date formats: international (DD Month YYYY)
- Currency references: USD primary, VND secondary with conversion note
- Phone numbers: always international format (+84...)
- Time zone: always display GMT+7 offset

### Geographic Targeting

- Google Search Console: international targeting (no specific country)
- Server location: consider CDN with nodes in US, EU, Asia for fast load globally
- Image optimization critical for international visitors on varying connections

### Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- Core Web Vitals: All green
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.0s
- Target fast load from US West Coast, London, Tokyo, Sydney

### Privacy & Compliance

- GDPR-compliant cookie consent (EU visitors)
- Privacy policy addressing international data handling
- Contact form data stored in Supabase with encryption
- No tracking without consent for EU visitors

### Contact Form Technical Details

- Country dropdown with auto-detection suggestion (via IP geolocation)
- Matter type categories: Civil Dispute, Property, Family/Divorce, Corporate, Criminal, Employment, Arbitration, Other
- File upload option for relevant documents
- reCAPTCHA v3 (invisible)
- Rate limiting: 3 submissions per IP per hour
- Auto-response email with expected response timeline
- Internal notification to designated email and WhatsApp
