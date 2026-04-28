import type { ImageId } from '@/lib/images'

export interface ArticleSection {
  id: string
  heading: string
  body: string[]
  pullQuote?: string
}

export interface ArticleData {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  heroImageId: ImageId
  readTime: string
  tableOfContents: { id: string; label: string }[]
  intro: string[]
  sections: ArticleSection[]
  keyTakeaways: string[]
  practicalChecklist?: { title: string; items: string[] }
  authorNote: string
  relatedArticles: string[]
  relatedPracticeAreas: string[]
}

// ============================================================================
// 1. TOP 5 LEGAL RISKS FOR FOREIGN INVESTORS
// ============================================================================

const topLegalRisks: ArticleData = {
  slug: 'top-legal-risks-foreign-investors-vietnam',
  title: 'Top 5 Legal Risks for Foreign Investors in Vietnam (2026)',
  date: '2026-03-15',
  category: 'For Foreign Investors',
  excerpt:
    'Understanding the key legal risks before entering the Vietnamese market can save your business millions — from sectoral access to capital structuring to dispute resolution.',
  heroImageId: 'articleHeroInvestor',
  readTime: '12 min',
  tableOfContents: [
    { id: 'risk-1', label: '1. Choosing the wrong investment vehicle' },
    { id: 'risk-2', label: '2. Sectoral access and conditional businesses' },
    { id: 'risk-3', label: '3. Charter capital and capital adequacy' },
    { id: 'risk-4', label: '4. Joint-venture structuring and governance' },
    { id: 'risk-5', label: '5. Contract and dispute-resolution clauses' },
    { id: 'mitigations', label: 'Building protective layers' },
    { id: 'practical', label: 'Practical due-diligence checklist' },
  ],
  intro: [
    "Vietnam continues to attract record foreign direct investment, particularly in manufacturing, technology, and consumer products. The country offers a young workforce, expanding domestic consumption, and trade-agreement preferences (EVFTA, CPTPP, RCEP) that few peer economies can match. The flip side is a regulatory environment that rewards careful local navigation — and punishes the casual or under-prepared investor.",
    "After more than a decade representing foreign companies entering, operating, scaling, and exiting Vietnamese investments, certain mistakes recur. The five risks below are the ones that, in my experience, most often turn promising investments into expensive lessons. Each is preventable; each requires attention at the right moment, which is almost always earlier than first-time investors expect.",
  ],
  sections: [
    {
      id: 'risk-1',
      heading: '1. Choosing the wrong investment vehicle',
      body: [
        "Foreign investors in Vietnam can establish a 100% foreign-owned LLC or joint-stock company, form a joint venture with a Vietnamese partner, register a representative office (no profit-making activity), or open a branch (limited to specific sectors). Each has different capabilities, liability profiles, capital requirements, and tax consequences.",
        "The most common error is choosing a representative office for what should have been an LLC. Representative offices cannot conduct profit-making activities — they exist to support the parent's market research, liaison, and promotion. Many investors discover this only when they begin invoicing local customers and receive guidance (or a fine) from the tax authorities. Conversion from rep-office to LLC is procedural but adds three to six months and modest cost; it is not a path to take by accident.",
        "The reverse error — over-engineering with an LLC when a rep-office would have served — is less serious but still costly. LLCs come with full corporate-housekeeping obligations: annual filings, board and shareholder governance, tax reporting, and the regulatory attention that follows operating revenue.",
        "The right vehicle depends on five questions: Will you generate revenue in Vietnam? Do you need to import or export goods directly? Will you employ Vietnamese staff under your direct entity? Will you sign customer contracts directly? What is your time horizon? Honest answers to these questions usually point clearly to one option.",
      ],
    },
    {
      id: 'risk-2',
      heading: '2. Sectoral access and conditional businesses',
      body: [
        "Vietnam maintains a List of Conditional Business Lines for Foreign Investors. Some sectors are closed (specific defence and security activities). Some have foreign-ownership caps (banking around 30%, telecommunications around 49% in many sub-sectors, certain education and healthcare activities). Some require sub-sector approvals beyond the general investment certificate (real-estate trading, retail, transportation services).",
        "The risk is twofold. First, you may discover at the licensing stage that your intended sector requires a foreign-investment cap that your structure does not respect. Restructuring at this point — bringing in a Vietnamese co-investor, accepting a minority stake, abandoning the project — is expensive and can compromise commercial logic. Second, sectoral conditions change. A sector that was 100% open may be reclassified as conditional; a sector that was 49%-capped may be opened to majority foreign ownership. Investors who locked in structure based on conditions in effect at investment can find themselves over- or under-capitalised against the new framework.",
        "I provide a sectoral-access memorandum as part of every market-entry engagement. The memorandum analyses your specific intended activities (often spanning multiple sub-sectors), identifies any conditions, and recommends structures that respect them while preserving commercial flexibility. This work is best done before any capital commitment — including any deposit on premises or hiring of senior staff.",
      ],
      pullQuote:
        "Vietnamese sectoral conditions are the silent project-killer for foreign investors. They are entirely visible at due diligence — and entirely missable if you don't know to look.",
    },
    {
      id: 'risk-3',
      heading: '3. Charter capital and capital adequacy',
      body: [
        "Vietnamese law requires foreign-invested enterprises to declare a charter capital figure that is sufficient for the proposed operations. Some sectors specify minimum amounts (real-estate trading, certain financial services). Most sectors do not — but the licensing authorities still scrutinise the declared capital against the business plan and may refuse a licence if the capital appears inadequate.",
        "Two errors recur. First, declaring too low a capital figure to minimise upfront commitment. The licence may issue, but the business runs short of working capital within the first year, requiring a charter-capital increase that takes another two to four months and is administratively painful. Worse, banks and counterparties read the declared capital as a measure of corporate substance — too-low capital signals weakness and limits credit and contracting opportunities.",
        "Second, declaring capital but failing to contribute it on time. Charter capital must be contributed within 90 days of issuance of the Enterprise Registration Certificate (ERC). Late contribution exposes the company to administrative penalties and, more seriously, to questions about the validity of corporate actions taken before contribution. I have seen contracts and even share issuances later challenged on the basis of capital-adequacy defects.",
        "Best practice: declare a charter capital figure that comfortably exceeds your first-year operating budget and any sector minimum, contribute it on schedule from the parent or the founders, document the contribution carefully (bank receipts, foreign-exchange-control compliance), and reserve increases for genuine expansion rather than as a fix for under-capitalisation.",
      ],
    },
    {
      id: 'risk-4',
      heading: '4. Joint-venture structuring and governance',
      body: [
        "Joint ventures with Vietnamese partners can be powerful: local market knowledge, regulatory relationships, distribution access, and shared risk. They can also be the single most expensive form of investment to unwind when they go wrong. JVs that look balanced on paper often fail under stress because the documentation does not anticipate the moments when the partners' interests diverge.",
        "The standard problem areas: deadlock (50/50 JVs with no resolution mechanism), related-party transactions (one partner's affiliated company buying or selling at non-market terms), management control (which side appoints the CEO and key officers, and what veto rights does the other side have), and exit (drag-along, tag-along, put-and-call options at agreed valuation methodologies).",
        "I have arbitrated and litigated JV disputes for ten years. Almost without exception, the outcome correlates with the quality of the original shareholders' agreement and investment agreement. A well-drafted document that takes governance seriously — supermajority requirements for major decisions, related-party transaction approvals, clear deadlock-breaker mechanisms, defined exit terms — prevents disputes from arising and provides clear remedies when they do. A poorly drafted document leaves both partners arguing about ambiguity for years.",
        "Three drafting principles I recommend: (1) Build forensic-audit rights into the documentation from day one — annual independent financial review, with right of access to underlying records. (2) Treat the deadlock and exit provisions as the most important clauses, not the least. (3) Include an arbitration clause with a clear seat (VIAC or SIAC), language (English), and process — and avoid bare references to 'Vietnamese court' that can complicate cross-border enforcement.",
      ],
    },
    {
      id: 'risk-5',
      heading: '5. Contract and dispute-resolution clauses',
      body: [
        "Most cross-border commercial disputes connected to Vietnam reflect contract-drafting choices made years earlier. The single most consequential choice is the dispute-resolution clause: forum, language, governing law, and arbitral institution if applicable. A weak or missing dispute clause is a permanent vulnerability; a strong clause is permanent insurance.",
        "For international commercial contracts with Vietnamese counterparties, I recommend (in nearly all cases): arbitration over court litigation; an institutional procedure (VIAC for matters with a strong Vietnamese centre of gravity, SIAC or ICC for matters of more international character or higher value); English language; a clear seat (Ho Chi Minh City for VIAC; Singapore for SIAC; Paris or another agreed seat for ICC); and Vietnamese law as governing law (with limited exceptions where another law genuinely fits the substance better).",
        "Beyond the dispute clause, several substantive provisions reward careful drafting under Vietnamese law: payment terms that match Vietnamese banking and foreign-exchange rules; pricing in appropriate currency (USD or VND, with clear conversion mechanisms); termination grounds and consequences (Vietnamese law tends to require specific termination grounds and may not enforce broadly worded termination-for-convenience clauses); representations and warranties (Vietnamese law has different concepts than common law — translate carefully); and notice provisions specifying language, recipient, and method of delivery.",
        "Many of the contracts I review are templates lifted from a foreign jurisdiction with a Vietnamese-law governing-law clause superimposed. The combination produces unenforceable provisions and avoidable disputes. A Vietnamese-counsel review at contract drafting — not after a problem has arisen — is among the highest-value investments any foreign business can make.",
      ],
      pullQuote:
        "A Vietnamese-counsel review at contract drafting — before signature — is among the highest-value investments any foreign business can make.",
    },
    {
      id: 'mitigations',
      heading: 'Building protective layers',
      body: [
        "No single measure prevents every Vietnamese investment risk. But layered protections cumulate to substantial security:",
        "**Bilateral Investment Treaty (BIT) structuring.** Vietnam has BITs with over 60 countries. Investments structured through a jurisdiction whose BIT covers your investor profile receive treaty-level protections — national treatment, fair-and-equitable-treatment standards, and access to international arbitration in case of state-related dispute. For larger investments or politically sensitive sectors, BIT-compliant structuring is a meaningful protective layer.",
        "**Independent directors and governance professionals.** For LLCs and JSCs of meaningful size, appointing one or two independent directors (Vietnamese professionals with relevant experience) provides a check on management and a credible bridge to local regulatory and counterparty relationships. Many disputes I have seen would have been pre-empted by a board that included an independent voice.",
        "**Annual legal audits.** For investments above a threshold (I usually recommend USD 5M), an annual legal-audit covering corporate, regulatory, contractual, and tax compliance is highly worthwhile. The audit detects issues at a stage when they are still cheap to fix — before they become disputes, regulatory enforcement actions, or M&A diligence findings.",
        "**Documented decision trail.** Keep clean board minutes, shareholder resolutions, and contemporaneous documentation of major decisions. This is not glamorous and is exactly what protects long-term value if the investment ever needs to be sold, financed, restructured, or defended.",
      ],
    },
    {
      id: 'practical',
      heading: 'Practical due-diligence checklist',
      body: [
        "The checklist below summarises the key pre-investment review items. It is not exhaustive, but it covers the ground where most preventable mistakes are made.",
        "Use this as a starting framework when scoping pre-investment legal work. Each item below typically requires one to two weeks of focused work; the full review for a meaningful investment is six to ten weeks. The cost is a small fraction of the investment and a tiny fraction of the cost of post-investment remediation.",
      ],
    },
  ],
  keyTakeaways: [
    'Choose your investment vehicle (LLC, JSC, rep-office, branch) based on real revenue and operating intentions, not theoretical flexibility.',
    'Verify sectoral access conditions before any capital commitment — they are visible in advance and can structurally derail an investment.',
    'Declare adequate charter capital, contribute on schedule, and document contributions carefully.',
    'Treat JV documentation — especially deadlock, related-party, and exit clauses — as load-bearing structure, not boilerplate.',
    'Draft dispute-resolution clauses with care: arbitration over court, institutional procedure, English language, clear seat.',
    'Add protective layers: BIT-compliant structuring, independent governance, annual legal audits, clean decision trails.',
  ],
  practicalChecklist: {
    title: 'Pre-Investment Legal Due Diligence',
    items: [
      'Sectoral-access memorandum: identify conditions, caps, and approval requirements for each intended business activity',
      'Investment vehicle analysis: LLC vs JSC vs rep-office vs branch comparison for the specific business plan',
      'Charter capital adequacy review: declared amount vs first-year operating budget and sector minimums',
      'Tax structure review: corporate income tax, VAT, withholding tax, transfer pricing, BIT-compliant structuring',
      'Counterparty and market due diligence: any acquisition target, JV partner, or major early-stage counterparty',
      'Sample contract review: customer-, supplier-, and employment-contract templates against Vietnamese law',
      'IP and trademark search and registration plan',
      'Foreign-exchange-control planning for capital contribution and dividend remittance',
      'Employment and HR policy review against Labour Code 2019 requirements',
      'Insurance coverage review for Vietnam-specific risks',
    ],
  },
  authorNote:
    "This article reflects general guidance based on hundreds of foreign-investment matters in Vietnam. Specific situations vary, and applicable rules can change. For tailored advice on a particular investment, contact our office for a confidential consultation.",
  relatedArticles: ['due-diligence-checklist-vietnam', 'enforcement-foreign-arbitral-awards-vietnam'],
  relatedPracticeAreas: ['corporate-and-commercial', 'arbitration'],
}

// ============================================================================
// 2. GETTING DIVORCED IN VIETNAM AS A FOREIGNER
// ============================================================================

const divorceGuide: ArticleData = {
  slug: 'getting-divorced-vietnam-foreigner-guide',
  title: 'Getting Divorced in Vietnam as a Foreigner: Complete Guide',
  date: '2026-03-10',
  category: 'For Expats',
  excerpt:
    'A practical step-by-step guide to international divorce in Vietnam — jurisdiction, custody, property division, and what foreign clients can realistically expect.',
  heroImageId: 'articleHeroExpat',
  readTime: '14 min',
  tableOfContents: [
    { id: 'jurisdiction', label: 'Where to file: jurisdictional choices' },
    { id: 'process', label: 'The Vietnamese divorce process step-by-step' },
    { id: 'custody', label: 'Child custody and parenting plans' },
    { id: 'property', label: 'Property division across borders' },
    { id: 'support', label: 'Child and spousal support' },
    { id: 'recognition', label: 'Recognition in your home country' },
    { id: 'timeline', label: 'Realistic timelines and costs' },
  ],
  intro: [
    "Going through divorce in a foreign country is one of the most stressful experiences anyone can face. The legal system is unfamiliar, the language is different, the cultural expectations diverge from your own, and the support network is far away. For foreigners ending a marriage in Vietnam — whether to a Vietnamese spouse or to another foreigner resident here — clear practical guidance from local counsel is essential.",
    "This guide walks through the major decision points in a Vietnamese divorce involving at least one foreign party, drawing on more than a decade representing foreign clients in matters of every type — straightforward consensual separations, contested divorces with significant property and custody disputes, and cross-border situations involving parallel proceedings in two or more countries.",
    "A note on tone: divorce is personal, often painful, and never just about the law. The technical content below is rigorous; the emotional dimension is the client's, and a good lawyer's job is to handle the legal mechanics so the client can give energy to the rest of their life.",
  ],
  sections: [
    {
      id: 'jurisdiction',
      heading: 'Where to file: jurisdictional choices',
      body: [
        "The first decision in any cross-border divorce is jurisdictional. Multiple countries may have potential jurisdiction; the choice can affect every subsequent issue.",
        "Vietnamese courts have jurisdiction over a divorce when at least one spouse is a Vietnamese citizen, or when both spouses (even if both foreign) are habitually resident in Vietnam. The marriage itself does not need to have been registered in Vietnam — a marriage celebrated abroad and registered there is fully recognised by Vietnamese courts for purposes of dissolution.",
        "If you also have potential jurisdiction in another country (for example, your home country if you are a citizen and your spouse has connections there), you may have a genuine choice of forum. Considerations: which jurisdiction's law is more favourable on the issues that matter to you (property regime, custody standards, child-support calculations); which jurisdiction's process is faster and cheaper; where the principal assets and the children are located; and where any judgment will need to be enforced.",
        "I work closely with foreign family-law counsel in this analysis. The right answer is rarely intuitive — and it is one of the most consequential choices a foreign client can make.",
      ],
      pullQuote:
        "The single most consequential decision in any cross-border divorce is the choice of forum. It defines every subsequent question — and it is rarely the choice the parties' instincts would make.",
    },
    {
      id: 'process',
      heading: 'The Vietnamese divorce process step-by-step',
      body: [
        "**Step 1: Pre-filing assessment.** A consultation with counsel to map the situation: marriage details, children, assets, liabilities, the parties' positions on key issues. Output: a written assessment of options, costs, and likely timeline.",
        "**Step 2: Filing.** A divorce petition is filed at the competent court — typically the District People's Court of the spouse's residence for purely Vietnamese cases, but the Provincial People's Court for divorces with foreign elements. The petition states grounds (Vietnamese law accepts a wide range of grounds, including no-fault grounds), positions on custody and property, and any preliminary relief sought (such as a non-removal order for the children, or interim spousal support).",
        "**Step 3: Mediation.** Vietnamese divorce procedure includes mandatory court-annexed mediation. The court convenes the parties and attempts to reconcile them; if reconciliation is not possible, the focus shifts to mediating the substantive issues (custody, property, support). Many divorces settle here.",
        "**Step 4: Evidentiary hearings.** If matters remain in dispute after mediation, the case proceeds to evidentiary hearings. The judge takes an active role in fact-finding; written evidence is filed in advance; witness testimony may be given in person or by video link. Hearings are typically less adversarial than in common-law systems.",
        "**Step 5: Judgment.** The court issues a written judgment dissolving the marriage and ruling on custody, property, and support. The judgment is binding once the appeal period (usually 15 days for parties present in Vietnam, longer for parties abroad) has passed without appeal — or until any appeal is decided.",
        "**Step 6: Implementation.** The legal divorce is final, but implementation continues: registering changes to the LURC for any property awarded; transferring bank accounts; updating school records and emergency contacts; modifying visa or residence status if required.",
      ],
    },
    {
      id: 'custody',
      heading: 'Child custody and parenting plans',
      body: [
        "Vietnamese courts apply the 'best interests of the child' standard. Both parents have equal standing regardless of nationality. The court considers each parent's ability to care for the child (financial, practical, emotional), the child's wishes (for children aged seven and above, the court typically interviews the child), continuity of school and home, and the willingness of each parent to support the child's relationship with the other.",
        "Joint custody is increasingly common and often the right outcome for international families. The default in Vietnamese practice is for the child to reside primarily with one parent (typically the parent able to provide the most stable home environment, with consideration for the child's preferences) with generous visitation for the other parent. The mother is statistically more often awarded primary residence with younger children, but this is far from automatic — fathers regularly receive primary care, particularly when work and life arrangements support it.",
        "For international families, parenting plans need to address: the child's primary residence; school choice; visitation including holiday and special-occasion arrangements; international travel protocols (consents, advance notice, return-trip protocols); communication during the other parent's time (typically video calls, with frequency specified); and a clear protocol for any future relocation by either parent.",
        "Importantly, Vietnamese courts can issue non-removal orders preventing the children from leaving Vietnam during proceedings. This is a powerful protective tool that I deploy in cross-border cases where unilateral removal is a credible risk.",
      ],
    },
    {
      id: 'property',
      heading: 'Property division across borders',
      body: [
        "Vietnam's default property regime is community property: assets acquired during the marriage are jointly owned and divided equitably (not necessarily 50/50) on divorce. The court considers each spouse's contributions (financial and otherwise — care of children and household work counts), the welfare of any children, the parties' agreement, and any fault. Pre-marriage assets remain separate unless they were converted into joint property during the marriage.",
        "Prenuptial and post-nuptial agreements modify this default if validly executed under Article 28 of the Law on Marriage and Family. Vietnamese law has recognised prenuptial agreements since 2014, and they are increasingly common among international couples. To be valid, the agreement must be in writing, notarised before marriage (for prenuptial agreements), and not violate prohibited terms.",
        "For international couples, the practical complication is that assets are typically held in multiple countries: real estate in Vietnam (jointly registered in the LURC), retirement accounts in the home country, business interests in either, investment accounts, family heirlooms, and so on. Vietnamese courts generally apply Vietnamese law to assets located in Vietnam and recognise the parties' agreements (including pre- and post-nuptial agreements) for assets abroad. Achieving a clean overall result usually requires coordination with foreign counsel and a side-agreement that reconciles the totals.",
        "For Vietnamese real property, the most common outcome in my practice is that one spouse takes the real property with an offsetting payment to the other spouse. This avoids forced sale and the foreign-exchange-control complications of remitting half the proceeds abroad.",
      ],
    },
    {
      id: 'support',
      heading: 'Child and spousal support',
      body: [
        "Vietnamese courts have wide discretion to set child support based on the paying parent's income, the child's needs, and the cost of living in the relevant location. There is no strict formula. For international families where the paying parent earns abroad, Vietnamese courts can set support based on the foreign income — but enforcement abroad will require coordination with foreign counsel and possibly a separate support order in the paying parent's home jurisdiction.",
        "Spousal support (alimony) is awarded sparingly under Vietnamese law and typically only in cases of demonstrated need by a non-earning spouse, often for a transitional period. International couples should not assume Vietnamese spousal support will replicate the more generous awards available in some Western jurisdictions.",
      ],
    },
    {
      id: 'recognition',
      heading: 'Recognition in your home country',
      body: [
        "A Vietnamese divorce decree is automatically valid throughout Vietnam, but its recognition abroad is a separate question. For most Western countries, a Vietnamese divorce decree is recognised through the same general principles applied to other foreign divorces: the court that issued it must have had appropriate jurisdiction, the parties must have had appropriate notice, and the decree must not violate the home country's public policy.",
        "In practice, recognition is generally straightforward when both parties had appropriate connection to Vietnam (residence, marriage celebrated there, or Vietnamese citizenship). Recognition may be more uncertain for divorces where the foreign spouse had only minimal connection to Vietnam — in those cases, a parallel home-country proceeding may be advisable.",
        "Custody and child-support orders raise their own recognition issues, particularly in countries that are parties to the Hague Convention on Child Abduction (Vietnam is not). I work with foreign family-law counsel to ensure that orders are structured to be recognised abroad — including, where useful, conducting parallel consent proceedings in both countries.",
      ],
    },
    {
      id: 'timeline',
      heading: 'Realistic timelines and costs',
      body: [
        "Consensual divorces (where both spouses agree on divorce, custody, property, and support) typically resolve in 3-6 months from filing. Contested divorces involving custody, foreign elements, or significant property disputes typically take 9-18 months at first instance. Appeals add another 4-6 months.",
        "The pace depends as much on the parties' willingness to mediate as on the court. Most contested cases settle during mediation if both parties are well-prepared and pragmatic.",
        "Legal costs vary by complexity. A consensual divorce with simple property arrangements may cost USD 3-8K in legal fees. A contested divorce with custody dispute and multi-jurisdictional property division may cost USD 25-60K, with additional costs if expert evidence (asset valuation, child welfare assessment) is needed. I provide written cost estimates with each engagement and detailed monthly billing.",
        "Court fees in Vietnam are modest — typically USD 200-2,000 depending on the value of assets in dispute — a fraction of court fees in many Western jurisdictions.",
      ],
    },
  ],
  keyTakeaways: [
    'Vietnamese courts have jurisdiction over divorces involving Vietnamese citizens or where both spouses are habitually resident in Vietnam.',
    'Choice of forum is the most consequential pre-filing decision — coordinate with foreign counsel.',
    'Vietnamese custody decisions follow the "best interests of the child" standard; both parents have equal standing.',
    'Property division follows community-property rules unless modified by valid prenuptial or post-nuptial agreement.',
    'Vietnamese non-removal orders are a powerful protection against unilateral child-removal during proceedings.',
    'Consensual divorces resolve in 3-6 months; contested cases in 9-18 months. Most contested cases settle in mediation.',
  ],
  authorNote:
    "Family-law matters are deeply personal. This article is educational, not advice. For confidential help with a specific situation, contact our office.",
  relatedArticles: ['buying-property-vietnam-foreigner'],
  relatedPracticeAreas: ['family-law-and-divorce'],
}

// ============================================================================
// 3. ENFORCEMENT OF FOREIGN ARBITRAL AWARDS
// ============================================================================

const arbitralAwards: ArticleData = {
  slug: 'enforcement-foreign-arbitral-awards-vietnam',
  title: 'Enforcement of Foreign Arbitral Awards in Vietnam',
  date: '2026-03-05',
  category: 'For Foreign Law Firms',
  excerpt:
    "A practitioner's guide to enforcing foreign arbitral awards under Vietnam's New York Convention obligations — procedure, refusal grounds, and strategy.",
  heroImageId: 'articleHeroInvestor',
  readTime: '11 min',
  tableOfContents: [
    { id: 'framework', label: 'The legal framework' },
    { id: 'procedure', label: 'Procedure for recognition and enforcement' },
    { id: 'refusal', label: 'Grounds for refusal under New York Convention' },
    { id: 'public-policy', label: 'The public-policy defence' },
    { id: 'practical', label: 'Practical strategy and timing' },
    { id: 'enforcement', label: 'Post-recognition enforcement' },
  ],
  intro: [
    "Vietnam has been a party to the 1958 New York Convention since 1995. Foreign arbitral awards can be recognised and enforced through the Vietnamese courts, subject to the limited refusal grounds set out in Article V of the Convention. The framework is generally functional, but the procedure has its own demands and the refusal grounds are interpreted in ways that international practitioners need to understand.",
    "This article is written for foreign law firms managing the Vietnamese leg of cross-border arbitration matters. It covers the formal procedure, the substantive defences most often invoked, the practical strategy, and the typical timeline.",
  ],
  sections: [
    {
      id: 'framework',
      heading: 'The legal framework',
      body: [
        "The principal source of authority is the 1958 New York Convention, to which Vietnam acceded in 1995 (with the standard reciprocity reservation — Vietnam will recognise awards made in other contracting states). The procedure for recognition and enforcement in Vietnam is governed by Articles 421-463 of the Civil Procedure Code 2015.",
        "Awards from over 170 contracting states qualify for recognition. The procedure does not retry the merits — the Vietnamese court reviews the application against Article V grounds and either recognises or refuses. Once recognised, the award has the same enforceability as a Vietnamese court judgment.",
      ],
    },
    {
      id: 'procedure',
      heading: 'Procedure for recognition and enforcement',
      body: [
        "**Filing.** The application is filed with the competent Provincial People's Court — typically the court of the respondent's residence or the location of the respondent's assets in Vietnam.",
        "**Required documents.** Article 423 of the Civil Procedure Code and Article IV of the New York Convention specify: the original or certified copy of the arbitral award and the arbitration agreement; certified Vietnamese translation of both; proof that the award is final and binding (typically a certificate from the issuing arbitral institution); evidence of service on the respondent; and the application itself, addressing each Article V ground.",
        "**Filing fees.** Modest by international standards — typically a percentage of the awarded amount with caps, often in the range of USD 500-5,000 depending on the value.",
        "**Hearing.** The court schedules a hearing typically 60-120 days after filing. The respondent has the opportunity to oppose recognition by raising Article V grounds. The hearing is generally focused: the court does not retry the merits of the dispute but reviews whether any Article V ground applies.",
        "**Decision.** The court either grants or refuses recognition. Grants result in an enforcement order; refusals can be appealed to the High People's Court within 30 days.",
      ],
    },
    {
      id: 'refusal',
      heading: 'Grounds for refusal under New York Convention',
      body: [
        "Article V of the New York Convention provides exhaustive grounds for refusal. They divide into two categories.",
        "**Article V(1) — grounds the respondent must prove:** invalid arbitration agreement under the law to which the parties subjected it; lack of proper notice or denial of opportunity to present case; award decides matters outside the scope of the arbitration agreement; arbitral procedure was not in accordance with the parties' agreement or the law of the seat; award has been set aside or suspended at the seat or has not yet become binding.",
        "**Article V(2) — grounds the court can raise on its own motion:** the subject-matter is not capable of arbitration under Vietnamese law; recognition or enforcement would be contrary to Vietnamese public policy.",
        "The most frequently invoked grounds in Vietnamese practice are: defective service or notice (Article V(1)(b)) — typically rejected by Vietnamese courts where the respondent had actual knowledge; alleged scope excess (Article V(1)(c)) — fact-specific; and the public-policy ground (Article V(2)(b)), which deserves separate treatment.",
      ],
      pullQuote:
        "The public-policy ground is the most-frequently invoked and most-frequently misunderstood defence to recognition. Properly briefed, it is rarely a path to refusal.",
    },
    {
      id: 'public-policy',
      heading: 'The public-policy defence',
      body: [
        "Vietnamese courts apply a relatively narrow conception of public policy in the recognition context, consistent with the international consensus that Article V(2)(b) is reserved for fundamental violations rather than mere conflicts with domestic law.",
        "Successful public-policy defences have generally involved: enforcement against a clearly insolvent debtor where Vietnamese insolvency procedure should govern; matters where Vietnamese law has classified the subject-matter as non-arbitrable (a narrow but real category); and rare cases of corruption or fraud in the arbitration itself.",
        "Unsuccessful public-policy defences have included: claims that the substantive outcome 'should have been different' under Vietnamese law (the Vietnamese court does not retry the merits); claims that the procedural rules differed from Vietnamese practice (procedural variation does not violate public policy); and broad assertions of unfairness without specific articulation of the relevant Vietnamese policy.",
        "The strategic implication: if you anticipate a public-policy defence, prepare the application with detailed responses to each plausible argument, and brief the court on the international standard for the public-policy ground.",
      ],
    },
    {
      id: 'practical',
      heading: 'Practical strategy and timing',
      body: [
        "**Time to enforcement: realistic estimate.** From filing to a granted enforcement order: typically 6-12 months in straightforward cases; 12-18 months where Article V defences are seriously contested; longer if appeals are pursued. Plan accordingly in any commercial strategy.",
        "**Asset preservation.** Where there is risk that the respondent may dissipate assets during the recognition proceedings, apply for interim asset-preservation measures from the Vietnamese court under Article 429 of the Civil Procedure Code. These measures are often granted where there is credible evidence of dissipation risk.",
        "**Translation quality.** Certified translation of the award and arbitration agreement is required. The quality of translation matters: ambiguous or technically inaccurate translation creates apparent inconsistencies that can fuel Article V challenges. I work with sworn translators who specialise in legal documents.",
        "**Coordination with home counsel.** The application's success depends on documentation that originates in the issuing jurisdiction (the arbitration agreement, evidence of due process, certificates of finality). Home counsel needs to provide this documentation in a form Vietnamese courts will accept — typically requiring legalisation or apostille.",
      ],
    },
    {
      id: 'enforcement',
      heading: 'Post-recognition enforcement',
      body: [
        "Once an enforcement order is granted, the award has the same status as a Vietnamese court judgment. Enforcement proceeds through the Bureau of Civil Judgment Enforcement.",
        "Practical enforcement steps: identify and attach the respondent's assets in Vietnam (bank accounts, real estate, equity in Vietnamese companies); apply for forced sale or transfer where the respondent does not pay voluntarily; coordinate with foreign enforcement counsel for the respondent's overseas assets.",
        "Voluntary payment is common once the recognition order issues. Many respondents who fought recognition pay the award once enforcement becomes legally available. Where voluntary payment is not forthcoming, the Bureau of Civil Judgment Enforcement is generally responsive to clear documentation and follow-up.",
      ],
    },
  ],
  keyTakeaways: [
    'Vietnam has been a party to the New York Convention since 1995; foreign awards from 170+ contracting states qualify for recognition.',
    'Article V grounds are exhaustive — the Vietnamese court does not retry the merits.',
    'The public-policy ground is the most-invoked defence but is interpreted narrowly under international standards.',
    'Realistic timeline from filing to granted enforcement order: 6-12 months for straightforward cases.',
    'Post-recognition enforcement proceeds through the Bureau of Civil Judgment Enforcement; voluntary payment is common.',
    'Coordinate with home counsel for documentation, certifications, and overseas asset enforcement.',
  ],
  authorNote:
    "I welcome direct contact from foreign law firms managing recognition and enforcement matters in Vietnam. Cross-border arbitration practice is among my core areas, and I work routinely with international firms across Europe, North America, and Asia.",
  relatedArticles: ['top-legal-risks-foreign-investors-vietnam', 'instructing-local-counsel-vietnam'],
  relatedPracticeAreas: ['arbitration', 'corporate-and-commercial'],
}

// ============================================================================
// 4. DUE DILIGENCE CHECKLIST
// ============================================================================

const dueDiligence: ArticleData = {
  slug: 'due-diligence-checklist-vietnam',
  title: 'Due Diligence Checklist for Vietnam Market Entry',
  date: '2026-02-28',
  category: 'For Foreign Investors',
  excerpt:
    'A comprehensive pre-investment checklist covering corporate, regulatory, tax, employment, IP, and dispute risks for foreign companies entering Vietnam.',
  heroImageId: 'articleHeroInvestor',
  readTime: '10 min',
  tableOfContents: [
    { id: 'corporate', label: 'Corporate and ownership' },
    { id: 'regulatory', label: 'Regulatory and licensing' },
    { id: 'commercial', label: 'Commercial and contracts' },
    { id: 'tax', label: 'Tax and accounting' },
    { id: 'employment', label: 'Employment and HR' },
    { id: 'ip', label: 'Intellectual property' },
    { id: 'disputes', label: 'Litigation and disputes' },
    { id: 'real-estate', label: 'Real estate and tenancies' },
  ],
  intro: [
    "Whether you are acquiring a Vietnamese target, entering a joint venture, or scoping a market-entry investment, comprehensive legal due diligence is the foundation of every successful Vietnamese transaction. Skipped or superficial due diligence is the leading cause of post-closing disputes and regulatory friction.",
    "This article provides a structured checklist organised by risk area. Each section identifies the key documents to review, the specific risks to evaluate, and the questions to put to the target or counterparty. The checklist is not exhaustive but covers the ground where most preventable mistakes are made.",
    "For a target of meaningful size, comprehensive due diligence typically takes 6-10 weeks and engages corporate, tax, employment, and IP specialists. The cost is a small fraction of the investment and a tiny fraction of the cost of post-closing remediation.",
  ],
  sections: [
    {
      id: 'corporate',
      heading: 'Corporate and ownership',
      body: [
        "Confirm the target's corporate existence, valid registration, and current status. Documents: Investment Registration Certificate (IRC), Enterprise Registration Certificate (ERC), Charter, all amendments, board and shareholder resolutions for the past three years.",
        "Verify ownership structure: who actually owns the shares, when they acquired them, whether transfers were properly notified to the registry. Trace any changes in ownership for the past five years.",
        "Confirm charter capital was contributed in full and on time. Compare the declared charter capital to bank receipts evidencing contribution. Late or partial contribution is a common defect.",
        "Review the company's legal representative arrangements. Vietnamese law requires at least one legal representative resident in Vietnam — confirm appointments, identification, and the absence of disputes about representation.",
        "Check for any pending or threatened corporate-governance disputes: shareholder challenges, related-party-transaction objections, deadlock or management disputes.",
      ],
    },
    {
      id: 'regulatory',
      heading: 'Regulatory and licensing',
      body: [
        "Identify all licences and permits required for the target's actual business activities. Compare to licences actually held. Sectoral licensing (real estate, education, healthcare, financial services, food and beverage, alcohol, tobacco, telecommunications, transportation) is the area where gaps are most common.",
        "Confirm sub-licences are current, in the correct entity name, and cover the actual scope of operations. Expired or scope-mismatched sub-licences are a common defect.",
        "Review any sectoral conditions or foreign-ownership caps applicable to the target. Confirm current ownership structure complies. Some sectoral conditions have been amended in recent years; verify current rather than historical compliance.",
        "Check for any pending regulatory inspections, citations, or enforcement actions. Most Vietnamese regulators publish at least summary records; specialist sub-agency searches may be warranted in regulated sectors.",
      ],
    },
    {
      id: 'commercial',
      heading: 'Commercial and contracts',
      body: [
        "Review all material contracts: customer contracts, supplier contracts, distribution and agency contracts, lending arrangements, leases, service agreements. 'Material' typically means contracts with annual value exceeding a threshold (commonly USD 100K+) or strategic significance.",
        "Identify contracts with change-of-control provisions that may be triggered by the proposed transaction. Vietnamese banking and large supply contracts frequently include such provisions.",
        "Review dispute-resolution clauses across the contract portfolio. Confirm enforceability under Vietnamese law and any treaty framework (New York Convention for arbitration; bilateral treaties for court judgments).",
        "Identify intra-group contracts and related-party transactions. Vietnamese related-party-transaction approval requirements are strict; non-approved transactions create liability for directors and may be unwound.",
      ],
    },
    {
      id: 'tax',
      heading: 'Tax and accounting',
      body: [
        "This area requires specialist tax-adviser involvement. From a legal due diligence perspective, confirm: tax registrations are current; the most recent three years of corporate income tax, VAT, and withholding tax filings have been made; any tax assessments or audits have been resolved or are properly accrued; transfer-pricing documentation exists for cross-border related-party transactions.",
        "Review any tax disputes or pending assessments. Vietnamese tax administration is becoming more sophisticated and assertive; historical positions that escaped scrutiny may be challenged on review or following a transaction.",
      ],
    },
    {
      id: 'employment',
      heading: 'Employment and HR',
      body: [
        "Confirm employment contracts are in place for all employees, comply with the Labour Code 2019, and reflect current arrangements. Outdated or non-compliant contracts are a frequent defect.",
        "Review collective labour agreements (where applicable), trade-union recognition, and any historical labour disputes.",
        "Confirm social, health, and unemployment insurance contributions are current. Arrears in mandatory insurance contributions can trigger administrative penalties and personal liability for directors.",
        "Identify foreign employees and confirm they hold valid work permits for their actual roles.",
        "Review any employment-related litigation or arbitration in the past five years.",
      ],
    },
    {
      id: 'ip',
      heading: 'Intellectual property',
      body: [
        "Identify all material trademarks, patents, copyrights, and trade secrets. Confirm registration status in Vietnam and key foreign jurisdictions.",
        "Review IP licences (in and out). Confirm scope, royalty arrangements, and termination provisions.",
        "Check for any IP infringement claims (the target as defendant or as plaintiff). Vietnamese trademark and copyright enforcement has improved markedly but remains an area requiring active management.",
        "For technology businesses: review software licences, open-source compliance, and any non-disclosure agreements with current and former employees.",
      ],
    },
    {
      id: 'disputes',
      heading: 'Litigation and disputes',
      body: [
        "Identify all current and threatened litigation, arbitration, and regulatory proceedings. Cross-check with court records (publicly searchable for Vietnamese court proceedings) and arbitration institution records.",
        "Review settlements and judgments from the past five years. Material settlements may indicate underlying operational or commercial weaknesses worth investigating.",
        "Check for any judgment debtor proceedings or enforcement actions against the target. These are matters of public record and signal financial or operational stress.",
      ],
    },
    {
      id: 'real-estate',
      heading: 'Real estate and tenancies',
      body: [
        "For owned property: confirm valid LURCs, no boundary disputes, no encumbrances. Verify foreign-ownership eligibility where applicable.",
        "For leased property: review all leases, confirm registration where required, identify any change-of-control or assignment restrictions.",
        "Confirm building permits and operating permits for premises are current and in the correct name.",
      ],
    },
  ],
  keyTakeaways: [
    'Comprehensive due diligence requires 6-10 weeks for meaningful targets and engages multiple specialists.',
    'Corporate, regulatory, and commercial-contract defects are the most-common findings.',
    'Verify charter capital contribution, sub-licence currency, and related-party-transaction compliance.',
    'Tax due diligence requires specialist engagement — historical positions may be re-examined post-closing.',
    'Employment and IP issues are increasingly material as Vietnamese enforcement improves.',
    'Document findings carefully — the diligence file becomes the foundation of representations and warranties.',
  ],
  authorNote:
    "Pre-investment legal due diligence is one of my core practice areas. For confidential discussion of a specific target or transaction, contact our office.",
  relatedArticles: ['top-legal-risks-foreign-investors-vietnam'],
  relatedPracticeAreas: ['corporate-and-commercial'],
}

// ============================================================================
// 5. BUYING PROPERTY AS A FOREIGNER
// ============================================================================

const buyingProperty: ArticleData = {
  slug: 'buying-property-vietnam-foreigner',
  title: 'Buying Property in Vietnam as a Foreigner: What You Can and Cannot Do',
  date: '2026-02-20',
  category: 'For Expats',
  excerpt:
    'Everything you need to know about foreign property ownership rights, eligible projects, ownership caps, the 50-year term, and inheritance.',
  heroImageId: 'articleHeroExpat',
  readTime: '12 min',
  tableOfContents: [
    { id: 'framework', label: 'The legal framework' },
    { id: 'eligibility', label: 'Who can buy: eligibility rules' },
    { id: 'what', label: 'What you can buy' },
    { id: 'caps', label: 'Foreign-ownership caps' },
    { id: 'term', label: 'The 50-year term and renewal' },
    { id: 'process', label: 'The buying process step-by-step' },
    { id: 'inheritance', label: 'Inheritance and estate planning' },
    { id: 'pitfalls', label: 'Common pitfalls to avoid' },
  ],
  intro: [
    "Foreign property ownership in Vietnam operates under specific rules that differ markedly from most Western jurisdictions. Understanding what you can and cannot own — and how — is essential before any property transaction.",
    "This guide walks through the framework introduced by the Law on Housing 2014 (substantially revised in 2023) and the practical mechanics of buying, owning, and eventually selling Vietnamese property as a foreign individual. The focus is on residential property; foreign-invested enterprises hold property through different mechanisms covered separately.",
  ],
  sections: [
    {
      id: 'framework',
      heading: 'The legal framework',
      body: [
        "Vietnamese property law begins from a different foundation than most Western systems. Article 53 of the 2013 Constitution declares all land to be the property of the people, with the state acting as administrator. Individuals and organisations do not own land; they own land use rights — a bundle of entitlements granted for a defined term and recorded on a Land Use Rights Certificate (LURC, the so-called 'red book' or 'pink book').",
        "Foreigners can hold ownership of certain housing — apartments and houses — under the Law on Housing 2023. They cannot hold residential land use rights in their own name (with very limited exceptions for inherited property, discussed below). The structure is therefore: ownership of the dwelling unit, with land use rights typically held by the developer for the duration of the development project.",
      ],
    },
    {
      id: 'eligibility',
      heading: 'Who can buy: eligibility rules',
      body: [
        "Eligible foreign individuals are those who: are permitted to enter Vietnam (any valid visa or residence status); are not employed by foreign diplomatic or consular missions in Vietnam (those organisations have separate property arrangements through reciprocity); and intend to use the property for residence (not commercial purposes — though residential property can be leased to others).",
        "There is no residency requirement; you do not need to live in Vietnam to buy. However, you must hold a valid entry status at the time of purchase. The status need not be permanent residence; tourist visas, business visas, and temporary residence cards all qualify.",
      ],
    },
    {
      id: 'what',
      heading: 'What you can buy',
      body: [
        "Foreigners can buy: apartments in projects where foreign sales are permitted (the developer must have approval); landed houses (single-family homes, townhouses) in qualifying projects; certain commercial-mixed-use units within residential projects.",
        "Foreigners cannot buy: standalone residential land (you cannot buy a plot and build); social housing or subsidised housing; properties in border areas or other specially-restricted zones; properties in projects without foreign-sales approval.",
        "Verifying that a project permits foreign ownership is a critical due-diligence step. The approval is project-specific and recorded in the project's master licensing documents.",
      ],
    },
    {
      id: 'caps',
      heading: 'Foreign-ownership caps',
      body: [
        "To prevent excessive foreign concentration, Vietnamese law imposes caps: foreigners may own up to 30% of the apartments in any single building, and up to 250 separate landed houses in any one ward.",
        "The cap is tracked by the local Department of Construction. Once met, no further foreign purchases in that building or ward can register, regardless of contractual agreements. Verifying the cap is one of the first due-diligence steps before any apartment purchase, and I do this directly with the relevant department on every transaction.",
        "Practically: in highly desirable buildings in District 1 or District 2 of Ho Chi Minh City, the cap is often reached within months of opening. Foreign buyers should verify cap status before paying any deposit and confirm at signing that the unit will register in their name.",
      ],
    },
    {
      id: 'term',
      heading: 'The 50-year term and renewal',
      body: [
        "Foreign individual ownership is initially for 50 years from the date of issuance of the LURC. The term can be extended once for an additional 50 years (so up to 100 years total). After the second term, the property must be sold or — if not sold by the deadline — may be subject to forced disposition.",
        "The 50-year term is shorter than freehold ownership in most Western jurisdictions but typically longer than the practical residence horizon of most foreign buyers. For comparison, Vietnamese individual owners hold land use rights for the same residential land for 50 years initially, with similar renewal mechanics — so the 'foreign discount' to ownership term is smaller than it appears.",
        "The Vietnamese government has periodically considered amendments to extend or remove the foreign-ownership term limit. As of early 2026, no such amendment has been adopted, but the question is under active consideration.",
      ],
    },
    {
      id: 'process',
      heading: 'The buying process step-by-step',
      body: [
        "**Step 1: Verification of project status.** Confirm the project has foreign-sales approval, the cap is not exhausted, and the developer has the necessary licences for sale. (1-2 weeks)",
        "**Step 2: Reservation/deposit agreement.** Modest refundable deposit (typically VND 50-200M / USD 2-8K) holds the unit while documentation is finalised. (Same day)",
        "**Step 3: Sale and Purchase Agreement (SPA).** The principal contract. Should be reviewed by independent counsel, not the developer's. Critical clauses: payment schedule (typically 30-70% in tranches over construction milestones), delivery date, specifications and finishes, remedies for delay or non-completion, foreign-ownership representations. (1-3 weeks)",
        "**Step 4: Payment milestones.** Per the SPA. Each payment should be backed by foreign-exchange-control compliance documentation if remitted from abroad.",
        "**Step 5: Completion and handover.** Inspection of the unit, identification of any defects, formal handover. The developer typically warrants the unit for 12-24 months for structural and finish issues.",
        "**Step 6: LURC issuance.** The developer applies for the LURC in your name. Timing varies by project — typically 6-18 months after handover. Until issuance, you have ownership in equity but the formal evidence of title is the SPA.",
        "**Step 7: Registration.** Once the LURC is issued, register the property in the local cadastre. Some practical formalities (utility transfers, property-tax registration) follow.",
      ],
    },
    {
      id: 'inheritance',
      heading: 'Inheritance and estate planning',
      body: [
        "Vietnamese law on foreigner inheritance of property has improved substantially. Foreigners can now inherit Vietnamese property, but only if they themselves are eligible to own it under the Law on Housing — meaning they hold a valid entry status and the property is the type and in the location where foreign ownership is permitted.",
        "If the heir is not eligible (for example, an heir who lives elsewhere and has no current Vietnamese visa), what passes is the right to the value of the property: the property must be liquidated and the proceeds remitted (subject to foreign-exchange-control compliance).",
        "Estate planning for Vietnamese property is a specialised exercise. For foreign owners with Vietnamese property and foreign-domiciled estates, I recommend: (1) a separate Vietnamese will dealing specifically with the Vietnamese property; (2) advance planning for liquidation if heirs are not eligible to own; (3) registration of the Vietnamese will with a Vietnamese notary for evidentiary security.",
      ],
    },
    {
      id: 'pitfalls',
      heading: 'Common pitfalls to avoid',
      body: [
        "**Buying via 'workaround' structures.** Some sellers and brokers propose structures where a Vietnamese individual or company holds title for the foreign buyer's benefit. These structures are fraught with risk: enforceability is unclear, beneficial-ownership issues arise, and if the relationship breaks down the foreign 'buyer' has no formal rights.",
        "**Buying off-plan from unproven developers.** Vietnamese off-plan sales are common and generally well-regulated, but developer failure remains a risk. Stick to established developers with completed projects in operation.",
        "**Skipping legal due diligence to save fees.** I have seen tens of thousands of dollars in legal fees saved at acquisition turn into hundreds of thousands of dollars in remediation costs — or total loss — when fundamental defects emerge later.",
        "**Misunderstanding the LURC issuance timeline.** Many foreign buyers expect the LURC immediately on handover. The actual timing can be 6-18 months. Plan financing, residence applications, and other consequences accordingly.",
        "**Not planning for exit.** Selling Vietnamese property requires foreign-exchange-control compliance for remittance abroad. Plan the exit at the time of purchase, not at the time of sale.",
      ],
      pullQuote:
        "Tens of thousands of dollars in legal fees saved at acquisition can turn into hundreds of thousands in remediation later. Due diligence is the cheapest insurance you will ever buy.",
    },
  ],
  keyTakeaways: [
    'Foreign individuals can own apartments and qualifying houses in Vietnam under the Law on Housing 2023.',
    'Verify project-specific foreign-sales approval and cap status before any deposit.',
    'Initial ownership term: 50 years, renewable once for another 50 years.',
    'Comprehensive legal due diligence is essential — verify LURC, project licences, foreign-ownership eligibility, and SPA terms.',
    'Inheritance is permitted but heirs must themselves be eligible to own; otherwise the property must be liquidated.',
    'Avoid workaround structures using Vietnamese nominees — direct foreign ownership is the only secure path.',
  ],
  practicalChecklist: {
    title: 'Pre-Purchase Due Diligence',
    items: [
      'Project foreign-sales approval verification',
      'Foreign-ownership cap status check with Department of Construction',
      'Developer financial standing and project track record',
      'Building and sales licences current',
      'Sale and Purchase Agreement clause-by-clause review',
      'Payment schedule and milestone risk analysis',
      'Specifications and finishes documentation',
      'Warranty and defect-remediation provisions',
      'Foreign-exchange-control compliance plan for payments',
      'LURC issuance timeline and contractual commitments',
    ],
  },
  authorNote:
    "Property purchase decisions are significant and worth taking seriously. For a confidential review of a specific property or project, contact our office.",
  relatedArticles: ['top-legal-risks-foreign-investors-vietnam'],
  relatedPracticeAreas: ['land-and-property'],
}

// ============================================================================
// 6. INSTRUCTING LOCAL COUNSEL
// ============================================================================

const instructingCounsel: ArticleData = {
  slug: 'instructing-local-counsel-vietnam',
  title: 'Instructing Local Counsel in Vietnam: A Guide for Foreign Law Firms',
  date: '2026-02-15',
  category: 'For Foreign Law Firms',
  excerpt:
    'How foreign law firms can effectively engage Vietnamese local counsel — scope, communication, fees, document handling, and managing the bilingual workflow.',
  heroImageId: 'articleHeroInvestor',
  readTime: '9 min',
  tableOfContents: [
    { id: 'when', label: 'When you need local counsel' },
    { id: 'scoping', label: 'Scoping the engagement' },
    { id: 'communication', label: 'Communication conventions' },
    { id: 'fees', label: 'Fee arrangements' },
    { id: 'documents', label: 'Document handling and translation' },
    { id: 'workflow', label: 'Day-to-day workflow' },
    { id: 'pitfalls', label: 'Common pitfalls and how to avoid them' },
  ],
  intro: [
    "Foreign law firms managing matters that touch Vietnam — whether transactional or contentious — invariably need Vietnamese local counsel. The Vietnamese Law on Lawyers reserves the right to appear in Vietnamese courts and arbitration tribunals to attorneys licensed by the Vietnam Bar Federation. Even purely transactional work requires substantial Vietnamese legal input on local-law questions, regulatory approvals, and document execution.",
    "This article is written for foreign law firms (in-house and private practice) building or maintaining Vietnamese local-counsel relationships. It draws on more than a decade of working with international firms — Magic Circle, US AmLaw 100, regional Asian firms, and specialist boutiques — across hundreds of matters.",
  ],
  sections: [
    {
      id: 'when',
      heading: 'When you need local counsel',
      body: [
        "**Always for litigation and arbitration.** Vietnamese-licensed counsel must conduct any case in a Vietnamese court or arbitration tribunal. Foreign counsel can attend, advise, and observe but cannot appear of record.",
        "**Almost always for transactions.** Even where the transaction is structured under foreign law, Vietnamese-law aspects (corporate matters of Vietnamese entities, regulatory approvals, IP, real estate, employment) require Vietnamese counsel. Treating Vietnamese-law work as a side issue is a frequent source of error.",
        "**For specific advisory work.** Pure Vietnamese-law questions (regulatory matters, sector-specific compliance, employment, tax) need Vietnamese counsel. Cross-jurisdictional questions can be efficiently scoped between foreign and Vietnamese counsel together.",
      ],
    },
    {
      id: 'scoping',
      heading: 'Scoping the engagement',
      body: [
        "**Be explicit about scope.** Vietnamese practice does not assume open-ended engagement; specify the matter, the deliverables, the timeline, and the budget framework. Open-ended instructions lead to scope drift and friction.",
        "**Distinguish advisory work from execution work.** Advisory work (a memorandum on a specific question, a contract review, a regulatory analysis) is typically billed on a fixed-fee or capped-hourly basis. Execution work (filing, attending hearings, registering corporate changes) is typically billed on the actual time incurred plus disbursements.",
        "**Identify the lead foreign-law and lead Vietnamese-law counsel.** For matters involving multiple jurisdictions, clarify which firm leads on which issues. Disagreements about lead role are a common source of inefficiency.",
        "**Confirm conflicts and engagement letters in writing.** Vietnamese practice requires written engagement letters and conflicts checks. Allow 1-3 days for these formalities.",
      ],
    },
    {
      id: 'communication',
      heading: 'Communication conventions',
      body: [
        "**Email is the default.** Email is universally used for substantive communication. Phone calls and video calls supplement email for time-sensitive matters or relationship building.",
        "**Set expectations on response time.** Vietnamese practice generally has shorter response times than equivalent matters in some Western jurisdictions — same-day responses on substantive emails are common. Confirm expectations explicitly for time-sensitive matters.",
        "**English is standard for international engagements.** I conduct all client communication in English with international clients. Vietnamese-language documents are summarised or translated as needed. Where simultaneous interpretation is required (for client meetings, hearings, or witness conferences), arrange in advance.",
        "**Time zones.** Vietnam is GMT+7. Most international transactions can accommodate this through morning-Asia / afternoon-Europe overlap. For matters requiring frequent coordination across time zones, schedule a recurring video call to reduce email cycles.",
      ],
    },
    {
      id: 'fees',
      heading: 'Fee arrangements',
      body: [
        "**Hourly rates** in Vietnamese senior practice are typically USD 200-450 per hour for partners, USD 150-300 for senior associates. These are materially below comparable rates in most Western jurisdictions but command full senior-attorney attention.",
        "**Fixed fees** are common for defined deliverables: a memorandum on a specific question, a contract review, a corporate filing. Fixed fees reward precise scoping and provide budget certainty.",
        "**Success fees** (a percentage of recovery, capped) are permissible for monetary claims and can be combined with reduced hourly rates. They align incentives well in litigation and arbitration.",
        "**Retainers and capped budgets** work well for ongoing engagements where workflow is predictable.",
        "**Disbursements** (court fees, translation, notarisation, travel) are billed at cost. Translation in particular can be a meaningful expense for document-heavy matters.",
      ],
    },
    {
      id: 'documents',
      heading: 'Document handling and translation',
      body: [
        "**Foreign documents in Vietnamese proceedings** require notarisation, apostille (or consular legalisation if the home country is not a Hague Apostille party), and certified Vietnamese translation. The chain takes 1-4 weeks depending on the home jurisdiction.",
        "**Vietnamese documents in foreign proceedings** require certified translation to the working language of the foreign forum and (depending on the forum) authentication. For international arbitration in English, certified translation alone is usually sufficient.",
        "**Translation quality matters.** Sworn translators specialising in legal documents are the only acceptable choice for formal proceedings. Machine translation and casual translation create errors that can be exploited by opposing parties.",
        "**Document retention.** I retain a complete electronic file for every matter for ten years and longer where regulatory requirements apply. This is standard practice and supports long-term advisory relationships.",
      ],
    },
    {
      id: 'workflow',
      heading: 'Day-to-day workflow',
      body: [
        "**Initial onboarding.** A new matter typically begins with: an instruction email or call defining the matter; an engagement letter; conflicts check; agreed scope and budget framework. Time from instruction to active work: typically 2-5 business days.",
        "**Regular updates.** I provide written updates monthly on active matters and immediately on significant developments. The cadence can be adjusted to your preference.",
        "**Document collaboration.** Most international matters now use shared document platforms (NetDocuments, iManage, SharePoint) for substantive work. I am comfortable with all major platforms and am happy to work in your preferred environment.",
        "**Hearing coordination.** Where you wish to attend a Vietnamese hearing in person or by video, I arrange logistics including (where appropriate) simultaneous interpretation.",
      ],
    },
    {
      id: 'pitfalls',
      heading: 'Common pitfalls and how to avoid them',
      body: [
        "**Treating Vietnamese counsel as a low-cost outsource.** Vietnamese senior practice is high-quality; treating it as commodity work invites lower-quality service. Engage senior Vietnamese counsel for substantive work.",
        "**Skipping conflicts checks.** Vietnamese ethics rules on conflicts are similar to international standards. Confirm conflicts at engagement; do not assume.",
        "**Inadequate translation.** Casual or machine translation creates errors that can prejudice substantive positions. Use sworn translators for any document that will enter a formal proceeding.",
        "**Late involvement on transactions.** Bringing Vietnamese counsel in late — after the deal terms are finalised between foreign-law counsel — creates friction and missed opportunities to optimise structure for Vietnamese law. Engage Vietnamese counsel early in significant transactions.",
        "**Not aligning on dispute-resolution approach.** Foreign clients sometimes assume Vietnamese counsel will pursue every available point through to judgment. Vietnamese practice typically prefers efficient resolution; clarify expectations on aggressive vs. settlement-oriented strategy at engagement.",
      ],
    },
  ],
  keyTakeaways: [
    'Vietnamese-licensed counsel is required for litigation, arbitration, and most transactional work involving Vietnamese entities.',
    'Scope engagements explicitly: matter, deliverables, timeline, budget framework.',
    'English is standard for international engagements; Vietnamese-language documents are summarised or translated as needed.',
    'Hourly rates: USD 200-450/hour for partners — significantly below Western rates with comparable seniority.',
    'Foreign documents in Vietnamese proceedings require notarisation, apostille, and certified translation (1-4 week chain).',
    'Engage Vietnamese counsel early in significant transactions, not after foreign-law terms are finalised.',
  ],
  authorNote:
    "I welcome direct contact from foreign law firms managing Vietnam matters. My practice has worked alongside more than 100 international firms on transactional and contentious matters across the past decade.",
  relatedArticles: ['enforcement-foreign-arbitral-awards-vietnam'],
  relatedPracticeAreas: ['arbitration', 'corporate-and-commercial'],
}

// ============================================================================
// EXPORT
// ============================================================================

export const articlesData: Record<string, ArticleData> = {
  'top-legal-risks-foreign-investors-vietnam': topLegalRisks,
  'getting-divorced-vietnam-foreigner-guide': divorceGuide,
  'enforcement-foreign-arbitral-awards-vietnam': arbitralAwards,
  'due-diligence-checklist-vietnam': dueDiligence,
  'buying-property-vietnam-foreigner': buyingProperty,
  'instructing-local-counsel-vietnam': instructingCounsel,
}

export const articleSlugs = Object.keys(articlesData)
