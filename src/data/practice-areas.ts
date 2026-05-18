import type { ImageId } from '@/lib/images'
import type { ProblemItem } from '@/components/practice-area/ProblemStatement'
import type { PersonaItem } from '@/components/practice-area/WhoIHelp'
import type { ProcessStep } from '@/components/practice-area/ProcessTimeline'
import type { ServiceGroup } from '@/components/practice-area/ServicesAccordion'
import type { LegalCode } from '@/components/practice-area/LegalFrameworkBox'

export interface FeaturedCaseRef {
  slug: string
  title: string
  country: string
  flag: string
  area: string
  outcome: string
  matterValue?: string
  imageId?: ImageId
}

export interface PracticeAreaData {
  title: string
  tagline: string
  introTagline: string
  heroImageId: ImageId
  metaDescription: string

  introduction: string[]
  whyItMatters: string[]
  keyLegalFramework: LegalCode[]
  problemStatements: ProblemItem[]
  whoIHelp: PersonaItem[]
  serviceGroups: ServiceGroup[]
  process: ProcessStep[]
  featuredCase: FeaturedCaseRef
  relatedInsightSlugs: string[]
  faq: { question: string; answer: string }[]
  cta: { headline: string; subline: string }
}

// ============================================================================
// 1. CIVIL LITIGATION
// ============================================================================

const civilLitigation: PracticeAreaData = {
  title: 'Civil Litigation',
  tagline:
    'Representing foreign clients in Vietnamese courts for contract disputes, debt recovery, tort claims, and complex civil proceedings — with the cultural fluency and procedural expertise that cross-border matters demand.',
  introTagline: 'Practice Area · Civil Litigation',
  heroImageId: 'practiceCivilLitigation',
  metaDescription:
    'International civil litigation lawyer in Vietnam representing foreign clients in contract disputes, debt recovery, tort claims, and appeals before Vietnamese courts at all levels.',

  introduction: [
    'Civil litigation in Vietnam operates under the 2015 Civil Procedure Code, a framework that draws heavily on continental European civil-law traditions and differs in fundamental ways from common-law systems familiar to clients from the United States, the United Kingdom, Australia, or Singapore. There is no jury. There is no broad pre-trial discovery as practiced in the U.S. The judge takes an active inquisitorial role in fact-finding, evidence is filed before trial rather than presented dramatically at it, and the trial itself is often shorter and less adversarial than foreign clients expect. Understanding these structural differences is the first step in setting realistic expectations and building a winning strategy.',
    "I represent foreign individuals, foreign-invested enterprises, and overseas corporations as plaintiffs and defendants in civil matters across Vietnam — at District People's Courts, Provincial People's Courts, and on appeal at the High People's Courts in Hanoi, Da Nang, and Ho Chi Minh City. My practice has handled disputes worth from a few thousand US dollars to claims exceeding several million, across sectors including manufacturing, real estate, professional services, technology, and consumer goods.",
    "What makes a foreign client's civil case in Vietnam different is not only the procedural framework but the cross-border evidentiary requirements: foreign documents must be notarised, apostilled or legalised, and translated into Vietnamese by a sworn translator before they can be filed. Witnesses abroad may need to testify by video deposition arranged through diplomatic channels. Foreign judgments and contracts may need recognition. Each of these procedural steps takes time and requires careful planning — and a lawyer who has done it many times before.",
  ],
  whyItMatters: [
    "For most foreign clients, civil litigation is the action of last resort but the threat that gives every commercial relationship its backbone. A counterparty who knows you can credibly enforce your rights in a Vietnamese court behaves very differently from one who believes you cannot. My job is to make that threat real — and then to deliver on it when negotiation fails.",
    "Vietnam's commercial economy has expanded dramatically in the past decade, and so has the volume of disputes involving foreign elements. Yet the country's litigation infrastructure can still feel opaque to outsiders. Court fees and procedural deadlines are precise but not always intuitive. Judicial staff turnover is significant. Local rules of practice vary by province. Without skilled local counsel, a foreign claimant can lose a meritorious case to procedural error before substance is ever reached.",
    'Equally, a well-prepared civil claim is often the trigger that brings a recalcitrant counterparty to the negotiating table. More than 60% of the civil matters I have filed for international clients in the past five years have settled before judgment — but only because the case file was strong, the procedure was airtight, and opposing parties understood that going to a final ruling was not in their interest.',
  ],

  keyLegalFramework: [
    {
      code: 'Civil Code 2015 (Law 91/2015/QH13)',
      description:
        'Substantive civil law — contract formation, performance, breach, damages, statute of limitations, property rights, succession, tort liability.',
    },
    {
      code: 'Civil Procedure Code 2015 (Law 92/2015/QH13)',
      description:
        'Procedural rules for filing claims, jurisdiction, evidence, hearings, judgment, and appeals in civil and commercial matters.',
    },
    {
      code: 'Commercial Law 2005 (Law 36/2005/QH11)',
      description:
        'Governs commercial contracts, sale of goods, agency, distribution, and franchise — the substantive backdrop for B2B disputes.',
    },
    {
      code: 'Law on Civil Judgment Enforcement 2008',
      description:
        'Procedure for enforcing court judgments through the Bureau of Civil Judgment Enforcement, including asset attachment and forced collection.',
    },
    {
      code: "Resolutions of the Council of Judges (Supreme People's Court)",
      description:
        'Binding interpretive guidance on how lower courts should apply ambiguous provisions of the Civil Code and Procedure Code.',
    },
    {
      code: '2020 Hague Service Convention (Vietnam acceded 2016)',
      description:
        'Mechanism for service of process to and from foreign jurisdictions — relevant when defendants are abroad or evidence must be obtained internationally.',
    },
  ],

  problemStatements: [
    {
      title: 'Civil law feels foreign',
      description:
        'No jury, no broad discovery, an active investigative judge, and procedural deadlines that punish unfamiliarity. Common-law instincts can mislead at every step.',
      iconId: 'iconScales',
    },
    {
      title: 'Documents must clear hurdles',
      description:
        'Foreign contracts, certificates, and corporate records require notarisation, apostille or consular legalisation, and certified Vietnamese translation before any court will accept them as evidence.',
      iconId: 'iconContract',
    },
    {
      title: 'Distance is a real obstacle',
      description:
        'Time-zone gaps, language barriers, and the practical difficulty of sending witnesses to Vietnam can derail otherwise winnable cases without a lawyer who plans for them from day one.',
      iconId: 'iconGlobe',
    },
  ],

  whoIHelp: [
    {
      persona: 'Foreign-Invested Companies',
      needs:
        "FIEs and 100% foreign-owned LLCs and JSCs facing or initiating civil claims against suppliers, distributors, customers, contractors, or former employees.",
      iconId: 'iconContract',
      examples: [
        'Contract disputes with Vietnamese suppliers',
        'Recovery of accounts receivable',
        'Defence against tort or product-liability claims',
        'Enforcement of distribution and agency contracts',
      ],
    },
    {
      persona: 'Foreign Individuals',
      needs:
        'Expats, retirees, and visitors involved in personal civil disputes — landlord-tenant, traffic accidents, contract claims, and recovery of debts owed by Vietnamese counterparties.',
      iconId: 'iconHandshake',
      examples: [
        'Property and lease disputes',
        'Investment contract claims',
        'Personal injury and traffic accident claims',
        'Debt recovery from individuals or businesses',
      ],
    },
    {
      persona: 'Overseas Corporations',
      needs:
        'Companies with no Vietnamese presence pursuing or defending claims connected to a Vietnamese counterparty, asset, or transaction. I act as full Vietnamese counsel without the client ever needing to set up local entities.',
      iconId: 'iconGlobe',
      examples: [
        'Cross-border commercial disputes',
        'Recognition and enforcement of foreign judgments',
        'Intellectual-property and trademark infringement claims',
        'Strategic litigation to protect overseas interests',
      ],
    },
  ],

  serviceGroups: [
    {
      groupTitle: 'Pre-litigation strategy and preparation',
      services: [
        {
          title: 'Pre-litigation case assessment',
          description:
            'A formal written opinion on the strength of your claim or defence, the likely costs and timeline, the available procedural strategies, and a realistic range of outcomes — delivered within two to three weeks of engagement.',
        },
        {
          title: 'Demand letters and pre-suit negotiation',
          description:
            'A demand letter from a Vietnamese law firm carries weight that an overseas letter does not. I draft and issue formal pre-suit demands and lead structured negotiations to resolve matters without filing.',
        },
        {
          title: 'Document authentication coordination',
          description:
            'Managing the chain of notarisation, apostille or consular legalisation, and certified translation for every foreign document that needs to enter the case file. I work with sworn translators directly.',
        },
        {
          title: 'Evidence preservation and witness preparation',
          description:
            'Securing electronic records, arranging affidavit preparation, and coordinating witness availability — including video-link arrangements for witnesses who cannot travel to Vietnam.',
        },
      ],
    },
    {
      groupTitle: 'Trial-court representation',
      services: [
        {
          title: 'Filing complaints and supporting documents',
          description:
            'Preparing and filing the complaint, schedule of evidence, witness lists, and all supporting documents in compliance with Civil Procedure Code Articles 189–197 and local court practice.',
        },
        {
          title: 'Court-annexed mediation representation',
          description:
            'Most civil cases proceed through court-annexed mediation before trial. I attend mediations, prepare settlement positions, and advise on whether to settle or push to trial.',
        },
        {
          title: 'Hearing advocacy',
          description:
            "Oral argument before single-judge and three-judge panels at District and Provincial People's Courts. I cross-examine witnesses, present documentary evidence, and advance legal argument in Vietnamese.",
        },
        {
          title: 'Interim measures and provisional remedies',
          description:
            'Applications under Articles 111–142 of the Civil Procedure Code for asset freezes, evidence preservation orders, and other provisional protections to preserve the integrity of the dispute.',
        },
      ],
    },
    {
      groupTitle: 'Appeals and enforcement',
      services: [
        {
          title: 'Appellate representation',
          description:
            "Appeals to the Provincial People's Court or High People's Court following an unfavourable first-instance judgment, including drafting appeal petitions and arguing before appellate panels.",
        },
        {
          title: 'Cassation and reopening procedures',
          description:
            "Petitioning the Chief Justice of the Supreme People's Court for cassation review of legally erroneous final judgments — a narrow but sometimes decisive remedy.",
        },
        {
          title: 'Judgment enforcement',
          description:
            "Coordination with the Bureau of Civil Judgment Enforcement to identify, freeze, and liquidate the debtor's assets, including bank accounts, real property, and equity in Vietnamese companies.",
        },
        {
          title: 'Recognition of foreign judgments',
          description:
            'Petitions to recognise and enforce foreign court judgments in Vietnam under Articles 425–463 of the Civil Procedure Code, where treaty arrangements or reciprocity permit.',
        },
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: 'Initial assessment',
      description:
        'Within 24 hours of contact, an initial conversation. Within two to three weeks, a written case assessment: strengths, weaknesses, costs, timeline, recommended strategy.',
      duration: '1-3 weeks',
    },
    {
      step: 2,
      title: 'Document preparation',
      description:
        'Gathering and authenticating evidence, preparing the complaint and supporting filings, coordinating sworn translation, and finalising the schedule of exhibits.',
      duration: '4-8 weeks',
    },
    {
      step: 3,
      title: 'Court proceedings',
      description:
        'Filing, court-annexed mediation, evidentiary hearings, and trial. Average duration for first-instance civil matters: six to eighteen months depending on complexity and court.',
      duration: '6-18 months',
    },
    {
      step: 4,
      title: 'Judgment & enforcement',
      description:
        'After judgment becomes final and binding, enforcement through the Bureau of Civil Judgment Enforcement — locating, attaching, and liquidating debtor assets to satisfy the judgment.',
      duration: '3-12 months',
    },
  ],

  featuredCase: {
    slug: 'european-company-contract-dispute',
    title: 'Representing a European Company in a $2M Contract Dispute',
    country: 'France',
    flag: '🇫🇷',
    area: 'Civil Litigation',
    outcome:
      'Resolved through court-annexed mediation, recovering 92% of the outstanding amount within 12 months while preserving the underlying business relationship.',
    matterValue: '$2M+',
    imageId: 'caseDocumentSigning',
  },

  relatedInsightSlugs: [
    'top-legal-risks-foreign-investors-vietnam',
    'enforcement-foreign-arbitral-awards-vietnam',
  ],

  faq: [
    {
      question: 'Can a foreigner file a lawsuit in Vietnam?',
      answer:
        "Yes. Foreign individuals and legal entities have full standing to sue in Vietnamese courts. Article 466 of the Civil Procedure Code expressly protects the litigation rights of foreign parties, subject to the usual rules of jurisdiction and procedure. The court that takes jurisdiction depends on the value, subject-matter, and parties to the dispute — typically the Provincial People's Court for matters with foreign elements.",
    },
    {
      question: 'How long does civil litigation take in Vietnam?',
      answer:
        'Simple first-instance civil matters can be resolved in four to six months. More complex disputes involving foreign elements, expert evidence, or multiple parties typically run twelve to eighteen months at first instance. Appeal adds another two to four months. Cassation adds further. I always provide a written timeline estimate in your initial case assessment, with the major procedural milestones flagged.',
    },
    {
      question: 'Do I need to be physically present in Vietnam for court hearings?',
      answer:
        'In most civil cases, your presence is not required. I have full power of attorney to file, argue, and settle on your behalf. Your presence may be useful or required at the court-annexed mediation conference and at the main evidentiary hearing in some cases — but I can usually arrange for testimony by video link where physical attendance is impractical.',
    },
    {
      question: 'How are legal fees structured for civil litigation?',
      answer:
        'I offer three structures and select the most appropriate to the matter. Hourly billing for matters where scope is uncertain. A fixed fee per phase of the litigation when scope is clear. A success-fee component (a percentage of recovery, capped) is permissible for monetary claims and can be combined with a reduced hourly rate to align incentives. The structure is set out in writing before engagement, and I provide monthly billing detail.',
    },
    {
      question: 'What happens if I win but the defendant has no assets in Vietnam?',
      answer:
        "A judgment is only as good as the assets you can reach. Before filing, I advise on asset tracing — bank accounts, real property, equity in Vietnamese companies — and where appropriate apply for interim asset-freeze orders under Articles 114–142 of the Civil Procedure Code. If the defendant's assets are abroad, the judgment may need recognition in that jurisdiction; I work with foreign counsel to coordinate enforcement across borders.",
    },
    {
      question: 'Can foreign judgments be enforced in Vietnam?',
      answer:
        'Yes, but only on specific conditions. Vietnam recognises foreign judgments through bilateral treaties (with around 20 countries) and on the basis of reciprocity. For commercial matters, foreign arbitral awards are far more straightforwardly enforceable under the New York Convention than foreign court judgments. I can advise on the best dispute-resolution forum at the contract-drafting stage to maximise enforceability later.',
    },
  ],

  cta: {
    headline: 'Facing a Civil Dispute in Vietnam?',
    subline:
      'Whether you are considering filing a claim, defending against one, or simply weighing your options, the right early advice can change the trajectory of the entire matter. Reach out for a confidential assessment.',
  },
}

// ============================================================================
// 2. LAND & PROPERTY
// ============================================================================

const landAndProperty: PracticeAreaData = {
  title: 'Land & Property',
  tagline:
    'Real estate disputes, land use rights, foreign property ownership, and development project matters — navigating Vietnam\'s unique land law framework that places the state at the centre of every transaction.',
  introTagline: 'Practice Area · Land & Property',
  heroImageId: 'practiceLandProperty',
  metaDescription:
    'Vietnam land and property lawyer for foreigners. Expert representation in real estate disputes, land use rights, foreign ownership matters, and real estate development projects.',

  introduction: [
    "Property ownership in Vietnam is unlike property ownership anywhere else most foreign clients have lived or invested. Article 53 of the 2013 Constitution declares all land to be the property of the people, with the state acting as administrator. Individuals and organisations do not own land; they own land use rights — a bundle of entitlements to use, transfer, lease, mortgage, and inherit, granted for a defined term and subject to the purpose recorded on a Land Use Rights Certificate (LURC, the so-called \"red book\").",
    'For foreigners, the framework is more restrictive still. Foreign individuals cannot own residential land in their own name; they can hold ownership of apartments and houses for an initial fifty-year term, renewable, with caps on the percentage of foreign ownership in any project. Foreign-invested enterprises can hold land use rights through allocation, lease, or assignment, with the term tied to the duration of the investment certificate. Each pathway has its own evidentiary requirements, governmental approvals, and pitfalls — and the consequences of getting any of them wrong can be severe, including loss of investment.',
    'I represent foreign individuals, foreign-invested companies, and overseas investors in real estate transactions, disputes, and development projects across Vietnam. My practice covers acquisition due diligence, dispute resolution, land use rights enforcement, and the day-to-day legal questions that arise from owning, leasing, or developing property in Vietnam as a foreign party.',
  ],
  whyItMatters: [
    "Real estate is the largest single asset class held by foreign investors and foreign individuals in Vietnam. It is also the area where the gap between what foreign owners assume their rights are and what Vietnamese law actually says is widest. I have seen clients who believed they had clear title to a piece of land discover years later that the underlying allocation was procedurally defective. I have seen apartment buyers learn that foreign-ownership caps had been reached before their purchase — invalidating their contract. I have seen development projects stall because a single permit was never properly registered with the local Department of Natural Resources and Environment.",
    "The good news is that almost all of these problems are preventable. Proper due diligence, careful contract drafting, and a clear understanding of the procedural steps required for each transaction give foreign owners and investors the same security that domestic parties enjoy. The country's property law framework — though restrictive — is reasonably stable, professionally administered, and increasingly supportive of foreign participation.",
    "When disputes do arise, they often involve a foreign party against a Vietnamese counterparty (developer, neighbour, contractor, or local authority) with very different views about what the underlying rights are. My role is to translate the foreign client's expectations into the language of Vietnamese property law, identify the precise legal hooks for the desired outcome, and pursue them through the appropriate forum — often a combination of administrative challenges, civil litigation, and direct negotiation with the relevant authority.",
  ],

  keyLegalFramework: [
    {
      code: 'Land Law 2024 (Law 31/2024/QH15, effective 2025)',
      description:
        'The latest revision of the foundational statute governing land use rights, allocation, lease, transfer, and dispute resolution.',
    },
    {
      code: 'Law on Housing 2023 (Law 27/2023/QH15)',
      description:
        'Foreign ownership of residential housing — eligibility, permitted forms of ownership, term, percentage caps, and inheritance.',
    },
    {
      code: 'Real Estate Business Law 2023',
      description:
        'Rules for buying, selling, leasing, and brokering real estate — applies to both transactions involving foreigners and the developer-purchaser relationship.',
    },
    {
      code: 'Civil Code 2015 — Property and Contract provisions',
      description:
        'Default rules on ownership, possession, easements, liens, contract performance, and damages — supplements the special property statutes.',
    },
    {
      code: 'Decree 99/2015 (and 2024 amendments) on Housing',
      description:
        'Implementing regulations on foreign ownership procedures, ownership caps in projects, and registration of foreign-held housing.',
    },
  ],

  problemStatements: [
    {
      title: 'Land use rights, not ownership',
      description:
        'A 50-year apartment ownership term, foreign-ownership percentage caps, and a "red book" that needs careful verification create traps that look nothing like Western property law.',
      iconId: 'iconScales',
    },
    {
      title: 'Title is verifiable — but you must verify',
      description:
        'Many disputes trace back to skipped due diligence: an LURC that does not match what the seller represented, encumbrances not disclosed, or a project not yet eligible for foreign ownership.',
      iconId: 'iconContract',
    },
    {
      title: 'Disputes touch many authorities',
      description:
        'Land disputes can simultaneously involve the Department of Natural Resources, the local People\'s Committee, the courts, and the Bureau of Civil Judgment Enforcement — each with its own procedure and timeline.',
      iconId: 'iconGavel',
    },
  ],

  whoIHelp: [
    {
      persona: 'Foreign Individual Buyers',
      needs:
        'Expats and overseas Vietnamese (Việt Kiều) purchasing apartments or houses, navigating ownership-cap registers, term-limit issues, and inheritance planning.',
      iconId: 'iconHandshake',
      examples: [
        'Pre-purchase due diligence on apartments',
        'Verification of foreign-ownership eligibility',
        'Sale and purchase agreement review',
        'Inheritance planning for Vietnamese property',
      ],
    },
    {
      persona: 'Foreign-Invested Developers',
      needs:
        'Companies acquiring land for hotel, residential, industrial, or mixed-use development; managing licensing, allocation, and disputes through the project lifecycle.',
      iconId: 'iconContract',
      examples: [
        'Land allocation and lease procedures',
        'Construction permit and zoning compliance',
        'Disputes with local contractors',
        'Tenant and end-buyer transactions',
      ],
    },
    {
      persona: 'Overseas Investors',
      needs:
        'Passive investors purchasing fund interests, joint-venture stakes, or direct equity in Vietnamese real estate vehicles — and the disputes that follow when sponsor performance falters.',
      iconId: 'iconGlobe',
      examples: [
        'Joint-venture real estate disputes',
        'Recovery of capital from failed projects',
        'Minority shareholder protection',
        'Cross-border enforcement of property rights',
      ],
    },
  ],

  serviceGroups: [
    {
      groupTitle: 'Acquisition and ownership advisory',
      services: [
        {
          title: 'Pre-purchase legal due diligence',
          description:
            "Verifying the seller's LURC, cross-checking with the Department of Natural Resources, confirming the property is eligible for foreign ownership, identifying encumbrances, and confirming the developer's licences for off-plan purchases.",
        },
        {
          title: 'Sale and purchase agreement review and negotiation',
          description:
            'Drafting or reviewing SPAs, deposit agreements, and ancillary documents, with particular attention to representations and warranties, transfer of risk, payment milestones, and remedies for non-completion.',
        },
        {
          title: 'Foreign-ownership registration',
          description:
            'Coordinating registration of the property in the foreign owner\'s name, including obtaining the LURC, registering with the local People\'s Committee, and confirming the project remains under the 30% foreign-ownership cap.',
        },
        {
          title: 'Inheritance and estate planning',
          description:
            'Advising on the limited but valuable rules for foreigners to bequeath Vietnamese property — including the requirement that successors hold their own foreign-ownership entitlement.',
        },
      ],
    },
    {
      groupTitle: 'Disputes and enforcement',
      services: [
        {
          title: 'Land use rights disputes',
          description:
            'Representing foreign clients in disputes over the validity, scope, or transfer of land use rights — at the District People\'s Committee for administrative challenges, and at the People\'s Court for civil claims.',
        },
        {
          title: 'Developer and project disputes',
          description:
            'When a developer fails to deliver on time, with promised specifications, or at all — pursuing remedies under the Real Estate Business Law and the contract, including cancellation, refund, and damages.',
        },
        {
          title: 'Boundary and possession disputes',
          description:
            'Defending against or initiating claims over physical boundaries, possession, easements, and adverse use — typically against neighbouring landowners or unauthorised occupiers.',
        },
        {
          title: 'Lease disputes',
          description:
            'Enforcing or defending against rent recovery, eviction, and lease-termination claims for both commercial and residential tenants and landlords.',
        },
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: 'Risk assessment',
      description:
        'Initial review of the property documents, the proposed transaction or dispute, and a written legal-risk memorandum within seven business days.',
      duration: '1-2 weeks',
    },
    {
      step: 2,
      title: 'Due diligence or pleading',
      description:
        'For transactions: full title and licence verification with the relevant departments. For disputes: pleading preparation, evidence gathering, and authentication.',
      duration: '3-6 weeks',
    },
    {
      step: 3,
      title: 'Negotiation or filing',
      description:
        'Closing the transaction and registering ownership, OR filing the administrative challenge or civil suit and managing the proceedings.',
      duration: '4 weeks - 18 months',
    },
    {
      step: 4,
      title: 'Registration or enforcement',
      description:
        'Registering the LURC and final transfer documents, OR enforcing the judgment through asset attachment, transfer of title, or removal of unauthorised parties.',
      duration: '2-12 months',
    },
  ],

  featuredCase: {
    slug: 'land-use-rights-foreign-investor',
    title: 'Land Use Rights Dispute for Foreign-Invested Real Estate Project',
    country: 'Singapore',
    flag: '🇸🇬',
    area: 'Land & Property',
    outcome:
      "The administrative challenge to the client's land use rights was withdrawn after our submissions. Construction resumed within four months and the project completed successfully.",
    matterValue: '$5M+',
    imageId: 'caseDocumentSigning',
  },

  relatedInsightSlugs: ['buying-property-vietnam-foreigner', 'top-legal-risks-foreign-investors-vietnam'],

  faq: [
    {
      question: 'Can foreigners own property in Vietnam?',
      answer:
        "Foreign individuals can own apartments and certain houses in qualifying projects under the Law on Housing 2023. The ownership term is initially 50 years from the date of issuance of the LURC, extendable once for an additional 50 years. Foreigners cannot own land use rights for residential land in their own name; foreign-invested enterprises can hold land use rights through allocation or lease for the duration of their investment certificate. Each pathway has specific procedural requirements that I'll walk you through.",
    },
    {
      question: 'What is the foreign-ownership cap in apartment projects?',
      answer:
        "Foreigners may own up to 30% of the apartments in any single building, and up to 250 separate landed houses in any one ward. Caps are tracked by the local Department of Construction and reset is impossible — once met, no further foreign purchases in that building are valid. Verifying the cap is one of the first due-diligence steps before any apartment purchase, and I do this directly with the relevant department.",
    },
    {
      question: 'What should I check before buying property in Vietnam?',
      answer:
        "At minimum: (1) the seller's LURC matches the unit and is genuinely registered, (2) the project has all required construction and sales licences, (3) the foreign-ownership cap is not exhausted, (4) there are no encumbrances or pending disputes on the property, (5) the developer is solvent and not subject to enforcement actions, and (6) the contract complies with Vietnamese law and protects your remedies. I deliver a comprehensive due-diligence report before any deposit or signing.",
    },
    {
      question: 'What happens if a developer fails to deliver an off-plan apartment?',
      answer:
        "Vietnamese law gives buyers strong protections. Under the Real Estate Business Law and the standard SPA, you can demand specific performance, contract cancellation with full refund plus interest, and damages. I have recovered full purchase prices plus interest for foreign clients whose developers defaulted. Speed matters — early formal notices preserve remedies, and a stalled developer often becomes an insolvent developer.",
    },
    {
      question: 'How are land disputes resolved in Vietnam?',
      answer:
        "Most land disputes follow a tiered process: mandatory mediation at the commune-level People's Committee (or for international parties, often direct civil filing), then administrative challenge or civil suit at the District or Provincial People's Court. Pure title disputes may also be challenged through administrative channels at the Department of Natural Resources. The right forum depends on the nature of the dispute, and I assess that in the initial review.",
    },
    {
      question: 'Can a foreigner inherit property in Vietnam?',
      answer:
        "Yes, with limits. Foreigners can inherit Vietnamese property only if they themselves are eligible to own it under the Law on Housing 2023 — meaning they must hold a valid entry status and the property must be the type and in the location where foreign ownership is permitted. If the heir is not eligible, the right that passes is to the value of the property, which must be liquidated. Estate planning for Vietnamese property is a specialised exercise and worth doing well in advance.",
    },
  ],

  cta: {
    headline: 'Buying, Selling, or Disputing Property in Vietnam?',
    subline:
      'The right legal review at the right moment is the difference between a smooth transaction and a recoverable mistake. Get a confidential assessment of your property matter.',
  },
}

// ============================================================================
// 3. FAMILY LAW & DIVORCE
// ============================================================================

const familyLawAndDivorce: PracticeAreaData = {
  title: 'Family Law & Divorce',
  tagline:
    'International divorce, child custody, prenuptial agreements, and cross-border family matters — handled with the discretion, cultural fluency, and clarity that the most personal moments of a foreign client\'s life require.',
  introTagline: 'Practice Area · Family Law',
  heroImageId: 'practiceFamilyDivorce',
  metaDescription:
    'International family lawyer in Vietnam representing foreign clients in divorce, child custody, prenuptial agreements, and cross-border inheritance — in fluent English with full discretion.',

  introduction: [
    'Family law matters touching foreign nationals are among the most procedurally complex and emotionally weighted cases in Vietnamese practice. A divorce between a Vietnamese spouse and a foreign national raises questions of jurisdiction, applicable law, recognition of foreign marriages, division of property held in multiple countries, and — most consequentially — the welfare of children who may have ties to two or more legal systems.',
    'I represent foreign clients in international divorces, custody disputes, prenuptial and post-nuptial agreements, cross-border inheritance, and the full range of family-law matters arising from a life lived between Vietnam and elsewhere. My practice handles both contested and uncontested matters, from straightforward consensual separations to high-stakes custody and asset cases that span multiple jurisdictions.',
    'What separates a family-law matter from any other kind of legal work is the client\'s emotional investment. The legal analysis is one part; the human stakes are another. My approach is to handle the legal work with full technical rigour while ensuring the client always understands what is happening and why, and that decisions of significance are made with clear mind and proper counsel.',
  ],
  whyItMatters: [
    'A divorce filed in Vietnam between an international couple is governed primarily by Vietnamese law — but the consequences travel with the parties wherever they go. Custody arrangements need to function in the day-to-day reality of one parent in Vietnam and the other abroad. Property division must address assets that may sit in three or four jurisdictions. Child support that is straightforward to enforce in Vietnam may need separate enforcement proceedings overseas. Each of these is a problem that can be solved — but only with planning.',
    'The law itself, the 2014 Law on Marriage and Family, is reasonably modern and protective of family welfare. Vietnamese courts apply a "best interests of the child" standard that will be familiar to most common-law clients. Property division is generally equitable rather than strictly equal, and the court has wide discretion to consider contributions, fault, and the welfare of any children. But the procedure can feel formal and slow to clients accustomed to faster-moving systems, and translation, document authentication, and consular liaison add layers that domestic Vietnamese cases never see.',
    'Equally, prenuptial and post-nuptial agreements are now recognised under Vietnamese law and are an increasingly important tool for international couples. A well-drafted prenuptial agreement can preserve assets brought into the marriage from each side, define what happens to assets held in each country, and reduce the scope and stakes of any future dispute. I draft these agreements regularly for couples planning to live in Vietnam and for those who already do.',
  ],

  keyLegalFramework: [
    {
      code: 'Law on Marriage and Family 2014 (Law 52/2014/QH13)',
      description:
        'Foundational statute on marriage, divorce, child custody, property regime, and prenuptial agreements — including specific chapters on marriages with foreign elements.',
    },
    {
      code: 'Civil Code 2015 — succession provisions',
      description:
        'Inheritance and succession rules, including procedures for cross-border inheritance involving foreign nationals.',
    },
    {
      code: 'Civil Procedure Code 2015 — family chapters',
      description:
        'Procedural rules for divorce filings, custody hearings, and the special procedures for divorces with foreign elements (Articles 466 and following).',
    },
    {
      code: 'Decree 126/2014 on Marriage and Family',
      description:
        'Implementing regulations covering property regime, prenuptial agreements, and the practical mechanics of international family-law procedures.',
    },
    {
      code: 'Hague Convention on Child Abduction (1980)',
      description:
        'Vietnam is not a signatory; cross-border custody disputes therefore require careful jurisdictional analysis and often dual-track proceedings in both countries.',
    },
  ],

  problemStatements: [
    {
      title: 'Two countries, one family',
      description:
        'Decisions about children, finances, and ongoing contact need to work across borders — without one country\'s order undermining the other or putting the child in jurisdictional limbo.',
      iconId: 'iconGlobe',
    },
    {
      title: 'Emotional moments, formal procedure',
      description:
        'Vietnamese divorce procedure can feel slow and bureaucratic when the personal stakes are high. Knowing what every step really means, and what it doesn\'t, removes much of the anxiety.',
      iconId: 'iconHandshake',
    },
    {
      title: 'Assets in multiple jurisdictions',
      description:
        'Bank accounts in Singapore, real estate in Hanoi, retirement funds in the US — each requires its own analysis to divide cleanly and enforce reliably under Vietnamese law.',
      iconId: 'iconScales',
    },
  ],

  whoIHelp: [
    {
      persona: 'International Couples Divorcing in Vietnam',
      needs:
        'Foreign-Vietnamese couples and foreign-foreign couples resident in Vietnam, navigating jurisdictional choices, custody, property division, and post-divorce coordination.',
      iconId: 'iconHandshake',
      examples: [
        'Contested and consensual divorce filings',
        'Child custody and visitation arrangements',
        'Property division across multiple countries',
        'Post-divorce modification and enforcement',
      ],
    },
    {
      persona: 'Couples Planning Their Marriage',
      needs:
        'Couples preparing to marry in Vietnam or abroad, drafting prenuptial agreements, understanding property regime choices, and planning estate matters.',
      iconId: 'iconContract',
      examples: [
        'Prenuptial and post-nuptial agreements',
        'Property regime selection',
        'Cross-border estate planning',
        'Recognition of foreign marriages in Vietnam',
      ],
    },
    {
      persona: 'Foreign Heirs and Estates',
      needs:
        'Foreign nationals inheriting from a deceased relative in Vietnam, or Vietnamese-resident foreigners planning their own estates with cross-border assets.',
      iconId: 'iconGlobe',
      examples: [
        'Cross-border inheritance proceedings',
        'Recognition of foreign wills',
        'Asset transfer and remittance abroad',
        'Estate planning for international families',
      ],
    },
  ],

  serviceGroups: [
    {
      groupTitle: 'Divorce and separation',
      services: [
        {
          title: 'Consensual divorce filings',
          description:
            'Where both spouses agree on divorce, custody, and property: a streamlined filing at the competent People\'s Court, typically resolved in 3-6 months. I draft the joint petition and supporting agreements.',
        },
        {
          title: 'Contested divorce representation',
          description:
            'Full advocacy through pleading, evidentiary hearings, and judgment for divorces where significant issues remain in dispute. Includes coordination with foreign counsel where parallel proceedings exist abroad.',
        },
        {
          title: 'Mediation and negotiation',
          description:
            'Court-annexed mediation is mandatory in most family cases and can resolve highly contested matters far faster than trial. I prepare the client\'s position and represent them through every mediation session.',
        },
        {
          title: 'Property division',
          description:
            'Identifying, valuing, and dividing marital assets including real estate, business interests, retirement accounts, and personal property — with particular attention to assets held in multiple jurisdictions.',
        },
      ],
    },
    {
      groupTitle: 'Custody and children',
      services: [
        {
          title: 'Custody arrangements',
          description:
            'Negotiating or litigating physical and decision-making custody, with the welfare of the child as the central legal standard. I draft parenting plans that work in cross-border families.',
        },
        {
          title: 'Child support determination and enforcement',
          description:
            'Calculating child support based on Vietnamese law and the family\'s actual circumstances, then enforcing payment through court order — with attention to enforcement abroad if the paying parent leaves Vietnam.',
        },
        {
          title: 'International custody and travel',
          description:
            'Managing the special challenges of custody when one parent is in Vietnam and the other is abroad: travel consents, return-trip protocols, and coordination with foreign family lawyers.',
        },
        {
          title: 'Modification and post-decree matters',
          description:
            'When circumstances change after the original order, formal modification proceedings to update custody, support, or visitation — often a faster process than the original divorce.',
        },
      ],
    },
    {
      groupTitle: 'Marriage planning and inheritance',
      services: [
        {
          title: 'Prenuptial and post-nuptial agreements',
          description:
            'Drafting and reviewing marriage agreements that comply with Article 28 of the Law on Marriage and Family, covering property regime, asset preservation, and post-marriage planning.',
        },
        {
          title: 'Recognition of foreign marriages',
          description:
            'Registering foreign marriages with Vietnamese authorities so they have full legal effect for tax, immigration, property, and family-law purposes.',
        },
        {
          title: 'Cross-border inheritance',
          description:
            'Representing foreign heirs in Vietnamese inheritance proceedings, or Vietnamese-resident foreigners in their own estate planning. Includes recognition of foreign wills and remittance of inherited assets.',
        },
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: 'Confidential consultation',
      description:
        'Initial conversation to understand the family situation, urgency, and legal options. Followed by a written assessment within one week.',
      duration: '1 week',
    },
    {
      step: 2,
      title: 'Strategy & filing',
      description:
        'Choice of forum, preparation of pleadings, and filing. For consensual matters, this includes drafting the joint petition and settlement agreement.',
      duration: '2-6 weeks',
    },
    {
      step: 3,
      title: 'Mediation & hearings',
      description:
        'Court-annexed mediation, evidentiary hearings if required, and any necessary expert evidence (asset valuation, child welfare assessments).',
      duration: '3-12 months',
    },
    {
      step: 4,
      title: 'Judgment & implementation',
      description:
        'Final judgment, registration of changes (LURC transfers, custody arrangements, school changes), and any cross-border coordination required.',
      duration: '1-6 months',
    },
  ],

  featuredCase: {
    slug: 'international-divorce-australian',
    title: 'International Divorce: Australian National and Vietnamese Spouse',
    country: 'Australia',
    flag: '🇦🇺',
    area: 'Family Law',
    outcome:
      'Court-approved consent arrangement: shared custody with the child primarily residing in Vietnam, generous visitation for the Australian parent, and equitable property division. The arrangement has worked well for both parties for several years.',
    imageId: 'caseDocumentSigning',
  },

  relatedInsightSlugs: ['getting-divorced-vietnam-foreigner-guide'],

  faq: [
    {
      question: 'Can I get divorced in Vietnam if I was married in another country?',
      answer:
        "Yes. Vietnamese courts have jurisdiction over divorces involving a Vietnamese citizen, or where both spouses (even if both foreign) are habitually resident in Vietnam. The marriage does not need to have been registered in Vietnam — but it must be a marriage that Vietnamese law recognises (one man and one woman, validly entered into under the law of the place of celebration). For couples married abroad, the foreign marriage certificate is filed as evidence of the marriage to be dissolved.",
    },
    {
      question: 'Will Vietnamese law or my home country\'s law apply?',
      answer:
        "Vietnamese law typically applies to divorce filed in Vietnam. However, the law of the country of nationality may apply to specific issues such as personal capacity to marry or divorce. For property and custody, Vietnamese courts most often apply Vietnamese law to assets and children located in Vietnam, while assets and arrangements abroad may be enforced through coordinating proceedings in the relevant jurisdictions. We map this clearly in the initial assessment.",
    },
    {
      question: 'How is property divided in a Vietnamese divorce?',
      answer:
        "The default property regime is community property — assets acquired during the marriage are jointly owned and divided equitably (not necessarily 50/50) on divorce. The court considers each spouse\'s contributions (financial and otherwise), the welfare of any children, the parties\' agreement, and any fault. Pre-marriage assets remain separate unless they were converted into joint property during the marriage. Prenuptial agreements modify this default if validly executed under Article 28 of the Law on Marriage and Family.",
    },
    {
      question: 'How is custody decided?',
      answer:
        "Vietnamese courts apply the \"best interests of the child\" standard. Both parents have equal standing regardless of nationality. The court considers each parent\'s ability to care for the child, the child\'s wishes (for children aged seven and above), continuity of school and home, and the willingness of each parent to support the child\'s relationship with the other. Joint custody arrangements are increasingly common and often the right outcome for international families.",
    },
    {
      question: 'Are prenuptial agreements enforceable in Vietnam?',
      answer:
        "Yes, since 2014. Article 28 of the Law on Marriage and Family expressly recognises prenuptial agreements (and post-nuptial agreements) on property regime. To be valid, the agreement must be in writing, notarised before marriage, and not violate prohibited terms (such as agreements to pre-divide the right to custody of unborn children). I draft these regularly for international couples and review existing foreign agreements for Vietnamese enforceability.",
    },
    {
      question: 'How long does a divorce take in Vietnam?',
      answer:
        "Consensual divorces typically resolve in 3-6 months from filing. Contested divorces involving custody, foreign elements, or significant property disputes typically take 9-18 months at first instance, with possible appeal adding another 4-6 months. The pace depends as much on the parties\' willingness to mediate as on the court — and skilled negotiation often delivers a binding settlement well before any contested trial.",
    },
  ],

  cta: {
    headline: 'Family Matters in Vietnam Need a Steady Hand',
    subline:
      'Divorce, custody, prenuptial planning, or inheritance — handled with discretion, technical rigour, and clear English communication. Reach out for a confidential consultation.',
  },
}

// ============================================================================
// 4. CORPORATE & COMMERCIAL
// ============================================================================

const corporateAndCommercial: PracticeAreaData = {
  title: 'Corporate & Commercial',
  tagline:
    'Foreign direct investment, joint ventures, M&A, corporate governance, and commercial disputes — for foreign businesses building, operating, scaling, or exiting Vietnamese operations.',
  introTagline: 'Practice Area · Corporate & Commercial',
  heroImageId: 'practiceCorporate',
  metaDescription:
    'Vietnam corporate and commercial lawyer for foreign companies. Foreign direct investment, joint ventures, M&A, corporate disputes, and commercial law for foreign-invested enterprises.',

  introduction: [
    'Vietnam is one of the fastest-growing economies in Asia and a destination of choice for foreign direct investment in manufacturing, technology, financial services, and consumer products. The country offers a young workforce, expanding domestic consumption, and trade-agreement preferences (EVFTA, CPTPP, RCEP) that few peer economies can match. The flip side is a regulatory environment that rewards careful local navigation and punishes the casual or under-prepared.',
    'I represent foreign-invested enterprises (FIEs), overseas holding companies, and individual investors at every stage of their Vietnamese commercial life. Market entry — whether by greenfield FIE, joint venture, or share acquisition — has its own procedural choreography, with multiple licences and approvals that vary by sector. Ongoing operations involve continuous compliance with corporate governance, tax, labour, and sector-specific regulation. And exits — whether structured sales, strategic mergers, or contested divestments — bring their own legal complexities.',
    'Beyond the day-to-day, commercial disputes are an inevitable feature of doing business in any emerging market. When they arise between a foreign investor and a Vietnamese counterparty, the stakes are amplified by cultural, language, and procedural differences. I represent foreign clients in these disputes through negotiation, arbitration, and litigation — and increasingly, in early-stage advisory work designed to prevent disputes by structuring contracts and operations defensively from the outset.',
  ],
  whyItMatters: [
    'The most expensive mistakes in Vietnamese corporate practice are made at the entry stage. A poorly chosen vehicle (an FIE versus a representative office, a 100%-foreign LLC versus a JV), a sectoral cap missed in due diligence, an insufficient minimum charter capital declared, or a contract drafted to common-law expectations and unenforceable under Vietnamese law — each of these can define the next ten years of an investor\'s experience in the country. Spending properly on legal at entry is a direct and outsized investment in the rest of the business.',
    'The same is true at exit. Vietnamese share-purchase agreements look superficially like their international counterparts but contain quirks (notarisation requirements, pre-emption rights, escrow rules, foreign-exchange restrictions on share payments) that can surface late and force last-minute restructuring. A buyer who walks away over a discoverable defect leaves more than money on the table.',
    "Between entry and exit, ongoing corporate housekeeping matters more in Vietnam than in many investor home jurisdictions. Annual filings, regular changes to charter capital and ownership, board and shareholder governance, employee contracts, related-party transactions — all of these create paper trails that future buyers, lenders, regulators, or litigants will examine. Keeping that record clean is not glamorous but is exactly what protects long-term value.",
  ],

  keyLegalFramework: [
    {
      code: 'Investment Law 2020 (Law 61/2020/QH14)',
      description:
        'Foundational statute on foreign investment — investment forms, market access, sectoral conditions, IRC procedures, and investor protection.',
    },
    {
      code: 'Enterprise Law 2020 (Law 59/2020/QH14)',
      description:
        'Corporate law governing the formation, governance, and dissolution of LLCs, JSCs, and partnerships in Vietnam.',
    },
    {
      code: 'Commercial Law 2005 (Law 36/2005/QH11)',
      description:
        'Substantive commercial-contract law: sale of goods, agency, distribution, franchise, commercial mediation, commercial arbitration.',
    },
    {
      code: 'Bidding Law 2023 (Law 22/2023/QH15)',
      description:
        'Public procurement and selection of investors for projects involving state assets — relevant for infrastructure, real estate, and any state-related transaction.',
    },
    {
      code: 'Bilateral Investment Treaties (BITs)',
      description:
        'Vietnam has BITs with over 60 countries, providing foreign investors with treaty-level protections including national treatment, fair and equitable treatment, and access to international arbitration.',
    },
  ],

  problemStatements: [
    {
      title: 'Sector-by-sector market access',
      description:
        'Vietnam\'s investment regime varies dramatically by sector. Some are unrestricted; others are conditional, capped, or closed entirely. Mistaking the regime in your sector is an expensive error.',
      iconId: 'iconGlobe',
    },
    {
      title: 'Joint-venture mathematics',
      description:
        'JVs that look balanced on paper often fail under stress. Governance, deadlock, exit, related-party transactions, and dividend rights all need careful Vietnamese drafting.',
      iconId: 'iconHandshake',
    },
    {
      title: 'Disputes are often "preventable"',
      description:
        'Most foreign-investor commercial disputes I see were structurally avoidable: weak contracts, missing arbitration clauses, undocumented capital injections, or related-party transactions never approved as required.',
      iconId: 'iconScales',
    },
  ],

  whoIHelp: [
    {
      persona: 'Foreign Investors Entering Vietnam',
      needs:
        'Companies and individual investors planning their first investment in Vietnam — vehicle selection, sectoral analysis, IRC and ERC procedures, and operational set-up.',
      iconId: 'iconContract',
      examples: [
        '100% foreign-owned LLC and JSC formation',
        'Joint-venture structuring and negotiation',
        'Representative office and branch set-up',
        'Sector-specific licensing',
      ],
    },
    {
      persona: 'Operating FIEs',
      needs:
        'Foreign-invested enterprises already in Vietnam, requiring ongoing corporate, contractual, and dispute support — and senior counsel for inflection points (capital changes, restructuring, M&A).',
      iconId: 'iconContract',
      examples: [
        'Charter and capital amendments',
        'Commercial contract drafting and disputes',
        'Corporate governance disputes',
        'Restructuring and consolidation',
      ],
    },
    {
      persona: 'M&A Buyers and Sellers',
      needs:
        'Foreign buyers acquiring Vietnamese targets, foreign sellers exiting Vietnamese investments, and joint-venture partners restructuring or unwinding their relationships.',
      iconId: 'iconScales',
      examples: [
        'Legal due diligence on Vietnamese targets',
        'Share-purchase and asset-purchase agreements',
        'Regulatory approvals (M&A notification, anti-trust)',
        'Post-closing integration and disputes',
      ],
    },
  ],

  serviceGroups: [
    {
      groupTitle: 'Market entry and structuring',
      services: [
        {
          title: 'Investment vehicle selection and formation',
          description:
            'Comparative analysis of vehicle types (LLC, JSC, branch, representative office), sectoral conditions, capital requirements, and tax treatment. Full procedural set-up: IRC, ERC, banking, tax registration, seal.',
        },
        {
          title: 'Joint-venture negotiation and drafting',
          description:
            'Joint-venture contracts and shareholders\' agreements that anticipate governance, deadlock, transfer rights, exit, and dispute resolution — with arbitration clauses that actually work.',
        },
        {
          title: 'Sectoral licensing',
          description:
            'Sub-licences and operating permits for regulated sectors: education, healthcare, financial services, telecommunications, retail, real estate, manufacturing.',
        },
        {
          title: 'Capital structuring',
          description:
            'Charter capital, investment capital, foreign loans, and capital contribution mechanics — structured to optimise for foreign exchange remittance and tax efficiency.',
        },
      ],
    },
    {
      groupTitle: 'Operations and contracts',
      services: [
        {
          title: 'Commercial-contract drafting and review',
          description:
            'Sales contracts, distribution and agency agreements, supply agreements, services agreements, NDAs, and licensing agreements — drafted to be enforceable in Vietnamese courts and arbitration.',
        },
        {
          title: 'Corporate-governance support',
          description:
            'Board and shareholders\' meeting compliance, related-party-transaction approvals, charter amendments, and ongoing director and officer duties under the Enterprise Law.',
        },
        {
          title: 'Regulatory and tax compliance support',
          description:
            'Working with our network of accountants and tax advisers on compliance with corporate income tax, VAT, withholding tax, and sectoral regulation. I lead on legal aspects, they lead on numbers.',
        },
        {
          title: 'Capital and ownership changes',
          description:
            'Increases or reductions of charter capital, share transfers (foreign-to-foreign and foreign-to-Vietnamese), and conversions of legal form — including all required regulatory filings.',
        },
      ],
    },
    {
      groupTitle: 'M&A and disputes',
      services: [
        {
          title: 'Legal due diligence',
          description:
            'Comprehensive review of a target\'s corporate, regulatory, contractual, employment, IP, and litigation status — with a clear executive summary, risk register, and recommended representations and warranties.',
        },
        {
          title: 'Transaction execution',
          description:
            'Drafting and negotiating SPAs, escrow arrangements, transitional services agreements, and ancillary documents. Coordinating closing logistics including notarisation, regulatory filings, and capital flows.',
        },
        {
          title: 'Commercial dispute resolution',
          description:
            'Negotiation, mediation, arbitration (VIAC, SIAC, ICC), and Vietnamese litigation for breach of contract, joint-venture disputes, post-closing claims, and corporate-governance challenges.',
        },
        {
          title: 'Anti-corruption and compliance investigations',
          description:
            'Internal investigations of suspected misconduct, FCPA and UK Bribery Act compliance review, and remediation work for foreign companies whose Vietnamese operations have triggered concern.',
        },
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: 'Strategy session',
      description:
        'Understanding the business objective, the deal structure, and the regulatory landscape. Output: a written strategy memo with options, costs, and timeline.',
      duration: '1-2 weeks',
    },
    {
      step: 2,
      title: 'Documentation & approvals',
      description:
        'Drafting the contracts and applications, submitting to the relevant regulators, and managing iterative approvals.',
      duration: '4-12 weeks',
    },
    {
      step: 3,
      title: 'Closing or filing',
      description:
        'Formal closing of the transaction, registration of the new entity or change, and post-closing compliance steps.',
      duration: '1-4 weeks',
    },
    {
      step: 4,
      title: 'Ongoing support',
      description:
        'Continuing as outside Vietnamese counsel for governance, contracts, disputes, and inflection points throughout the life of the investment.',
      duration: 'Ongoing',
    },
  ],

  featuredCase: {
    slug: 'joint-venture-dispute-korean',
    title: 'Joint Venture Dispute Between Vietnamese and Korean Partners',
    country: 'South Korea',
    flag: '🇰🇷',
    area: 'Corporate',
    outcome:
      'VIAC arbitration award of $3.5M plus costs in our client\'s favour, successfully enforced through Vietnamese courts. The Korean client subsequently bought out the Vietnamese partner on favourable terms.',
    matterValue: '$3.5M',
    imageId: 'caseDocumentSigning',
  },

  relatedInsightSlugs: [
    'top-legal-risks-foreign-investors-vietnam',
    'due-diligence-checklist-vietnam',
  ],

  faq: [
    {
      question: 'What forms of business can a foreign company set up in Vietnam?',
      answer:
        'Foreign investors can establish a 100% foreign-owned enterprise (LLC or JSC), form a joint venture with a Vietnamese partner, register a representative office (no profit-making activity permitted), or open a branch (limited to specific sectors). Each has different capabilities, liability profiles, and tax consequences. The right vehicle depends on your sector, scale of operation, and time horizon — and choosing well at the start avoids costly conversions later.',
    },
    {
      question: 'What sectors are restricted for foreign investment?',
      answer:
        "Vietnam maintains a List of Conditional Business Lines for Foreign Investors (annexed to the Investment Law and updated periodically). Some sectors are closed (e.g., specific defence and security activities); some have foreign-ownership caps (banking, telecommunications, some education); some are subject to specific approvals (real estate, retail). I provide a sectoral access memo as part of any market-entry engagement.",
    },
    {
      question: 'What is the minimum charter capital for a foreign-invested enterprise?',
      answer:
        "There is no general minimum, but the declared charter capital must be sufficient for the proposed operations. Some sectors do impose specific minima (real-estate trading, certain financial services). The capital must be contributed within 90 days of ERC issuance and recorded properly. Under-capitalisation is a frequent reason for licensing refusal and ongoing operational difficulty.",
    },
    {
      question: 'How are foreign investors protected against expropriation?',
      answer:
        "Vietnamese law guarantees foreign investors against arbitrary expropriation. The Investment Law 2020 expressly protects foreign investments, and Vietnam is party to over 60 bilateral investment treaties (BITs) providing additional protections including national treatment, fair-and-equitable-treatment standards, and access to international arbitration (ICSID, UNCITRAL). Structuring an investment through a BIT-eligible jurisdiction is a meaningful protective layer.",
    },
    {
      question: 'How are commercial disputes between foreign and Vietnamese parties resolved?',
      answer:
        "Options range from negotiation and mediation through arbitration to Vietnamese-court litigation. For international commercial contracts, arbitration — particularly at VIAC under English-language rules, or at SIAC or ICC where the contract permits — is generally preferable. Awards are enforceable in Vietnam under the New York Convention and abroad through the same framework. The choice of forum, language, and seat is one of the most consequential clauses in any commercial contract and should be drafted with enforcement in mind.",
    },
    {
      question: 'What are the most common pitfalls in Vietnamese commercial contracts?',
      answer:
        "The most frequent issues I encounter: vague or missing dispute-resolution clauses; payment terms that don\'t match Vietnamese banking or foreign-exchange rules; pricing in inappropriate currency; failure to register or notarise contracts that legally require it; insufficient attention to termination and consequences thereof; and reliance on common-law concepts (consequential damages, indemnities, representations and warranties) without Vietnamese-law equivalents. Many of these are easy to fix — at drafting.",
    },
  ],

  cta: {
    headline: 'Investing, Operating, or Disputing in Vietnam?',
    subline:
      'From entry to exit, the right legal partner makes the difference between a Vietnamese investment that works and one that wears you down. Reach out for a strategic conversation.',
  },
}

// ============================================================================
// 5. LABOR & EMPLOYMENT
// ============================================================================

const laborAndEmployment: PracticeAreaData = {
  title: 'Labor & Employment',
  tagline:
    'Employment disputes, work permits, termination procedures, and labour-law compliance — for foreign employers operating in Vietnam and foreign employees working there.',
  introTagline: 'Practice Area · Labor & Employment',
  heroImageId: 'practiceLaborEmployment',
  metaDescription:
    'Vietnam labor and employment lawyer for foreign employers and employees. Termination disputes, work permits, employment contracts, and labour-law compliance.',

  introduction: [
    "Vietnam's Labour Code is one of the most pro-employee statutes in Southeast Asia. Termination is heavily regulated; severance is mandatory; collective dispute mechanisms are formalised; and the procedural requirements that surround the employment relationship — from contract through dismissal — are stricter than many foreign employers initially appreciate. Compliance is not optional, and the cost of errors compounds quickly.",
    'I represent both sides of the employment relationship: foreign-invested employers managing their Vietnamese workforce, and foreign individuals employed in Vietnam who face workplace disputes or issues with work permits. The technical work is similar; the perspective and strategy differ. For employers, my role is preventive — building compliant employment frameworks and handling difficult terminations cleanly. For employees, my role is protective — ensuring that contracts, terminations, and work-permit issues respect rights granted under Vietnamese law and bilateral treaty.',
    'A foreign employer\'s typical journey through Vietnamese employment law is straightforward at hiring (with attention to work permits for foreign hires), demanding during ongoing operations (compliance with the Labour Code, social insurance, and trade-union obligations), and most fraught at exit. Termination procedure is where most foreign-employer disputes arise — and where most employer losses occur.',
  ],
  whyItMatters: [
    'The 2019 Labour Code (effective 2021) made several pro-employee adjustments and tightened termination grounds. Where many foreign employers come from at-will or near-at-will systems, Vietnamese law requires specific statutory grounds for termination, written notice in prescribed form, and (in many cases) consultation with the company\'s trade union or worker representative. Failure to follow procedure — even where the substantive ground is sound — typically results in the termination being declared unlawful, with reinstatement plus back pay as the employee\'s preferred remedy.',
    'Equally, foreign employees working in Vietnam need a valid work permit (with limited statutory exceptions). The work permit is tied to a specific employer and position, and changes require formal amendments. Disputes over work permits — whether at issuance, renewal, or termination — can have immigration consequences that extend well beyond the immediate employer relationship. I work closely with our network of immigration specialists where a labour matter has work-permit implications.',
    'Most labour disputes in Vietnam follow a tiered procedure: internal negotiation, then conciliation through the labour conciliator at the District People\'s Committee, then either arbitration through the Labour Arbitration Council or litigation at the People\'s Court. The right forum depends on the type of dispute. Knowing which fork to take, and when, often determines outcome more than the substance of the underlying grievance.',
  ],

  keyLegalFramework: [
    {
      code: 'Labour Code 2019 (Law 45/2019/QH14)',
      description:
        'The foundational statute governing all employment relationships — formation, term, performance, discipline, termination, and dispute resolution.',
    },
    {
      code: 'Decree 145/2020 on Labour Code Implementation',
      description:
        'Detailed implementing regulations on contract types, working hours, leave, compensation, severance, and enforcement.',
    },
    {
      code: 'Decree 152/2020 on Foreign Workers',
      description:
        'Work-permit procedures for foreign nationals employed in Vietnam — eligibility, application, renewal, and exemptions.',
    },
    {
      code: 'Law on Social Insurance 2014 (Law 58/2014/QH13)',
      description:
        'Mandatory social, health, and unemployment insurance contributions — for both Vietnamese and (since 2018) foreign employees.',
    },
    {
      code: 'Trade Union Law 2012 (Law 12/2012/QH13)',
      description:
        'Trade-union formation, recognition, and the role of the workplace trade union in disciplinary and termination procedures.',
    },
  ],

  problemStatements: [
    {
      title: 'Termination is procedure-heavy',
      description:
        'Vietnamese law requires statutory grounds, prescribed notice, sometimes union consultation, and severance calculations done correctly. Procedural errors invalidate substantively valid terminations.',
      iconId: 'iconScales',
    },
    {
      title: 'Work permits tie employees to employers',
      description:
        'Foreign employees\' right to work in Vietnam depends on a permit issued for a specific employer and position. Disputes can have immigration consequences that compound the labour issue.',
      iconId: 'iconContract',
    },
    {
      title: 'Disputes follow a tiered process',
      description:
        'Conciliation, arbitration, and litigation each apply to different dispute types. Filing in the wrong forum wastes months and can prejudice the substantive case.',
      iconId: 'iconGavel',
    },
  ],

  whoIHelp: [
    {
      persona: 'Foreign-Invested Employers',
      needs:
        'FIEs and foreign-owned operations managing a Vietnamese workforce — drafting contracts, handling discipline and terminations, and defending labour claims.',
      iconId: 'iconContract',
      examples: [
        'Employment-contract templates and updates',
        'Disciplinary and termination procedures',
        'Labour-dispute defence',
        'Restructuring and redundancy programmes',
      ],
    },
    {
      persona: 'Foreign Employees',
      needs:
        'Foreign nationals employed in Vietnam facing wrongful-termination claims, work-permit issues, compensation disputes, or discrimination concerns.',
      iconId: 'iconHandshake',
      examples: [
        'Wrongful-termination claims',
        'Severance and compensation disputes',
        'Work-permit renewal and disputes',
        'Cross-border employment matters',
      ],
    },
    {
      persona: 'HR and Compliance Functions',
      needs:
        'In-house HR teams at FIEs needing on-call Vietnamese employment counsel for difficult cases, audit support, and policy development.',
      iconId: 'iconContract',
      examples: [
        'Employment-policy review',
        'Internal investigations',
        'Compliance audits',
        'Training on Vietnamese employment law',
      ],
    },
  ],

  serviceGroups: [
    {
      groupTitle: 'For employers',
      services: [
        {
          title: 'Employment-contract drafting and review',
          description:
            'Definite-term and indefinite-term contracts, probationary contracts, and contracts for foreign employees — drafted to be enforceable, compliant with the Labour Code, and aligned with the company\'s commercial interests.',
        },
        {
          title: 'Discipline and termination procedures',
          description:
            'Walking employers through the procedural requirements for discipline up to and including dismissal — written notices, consultation with the workplace trade union, severance calculation, and final settlement.',
        },
        {
          title: 'Restructuring and redundancy programmes',
          description:
            'Mass terminations for restructuring, technological change, or economic reasons require special procedures, plans submitted to the labour authority, and enhanced severance. I structure these to minimise exposure.',
        },
        {
          title: 'Internal investigations',
          description:
            'Investigating allegations of misconduct, harassment, fraud, or breach of duty. I conduct interviews, prepare findings, and recommend disciplinary or other action that protects the company\'s position.',
        },
      ],
    },
    {
      groupTitle: 'For employees',
      services: [
        {
          title: 'Wrongful-termination claims',
          description:
            'Pursuing reinstatement, back pay, and damages for terminations that violated the Labour Code\'s procedural or substantive requirements. The remedy in Vietnam is generous compared to most jurisdictions.',
        },
        {
          title: 'Severance and compensation disputes',
          description:
            'Recovering unpaid severance, leave entitlements, bonuses, and other compensation owed at the end of employment.',
        },
        {
          title: 'Work-permit issues',
          description:
            'Disputes over work-permit issuance, renewal, scope, or termination — including coordination with immigration counsel where the issue extends to visa or residence.',
        },
        {
          title: 'Cross-border employment',
          description:
            'Foreign employees on assignment to Vietnam, dual-employment structures, expatriate compensation packages, and tax-equalisation arrangements — and the disputes that arise when these structures break down.',
        },
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: 'Initial review',
      description:
        'Confidential review of the employment situation, the contract, and the relevant Labour Code provisions. Written assessment within 5 business days.',
      duration: '1 week',
    },
    {
      step: 2,
      title: 'Pre-dispute strategy',
      description:
        'Drafting written notices, conducting investigations, preparing for consultation with worker representatives, or preparing the employee\'s formal grievance.',
      duration: '2-4 weeks',
    },
    {
      step: 3,
      title: 'Conciliation or filing',
      description:
        'Mandatory conciliation at the District People\'s Committee, followed by Labour Arbitration Council or court filing as appropriate. Most matters resolve in conciliation if well-prepared.',
      duration: '1-6 months',
    },
    {
      step: 4,
      title: 'Final outcome',
      description:
        'Settlement, arbitration award, or court judgment — with implementation including severance payment, reinstatement, work-permit changes, and any required regulatory filings.',
      duration: '1-3 months',
    },
  ],

  featuredCase: {
    slug: 'employment-dispute-japanese',
    title: 'Employment Termination Dispute for Japanese Manufacturer',
    country: 'Japan',
    flag: '🇯🇵',
    area: 'Labor',
    outcome:
      'Confidential settlement at favourable terms for the employer. No other employees pursued similar claims, and the company implemented improved HR procedures based on our recommendations.',
    matterValue: '$200K',
    imageId: 'caseDocumentSigning',
  },

  relatedInsightSlugs: ['top-legal-risks-foreign-investors-vietnam'],

  faq: [
    {
      question: 'Do foreign employees need a work permit in Vietnam?',
      answer:
        'Yes, with limited exceptions. Foreign employees must obtain a work permit before starting work in Vietnam. Exceptions exist for specific categories — foreign experts on internal transfers within the same group, certain managerial roles in FIEs they own, and others — but the default requirement applies. Employers face penalties for employing foreigners without valid permits, and the foreign employee may face deportation. I review work-permit eligibility as a first step in every foreign-hire engagement.',
    },
    {
      question: 'Can a foreign employer terminate Vietnamese employees at will?',
      answer:
        "No. Vietnamese law restricts termination to specific statutory grounds: serious misconduct, prolonged inability to perform duties, employee redundancy due to restructuring or technological change, force majeure, and a few others. Procedural requirements (written notice, sometimes consultation with the trade union, severance calculation) accompany substantive grounds. At-will employment is not recognised, and even probationary terminations require compliance with the Labour Code's probation provisions.",
    },
    {
      question: 'What severance is owed when an employee leaves?',
      answer:
        "Severance allowance: half a month's average salary per year of service for employees who have completed at least 12 months and whose employment ends in covered circumstances (most ordinary terminations, expiry of definite-term contracts, mutual agreement, etc.). Job-loss allowance: one month's average salary per year of service (minimum two months) for redundancy due to restructuring or technological change. There are also unused-leave payouts, deferred bonuses, and notice-pay-in-lieu where applicable. I calculate these precisely in each case.",
    },
    {
      question: 'What is the role of the workplace trade union in termination?',
      answer:
        "Where a workplace trade union exists, employers must consult the union (typically requesting written opinion within prescribed time) before terminating union officers, and in some cases before terminations for misconduct. Failure to consult is a procedural defect that can invalidate the termination. Where no formal union exists, consultation may be required with the workforce representative. I advise on the precise requirements for each company\'s structure.",
    },
    {
      question: 'How long do labour disputes take in Vietnam?',
      answer:
        "Mandatory conciliation at the District People's Committee typically takes 1-3 months. If conciliation fails, the matter proceeds to either the Labour Arbitration Council (typically 6-12 months) or the People's Court (typically 6-18 months at first instance). Many matters settle in conciliation, particularly when the employer's procedural compliance is robust and the negotiation is well-prepared.",
    },
    {
      question: 'Can I sue my Vietnamese employer for wrongful termination as a foreign employee?',
      answer:
        "Yes. Foreign employees have the same rights to challenge wrongful termination as Vietnamese employees, and the same remedies (reinstatement plus back pay, or damages). The procedural path is identical: conciliation, then court. Practical considerations — your work permit may have been cancelled with the termination, your visa may be running out, you may need to leave Vietnam — make speed important, and I can usually advance a claim from outside the country once the framework is in place.",
    },
  ],

  cta: {
    headline: 'Employment Issue in Vietnam? Get Clear Counsel.',
    subline:
      'Whether you are an employer planning a difficult termination, an HR team needing on-call advice, or an employee facing a workplace dispute — get a confidential assessment before your next move.',
  },
}

// ============================================================================
// 6. CRIMINAL DEFENSE
// ============================================================================

const criminalDefense: PracticeAreaData = {
  title: 'Criminal Defense',
  tagline:
    'Defence representation for foreign nationals facing criminal investigation or charges in Vietnam — from arrest through investigation, trial, and appeal, with embassy coordination throughout.',
  introTagline: 'Practice Area · Criminal Defense',
  heroImageId: 'practiceCriminalDefense',
  metaDescription:
    'Criminal defense lawyer for foreign nationals in Vietnam. Representation in criminal investigation, detention, trial, and appeal — with embassy coordination and English-language support.',

  introduction: [
    'Being involved in a criminal matter in a foreign country is among the most disorienting experiences anyone can face. The legal system is unfamiliar, the language is different, the stakes are high, and the support network is far away. For foreign nationals in Vietnam — whether tourists, expatriates, business visitors, or long-term residents — having experienced legal representation from the earliest possible moment is the single most important factor in achieving a fair outcome.',
    "I represent foreign nationals at every stage of the Vietnamese criminal-justice process: from initial detention, through the investigation phase, through trial, and on appeal where necessary. My practice covers the full range of allegations that foreign nationals encounter — commercial fraud, drug offences, traffic-related criminal matters, theft, assault, immigration offences, and matters that begin as commercial disputes but cross into criminal territory.",
    'The Vietnamese criminal-justice system operates very differently from common-law systems. There is no jury. The investigation phase carries enormous weight; many cases are effectively decided before the courtroom. The procuracy (Viện kiểm sát) plays a central role unfamiliar to most foreign clients. Procedural protections exist and are real — but they must be invoked, on time, by counsel who knows the framework. My job is to invoke them, completely and consistently, on your behalf.',
  ],
  whyItMatters: [
    'The single most consequential decision in any criminal matter involving a foreign national is when to engage counsel. The right answer is always: immediately. The investigation phase in Vietnamese practice typically lasts two to four months and is when the case file — the evidence the court will eventually rule on — is built. Without counsel, foreign clients commonly say things in initial questioning that are mistranslated, misunderstood, or used in ways they did not intend. With counsel from the first hour, the file develops with the defence position represented, the rights of the accused exercised, and the path to a favourable outcome substantially clearer.',
    'Equally, many criminal matters involving foreign nationals begin as something else: a commercial dispute that the other side reframes as fraud, a traffic accident that authorities investigate as a criminal matter rather than a tort, a regulatory issue treated as criminal by an investigating department. In these cases, the boundary between civil and criminal is precisely where the matter is decided — and skilled counsel can often have a matter declassified or redirected before charges crystallise.',
    'I work closely with the consular sections of foreign embassies and consulates in Vietnam. Embassies cannot intervene in legal proceedings, but they can ensure that detention conditions are humane, family is informed, and the accused has access to a list of qualified local counsel. I have established working relationships with most major embassies in Hanoi and Ho Chi Minh City and routinely coordinate with them in matters involving their nationals.',
  ],

  keyLegalFramework: [
    {
      code: 'Penal Code 2015 (amended 2017)',
      description:
        'The substantive criminal law: definitions of offences, ranges of penalties, defences, and aggravating and mitigating circumstances.',
    },
    {
      code: 'Criminal Procedure Code 2015 (Law 101/2015/QH13)',
      description:
        'Procedural rules for investigation, prosecution, trial, and appeal — including the rights of the accused and detained persons.',
    },
    {
      code: 'Law on Lawyers 2006',
      description:
        'The right to legal representation, the lawyer\'s right to attend interrogations, and the procedural mechanics of defence representation.',
    },
    {
      code: 'Law on Immigration of Foreigners 2014',
      description:
        'Status of foreign nationals in Vietnam, including consequences of criminal matters for visas and residence permits.',
    },
    {
      code: 'Vienna Convention on Consular Relations',
      description:
        'Vietnam\'s obligations to notify a detainee\'s consulate without delay and to facilitate consular access — a treaty-level right of every foreign national.',
    },
  ],

  problemStatements: [
    {
      title: 'The investigation phase is decisive',
      description:
        'Most cases are effectively built and resolved before they ever reach a courtroom. Counsel needs to be in the room from the first interrogation, not after.',
      iconId: 'iconScales',
    },
    {
      title: 'Civil and criminal can blur',
      description:
        'A commercial dispute can be reframed as fraud. A traffic accident can be investigated criminally rather than as a tort. The right legal pressure can keep matters in the appropriate forum.',
      iconId: 'iconGavel',
    },
    {
      title: 'Communication is critical',
      description:
        'Misunderstood statements, misinterpreted body language, and missing translation can create case-defining damage. Fluent English communication and skilled interpretation matter at every interaction.',
      iconId: 'iconHandshake',
    },
  ],

  whoIHelp: [
    {
      persona: 'Foreign Visitors and Residents Detained',
      needs:
        'Foreign nationals — tourists, business visitors, expats — who have been detained, summoned for questioning, or formally accused. Every hour matters; engage immediately.',
      iconId: 'iconHandshake',
      examples: [
        'Police-station representation',
        'Pre-charge investigation defence',
        'Bail and release applications',
        'Embassy and family liaison',
      ],
    },
    {
      persona: 'Companies Facing Criminal Investigation',
      needs:
        'FIEs and overseas companies whose Vietnamese operations have triggered criminal investigation — for tax, customs, environmental, anti-corruption, or other corporate offences.',
      iconId: 'iconContract',
      examples: [
        'Corporate criminal liability defence',
        'Internal investigation and disclosure',
        'Director and officer representation',
        'Settlement and remediation programmes',
      ],
    },
    {
      persona: 'Defendants Facing Trial or Appeal',
      needs:
        'Foreign nationals who are now formally charged and proceeding to trial, or who have been convicted at first instance and need appellate representation.',
      iconId: 'iconScales',
      examples: [
        'Trial-court advocacy',
        'Appellate representation',
        'Cassation and reopening petitions',
        'Sentence reduction and amnesty applications',
      ],
    },
  ],

  serviceGroups: [
    {
      groupTitle: 'Investigation phase',
      services: [
        {
          title: 'Immediate intervention upon detention',
          description:
            'Within hours of engagement: contact with the investigating authority, attendance at interrogation, ensuring procedural rights are respected, and embassy notification where requested.',
        },
        {
          title: 'Defence-position development',
          description:
            'Building the defence narrative, gathering exculpatory evidence, identifying witnesses, and preparing factual submissions that shape the file before formal charges are decided.',
        },
        {
          title: 'Charge negotiation and declassification',
          description:
            'Where appropriate, formal submissions to have a matter dismissed, redirected to civil proceedings, or charged at a lesser severity. Done well at the right time, this is often the most consequential work.',
        },
        {
          title: 'Bail and release applications',
          description:
            'Applications for release pending investigation under Articles 121-126 of the Criminal Procedure Code — often successful for matters that do not involve serious violence or flight risk.',
        },
      ],
    },
    {
      groupTitle: 'Trial and appeal',
      services: [
        {
          title: 'Trial advocacy',
          description:
            'Full representation at first-instance trial: cross-examination, presentation of defence evidence, oral argument, and sentencing submissions. Trial is conducted in Vietnamese, with interpretation arranged for the client throughout.',
        },
        {
          title: 'Sentencing strategy',
          description:
            'Where conviction is likely, sentencing strategy can have outsized impact — character evidence, mitigating circumstances, restitution, and post-offence conduct all count toward outcome.',
        },
        {
          title: 'Appellate representation',
          description:
            'Appeals to the Provincial People\'s Court or High People\'s Court following conviction, focused on legal error, procedural defect, or sentence severity.',
        },
        {
          title: 'Cassation and post-conviction',
          description:
            'Petitions for cassation review of legally erroneous final judgments, and applications for amnesty, sentence reduction, or early release through the appropriate post-conviction channels.',
        },
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: 'Immediate engagement',
      description:
        'Within hours of contact: contact with the investigating authority, attendance at any pending interrogation, and embassy liaison if requested. Time is critical — engage immediately.',
      duration: 'Hours',
    },
    {
      step: 2,
      title: 'Investigation defence',
      description:
        'Two to four months of active defence during the investigation phase: attending interrogations, gathering evidence, making formal submissions, and shaping the case file.',
      duration: '2-4 months',
    },
    {
      step: 3,
      title: 'Trial preparation and conduct',
      description:
        'If charges proceed, full preparation and conduct of the trial — typically held within 2-4 months of formal indictment.',
      duration: '2-6 months',
    },
    {
      step: 4,
      title: 'Appeal or post-conviction',
      description:
        'Where the verdict warrants, appeal within statutory deadlines, or post-conviction work for sentence management and early release.',
      duration: 'As needed',
    },
  ],

  featuredCase: {
    slug: 'criminal-defense-foreign-national',
    title: 'Criminal Defense of Foreign National in Ho Chi Minh City',
    country: 'United Kingdom',
    flag: '🇬🇧',
    area: 'Criminal Defense',
    outcome:
      'After thorough representations to the investigating authorities and the procuracy, all charges were dismissed at the investigation phase. The client returned home without ever appearing before a court.',
    imageId: 'caseDocumentSigning',
  },

  relatedInsightSlugs: ['top-legal-risks-foreign-investors-vietnam'],

  faq: [
    {
      question: 'What should I do if I am detained or summoned in Vietnam?',
      answer:
        'Stay calm, request a lawyer immediately, and ask to contact your country\'s embassy or consulate. You have the right to legal representation from the moment of detention under the Criminal Procedure Code. Do not sign documents you do not understand — interpretation should be provided in any language you understand. Do not make substantive statements without your lawyer present. Cooperate with basic procedural requirements (identification, basic information) while protecting substantive rights.',
    },
    {
      question: 'Can my embassy help if I am arrested?',
      answer:
        "Your embassy or consulate can: ensure you are not being mistreated, contact your family, provide a list of local lawyers, and monitor the proceedings to confirm fair treatment. They cannot intervene in the legal proceedings, advocate your defence, or arrange your release. The substantive defence requires Vietnamese counsel — but the embassy is an important ally and I work with consular sections regularly to coordinate.",
    },
    {
      question: 'How does the Vietnamese criminal-justice system work?',
      answer:
        "Cases proceed through three phases: investigation (police investigative authority, 2-4 months typically), prosecution (procuracy review, 1-2 months), and trial (court, 1-2 months). The investigation phase is generally the longest and most decisive — much of the case is built before trial. Unlike common-law systems, there is no jury — judges decide both guilt and sentence. Most cases proceed to a panel of one judge plus two lay assessors at first instance.",
    },
    {
      question: 'Can I be released on bail in Vietnam?',
      answer:
        "Vietnamese law provides for several pre-trial release measures including bail (under Article 122 of the Criminal Procedure Code, requires monetary deposit and guarantor) and release on personal recognisance for less serious matters. Whether release is granted depends on the seriousness of the offence, the strength of the evidence, the defendant\'s ties to Vietnam, and flight risk. Foreign nationals can be released on bail and routinely are for matters that do not involve serious violence.",
    },
    {
      question: 'Will a Vietnamese conviction affect my home country?',
      answer:
        "Possibly. Vietnam shares criminal records with some countries through bilateral or multilateral agreements; in others, a criminal conviction is reportable on visa, employment, or professional applications even without automatic transmission. Sentence severity can also affect immigration status — both your right to remain in Vietnam and your future entry to other countries. I advise on cross-border consequences and coordinate with home-country counsel where appropriate.",
    },
    {
      question: 'How long do criminal cases take in Vietnam?',
      answer:
        "From first detention to final judgment: a simple matter resolved at the investigation phase can complete in 2-4 months. A matter that proceeds to trial typically takes 6-12 months at first instance. Appeals add another 2-4 months. Cassation, where pursued, can take longer. Throughout, my objective is the best outcome at the earliest stage — many matters end favourably in the investigation phase and never reach a courtroom.",
    },
  ],

  cta: {
    headline: 'Criminal Matter in Vietnam? Engage Counsel Immediately.',
    subline:
      'Time is the most valuable resource in any criminal matter. Whether you are detained, summoned for questioning, or simply concerned about a developing situation — reach out without delay.',
  },
}

// ============================================================================
// 7. INTERNATIONAL ARBITRATION
// ============================================================================

const internationalArbitration: PracticeAreaData = {
  title: 'International Arbitration',
  tagline:
    'International commercial arbitration at VIAC, SIAC, ICC, and beyond — for cross-border disputes where the parties wisely chose arbitration over litigation, and for the enforcement of foreign awards in Vietnam.',
  introTagline: 'Practice Area · International Arbitration',
  heroImageId: 'practiceArbitration',
  metaDescription:
    'International arbitration lawyer in Vietnam. VIAC, SIAC, ICC arbitration representation, and enforcement of foreign arbitral awards under the New York Convention.',

  introduction: [
    'For most cross-border commercial disputes connected to Vietnam, international arbitration is the right forum. It is faster than Vietnamese litigation. It allows parties to choose neutral, expert arbitrators. It is conducted in a language the parties choose — typically English. It is confidential. And — most consequentially — its awards are enforceable globally under the 1958 New York Convention, to which Vietnam has been a party since 1995.',
    'I represent foreign clients in international arbitration before the Vietnam International Arbitration Centre (VIAC), the Singapore International Arbitration Centre (SIAC), the International Chamber of Commerce (ICC), and ad hoc UNCITRAL tribunals. My practice covers the full lifecycle of an arbitration: from drafting the arbitration clause at the contract stage, through commencement and tribunal constitution, evidentiary hearings, award, and — increasingly — enforcement of foreign awards in Vietnam.',
    "Beyond the procedural mechanics, the strategic dimension of arbitration matters greatly. The choice of seat, language, governing law, and institutional rules — made years before any dispute — has enormous consequences when the dispute arrives. A well-drafted arbitration clause can mean the difference between a clean award enforceable across borders and a procedural nightmare that costs years and millions to untangle. I work both sides of this: drafting clauses that work and litigating around clauses that don't.",
  ],
  whyItMatters: [
    'Vietnam\'s arbitration framework has matured significantly. The 2010 Law on Commercial Arbitration brought Vietnamese arbitration substantially into line with the UNCITRAL Model Law, and VIAC has emerged as a sophisticated regional arbitration centre with multilingual procedures, an experienced panel of arbitrators, and rules consistent with international best practice. For disputes connected to Vietnam, VIAC is often the optimal forum: regionally located, familiar with Vietnamese law and language, and producing awards that are enforced as readily abroad as in Vietnam.',
    'The 1958 New York Convention is the cornerstone of international arbitration enforcement. It obliges contracting states to recognise and enforce arbitral awards from other contracting states, subject only to narrow grounds for refusal. Vietnam has been a party since 1995, and the Vietnamese courts have a generally good track record of enforcing foreign arbitral awards under the Convention. This is precisely the protection that international parties to Vietnamese transactions need: a final binding decision they can enforce against the Vietnamese counterparty\'s assets in Vietnam.',
    "Equally, foreign awards do not enforce themselves. Recognition and enforcement under the New York Convention requires a formal application to the competent Vietnamese court (typically the Provincial People's Court), filing of the original or certified copies of the award and arbitration agreement, certified translation, and a hearing on whether any of the narrow refusal grounds applies. I handle this enforcement work for foreign clients regularly — and it is an area where local procedural fluency materially affects outcome.",
  ],

  keyLegalFramework: [
    {
      code: 'Law on Commercial Arbitration 2010 (Law 54/2010/QH12)',
      description:
        'Foundational statute on commercial arbitration in Vietnam — substantially based on the UNCITRAL Model Law, governing arbitration agreement, tribunal, procedure, and award.',
    },
    {
      code: '1958 New York Convention',
      description:
        'Vietnam has been a party since 1995. Provides the framework for recognition and enforcement of foreign arbitral awards in Vietnam, with narrow refusal grounds.',
    },
    {
      code: 'Civil Procedure Code 2015 — Chapters on arbitration',
      description:
        'Procedural rules in Vietnamese courts for setting aside Vietnamese awards, recognition and enforcement of foreign awards, and supporting measures.',
    },
    {
      code: 'VIAC Arbitration Rules (latest revision)',
      description:
        'Procedural rules for arbitration administered by the Vietnam International Arbitration Centre — commencement, tribunal constitution, hearings, award.',
    },
    {
      code: 'Bilateral Investment Treaties (BITs) — investor-state arbitration',
      description:
        'Where the dispute arises from foreign investment, investor-state arbitration under ICSID, UNCITRAL, or other rules may be available based on Vietnam\'s 60+ BITs.',
    },
  ],

  problemStatements: [
    {
      title: 'The clause is everything',
      description:
        'A poorly drafted arbitration clause produces nothing but more disputes about the dispute. The seat, language, rules, and law need careful selection.',
      iconId: 'iconContract',
    },
    {
      title: 'Foreign awards need local enforcement',
      description:
        'A favourable foreign award is only as valuable as your ability to enforce it where the assets are. Vietnamese enforcement procedure is reasonable but precise.',
      iconId: 'iconScales',
    },
    {
      title: 'Multi-jurisdictional from day one',
      description:
        'International arbitration involves coordinating counsel, evidence, witnesses, and assets across multiple jurisdictions — and the right Vietnamese counsel is the anchor for the Vietnamese leg of all of it.',
      iconId: 'iconGlobe',
    },
  ],

  whoIHelp: [
    {
      persona: 'Companies in Cross-Border Disputes',
      needs:
        'Foreign-invested or overseas companies in commercial disputes with Vietnamese counterparties, where the contract has — or should have — an arbitration clause.',
      iconId: 'iconContract',
      examples: [
        'VIAC arbitration representation',
        'SIAC, ICC, UNCITRAL representation',
        'Multi-party and complex disputes',
        'Construction, energy, and infrastructure arbitration',
      ],
    },
    {
      persona: 'Foreign Investors with BIT Claims',
      needs:
        'Foreign investors whose Vietnamese investments have suffered government-related interference and who are considering investor-state arbitration under bilateral investment treaties.',
      iconId: 'iconGlobe',
      examples: [
        'BIT analysis and claim assessment',
        'Notice of dispute and amicable settlement',
        'ICSID and UNCITRAL investor-state proceedings',
        'Coordination with international investment counsel',
      ],
    },
    {
      persona: 'Award Enforcers',
      needs:
        'Foreign parties holding favourable arbitral awards (foreign or Vietnamese) seeking recognition and enforcement against assets in Vietnam.',
      iconId: 'iconHandshake',
      examples: [
        'New York Convention enforcement',
        'Asset tracing and attachment',
        'Setting aside opposing awards',
        'Cross-border enforcement coordination',
      ],
    },
  ],

  serviceGroups: [
    {
      groupTitle: 'Pre-arbitration',
      services: [
        {
          title: 'Arbitration-clause drafting and review',
          description:
            'Drafting arbitration clauses for international commercial contracts — institutional choice (VIAC, SIAC, ICC), seat, language, governing law, expert tribunal selection, and emergency-arbitrator provisions.',
        },
        {
          title: 'Pre-dispute negotiation',
          description:
            'Once a dispute crystallises but before arbitration is commenced, structured negotiation to resolve the matter or narrow the scope of disputed issues — frequently effective when the arbitration clause is strong.',
        },
        {
          title: 'Mediation and Med-Arb',
          description:
            'Mediation conducted before arbitration commencement, or Med-Arb procedures combining the two. Often the fastest, lowest-cost resolution where commercial relationships continue.',
        },
      ],
    },
    {
      groupTitle: 'Arbitration representation',
      services: [
        {
          title: 'VIAC arbitration',
          description:
            'Full representation in arbitration administered by the Vietnam International Arbitration Centre — from request for arbitration through award. VIAC offers English-language procedures and expert arbitrators.',
        },
        {
          title: 'SIAC, ICC, UNCITRAL arbitration',
          description:
            'Representation in arbitration before international institutions and ad hoc tribunals. I act as Vietnamese-law counsel and as a member of the broader arbitration team, coordinating with international firms.',
        },
        {
          title: 'Construction and infrastructure arbitration',
          description:
            'Specialised representation in construction, EPC, and infrastructure-project disputes — with attention to FIDIC contract terms, programming, delay analysis, and quantum.',
        },
        {
          title: 'Investor-state arbitration',
          description:
            'BIT-based investor-state proceedings under ICSID, UNCITRAL, or institutional rules. I provide Vietnamese-law support and coordination with specialist investment-arbitration counsel.',
        },
      ],
    },
    {
      groupTitle: 'Award and enforcement',
      services: [
        {
          title: 'Recognition and enforcement of foreign awards',
          description:
            'Application to the competent Vietnamese court for recognition and enforcement under the New York Convention. Includes asset tracing, attachment proceedings, and follow-on enforcement.',
        },
        {
          title: 'Setting aside Vietnamese arbitral awards',
          description:
            'Defence of Vietnamese awards against set-aside applications, or pursuing set-aside on permitted grounds (Article 68 of the Law on Commercial Arbitration).',
        },
        {
          title: 'Cross-border enforcement coordination',
          description:
            'Coordinating enforcement of awards across multiple jurisdictions, working with foreign counsel to attach assets wherever the losing party holds them.',
        },
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: 'Strategy and assessment',
      description:
        'Reviewing the contract and dispute, advising on forum, costs, timeline, and prospects of success. Written assessment within two weeks.',
      duration: '1-2 weeks',
    },
    {
      step: 2,
      title: 'Commencement and constitution',
      description:
        'Filing the request for arbitration, response, and constitution of the tribunal. Often includes early procedural skirmishes over jurisdiction or interim measures.',
      duration: '2-4 months',
    },
    {
      step: 3,
      title: 'Pleadings and hearing',
      description:
        'Submission of statements of case and defence, document production, witness statements, expert reports, and the merits hearing.',
      duration: '6-12 months',
    },
    {
      step: 4,
      title: 'Award and enforcement',
      description:
        'Final award issuance, payment by the losing party, or enforcement through Vietnamese or foreign courts as required.',
      duration: '2-12 months',
    },
  ],

  featuredCase: {
    slug: 'viac-arbitration-trade-dispute',
    title: 'VIAC Arbitration for International Trade Dispute',
    country: 'Germany',
    flag: '🇩🇪',
    area: 'Arbitration',
    outcome:
      'VIAC tribunal awarded the German client $1.5M in damages plus interest and costs. The award was paid voluntarily within 60 days, avoiding enforcement proceedings. The long-term commercial relationship was preserved.',
    matterValue: '$1.5M',
    imageId: 'caseDocumentSigning',
  },

  relatedInsightSlugs: ['enforcement-foreign-arbitral-awards-vietnam'],

  faq: [
    {
      question: 'Why choose arbitration over litigation for a Vietnam-related dispute?',
      answer:
        "For most cross-border commercial disputes: arbitration is faster (often 12-18 months versus 2-4 years for Vietnamese litigation), conducted in a language the parties choose (English typically), confidential, decided by arbitrators with relevant industry expertise, and produces awards that are enforceable across borders under the New York Convention. The trade-offs: arbitration cannot order specific performance against governments, often costs more in fees, and provides limited rights of appeal. For international commercial matters, the trade-offs strongly favour arbitration.",
    },
    {
      question: 'Can a foreign arbitral award be enforced in Vietnam?',
      answer:
        "Yes. Vietnam is a party to the 1958 New York Convention and has a generally good track record of enforcing foreign arbitral awards. The procedure: file an application with the competent Provincial People\'s Court, submit the original (or certified copy) of the award and arbitration agreement with certified Vietnamese translation, and proceed through a hearing. The court can refuse only on the narrow grounds in Article V of the New York Convention — such as lack of valid arbitration agreement, lack of due process, or public-policy violation. Most properly-procured foreign awards are enforced.",
    },
    {
      question: 'How long does arbitration at VIAC typically take?',
      answer:
        "Simple cases on VIAC's expedited procedure (claims under approximately $250,000): 6-9 months from commencement to award. Standard procedure for medium complexity: 12-18 months. Complex international disputes with multiple parties, technical expert evidence, or significant document production: 18-24 months. Throughout, parties can settle at any stage, and many do so during or after the merits hearing, particularly when the tribunal\'s preliminary indications signal likely outcome.",
    },
    {
      question: 'How much does international arbitration cost?',
      answer:
        "Total costs vary widely by complexity, but as a rough guide: institutional and tribunal fees for a $5M VIAC arbitration are typically $30-80K; counsel fees on the foreign-client side typically $100-400K depending on complexity, hearing days, and document production. SIAC and ICC arbitrations are more expensive again. Many costs follow the loser, and the tribunal in its award typically orders the unsuccessful party to pay reasonable costs to the winner. I provide cost estimates with each engagement and explain the cost-allocation rules in advance.",
    },
    {
      question: 'What is investor-state arbitration and when does it apply?',
      answer:
        "Investor-state arbitration is a special form of international arbitration where a foreign investor sues a sovereign state directly, typically under a bilateral investment treaty (BIT). Vietnam has BITs with over 60 countries. If a foreign investor's investment in Vietnam has been damaged by state action (expropriation, denial of fair-and-equitable treatment, denial of justice), the investor may bring a BIT-based arbitration against Vietnam under ICSID, UNCITRAL, or other rules. These cases are sophisticated, expensive, and infrequent — but they are the highest-stakes form of international arbitration and require specialist counsel from an early stage.",
    },
    {
      question: 'Can a Vietnamese arbitration award be challenged?',
      answer:
        "Vietnamese arbitral awards (made under the Law on Commercial Arbitration 2010) can be challenged through set-aside proceedings before the Vietnamese courts. The grounds are narrow (Article 68): lack of valid arbitration agreement, party incapacity, defect in tribunal composition or procedure, breach of public policy, etc. Set-aside applications must be filed within 30 days of receipt of the award. The court can either set aside the award (returning the parties to their pre-arbitration position) or reject the application, in which case the award is final and enforceable. Foreign arbitral awards are not subject to Vietnamese set-aside procedure but can be challenged at recognition under the New York Convention.",
    },
  ],

  cta: {
    headline: 'Cross-Border Dispute Connected to Vietnam?',
    subline:
      'Whether you need to commence arbitration, defend an arbitration, enforce an award, or simply draft a clause that will work — get a confidential strategic assessment.',
  },
}

// ============================================================================
// 8. FDI, INVESTMENT & IMMIGRATION
// ============================================================================

const fdiInvestmentImmigration: PracticeAreaData = {
  title: 'FDI, Investment & Immigration',
  tagline:
    'Legal support for foreign investors and expatriates in Vietnam — company setup, M&A, investment structuring, visas, TRCs and work permits, delivered with an integrated transactional and immigration perspective.',
  introTagline: 'Practice Area · FDI, Investment & Immigration',
  heroImageId: 'practiceCorporate',
  metaDescription:
    'Foreign direct investment and immigration lawyer in Vietnam. Company setup, M&A, investment structuring, visas, temporary residence cards, and work permits for foreign investors and expatriates.',

  introduction: [
    'Foreign Direct Investment into Vietnam continues to expand — across manufacturing, technology, energy, real estate, services, retail, and consumer products. Each sector carries its own market-entry conditions under the Law on Investment 2020 and the Law on Enterprises 2020, sometimes layered with sector-specific decrees and circulars that change between years. The same is true for the immigration framework that governs the executives, technical specialists, and family members who actually move to Vietnam to operate the investment.',
    'My practice supports foreign investors and expatriates through the full lifecycle: from sector access analysis, investment registration certificate (IRC) and enterprise registration certificate (ERC) at market entry, through capital structuring and intercompany arrangements, M&A and joint-venture transactions, to the issuance of business visas, work permits, temporary residence cards (TRCs), and (where eligible) permanent residence applications for foreign staff and family.',
    'Treating the corporate and immigration tracks together — rather than as separate silos — avoids the most common foreign-investor pitfalls: declared charter capital that does not match the work-permit case for foreign employees, IRC sectoral activities that do not align with the operations the expat staff are actually performing, and TRC categories that do not match the underlying employment structure.',
  ],
  whyItMatters: [
    'Vietnam runs both the investment regime and the immigration regime through structured documentary processes. Mistakes early — wrong vehicle, undercapitalised IRC, mismatched work-permit category — are expensive to fix and visible to regulators on every subsequent filing. Getting the structure right from day one is the single highest-value step in foreign market entry.',
    'For expatriate individuals, the framework is administratively dense but workable when planned ahead. Business visas, work permits under Decree 152/2020/ND-CP, TRCs under the Law on Foreigners 2014 (as amended), and dependant arrangements for family members each have specific eligibility tests and document chains. Aligning them with the underlying employment or investment is the work that separates a smooth move from a stressful one.',
    'M&A and joint-venture transactions involving Vietnamese targets add a further procedural layer: M&A approvals where foreign ownership crosses statutory thresholds, sectoral conditions on the target activities, antitrust filings where the deal meets size triggers, and post-closing implementation of the change of investor recorded against the IRC and ERC.',
  ],

  keyLegalFramework: [
    {
      code: 'Law on Investment 2020 (Law 61/2020/QH14)',
      description:
        'Framework for foreign investment in Vietnam — conditional business lines, investment forms, IRC issuance, M&A approval procedure, investment incentives.',
    },
    {
      code: 'Law on Enterprises 2020 (Law 59/2020/QH14)',
      description:
        'Corporate-law framework — LLC, JSC, and other enterprise forms; charter capital; shareholder rights; corporate governance; ERC procedure.',
    },
    {
      code: 'Decree 31/2021/ND-CP',
      description:
        'Implementing Decree to the Law on Investment 2020 — detailed conditional business lines, IRC application content, and procedural rules.',
    },
    {
      code: 'Law on Foreigners 2014 (as amended)',
      description:
        'Entry, exit, transit and residence of foreigners in Vietnam — visa categories, temporary residence cards, permanent residence eligibility.',
    },
    {
      code: 'Decree 152/2020/ND-CP (as amended)',
      description:
        'Work permits for foreign employees — eligibility, application procedure, exempt categories, employer obligations.',
    },
    {
      code: 'Competition Law 2018 (Law 23/2018/QH14)',
      description:
        'Economic concentration filings for M&A transactions meeting statutory size thresholds — pre-merger notification to the Vietnam Competition Authority.',
    },
  ],

  problemStatements: [
    {
      title: 'Sectoral access can derail entry',
      description:
        'Conditional business lines, foreign ownership caps, and sub-sector approvals must be mapped before any capital commitment — a missed condition can require complete restructuring.',
      iconId: 'iconGlobe',
    },
    {
      title: 'Corporate and immigration must align',
      description:
        'Declared charter capital, IRC activities, employment contracts, and work-permit categories form one chain — misalignment surfaces at the worst possible moment.',
      iconId: 'iconContract',
    },
    {
      title: 'Procedures are paperwork-heavy',
      description:
        'IRC, ERC, work permits, TRCs, and M&A approvals each require notarised, apostilled, and translated foreign documents — coordinated carefully or the timeline doubles.',
      iconId: 'iconScales',
    },
  ],

  whoIHelp: [
    {
      persona: 'Foreign Investors & Multinationals',
      needs:
        'Companies entering Vietnam for the first time, expanding existing operations, or restructuring foreign-invested vehicles for tax efficiency or M&A exit.',
      iconId: 'iconGlobe',
      examples: [
        'Market-entry investment vehicle selection (LLC vs JSC vs rep office vs branch)',
        'Investment Registration Certificate (IRC) and Enterprise Registration Certificate (ERC) issuance',
        'Charter capital structuring and contribution scheduling',
        'M&A approval procedure for share or asset acquisitions',
      ],
    },
    {
      persona: 'Expatriate Individuals & Families',
      needs:
        'Executives, technical specialists, entrepreneurs and their family members moving to Vietnam under business, employment or investor arrangements.',
      iconId: 'iconHandshake',
      examples: [
        'Business visas, work permits, and work-permit exemption applications',
        'Temporary Residence Cards (TRCs) for executives, investors, and family dependants',
        'Permanent Residence eligibility assessment and application',
        'Inter-company transfer and secondment arrangements',
      ],
    },
    {
      persona: 'Foreign Law Firms & Advisors',
      needs:
        'International law firms and tax advisors seeking reliable Vietnamese counsel for cross-border M&A, FDI structuring, and immigration matters that touch Vietnam.',
      iconId: 'iconContract',
      examples: [
        'Vietnam-law due diligence on M&A targets',
        'Local counsel opinions and certificates',
        'Coordination of multi-jurisdiction filings',
        'Implementation of Vietnam-side post-closing steps',
      ],
    },
  ],

  serviceGroups: [
    {
      groupTitle: 'Market-entry and investment structuring',
      services: [
        {
          title: 'Sectoral-access memorandum',
          description:
            'Analysis of conditional business lines and foreign-ownership caps for the intended activities under the Law on Investment 2020 — delivered before any capital commitment.',
        },
        {
          title: 'Investment vehicle selection',
          description:
            'Comparison of LLC, JSC, representative office, and branch options against the client’s revenue, hiring, contracting, and time-horizon plans — with charter-capital sizing.',
        },
        {
          title: 'IRC and ERC issuance',
          description:
            'Preparation and filing of the Investment Registration Certificate (Department of Planning and Investment) and Enterprise Registration Certificate to establish the Vietnamese vehicle.',
        },
        {
          title: 'Foreign-exchange-control planning',
          description:
            'Direct Investment Capital Account (DICA) setup, capital contribution scheduling under the 90-day rule, and documentation for later dividend remittance and exit-proceeds remittance.',
        },
      ],
    },
    {
      groupTitle: 'M&A and joint ventures',
      services: [
        {
          title: 'M&A due diligence (Vietnam-side)',
          description:
            'Legal due diligence covering corporate, contractual, employment, real estate, IP, regulatory, tax and litigation — flagged and quantified for SPA negotiation.',
        },
        {
          title: 'Share and asset purchase agreements',
          description:
            'Drafting and negotiation of SPAs, APAs, and shareholders’ agreements adapted to Vietnamese-law enforceability while preserving common-law commercial expectations.',
        },
        {
          title: 'M&A approval and competition filings',
          description:
            'Filings with the Department of Planning and Investment for change of investor; pre-merger notifications to the Vietnam Competition Authority for size-threshold deals.',
        },
        {
          title: 'Joint-venture structuring',
          description:
            'Deadlock, exit, related-party, and governance terms designed to anticipate divergence between foreign and Vietnamese partners — drafted to survive contested moments.',
        },
      ],
    },
    {
      groupTitle: 'Immigration: visas, work permits, TRCs',
      services: [
        {
          title: 'Business visas and visa-on-arrival assistance',
          description:
            'Single-entry and multiple-entry business visas, including in-country renewal and conversion to longer-term categories. Coordination with sponsoring entities.',
        },
        {
          title: 'Work permits under Decree 152/2020/ND-CP',
          description:
            'Position approval, document chain (legalised diplomas, criminal-record checks, health certificates, employment letters), and submission to the labour authority.',
        },
        {
          title: 'Temporary Residence Cards (TRCs)',
          description:
            'TRC applications for executives, investors, and family dependants — including category selection (DT, LD, TT) and duration alignment with underlying employment or investment.',
        },
        {
          title: 'Permanent Residence and dependant arrangements',
          description:
            'Eligibility assessment for Permanent Residence; dependant TRCs for spouses and children; school-enrolment and bank-account practical support for relocating families.',
        },
      ],
    },
  ],

  process: [
    {
      step: 1,
      title: 'Strategic assessment',
      description:
        'Sectoral-access review, vehicle recommendation, capital sizing, and immigration roadmap — delivered as a written memorandum within two to three weeks of engagement.',
      duration: '2-3 weeks',
    },
    {
      step: 2,
      title: 'Documentation and filings',
      description:
        'Preparation of foreign documents (notarisation, apostille, certified translation), IRC/ERC applications, employment contracts, and initial work-permit applications.',
      duration: '6-10 weeks',
    },
    {
      step: 3,
      title: 'Approvals and capital contribution',
      description:
        'IRC and ERC issuance, DICA opening, charter-capital contribution within 90 days, work-permit approvals, and TRC issuance for foreign staff.',
      duration: '8-12 weeks',
    },
    {
      step: 4,
      title: 'Operational handover',
      description:
        'Tax registration, social-insurance setup, employment policies, ongoing compliance calendar — and an annual legal-audit cadence for larger investments.',
      duration: '2-4 weeks',
    },
  ],

  featuredCase: {
    slug: 'european-company-contract-dispute',
    title: 'European Manufacturer — Vietnam Market Entry',
    country: 'Germany',
    flag: '🇩🇪',
    area: 'FDI, Investment & Immigration',
    outcome:
      'IRC, ERC, charter-capital contribution, and work permits for the foreign management team — fully operational within five months of mandate.',
    matterValue: 'USD 8M+ FDI',
    imageId: 'caseDocumentSigning',
  },

  relatedInsightSlugs: [
    'top-legal-risks-foreign-investors-vietnam',
    'due-diligence-checklist-vietnam',
  ],

  faq: [
    {
      question: 'What investment vehicle is best for foreign entry to Vietnam?',
      answer:
        'It depends on five questions: will you generate revenue in Vietnam, do you need to import or export goods directly, will you employ Vietnamese staff under your direct entity, will you sign customer contracts directly, and what is your time horizon? Honest answers usually point clearly to one of: 100% foreign-owned LLC, joint-stock company, joint venture with a Vietnamese partner, representative office, or branch. I provide a written recommendation as the first deliverable of any market-entry mandate.',
    },
    {
      question: 'How long does it take to set up a foreign-invested company?',
      answer:
        'For an unconditional sector with straightforward documentation: typically 8 to 12 weeks from engagement to operational ERC, plus 90 days for charter-capital contribution. Conditional sectors with sub-sector approvals can add another 6 to 12 weeks. Work-permit applications run in parallel and typically take 4 to 6 weeks once supporting documents are legalised.',
    },
    {
      question: 'Can my family come with me on a Vietnamese work assignment?',
      answer:
        'Yes. Once you hold a work permit or qualifying TRC, your spouse and children under 18 can apply for dependant TRCs in the TT (visiting/dependant) category, valid for the same period as your principal TRC. Practical support — school enrolment, bank account opening, residential lease registration — is part of every executive immigration engagement.',
    },
    {
      question: 'What is the difference between an IRC and an ERC?',
      answer:
        'The Investment Registration Certificate (IRC) is the foreign-investment approval — it sets out the investor, the project, the sectoral activities, the charter capital, and the investment timeline. The Enterprise Registration Certificate (ERC) is the corporate-law document constituting the Vietnamese legal entity — equivalent to articles of incorporation plus business registration. For most foreign investments you need both; the IRC is issued first and is a prerequisite to the ERC.',
    },
  ],

  cta: {
    headline: 'Planning a Vietnam Investment or Relocation?',
    subline:
      'Whether you are entering the market, restructuring an existing investment, completing a Vietnamese M&A transaction, or relocating staff — early advice saves months later. Get a confidential strategic assessment.',
  },
}

// ============================================================================
// EXPORT
// ============================================================================

export const practiceAreasData: Record<string, PracticeAreaData> = {
  'civil-litigation': civilLitigation,
  'land-and-property': landAndProperty,
  'family-law-and-divorce': familyLawAndDivorce,
  'corporate-and-commercial': corporateAndCommercial,
  'labor-and-employment': laborAndEmployment,
  'criminal-defense': criminalDefense,
  arbitration: internationalArbitration,
  'fdi-investment-immigration': fdiInvestmentImmigration,
}

export const practiceAreaSlugs = Object.keys(practiceAreasData)
