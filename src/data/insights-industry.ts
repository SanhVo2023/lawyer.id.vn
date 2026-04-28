import type { ArticleData } from './insights'

// ============================================================================
// 1. VIETNAM REAL ESTATE: FOREIGN INVESTMENT
// ============================================================================

const vietnamRealEstate: ArticleData = {
  slug: 'vietnam-real-estate-foreign-investment',
  title: 'Legal Issues in Vietnam Real Estate Development for Foreign Investors',
  date: '2026-04-22',
  category: 'Industry-Specific',
  excerpt:
    'A practical map of the development cycle for foreign investors in Vietnamese real estate under the Land Law 2024 — from in-principle approval to sales licence and exit.',
  heroImageId: 'articleHeroInvestor',
  readTime: '14 min',
  tableOfContents: [
    { id: 'framework', label: 'The post-2024 legal framework' },
    { id: 'rights', label: 'FIE land use rights vs. individual ownership' },
    { id: 'stages', label: 'The six project-licensing stages' },
    { id: 'foreign-cap', label: 'Caps on residential foreign sales' },
    { id: 'off-plan', label: 'Off-plan sale risks and escrow rules' },
    { id: 'environment', label: 'Environmental clearance and zoning' },
    { id: 'disputes', label: 'Dispute landscape and exits' },
    { id: 'practical', label: 'Pre-development legal checklist' },
  ],
  intro: [
    "Vietnamese real estate is one of the most heavily regulated sectors in the country, and 2025 marked the most consequential legal reset in a generation. The Land Law 2024 (Law 31/2024/QH15) took effect on 1 August 2024, brought forward from its original January 2025 commencement, and was paired with the revised Law on Housing 2023 and the Law on Real Estate Business 2023. Foreign investors who finalised feasibility studies under the old framework — Land Law 2013 and the patchwork of decrees that grew around it — are now operating in a different statutory landscape.",
    "I represent foreign developers, fund-backed investors, and joint-venture structures across the residential, mixed-use, industrial, and hospitality segments. Most of the questions I am asked at the feasibility stage are commercial; most of the questions I am asked at year three are legal. The difference comes down to whether the project respected — or papered over — the licensing sequence Vietnamese law requires. This article maps that sequence and the substantive risks that recur within it.",
    "The audience here is operators and investment professionals: people who need to know which approval blocks which payment, which clause in the purchase-and-sale agreement matters when the market turns, and which provincial-level discretion can save or sink a quarter. The analysis is current to early 2026.",
  ],
  sections: [
    {
      id: 'framework',
      heading: 'The post-2024 legal framework',
      body: [
        "Three statutes now form the spine of foreign investment in Vietnamese real estate. The Land Law 2024 governs land use rights, allocation, lease, and recovery. The Law on Housing 2023 governs residential property — eligible buyers, ownership terms, and the foreign-sales regime. The Law on Real Estate Business 2023 governs the conduct of trading: who may sell, what they may sell, and on what terms.",
        "The most important conceptual change in the Land Law 2024 is the strengthening of compensation and resettlement obligations during land recovery. Under the previous framework, projects could proceed on land cleared by the state at administrative compensation rates, which often diverged from market value. The 2024 law requires compensation at market price, with valuation methodologies set out in implementing decrees. For foreign investors this is, on balance, a positive development: cleaner clearance reduces the risk that a project becomes mired in resettlement litigation, but it also raises land cost and lengthens the pre-construction phase.",
        "A second material change is the expanded list of cases where the state allocates land directly to investors versus where investors must self-acquire from current users. The categories matter for timeline and cost. State-allocated projects (typically major infrastructure, social housing, certain priority sectors) move faster but are concentrated in segments with thinner margins. Self-acquired projects — most commercial residential, mixed-use, and hospitality — require the investor to negotiate with current land users at market price, which is where most pre-construction delay occurs.",
        "Foreign investors should also note that the 2024 reforms tighten the rules on land speculation: undeveloped land may be recovered if the investor fails to commence construction within 24 months of allocation, with extensions available only on documented justification. I have already seen provincial authorities apply this provision more aggressively in 2025 than the equivalent rule was applied under the old law.",
      ],
    },
    {
      id: 'rights',
      heading: 'FIE land use rights vs. individual ownership',
      body: [
        "Foreign-invested enterprises (FIEs) and foreign individuals interact with Vietnamese real estate through entirely different legal mechanisms, and confusing them is one of the most common errors in feasibility planning.",
        "An FIE — a Vietnamese company with foreign equity participation — can hold land use rights for the duration of its investment project, typically 50 years and renewable up to 70 years for projects with strong economic justification. The land use rights can be allocated (with one-off payment), leased (with annual or one-off rental), or assigned from a Vietnamese land user. The FIE owns improvements, structures, and any housing constructed on the land. Crucially, the FIE may sell or lease housing it has constructed, subject to the project's sales licence and the foreign-ownership caps discussed below.",
        "A foreign individual, by contrast, cannot hold Vietnamese residential land use rights in their own name. They can own the dwelling unit (apartment or qualifying landed house) for an initial 50-year term, renewable once. The land beneath the unit remains held by the developer for the duration of the project. This is why every foreign individual purchase ultimately depends on the developer holding clean, current land use rights — the foreign owner's title is, in a real sense, derivative of the developer's.",
        "For investment structures that combine FIE-held land with onward sale to foreign individuals — most mixed-use residential developments — both layers must work. I have seen projects where the FIE's land allocation was procedurally defective in ways that did not surface until foreign apartment buyers tried to register their LURCs years later. The defect was the developer's, but the loss landed on the buyers.",
      ],
      pullQuote:
        "Every foreign individual apartment owner in Vietnam holds title that is, in a real sense, derivative of the developer's land use rights. Defects upstream eventually land downstream.",
    },
    {
      id: 'stages',
      heading: 'The six project-licensing stages',
      body: [
        "Vietnamese real estate projects move through a defined licensing sequence. Each stage gates the next; skipping or paralleling stages, where it appears commercially attractive, almost always creates exposure.",
        "**Stage 1 — In-principle approval (chủ trương đầu tư).** The provincial People's Committee (or, for very large projects, the Prime Minister) approves the investment in principle, confirming the project is consistent with the local master plan and zoning. This is the gating decision; without it, no subsequent step can proceed. Timeline: 3-9 months depending on project scale and provincial responsiveness.",
        "**Stage 2 — Investment Registration Certificate (IRC).** The IRC is the FIE's formal investment licence, issued by the provincial Department of Planning and Investment. It identifies the investor, the project, the registered capital, the implementation schedule, and any conditions attached to the approval. Timeline: 15-45 working days from complete dossier.",
        "**Stage 3 — Land allocation or lease.** Depending on the project category, the state allocates land (with land-use-rights payment) or leases land (with annual or one-off rental). The LURC issues in the FIE's name. Timeline: 3-12 months, often the slowest stage, especially where current users must be relocated.",
        "**Stage 4 — Construction permit.** Issued by the Department of Construction once the detailed design is approved and all environmental and fire-safety clearances are in place. Construction cannot legally commence until the permit issues. Timeline: 1-3 months from complete design package.",
        "**Stage 5 — Foreign-sales approval and sales licence.** For residential projects intended for sale (in whole or part) to foreign individuals, the developer must obtain specific approval that designates the project as eligible for foreign sales. The sales licence (issued under the Law on Real Estate Business 2023) authorises the developer to enter sale-and-purchase agreements and accept payment. Timeline: 1-3 months at construction milestones.",
        "**Stage 6 — Handover and post-completion LURC issuance to buyers.** Once the project is complete and accepted, the developer applies for individual LURCs in the names of unit purchasers. This stage is procedurally administrative but commercially critical: the LURC is the only definitive evidence of title, and delays here are the most-litigated post-handover issue in the Vietnamese residential market.",
      ],
    },
    {
      id: 'foreign-cap',
      heading: 'Caps on residential foreign sales',
      body: [
        "Vietnamese law caps foreign individual ownership at 30% of apartments in any single building and 250 separate landed houses in any one ward. The caps are tracked by the local Department of Construction and are applied on a first-registered basis — once the cap is reached, no further foreign purchases can register, regardless of contractual commitments.",
        "For developers, the cap creates two operational issues. First, the marketing and sales programme must respect the cap at the building or ward level, meaning sales velocity needs to be tracked by buyer nationality. I have seen developers oversell to foreign buyers in highly desirable projects and then face costly contract restructuring or refunds at the registration stage.",
        "Second, a cap close to exhaustion can devalue remaining foreign-saleable inventory unpredictably, because foreign buyers know that residual capacity is a competitive asset. Pricing strategy needs to anticipate this dynamic from launch, not patch it on the fly.",
        "For foreign individual buyers, the cap is the single most common reason a planned purchase fails at the registration stage. I verify cap status with the relevant Department of Construction before any deposit on every purchase I act on. The verification takes a few days and prevents most preventable failures.",
      ],
    },
    {
      id: 'off-plan',
      heading: 'Off-plan sale risks and escrow rules',
      body: [
        "Off-plan sales — the developer takes deposits and progress payments before completion — are universal in Vietnamese residential development and are the source of the largest disputes. The Law on Real Estate Business 2023 strengthened the regulatory framework but did not eliminate developer-failure risk.",
        "Three statutory protections matter for foreign buyers. First, off-plan units may only be sold once the developer has obtained foundation completion certification and a bank guarantee from a qualifying credit institution covering the developer's obligations. Verifying the existence and scope of the bank guarantee should be a non-negotiable due-diligence step.",
        "Second, payment milestones are capped: the developer may take no more than 30% before handover, and no more than 70% before LURC issuance to the buyer (the cap is 50% for FIE developers in some configurations). Foreign buyers should refuse any contractual schedule that exceeds these caps and treat aggressive front-loading as a red flag.",
        "Third, the law requires standardised SPA forms and clear delivery commitments. In practice, the standard form is heavily developer-friendly and the most-negotiated provisions are around delay remedies, specification changes, and force-majeure clauses. I have litigated multiple disputes where developers attempted to invoke force majeure for ordinary commercial difficulties — Vietnamese courts have generally rejected those attempts but the litigation itself takes 12-24 months.",
      ],
    },
    {
      id: 'environment',
      heading: 'Environmental clearance and zoning',
      body: [
        "Environmental clearance in Vietnam has tightened materially since the Law on Environmental Protection 2020 came into effect, with implementing decrees from 2022 onwards. Most large residential, commercial, and industrial projects now require an Environmental Impact Assessment (EIA) approved by the Ministry of Natural Resources and Environment or its provincial counterpart, with public consultation steps that did not exist in earlier rounds of the law.",
        "EIA approval is a stage-3 (land allocation) prerequisite for most projects. EIA findings can result in design changes, additional mitigation requirements, or — rarely — refusal. Investors should treat the EIA process as a substantive risk on the timeline, not a procedural rubber-stamp. I have seen EIA-driven design changes add six to nine months to schedules where the developer's original design did not anticipate the new public-consultation requirements.",
        "Zoning compliance is the related risk. Vietnamese zoning is set by provincial master plans that are updated on multi-year cycles. A site that was zoned residential when the developer acquired the option may be re-zoned mixed-use or commercial by the time the IRC is sought, requiring redesign or — at the limit — re-acquisition. Zoning verification should be repeated at each major project stage, not done once at feasibility.",
      ],
    },
    {
      id: 'disputes',
      heading: 'Dispute landscape and exits',
      body: [
        "Real estate disputes in Vietnam concentrate in three categories: developer-buyer disputes (delivery delays, specification mismatches, LURC issuance failures); FIE-state disputes (land recovery, rental adjustments, regulatory licence withdrawals); and joint-venture disputes between foreign investor and Vietnamese partner.",
        "Developer-buyer disputes are usually litigated rather than arbitrated, because individual SPAs typically default to court jurisdiction. The most-effective protection is a thorough SPA review at signing, with specific attention to delay remedies, defect-remediation obligations, and the LURC-issuance commitment.",
        "FIE-state disputes are best addressed at the structuring stage, by routing the investment through a jurisdiction whose Bilateral Investment Treaty with Vietnam offers strong protections — investor-state arbitration, fair-and-equitable-treatment standards, and protection against unjust expropriation. I provide a BIT-structuring memo for every meaningful real estate investment.",
        "Joint-venture disputes follow the pattern I describe in my Top 5 Legal Risks article: the outcome correlates with the quality of the original shareholders' agreement. For real-estate JVs in particular, the most important provisions are around capital calls (developments routinely require additional capital that one partner may not be able or willing to fund), exit timing (real estate JVs have natural exit points at sales-completion that need to be drafted), and reserved matters (changes to the project plan should require both partners' consent).",
      ],
    },
    {
      id: 'practical',
      heading: 'Pre-development legal checklist',
      body: [
        "The checklist below covers the legal work I recommend before any meaningful capital is committed to a Vietnamese real estate project. The cost is modest against the size of typical investments and prevents most preventable failures.",
        "Each item below typically requires one to two weeks of focused work; the full pre-development review for a meaningful project is six to ten weeks and should overlap with — not follow — commercial feasibility.",
      ],
    },
  ],
  keyTakeaways: [
    'The Land Law 2024 (Law 31/2024/QH15), Law on Housing 2023, and Law on Real Estate Business 2023 form the post-2024 framework — feasibility done under the old law should be re-validated.',
    'FIEs and foreign individuals interact with Vietnamese real estate through different legal mechanisms; confusing them is a common feasibility error.',
    'The six-stage licensing sequence (in-principle approval, IRC, land allocation, construction permit, sales licence, LURC issuance) gates each subsequent step.',
    'Foreign-ownership caps (30% per building, 250 landed houses per ward) are tracked by the Department of Construction and are first-registered.',
    'Off-plan sales are protected by foundation completion, bank guarantees, and capped payment milestones — verify all three before any deposit.',
    'Environmental clearance and zoning compliance now carry material timeline risk; treat them as substantive, not procedural.',
    'Route material investments through a BIT-protective jurisdiction and treat JV documentation as load-bearing structure, not boilerplate.',
  ],
  practicalChecklist: {
    title: 'Pre-Development Legal Review',
    items: [
      'Site-level land use rights verification: current LURC holder, term remaining, encumbrances, any state-recovery flags',
      'Provincial master-plan and zoning verification, including any pending re-zoning consultation',
      'In-principle approval feasibility memo, including identification of any sectoral conditions or foreign-cap limits',
      'IRC application strategy: charter capital adequacy, implementation schedule, project conditions',
      'Land allocation vs. lease analysis: cost, term, renewability, exit implications',
      'Environmental Impact Assessment scoping: required studies, public-consultation steps, likely mitigation requirements',
      'Construction permit pathway: design approvals, fire-safety clearance, utilities connections',
      'Sales licence pathway for residential or mixed-use projects, including foreign-sales approval feasibility',
      'BIT-compliant investment structure analysis for political-risk protection',
      'JV documentation drafting (where applicable): capital calls, deadlock, reserved matters, exit',
      'Standard SPA review against Law on Real Estate Business 2023 requirements',
      'Tax-structure review: corporate income tax, VAT, land use rights tax, transfer pricing',
    ],
  },
  authorNote:
    "I act for foreign developers, funds, and individual investors across the Vietnamese real estate market. For confidential review of a specific project or acquisition, contact our office.",
  relatedArticles: [
    'buying-property-vietnam-foreigner',
    'top-legal-risks-foreign-investors-vietnam',
    'vietnam-manufacturing-employment-law',
  ],
  relatedPracticeAreas: ['land-and-property', 'corporate-and-commercial'],
}

// ============================================================================
// 2. VIETNAM MANUFACTURING: EMPLOYMENT LAW ESSENTIALS
// ============================================================================

const vietnamManufacturing: ArticleData = {
  slug: 'vietnam-manufacturing-employment-law',
  title: 'Vietnam Manufacturing: Employment Law Essentials for Foreign Operators',
  date: '2026-04-18',
  category: 'Industry-Specific',
  excerpt:
    'A practitioner guide to running a Vietnamese manufacturing workforce — Labour Code 2019, work permits, mandatory benefits, trade unions, and large-workforce termination — for FIE operators.',
  heroImageId: 'articleHeroInvestor',
  readTime: '15 min',
  tableOfContents: [
    { id: 'framework', label: 'Labour Code 2019 framework for FIE manufacturers' },
    { id: 'work-permits', label: 'Work permits for foreign managers and experts' },
    { id: 'hiring', label: 'Hiring the Vietnamese workforce' },
    { id: 'benefits', label: 'Mandatory social, health, and unemployment insurance' },
    { id: 'unions', label: 'Trade-union recognition and collective agreements' },
    { id: 'termination', label: 'Termination of large workforces' },
    { id: 'safety', label: 'Operational compliance: hours, shifts, and OSH' },
    { id: 'practical', label: 'Operational HR-legal checklist' },
  ],
  intro: [
    "Vietnamese manufacturing has become the default Plus-One in Asian supply-chain strategy. Foreign-invested manufacturing now anchors entire industrial parks across Bac Ninh, Hai Phong, Binh Duong, Long An, and Dong Nai, and the workforce that builds and runs these factories is the most legally regulated population in the Vietnamese economy. The companies that operate well under that regulation have a sustainable cost advantage; the companies that improvise face strikes, regulatory penalties, and the kind of reputational issues that travel quickly through customer audits.",
    "I represent foreign manufacturers across the electronics, garments, footwear, automotive components, and food-processing sectors. The questions that come to me are operational: a shift-pattern question that turns out to be an overtime-cap issue, a redundancy plan that turns out to require trade-union consultation, a senior expat hire who needs a work permit by Monday. This article covers the body of law every FIE manufacturer must know, with emphasis on the points where statute and operational reality interact.",
    "The framework is the Labour Code 2019 (Law 45/2019/QH14), which took effect on 1 January 2021 and represented the largest restructuring of Vietnamese employment law in two decades. Implementing decrees and circulars have been issued and refined throughout 2021-2025; operational practice continues to evolve.",
  ],
  sections: [
    {
      id: 'framework',
      heading: 'Labour Code 2019 framework for FIE manufacturers',
      body: [
        "The Labour Code 2019 governs employment relationships, working time, wages, leave, termination, dispute resolution, and the trade-union framework. It applies in full to FIEs and to Vietnamese workers in FIEs; certain provisions apply differently to foreign workers in Vietnam. The implementing framework is dense — Decree 145/2020 on working time and leave, Decree 152/2020 on foreign workers, Decree 12/2022 on labour penalties, and a series of MOLISA circulars that fill the operational detail.",
        "Three structural features of the 2019 Code matter most for manufacturing operations. First, the Code clarified and tightened the definition of an employment relationship — informal or undocumented arrangements that escaped scrutiny under the old law are now harder to defend. Second, the Code introduced the concept of internal labour rules with mandatory registration for any employer with 10 or more employees, meaning the rule book itself is now a regulated document. Third, the Code expanded employee protections in collective bargaining and dispute resolution, including the introduction of independent worker representative organisations alongside the traditional Vietnam General Confederation of Labour structure.",
        "For FIE manufacturers, the practical implication is that compliance is now a documented, registered, and audit-ready exercise rather than a series of internal practices. Foreign customers — particularly large brands subject to their own ESG and supply-chain audit obligations — increasingly request copies of registered internal labour rules, collective labour agreements, and social-insurance contribution certificates as part of supplier qualification. Compliance has become commercial.",
      ],
    },
    {
      id: 'work-permits',
      heading: 'Work permits for foreign managers and experts',
      body: [
        "Decree 152/2020/ND-CP (with significant amendments via Decree 70/2023) governs the work-permit regime for foreign workers. The starting position is that every foreign worker in Vietnam needs a work permit, with narrow exceptions for movement of executives at director level for short periods, certain experts performing emergency repairs, and a small number of treaty-based exemptions.",
        "The four standard categories foreign manufacturers rely on are: managers (department head or above with documented management experience), executive directors (typically the legal representative of the Vietnamese entity), experts (university degree plus three years of relevant experience, or twelve years of experience in lieu of formal education), and skilled technical workers (one year of relevant training plus three years of relevant experience).",
        "The application process has three substantive steps that must be taken in sequence. First, the FIE submits a labour-need report to the provincial People's Committee at least 15 days before the expected hire, demonstrating that the position cannot be filled by a Vietnamese worker. Second, on approval, the FIE submits the work-permit application to the provincial Department of Labour, Invalids and Social Affairs (DOLISA), with the supporting documentation (degree certificates, criminal record check, health certificate, photographs, and corporate documents). Third, on issuance of the permit, the foreign worker applies for the appropriate visa or temporary residence card.",
        "The most-common operational pitfall is timing. The labour-need report alone takes 30-45 days in most provinces; the full chain to a working employee on the ground is realistically 60-90 days. Manufacturers planning a senior expat hire should start the work-permit process before the offer letter, not after. The second-most-common pitfall is documentation: foreign degrees and experience certificates must be apostilled (or consularly legalised for non-Hague countries) and translated into Vietnamese by a sworn translator. The chain takes 2-4 weeks and cannot be compressed.",
      ],
      pullQuote:
        "The work-permit process for a senior expat hire takes 60-90 days from start to working employee on the ground. Start it before the offer letter, not after.",
    },
    {
      id: 'hiring',
      heading: 'Hiring the Vietnamese workforce',
      body: [
        "Vietnamese law recognises three principal contract types: indefinite-term, fixed-term (now capped at 36 months under the 2019 Code), and seasonal/specific-task contracts (under 12 months). Indefinite-term contracts are mandatory once an employee has been employed on two consecutive fixed-term contracts and the employer wishes to continue the relationship — a manufacturer cannot indefinitely roll fixed-term contracts to avoid indefinite-term commitment.",
        "Probation periods are tightly regulated. The 2019 Code caps probation at 180 days for executive positions, 60 days for positions requiring intermediate vocational training or above, 30 days for positions requiring basic vocational training, and 6 working days for other positions. During probation, either side may terminate without cause and without severance. After probation, the full Labour Code protections apply.",
        "Manufacturing roles tend to fall into the 6-day or 30-day probation categories, which is short by international standards. Operational induction and basic training programmes need to be designed around the actual probation window. Many of the wrongful-dismissal claims I have litigated involve manufacturers who attempted to extend probation informally or who terminated during a 'probation' that had actually lapsed under the statutory cap.",
        "Internal labour rules must be registered with DOLISA for any employer with 10 or more employees. The rules cover working time, rest, breaks, order at the workplace, occupational safety, asset protection, conduct of disciplinary proceedings, and prevention of harassment. A manufacturer cannot impose a sanction or discipline that is not foreshadowed in registered internal labour rules — the rules are the substantive ceiling on disciplinary authority.",
      ],
    },
    {
      id: 'benefits',
      heading: 'Mandatory social, health, and unemployment insurance',
      body: [
        "Vietnamese employees are entitled to compulsory social insurance, health insurance, and unemployment insurance, with contributions split between employer and employee. The current rates (2025-2026) are approximately: social insurance 17.5% employer / 8% employee; health insurance 3% employer / 1.5% employee; unemployment insurance 1% employer / 1% employee — together approximately 21.5% employer contribution and 10.5% employee deduction on the contribution base salary.",
        "Three operational issues recur in manufacturing. First, the contribution base is capped at 20 times the regional minimum wage, which limits exposure for higher-paid workers but is a binding constraint for senior hires. Second, the contribution rate and base must be reported and remitted monthly; arrears trigger administrative penalties and personal liability for directors. I have advised on multiple cases where social-insurance arrears emerged in M&A diligence and required substantial settlement payments before closing.",
        "Third, the social-insurance scheme is now mandatory for foreign workers in Vietnam under most conditions. Foreign workers with valid work permits are covered for retirement and survivor benefits, with contributions starting from 2022. Employers should confirm that their payroll systems handle foreign-worker social insurance correctly — many older payroll systems do not.",
        "Beyond the mandatory schemes, manufacturers commonly provide voluntary benefits that have become market-standard: meal subsidies (often a separate line item on the payroll, with tax advantages up to a cap), transport allowances, attendance bonuses, and 13th-month or Lunar New Year (Tet) bonuses. The Tet bonus is not strictly mandatory but is treated as such in market practice, and failure to pay regularly causes labour unrest.",
      ],
    },
    {
      id: 'unions',
      heading: 'Trade-union recognition and collective agreements',
      body: [
        "Vietnam's trade-union framework is governed by the Trade Union Law 2012 and the relevant provisions of the Labour Code 2019. The historical position is that the Vietnam General Confederation of Labour (VGCL) is the only authorised national trade-union body, with grassroots units in each enterprise. The Labour Code 2019 introduced the concept of independent worker representative organisations alongside VGCL units, and implementing decrees in 2024-2025 have begun fleshing out the registration regime — though independent organisations remain rare in practice.",
        "Manufacturers above a threshold size (effectively any meaningful FIE manufacturer) will have a VGCL grassroots unit. The employer must allow the unit to operate, deduct union dues from member wages on the unit's behalf, and contribute 2% of the wage fund to union activities. The contribution is a real cost line item and must be budgeted.",
        "Collective labour agreements (CLAs) are negotiated between the trade-union unit and the employer and typically cover wages, working time, leave, social benefits, occupational safety, and dispute resolution. A CLA cannot reduce statutory protections but can — and almost always does — provide enhancements above statutory minimums. CLAs are registered with DOLISA and are publicly available. Foreign customers conducting supplier audits typically request CLAs as part of qualification.",
        "Strike action is legal in Vietnam in defined circumstances after a defined procedure (registration, mediation, vote). In practice, most labour disputes resolve before strike, but wildcat strikes — strikes outside the legal procedure — do occur, particularly in lower-wage sectors and during Tet. The legal response to a wildcat strike is constrained: the employer cannot summarily discipline striking workers, and the regulatory expectation is mediation through DOLISA and the trade-union unit. Manufacturers with active labour-relations programmes — regular communication, transparent grievance handling, predictable bonus practices — have markedly fewer wildcat-strike incidents.",
      ],
    },
    {
      id: 'termination',
      heading: 'Termination of large workforces',
      body: [
        "Termination is the area where Vietnamese employment law diverges most sharply from common-law expectations. There is no concept of at-will employment. Every termination — individual or collective — must rest on one of a defined list of statutory grounds: employer-side (restructuring, technological change, mergers, economic difficulty, force majeure), employee-side (defined misconduct, repeated underperformance, unauthorised absence), or mutual agreement.",
        "For large-workforce reductions in manufacturing — closure of a production line, relocation between provinces, automation-driven redundancy — the relevant grounds are typically restructuring or technological change. The procedure is rigorous. The employer must prepare a labour-utilisation plan covering retraining, reassignment, and severance; consult with the trade-union unit; notify DOLISA at least 30 days in advance; and pay severance at one month per year of service for service from 2009 onwards (earlier service triggers a different calculation under the unemployment-insurance scheme).",
        "I have advised on multiple large-scale workforce reductions, including factory closures with workforces in the hundreds and low thousands. The legal cost of doing it correctly — severance, notice, retraining contributions — is substantial. The legal cost of doing it incorrectly is greater: wrongful-dismissal claims compound across the affected workforce, regulatory penalties accrue, and the customer-audit consequences can affect the entire business.",
        "Two operational principles I recommend. First, treat workforce reduction as a 90-day project, not a 30-day notice period. The consultation, planning, and procedural steps require time, and time pressure produces procedural defects. Second, document everything. The labour-utilisation plan, the consultation minutes, the DOLISA notification, the severance calculations, the offers made and accepted or refused — all of it becomes evidence if later challenged. Clean documentation is the single most-effective defence against wrongful-dismissal claims.",
      ],
    },
    {
      id: 'safety',
      heading: 'Operational compliance: hours, shifts, and OSH',
      body: [
        "The Labour Code 2019 caps regular working time at 8 hours per day and 48 hours per week, with overtime capped at 40 hours per month and 200 hours per year (300 hours in specified sectors including textiles, footwear, electronics, and seafood processing — many manufacturing categories qualify for the higher cap). Exceeding overtime caps is a common audit finding in seasonal-demand industries and triggers administrative penalties plus potential customer-audit consequences.",
        "Shift work is permitted but tightly regulated. Night shift (10pm-6am) requires a 30% wage premium; overtime night shift requires a 30% premium on top of the overtime rate. Female workers who are pregnant from the seventh month or with children under 12 months may not be assigned to night shift. Internal labour rules and the CLA must reflect these constraints precisely.",
        "Occupational safety and hygiene is governed by the Law on Occupational Safety and Hygiene 2015 and its implementing decrees. The framework requires hazard identification, risk assessment, periodic medical examinations for workers in hazardous environments, supply of personal protective equipment, and reporting of workplace accidents within statutory timeframes. Manufacturers must register their occupational-safety programmes with DOLISA and renew on the prescribed cycle.",
        "Workplace accident reporting is the area where I see the most operational error. Serious accidents must be reported to DOLISA, the social-insurance authority, and the labour inspectorate within 24 hours; less serious accidents within longer windows. Failure to report on time triggers penalties and complicates social-insurance claims by the affected worker. Manufacturers should have a written accident-response protocol that aligns with statutory reporting and is rehearsed by the operations team.",
      ],
    },
    {
      id: 'practical',
      heading: 'Operational HR-legal checklist',
      body: [
        "The checklist below covers the body of work every FIE manufacturer should have current and audit-ready. It is the work I review when conducting compliance audits for international clients ahead of customer or M&A diligence.",
      ],
    },
  ],
  keyTakeaways: [
    'The Labour Code 2019 plus Decree 145/2020 (working time), Decree 152/2020 (foreign workers), and the Law on Occupational Safety and Hygiene 2015 form the operational compliance core.',
    'Work-permit applications take 60-90 days end-to-end; start before the offer letter, not after.',
    'Internal labour rules and CLAs must be registered with DOLISA and define the substantive ceiling on disciplinary authority.',
    'Mandatory social, health, and unemployment insurance contributions total approximately 21.5% employer / 10.5% employee on capped base; arrears trigger administrative and director liability.',
    'Trade-union recognition is mandatory for FIE manufacturers; the 2% wage-fund contribution to VGCL is a real budget line.',
    'Large-workforce termination requires labour-utilisation plan, trade-union consultation, 30-day DOLISA notification, and rigorous documentation.',
    'Overtime caps (200 or 300 hours/year by sector) and night-shift premiums are common audit findings and must be tracked precisely.',
  ],
  practicalChecklist: {
    title: 'FIE Manufacturer HR-Legal Audit',
    items: [
      'Internal labour rules registered with DOLISA and current against Labour Code 2019 amendments',
      'Collective labour agreement registered, in force, and aligned with operational practice',
      'Employment contract templates (indefinite, fixed-term, probation) reviewed against current law',
      'Probation-period management process: probation length tracked, end-of-probation decisions documented',
      'Work-permit register for foreign workers: validity, conditions, renewal calendar',
      'Social, health, and unemployment insurance contribution reconciliation, including foreign-worker coverage',
      'Tet bonus and 13th-month bonus policy documented and consistently applied',
      'Trade-union dues deduction and 2% wage-fund contribution remittance current',
      'Working-time and overtime tracking system: daily, monthly, annual caps respected',
      'Night-shift roster review against pregnancy and child-age restrictions',
      'OSH programme registered, hazard assessments current, PPE supply documented',
      'Workplace accident reporting protocol aligned with 24-hour and longer statutory windows',
      'Termination and disciplinary action procedure documented and consistently applied',
      'Foreign-customer audit pack ready: registered rules, CLA, insurance certificates, OSH records',
    ],
  },
  authorNote:
    "I act for FIE manufacturers across electronics, garments, footwear, automotive, and food-processing sectors. For confidential review of a specific operational, restructuring, or compliance question, contact our office.",
  relatedArticles: [
    'top-legal-risks-foreign-investors-vietnam',
    'vietnam-real-estate-foreign-investment',
    'due-diligence-checklist-vietnam',
  ],
  relatedPracticeAreas: ['labor-and-employment', 'corporate-and-commercial'],
}

// ============================================================================
// 3. VIETNAM FINTECH REGULATIONS
// ============================================================================

const vietnamFintech: ArticleData = {
  slug: 'vietnam-fintech-regulations',
  title: 'Vietnam Fintech Regulations: What Foreign Companies Should Know',
  date: '2026-04-12',
  category: 'Industry-Specific',
  excerpt:
    'Licensing, foreign-ownership caps, data localisation, sandbox programmes, and AML/CFT obligations for foreign fintech companies entering the Vietnamese market.',
  heroImageId: 'articleHeroInvestor',
  readTime: '12 min',
  tableOfContents: [
    { id: 'landscape', label: 'The regulatory landscape' },
    { id: 'payments', label: 'Licensing for payment intermediaries' },
    { id: 'lending', label: 'Lending licences: banking vs. consumer finance' },
    { id: 'data', label: 'Data localisation and personal data protection' },
    { id: 'ownership', label: 'Foreign-ownership caps in financial services' },
    { id: 'sandbox', label: 'Sandbox programmes' },
    { id: 'aml', label: 'AML/CFT obligations' },
  ],
  intro: [
    "Vietnamese fintech is one of the fastest-growing markets in Southeast Asia, driven by rapid smartphone penetration, an under-banked but financially-engaged population, and policy support for digital payments and financial inclusion. Foreign fintech companies — payments, lending, wealth, insurance, and infrastructure — are entering aggressively, often via local joint ventures, equity investments in Vietnamese fintechs, or direct establishment.",
    "The regulatory environment is, however, distinctive. Vietnamese financial-services regulation is built around licensing categories that do not always map cleanly onto fintech business models, and the State Bank of Vietnam (SBV) and Ministry of Finance (MOF) have moved decisively in recent years to bring fintech activities into existing licensing frameworks rather than creating bespoke regimes. Companies that take Vietnamese fintech regulation as a check-the-box exercise tend to discover, late, that key activities are unlicensable as configured.",
    "This article covers the regulatory points I am most often asked about by foreign fintech clients: licensing, foreign-ownership caps, data localisation, sandbox programmes, and AML/CFT. The framework is current to early 2026 and reflects the personal-data protection developments of 2025.",
  ],
  sections: [
    {
      id: 'landscape',
      heading: 'The regulatory landscape',
      body: [
        "The two principal regulators of Vietnamese fintech are the State Bank of Vietnam (SBV), with authority over banking, payments, and credit activities, and the Ministry of Finance (MOF), with authority over securities, insurance, and certain capital-markets activities. The Ministry of Information and Communications (MIC) regulates the underlying digital infrastructure and personal-data protection, with overlapping authority over fintech that handles personal data.",
        "Two structural features matter. First, Vietnamese financial-services regulation is licence-based, not activity-based: a company is authorised to do a specific list of regulated activities under a specific licence, and other activities are not authorised regardless of how the company describes them. The implication is that fintech business models that span multiple regulated activities (payments + lending + investment products) typically require multiple licences, often held by separate entities.",
        "Second, the regulatory pipeline matters. Vietnamese fintech regulation has been actively updated since 2020 with new decrees on payment intermediaries, e-wallets, peer-to-peer lending, crypto-related activities, and data protection. Several legislative developments are pending in 2026, including a long-awaited fintech-specific decree consolidating sandbox arrangements and clarifying treatment of digital-only banks. Companies entering the market should plan for regulatory change rather than assume the current state is fixed.",
      ],
    },
    {
      id: 'payments',
      heading: 'Licensing for payment intermediaries',
      body: [
        "Payment intermediary services — broadly, services that facilitate payment between a payer and payee without the intermediary holding a banking licence — are governed primarily by Decree 101/2012/ND-CP and Decree 80/2016/ND-CP, with subsequent amendments and SBV circulars. The decrees identify several payment-intermediary categories, of which the commercially significant are payment gateway services, electronic payment-support services, and e-wallet services.",
        "An e-wallet licence is the most commonly sought fintech licence in Vietnam. Licensing requires a Vietnamese-incorporated entity (a foreign-invested LLC or JSC) with minimum charter capital of VND 50 billion (approximately USD 2 million) fully contributed, qualified key personnel (with specified financial-services experience), an approved technology system that meets SBV's information-security standards, and a partnership with a licensed Vietnamese commercial bank for the underlying settlement and customer-fund safekeeping.",
        "Operational rules for e-wallets are restrictive. Customer balances are capped (currently VND 100 million per individual e-wallet for general use), monthly transaction volumes are capped, and customer funds must be held in a segregated account at the partner bank — not on the wallet operator's balance sheet. KYC requirements have tightened progressively, with full identity verification (eKYC) now standard for all but the smallest accounts.",
        "The licensing process takes 6-9 months from a complete application; the build-up to a complete application (entity establishment, charter capital contribution, technology readiness, partner-bank arrangement, key-personnel appointments) typically takes another 6-9 months. Foreign fintechs entering by acquisition of a licensed e-wallet are common, in part because the alternative is an 18-month timeline to operations.",
      ],
      pullQuote:
        "An e-wallet licence in Vietnam is an 18-month build from feasibility to live operations. Acquisition of a licensed operator is often faster — and often the only realistic path for a foreign fintech with revenue commitments.",
    },
    {
      id: 'lending',
      heading: 'Lending licences: banking vs. consumer finance',
      body: [
        "Lending in Vietnam is a regulated activity that requires either a full banking licence or a consumer-finance company licence. The two pathways have very different capital, governance, and operational implications.",
        "A full commercial-banking licence allows full-spectrum lending and deposit-taking but requires charter capital of VND 3,000 billion (approximately USD 120 million), extensive governance and risk-management infrastructure, and SBV approval that has historically been granted to foreign applicants only sparingly. Foreign-bank subsidiaries and branches are an option, with their own capital and operational requirements. The full-banking path is realistic only for institutional players with regional or global banking pedigree.",
        "The consumer-finance company licence is the more common path for foreign lenders. It allows lending to individuals (consumer loans, vehicle finance, point-of-sale finance) but does not allow deposit-taking. Charter capital is VND 500 billion (approximately USD 20 million), and governance requirements are lighter than for a full bank. Several major foreign lenders operate through consumer-finance company licences, often acquired or established in joint venture with Vietnamese partners.",
        "Peer-to-peer (P2P) lending sits in a regulatory grey zone in Vietnam. SBV has indicated repeatedly that P2P lending without a licence is not authorised, but the specific licensing regime has been pending for several years. The regulatory direction in 2024-2025 has been toward including P2P platforms in a sandbox programme rather than authorising them as a standalone licensed category. Foreign P2P platforms have generally either operated through a Vietnamese licensed-lender partner, paused operations, or restructured into pure technology-services providers.",
      ],
    },
    {
      id: 'data',
      heading: 'Data localisation and personal data protection',
      body: [
        "Vietnamese personal-data protection and data-localisation rules underwent the most significant change in years with the Personal Data Protection Decree (Decree 13/2023, with major implementing developments through 2024-2025) and the implementing framework that came into full effect in 2025. The decree applies to any organisation processing personal data of Vietnamese individuals, regardless of where the organisation is established.",
        "The principal obligations are: lawful basis for processing (consent, contract, legal obligation, vital interest, public interest, legitimate interest); registration of personal-data-processing activities with the Ministry of Public Security for sensitive processing; impact assessments for high-risk processing; data-subject rights including access, correction, deletion, and objection; appointment of a personal-data-protection officer for organisations processing data at scale; and notification of breaches within statutory timeframes.",
        "Cross-border transfer of personal data is permitted but requires either consent of the data subject, contractual safeguards, or an approved cross-border transfer impact assessment registered with the regulator. In addition, the Cybersecurity Law 2018 imposes specific data-storage requirements: certain categories of data — particularly data on Vietnamese users of major online platforms — must be stored on servers within Vietnam, with conditions varying by sector and platform type. Implementing decrees and sub-regulations have refined these requirements through 2024-2025.",
        "For fintech specifically, the practical implication is that customer-data architecture must be designed for Vietnamese residency from the outset. Foreign fintech entrants commonly assume a regional cloud architecture (often Singapore-hosted) is sufficient — for activities involving Vietnamese-user personal and financial data, that assumption is increasingly wrong. I conduct a data-architecture review as part of every fintech market-entry engagement.",
      ],
    },
    {
      id: 'ownership',
      heading: 'Foreign-ownership caps in financial services',
      body: [
        "Foreign-ownership caps in Vietnamese financial services are among the strictest in the regulated economy. The headline numbers: foreign ownership in Vietnamese commercial banks is capped at 30% in aggregate (with strategic-investor allocations available within the cap); foreign ownership in securities companies is generally capped at 49% with full foreign ownership available in certain categories; foreign ownership in insurance companies is generally permitted up to 100%.",
        "For fintech-specific licences (e-wallet, payment intermediary, consumer finance), the position has been less clear historically. SBV practice has generally permitted full foreign ownership of payment intermediaries and consumer-finance companies, but there have been periodic indications that caps may be imposed on payment-intermediary entities at 49% — discussions that have not crystallised into rules but bear watching.",
        "The practical implication for foreign fintech entrants is that ownership-structure assumptions must be tested at the licensing stage rather than assumed from foreign-investment-law general rules. I provide a foreign-ownership memorandum as part of every fintech market-entry engagement, covering both the headline cap and any sub-sectoral conditions that may apply.",
      ],
    },
    {
      id: 'sandbox',
      heading: 'Sandbox programmes',
      body: [
        "Vietnam has been working toward a comprehensive fintech sandbox programme for several years, with the SBV publishing draft frameworks at various points and individual sectoral sandbox arrangements operating in payments and credit-scoring. As of early 2026, a consolidated sandbox decree is pending but not enacted; sector-specific sandbox arrangements remain the operational reality.",
        "The current sandbox arrangements are most useful for fintech models that do not fit cleanly into existing licensing categories — credit-scoring services, supply-chain finance platforms, certain e-KYC providers, and selected blockchain-based applications. Acceptance into a sandbox typically requires demonstration of innovation, consumer-protection mechanisms, and exit-from-sandbox commitments.",
        "Foreign fintechs should treat sandbox participation as a commercial bridge, not a destination. The sandbox provides regulatory cover for testing and limited deployment but does not substitute for full licensing once the model proves out. Companies that build operations around sandbox status without a clear pathway to full licensing tend to face awkward conversations with the regulator at sandbox renewal.",
      ],
    },
    {
      id: 'aml',
      heading: 'AML/CFT obligations',
      body: [
        "Anti-money-laundering and counter-financing-of-terrorism obligations apply to all Vietnamese financial institutions and licensed payment intermediaries, governed by the Law on Anti-Money Laundering 2022 (replacing the 2012 law) and implementing decrees. The framework is broadly aligned with FATF standards, with progressive tightening since 2022.",
        "The principal obligations are: customer due diligence (CDD) on onboarding, with enhanced due diligence for high-risk customers including politically exposed persons and customers from high-risk jurisdictions; transaction monitoring with thresholds and red-flag indicators specified by SBV; suspicious-transaction reporting to the SBV's Anti-Money Laundering Department; record-keeping for a minimum of five years; and appointment of a designated AML compliance officer reporting to a board-level governance function.",
        "For fintechs, two operational issues recur. First, eKYC implementations must satisfy CDD requirements that were originally designed for in-person onboarding; the 2023-2024 SBV circulars on eKYC clarified the acceptable architecture but enforcement is still evolving. Second, transaction-monitoring systems must be calibrated to Vietnamese-specific red flags (cross-border patterns, certain merchant categories, unusual account behaviours) rather than imported wholesale from foreign systems. AML programme design is one of the items I review most frequently for foreign fintech clients establishing in Vietnam.",
      ],
    },
  ],
  keyTakeaways: [
    'Vietnamese fintech regulation is licence-based: business models spanning payments, lending, and investment typically require multiple licences across separate entities.',
    'E-wallet licensing requires VND 50 billion charter capital, technology approval, partner-bank arrangement, and 6-9 months of SBV review on a complete application.',
    'Lending requires either a full banking licence (VND 3,000 billion capital) or a consumer-finance company licence (VND 500 billion); P2P lending remains unlicensed and operates in a sandbox-style regime.',
    'Personal Data Protection Decree 13/2023 and Cybersecurity Law data-localisation rules require Vietnamese-resident data architecture for most fintech activities.',
    'Foreign-ownership caps vary by sub-sector: 30% in banks, generally 49% in securities, generally 100% in insurance and most fintech licences — but verify at licensing stage.',
    'Sandbox arrangements provide a bridge for non-fitting models but are not a destination; full licensing remains the strategic objective.',
    'AML/CFT obligations under the 2022 law require CDD, transaction monitoring, suspicious-transaction reporting, and Vietnamese-calibrated red-flag systems.',
  ],
  authorNote:
    "I advise foreign fintech entrants on licensing, structuring, and Vietnamese regulatory engagement, often alongside foreign financial-services counsel. For confidential discussion of a specific market-entry plan, contact our office.",
  relatedArticles: [
    'top-legal-risks-foreign-investors-vietnam',
    'due-diligence-checklist-vietnam',
    'vietnam-manufacturing-employment-law',
  ],
  relatedPracticeAreas: ['corporate-and-commercial'],
}

// ============================================================================
// EXPORT
// ============================================================================

export const industryArticles: Record<string, ArticleData> = {
  'vietnam-real-estate-foreign-investment': vietnamRealEstate,
  'vietnam-manufacturing-employment-law': vietnamManufacturing,
  'vietnam-fintech-regulations': vietnamFintech,
}
