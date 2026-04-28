import type { ImageId } from '@/lib/images'

export interface CaseStudy {
  title: string
  country: string
  flag: string
  area: string
  practiceAreaSlug: string
  year: number
  matterValue: string
  clientContext: string
  challenge: string
  approach: string
  outcome: string
  legalIssues: string[]
  applicableLaw: { code: string; description: string }[]
  lessonsLearned: string
  heroImageId?: ImageId
}

// ============================================================================
// 1. EUROPEAN COMPANY $2M CONTRACT DISPUTE
// ============================================================================

const europeanContractDispute: CaseStudy = {
  title: 'Representing a European Company in a $2M Contract Dispute',
  country: 'France',
  flag: '🇫🇷',
  area: 'Civil Litigation',
  practiceAreaSlug: 'civil-litigation',
  year: 2023,
  matterValue: '$2M+',
  clientContext:
    'A French manufacturer of specialty industrial chemicals with annual revenue around €120M, operating across Europe and Southeast Asia. They had been doing business with a Vietnamese distributor for several years through a written supply agreement that included minimum-volume commitments and standard 60-day payment terms.',
  challenge:
    "Over a 14-month period, the Vietnamese distributor began missing volume commitments and stretched payment terms beyond contract limits. By the time the client engaged our firm, outstanding invoices totalled USD 2.04M, the distributor had ceased communication for six weeks, and warehouse stock data suggested they had begun sourcing from a competitor in violation of the exclusivity provision. The client faced three distinct problems: a substantial bad debt, breach of an exclusive distribution arrangement that had real strategic value, and the practical question of whether to pursue recovery in Vietnam at all given the perceived complexity. They had received conflicting advice from two other firms about whether the case was even viable.\n\nA further complication: the contract was signed in English, governed by Vietnamese law, and contained a Vietnam-court dispute resolution clause rather than arbitration. The supporting evidence — purchase orders, delivery receipts, email correspondence, internal communications about the breach — was held across three countries (France, Singapore, Vietnam) and required careful legalisation and translation before any court would accept it as evidence.",
  approach:
    "Our strategy combined aggressive procedural posture with deliberate openness to settlement. The first step was a comprehensive document collection across the client's France, Singapore, and Vietnam offices, with each foreign-language document independently certified-translated. We worked with the client's in-house counsel to authenticate signatures via apostille and prepared a complete evidentiary file before filing.\n\nWe filed a civil claim at the Provincial People's Court in Ho Chi Minh City for the full outstanding amount plus contractual interest and damages for breach of exclusivity. Simultaneously, we applied under Article 114 of the Civil Procedure Code for an interim asset freeze on the distributor's known bank accounts, which the court granted within ten days. The asset freeze fundamentally changed the dispute's centre of gravity: from a counterparty who had been ignoring our client to one who suddenly faced operational paralysis.\n\nAt the court-annexed mediation conference, we presented the evidence package and a structured settlement proposal that included a payment plan over twelve months, a contractual exclusivity reset, and replacement of the distributor's senior commercial team. The mediator and the court endorsed the framework, and a binding settlement was concluded that day.",
  outcome:
    "The matter resolved at the first court-annexed mediation, eight months after engagement. Recovery: USD 1.88M of the USD 2.04M claimed (92%), paid in three tranches over twelve months. The asset freeze was lifted upon the second payment. The exclusivity arrangement was restored on revised commercial terms that gave the client greater oversight and remedies for any future breach. The business relationship continued for a further two years before the client elected to consolidate distribution under a single Singapore-based partner. Total client legal cost: under USD 80K including disbursements — a small fraction of the recovery and a fraction of the cost of full trial.",
  legalIssues: [
    'Breach of supply agreement and exclusive distribution provisions',
    'Cross-border evidence collection and authentication',
    'Asset preservation through interim measures',
    'Court-annexed mediation strategy',
    'Foreign-document legalisation under Hague Convention',
  ],
  applicableLaw: [
    {
      code: 'Civil Code 2015 — Articles 351-365',
      description: 'Contract performance, breach, and remedies including damages and specific performance.',
    },
    {
      code: 'Commercial Law 2005 — Articles 24-46',
      description: 'Sale of goods provisions and remedies for non-performance.',
    },
    {
      code: 'Civil Procedure Code 2015 — Article 114',
      description: 'Interim measures including asset freezes during pending civil proceedings.',
    },
  ],
  lessonsLearned:
    "When a Vietnamese counterparty stops responding, the path back to the table is rarely email. A well-prepared filing with credible interim measures changes incentives in days. The exclusivity clause was at risk of being treated as commercially insignificant in negotiation; making it a separate damages claim in the filing forced full-value treatment. Most foreign clients are surprised at how quickly Vietnamese mediation can resolve a properly-pleaded matter — the procedure is far more responsive than the popular impression suggests.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 2. INTERNATIONAL DIVORCE: AUSTRALIAN
// ============================================================================

const australianDivorce: CaseStudy = {
  title: 'International Divorce: Australian National and Vietnamese Spouse',
  country: 'Australia',
  flag: '🇦🇺',
  area: 'Family Law',
  practiceAreaSlug: 'family-law-and-divorce',
  year: 2022,
  matterValue: 'N/A',
  clientContext:
    'An Australian national who had relocated to Ho Chi Minh City five years earlier for work, married a Vietnamese citizen in 2017, and had one child (then aged three) together. The couple owned a residential apartment in District 2 worth approximately VND 12B (around USD 480K) jointly, plus separate assets in Australia (the Australian spouse) and Vietnam (the Vietnamese spouse). The Australian client had received a job offer in Singapore and wished to relocate, but the marriage had irretrievably broken down independently.',
  challenge:
    "The matter combined three distinct difficulties. First, jurisdictional complexity: both Vietnam (habitual residence of both parents and child) and Australia (citizenship of one parent) had potential jurisdiction over the divorce, custody, and property questions. Filing in the wrong jurisdiction could prejudice key issues. Second, the welfare of a young child whose father wished to relocate to Singapore while the mother and her family network were rooted in Vietnam — and the very real risk that one parent might attempt to remove the child from the country during proceedings. Third, asset division across three countries with very different property-law regimes, including a Vietnamese apartment (registered in joint LURC), a Sydney investment property in the husband's sole name, and family assets on the wife's side of unclear provenance.\n\nThe Australian client's primary concern was preserving meaningful relationship and contact with the child despite the relocation, not maximising property recovery. The Vietnamese spouse's concern was preserving primary custody and the child's continuity in Vietnam. There was no fundamental conflict on either point — but the legal mechanism that would deliver both required careful drafting.",
  approach:
    "We elected to file in Vietnam as the child's country of habitual residence and the location of the principal joint asset. As a first protective step, we filed a request under Article 131 of the Civil Procedure Code for the child to be prevented from leaving Vietnam during proceedings, granted within five days. This protected both parents' interests by ensuring that any custody outcome would be respected pending judgment.\n\nWith the protective order in place, we focused on negotiated outcome. We coordinated with Australian family-law counsel on the cross-border aspects: how Australian courts would treat a Vietnamese consent order, what visa and immigration consequences arose for the child's travel to Australia, and how the Sydney property would be addressed (separately under Australian law, by mutual agreement). We worked with the Vietnamese spouse's counsel to develop a parenting plan and property-division proposal that gave the child stability in Vietnam, gave the Australian parent generous visitation including holiday travel, and divided Vietnamese assets equitably.\n\nThe parenting plan included: child to reside primarily with the Vietnamese mother in HCMC during the school year; six weeks per year with the father (any combination of Vietnam and Singapore); video contact at least twice weekly; first-refusal rights on holiday and school break decisions; and a clear protocol for travel outside Vietnam requiring both parents' consent. The property settlement: the Vietnamese apartment to the Vietnamese spouse with offsetting payment; Australian assets remained with the Australian husband; child support based on Australian income tier with cost-of-living adjustment.",
  outcome:
    "The court approved the consent arrangement at the first hearing, six months after filing. The protective order was discharged on judgment. Both parents adapted well: the Australian father took up his Singapore role and has visited Vietnam every six weeks plus longer school-break stays. The child has visited Singapore twice. The arrangement has now operated for nearly four years without modification or dispute. The Sydney property was sold in 2024 with proceeds split per the side agreement. Neither parent has sought any modification or returned to court.",
  legalIssues: [
    'Cross-border jurisdiction analysis',
    'Child travel restriction during proceedings',
    'Parenting plan negotiation',
    'Multi-jurisdictional asset division',
    'Recognition of Vietnamese custody order in Australia',
  ],
  applicableLaw: [
    {
      code: 'Law on Marriage and Family 2014 — Articles 81-88',
      description: 'Custody, child support, and post-divorce care arrangements.',
    },
    {
      code: 'Law on Marriage and Family 2014 — Articles 59-64',
      description: 'Property regime and equitable division of marital assets.',
    },
    {
      code: 'Civil Procedure Code 2015 — Article 131',
      description: 'Interim measures preventing children from leaving Vietnam during family proceedings.',
    },
  ],
  lessonsLearned:
    "The protective travel order in family cases is widely under-used and often the single most de-escalating step in international family proceedings. Once both parents knew the child could not be unilaterally removed, productive negotiation became possible within weeks. Coordinated cross-border planning with Australian family counsel meant the Vietnamese order was structured to be recognised abroad — saving years of potential parallel proceedings. The simple discipline of asking each parent what they actually need (relationship, not property) before negotiating positions made the difference between settlement and trial.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 3. LAND USE RIGHTS DISPUTE — SINGAPORE
// ============================================================================

const landUseRightsSingapore: CaseStudy = {
  title: 'Land Use Rights Dispute for Foreign-Invested Real Estate Project',
  country: 'Singapore',
  flag: '🇸🇬',
  area: 'Land & Property',
  practiceAreaSlug: 'land-and-property',
  year: 2023,
  matterValue: '$5M+',
  clientContext:
    'A Singapore-based real estate development group, listed on the SGX, with prior projects in Vietnam, Cambodia, and Malaysia. The client held land use rights for a 1.2-hectare site in District 2, HCMC, intended for a mid-density residential development of approximately 220 units. Construction had begun and structural work was approximately 35% complete when the dispute arose. Capital deployed at the time of the challenge: approximately USD 5M, with project completion forecast at USD 18M.',
  challenge:
    "Approximately ten months into construction, the local Department of Natural Resources and Environment issued an administrative decision suspending construction and indicating that the original land allocation had procedural defects. The grounds cited were a public-consultation step in the original allocation and a survey discrepancy of approximately 80 square metres. The decision was enforced immediately: construction equipment removed, site shut down, project schedule completely halted.\n\nFor the client, the consequences were severe: continuing financing costs (~USD 250K/month), lost early-bird off-plan sales, and a potential write-off of the entire investment if the LURC was ultimately revoked. Within the Singapore parent company, the matter was being treated as a major incident with reputational implications for the entire Vietnam programme.\n\nThe client had been reassured at the time of acquisition (two years prior) that the LURC was clean. Post-incident review revealed that the procedural defects cited had in fact been addressed by the original sellers but in a way that was not perfectly documented in the official file. The dispute, in other words, was not about whether the substantive land allocation was lawful — it almost certainly was — but about whether the file could be reconstructed to satisfy the current administrative authorities.",
  approach:
    "We pursued a parallel track: administrative challenge to suspend the suspension, and substantive remediation of the file defects identified.\n\nOn the administrative track, we filed within the statutory ten-day deadline a formal challenge to the suspension decision, arguing on the basis of disproportionate response (the cited defects, even if accepted, did not warrant a complete construction halt) and procedural defect (the suspension itself had not followed the consultation requirements of the Land Law). We also filed in parallel a civil suit seeking a declaratory judgment confirming the validity of the original LURC.\n\nOn the remediation track, we worked with the client's surveyors and urban-planning consultants to commission an independent survey reconciling the boundary discrepancy, secured documents from the original sellers reconstructing the consultation step, and prepared a comprehensive submission to the Department of Natural Resources that addressed each cited defect with supporting evidence and appropriate certifications. We engaged actively but professionally with the Department, scheduling multiple in-person meetings to walk officials through the evidence rather than relying on written exchange alone.",
  outcome:
    "Within three months, the Department of Natural Resources withdrew the suspension decision. The independent survey was accepted; the documented consultation step was deemed sufficient; the LURC was confirmed valid as originally issued. The civil suit was withdrawn (no longer needed). Construction resumed within four months of the original suspension, with a recovered project schedule that delivered the development on time. The client subsequently completed and sold all 220 units, generating profit consistent with original underwriting. The Vietnam programme continued without further incident, and the client has since acquired two additional development sites.",
  legalIssues: [
    'Land allocation procedural validity',
    'Administrative challenge to suspension orders',
    'Boundary survey reconciliation',
    'Civil declaratory judgment as protective backstop',
    'Direct administrative-authority engagement',
  ],
  applicableLaw: [
    {
      code: 'Land Law 2013 (now superseded by 2024) — Articles 168-188',
      description: 'Land allocation, lease, and the rights of foreign-invested users.',
    },
    {
      code: 'Law on Administrative Procedures 2015',
      description: 'Procedure for challenging administrative decisions, statutory deadlines, and remedies.',
    },
    {
      code: 'Real Estate Business Law 2014 (and subsequent amendments)',
      description: 'Conditions for foreign-invested entities to conduct real-estate business in Vietnam.',
    },
  ],
  lessonsLearned:
    "Administrative challenges in Vietnam reward early, formal, evidence-heavy engagement and punish delay or wishful thinking. Filing the challenge within the statutory ten-day window was non-negotiable. Active in-person engagement with the Department of Natural Resources — by counsel who could speak directly with technical officials in Vietnamese — moved the matter substantially faster than written exchange would have. The parallel civil filing was important not because it was likely to succeed first but because it preserved the client's options had administrative remedies failed.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 4. CRIMINAL DEFENCE OF FOREIGN NATIONAL — UK
// ============================================================================

const criminalDefenceUK: CaseStudy = {
  title: 'Criminal Defense of Foreign National in Ho Chi Minh City',
  country: 'United Kingdom',
  flag: '🇬🇧',
  area: 'Criminal Defense',
  practiceAreaSlug: 'criminal-defense',
  year: 2021,
  matterValue: 'N/A',
  clientContext:
    'A British national, mid-fifties, long-term Vietnam resident operating a small import-export business sourcing artisan products from Vietnamese suppliers for sale to European boutiques. Annual business turnover approximately USD 800K. Married to a Vietnamese national; permanent residence status. No prior criminal history in any jurisdiction.',
  challenge:
    "The client was detained by police following a complaint by a former Vietnamese supplier alleging fraud — specifically, that the client had taken delivery of a USD 65K consignment without paying. The client maintained that the consignment had been substantially defective and that the matter was a quality-and-payment dispute squarely within civil jurisdiction. The client had begun internal arrangements to either return the goods or pay against a discount, when the supplier filed the criminal complaint.\n\nWithin 36 hours of the complaint being filed, the police had interviewed the client and were considering formal arrest. The client's English was good but his Vietnamese was conversational rather than professional, and the initial interview had been conducted in Vietnamese with a basic interpreter. There were already concerns about how some statements had been recorded.\n\nThe specific charge under consideration was Article 174 of the Penal Code (Fraud Through Misappropriation of Property) — a serious commercial-criminal offence carrying up to 20 years' imprisonment for amounts in this range, plus risk of forced exit-ban while proceedings were ongoing. For a long-term Vietnam resident with a Vietnamese spouse, an exit ban alone would have been life-disrupting; a conviction would have been catastrophic.",
  approach:
    "We engaged within hours of being contacted by the client's wife. The first action was a formal letter to the investigating authority requesting that the client's lawyer be present at all further questioning, asserting his rights under Article 16 of the Criminal Procedure Code. Simultaneously, we arranged for the British Consulate to be formally notified.\n\nOur substantive defence had two layers. First, the substance: this was a commercial dispute over goods quality and payment terms, not fraud. The client had taken delivery, immediately contested the quality of the consignment in writing, retained the goods (had not on-sold or destroyed them), and had been actively negotiating either return or discounted payment. Each of these elements was inconsistent with the criminal-law definition of fraud through misappropriation, which requires an intent to permanently deprive without consideration. We prepared a comprehensive evidentiary submission demonstrating each of these elements.\n\nSecond, the appropriate forum: the underlying disagreement was a contract dispute clearly within civil jurisdiction. We made a formal submission to the procuracy arguing that the matter should be declassified from criminal to civil, allowing the supplier to pursue any genuine commercial claim through proper channels. We supported this with proposed undertakings: the client agreed to deposit the disputed amount in a third-party escrow pending resolution of the underlying quality dispute through civil mediation.",
  outcome:
    "After three months of investigation phase, the procuracy declined to indict and the matter was closed without charges. The escrow deposit was used to satisfy the supplier's claim partially after a separate civil mediation that took an additional six months to conclude. No exit ban was ever formally imposed (the police had considered but not enforced one). The client remained in Vietnam throughout and continues to operate his business. He has since renewed his permanent residence and has had no further legal issues.",
  legalIssues: [
    'Criminal vs civil characterisation of commercial dispute',
    'Right to counsel during police investigation',
    'Procuracy declination of indictment',
    'Consular notification under Vienna Convention',
    'Escrow as alternative to criminal prosecution',
  ],
  applicableLaw: [
    {
      code: 'Penal Code 2015 — Article 174',
      description: 'Fraud through misappropriation of property — elements and penalty range.',
    },
    {
      code: 'Criminal Procedure Code 2015 — Article 16',
      description: 'Right of detained and accused persons to defence and to legal representation.',
    },
    {
      code: 'Vienna Convention on Consular Relations',
      description: 'Vietnam\'s obligation to notify the consulate of a detained foreign national without delay.',
    },
  ],
  lessonsLearned:
    "Speed matters in Vietnamese criminal investigations. The first 48-72 hours after detention or initial questioning shape the case file — and a case file built without defence counsel involvement is harder to reshape later. The boundary between civil and criminal disputes is often not where parties or initial police instincts place it. Skilled formal submissions to the procuracy can succeed in declassifying a matter where the underlying conduct does not satisfy the elements of the criminal offence cited. Embassy notification is a procedural step that supports outcome — both directly (consular monitoring of treatment) and indirectly (the embassy's interest signals to authorities that the matter has international visibility).",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 5. JOINT VENTURE DISPUTE — KOREAN
// ============================================================================

const jointVentureKorean: CaseStudy = {
  title: 'Joint Venture Dispute Between Vietnamese and Korean Partners',
  country: 'South Korea',
  flag: '🇰🇷',
  area: 'Corporate',
  practiceAreaSlug: 'corporate-and-commercial',
  year: 2023,
  matterValue: '$3.5M',
  clientContext:
    'A Korean industrial-equipment manufacturer with operations across Asia. In 2018, the client formed a 50/50 joint venture with a Vietnamese partner to manufacture and distribute the client\'s products in the Vietnam market. The JV company had charter capital of USD 4M, employed approximately 80 people, and had grown to annual revenue of around USD 11M by 2022. The shareholders\' agreement (in English with Vietnamese translation) included a VIAC arbitration clause and clear deadlock-resolution provisions.',
  challenge:
    "Beginning in mid-2022, the Korean shareholder began noticing irregularities in the JV's financial reporting. Monthly management accounts arrived later, contained fewer details than before, and showed unexplained variances. Multiple requests for the underlying ledger access were refused or delayed. Then specific transactions came to attention: a 'logistics' contract with a company connected to the Vietnamese shareholder, charging fees substantially above market; a 'consulting' arrangement with the Vietnamese shareholder's brother; equipment purchases from related parties at premium prices.\n\nWhen the Korean shareholder formally raised these concerns, the Vietnamese shareholder responded by removing the Korean-appointed CFO, changing the company's bank-account signatories, and refusing to convene the next quarterly board meeting. The Korean shareholder's investment of USD 2M (50% of charter capital) plus retained earnings was effectively trapped in a company they could no longer control or audit.\n\nThe shareholders' agreement did contain a VIAC arbitration clause — but invoking it required navigating the Vietnamese legal procedures for emergency relief, ensuring the company's assets could not be further dissipated during the arbitration, and dealing with the practical reality that the Vietnamese shareholder controlled day-to-day operations.",
  approach:
    "We initiated VIAC arbitration under the shareholders' agreement, claiming damages, declaratory relief on the related-party transactions, and reinstatement of governance rights. Concurrently we filed in the competent Vietnamese court for emergency interim measures preserving the company's assets — specifically, freezing further payments on the suspect related-party contracts and requiring full disclosure of company financial records to a court-appointed accountant.\n\nThe interim measures were granted within fourteen days. The forensic accountant confirmed our preliminary view: total related-party transactions inflated above-market by approximately USD 2.8M over three years. The findings became central to the arbitration proceedings.\n\nIn the arbitration itself, we presented a comprehensive case across three theories: breach of fiduciary duty by the Vietnamese shareholder in its capacity as controlling executive; breach of the shareholders' agreement (specifically the related-party transaction approval requirements); and breach of the Enterprise Law's general duties of good faith and loyalty. The Vietnamese shareholder mounted a procedural defence (claiming the arbitration clause did not cover the disputed transactions) which the tribunal rejected after a preliminary hearing.\n\nThe arbitration proceeded to a full merits hearing in HCMC over three days, with simultaneous Korean-Vietnamese-English interpretation, expert evidence from independent valuation specialists, and witness testimony from the JV's former CFO and operations manager.",
  outcome:
    "The VIAC tribunal issued a unanimous award in our client's favour: USD 3.5M in damages, costs of the arbitration and counsel fees borne by the Vietnamese shareholder, and a declaration of breach of the shareholders' agreement entitling our client to invoke buyout provisions. The award was successfully enforced through the Vietnamese courts after a brief recognition application.\n\nThe client subsequently exercised the buyout provisions and acquired the Vietnamese shareholder's 50% stake at a discount reflecting the breaches found. The JV is now wholly Korean-owned and continues to operate profitably in Vietnam under new local management. The client has since structured additional Vietnam investments using the same framework — but with stricter governance covenants and quarterly independent financial review built in from the start.",
  legalIssues: [
    'Joint-venture governance breach and deadlock',
    'Related-party transaction abuse',
    'Emergency interim measures preserving company assets',
    'VIAC arbitration of corporate disputes',
    'Forensic accounting and damages quantification',
    'Award enforcement against Vietnamese counterparty',
  ],
  applicableLaw: [
    {
      code: 'Enterprise Law 2020 — Articles 167-172',
      description: 'Related-party transactions and approval requirements for limited liability companies.',
    },
    {
      code: 'Law on Commercial Arbitration 2010',
      description: 'Foundational statute on commercial arbitration in Vietnam, including emergency relief procedures.',
    },
    {
      code: 'Civil Procedure Code 2015 — Articles 114-130',
      description: 'Interim measures available from courts in support of arbitration.',
    },
  ],
  lessonsLearned:
    "When a Vietnamese partner takes operational control and starts moving money to related parties, time is the central commodity. Court-ordered interim measures (asset freeze and document disclosure) within two weeks of filing changed the dynamic decisively — the Vietnamese shareholder's negotiating posture moderated immediately. The shareholders' agreement's arbitration clause and related-party transaction provisions, drafted with care five years earlier, paid for themselves many times over. For any new JV: build forensic-audit rights into the documentation from day one, and treat the deadlock and exit provisions as the most important parts of the agreement, not the least.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 6. EMPLOYMENT TERMINATION — JAPANESE
// ============================================================================

const employmentJapanese: CaseStudy = {
  title: 'Employment Termination Dispute for Japanese Manufacturer',
  country: 'Japan',
  flag: '🇯🇵',
  area: 'Labor',
  practiceAreaSlug: 'labor-and-employment',
  year: 2022,
  matterValue: '$200K',
  clientContext:
    'A Japanese-owned manufacturing facility in Bien Hoa Industrial Zone, Dong Nai Province, employing approximately 450 Vietnamese employees across production, quality control, and administration. Foreign-invested enterprise wholly owned by a Tokyo-listed parent. Strong local management with both Japanese and Vietnamese senior staff.',
  challenge:
    "The matter centred on a senior Vietnamese employee — a department head with twelve years' service, monthly compensation around USD 2,500, plus annual bonus and benefits. Following an internal audit, the employee had been found to have systematically approved overtime claims for subordinate staff that were not actually worked, with a portion of the resulting payments returned to the employee through informal arrangements. The audit established the conduct over a 14-month period and quantified the affected payments at approximately USD 45K.\n\nThe employer wished to terminate immediately for serious misconduct under Article 125 of the Labour Code. The employee disputed the finding, threatened a labour-arbitration claim for wrongful termination (with potential remedies including reinstatement plus full back pay), and indicated that other employees would join the claim alleging cultural targeting of Vietnamese staff by Japanese management.\n\nThe stakes were significant beyond the immediate dispute: the threat of multi-employee escalation, the labour-relations implications for a 450-person workforce, the risk of a trade-union response, and the broader corporate-governance implications for the Japanese parent if the matter went public.",
  approach:
    "Our first action was a procedural audit of the termination plan. The internal audit findings were sound substantively but several procedural elements required strengthening: the workplace trade union had not yet been consulted as required for senior employees, the disciplinary committee composition needed adjustment, and the written notice draft was vulnerable to procedural challenge. We advised waiting four working days while these elements were corrected — a small delay that materially strengthened the case.\n\nWith procedural integrity established, the disciplinary committee convened and recommended termination. The trade union was formally consulted and provided written opinion. The written termination decision (specifying grounds, supporting evidence, severance calculation, and the employee's right to challenge) was issued. The employee initiated mandatory conciliation at the District People's Committee within three weeks of termination.\n\nAt conciliation, we presented the comprehensive evidentiary file: the audit findings, the procedural compliance documentation, witness statements from subordinate employees confirming the overtime fraud, and the precise statutory basis for termination. The employee's counsel had presented a generic wrongful-termination claim but no substantive response to the audit findings.\n\nWe also engaged actively to ensure the matter remained contained. We prepared communications for the workforce explaining the disciplinary action while protecting the employee's privacy. We met with the senior trade-union representatives to confirm the company's continued commitment to fair employment practices. We conducted a brief refresher training session with all department heads on overtime approval policy.",
  outcome:
    "The matter resolved at conciliation with a confidential settlement at favourable terms for the employer: the termination stood, no reinstatement, severance limited to statutory minimum (approximately USD 11K for twelve years' service), and a mutual non-disparagement clause. The total cost to the employer was substantially below the USD 200K range that an unfavourable arbitration outcome could have produced.\n\nMore importantly, no other employees pursued similar claims. The trade union's working relationship with management remained strong. The company implemented improved overtime approval procedures and conducted annual compliance training for all supervisory staff. There has been no recurrence of similar issues in the four years since.",
  legalIssues: [
    'Termination for serious misconduct under Labour Code',
    'Workplace trade union consultation requirements',
    'Disciplinary committee composition and procedure',
    'Mandatory labour conciliation procedure',
    'Workforce communications and risk containment',
  ],
  applicableLaw: [
    {
      code: 'Labour Code 2019 — Articles 122-128',
      description: 'Disciplinary procedure including consultation, committee composition, and written notice requirements.',
    },
    {
      code: 'Labour Code 2019 — Articles 188-193',
      description: 'Mandatory conciliation procedure at the District People\'s Committee for labour disputes.',
    },
    {
      code: 'Trade Union Law 2012 — Articles 6, 10',
      description: 'Trade-union consultation rights in disciplinary and termination procedures.',
    },
  ],
  lessonsLearned:
    "In Vietnamese labour law, procedural compliance is the first 80% of every termination case. A small delay (four working days here) to ensure clean procedure can prevent months of litigation and an order of magnitude more in cost. Workforce communications matter as much as the legal procedure: a termination handled well sends a different signal to the remaining 449 employees than one that becomes a public dispute. Annual compliance training and clear policies on overtime approval would have prevented the underlying conduct entirely — the matter was an opportunity to strengthen the broader control environment.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 7. CROSS-BORDER INHERITANCE — US
// ============================================================================

const crossBorderInheritance: CaseStudy = {
  title: 'Cross-Border Inheritance Matter Involving US and Vietnam',
  country: 'United States',
  flag: '🇺🇸',
  area: 'Family Law',
  practiceAreaSlug: 'family-law-and-divorce',
  year: 2021,
  matterValue: '$1.2M',
  clientContext:
    'A first-generation Vietnamese-American family based in California. The deceased was a Vietnamese-American businesswoman in her seventies who had emigrated to the US in 1985 but maintained significant assets in Vietnam: an apartment in District 1, HCMC; a small commercial property in Da Nang; cash deposits at three Vietnamese banks; and a minority interest in a Vietnamese trading company. Total Vietnamese assets approximately USD 1.2M. The deceased had left a detailed will, executed in California, naming her three children as equal beneficiaries.',
  challenge:
    "The deceased had passed away in California in 2020. Probate of the will in California was completed without issue in 2021. The challenge began when the family sought to transfer the Vietnamese assets to the three US-citizen heirs.\n\nUnder Vietnamese law, the California probate decision did not automatically transfer Vietnamese property to the heirs. A separate Vietnamese inheritance proceeding was required, applying Vietnamese inheritance rules to assets located in Vietnam. The family had assumed the California probate would be sufficient — and several months had elapsed before the issue was identified, during which the apartment had remained vacant, the commercial property's tenant had been paying rent into a frozen account, and the bank deposits were inaccessible.\n\nFurther complications: under Vietnamese law as it then stood, foreign nationals could inherit residential property only if they themselves were eligible to own such property. None of the three US-citizen heirs intended to live in Vietnam and were not separately eligible. This meant the residential property either had to be owned in some restructured form or liquidated and the proceeds remitted abroad, with the latter raising foreign-exchange-control questions about repatriation.\n\nThe trading-company interest raised a different question: minority interests held by foreign nationals required regulatory notification, and in this case the underlying company had not been informed of the deceased's passing.",
  approach:
    "We prepared a comprehensive Vietnamese inheritance proceeding combining: (1) recognition of the California probate decision and certified Vietnamese translation of the will; (2) formal Vietnamese inheritance filing identifying the heirs and the Vietnamese assets; (3) coordination with the District People's Committee for the relevant ward where each property was located; (4) communications with each Vietnamese bank to release the deposits; and (5) notification to the trading company of the change in beneficial ownership.\n\nFor the residential apartment, we structured a sale with the proceeds to be remitted abroad. We obtained advance approval from the State Bank of Vietnam for the foreign-exchange remittance under Article 8 of the Foreign Exchange Ordinance, supported by complete documentation of the underlying inheritance and the source of funds. The commercial property was sold to a domestic buyer with proceeds similarly remitted.\n\nThroughout, we coordinated closely with the family's California probate counsel to ensure consistency between US and Vietnamese filings, and worked with US tax advisers on the basis-step-up implications and any US tax consequences of the distributions.",
  outcome:
    "All Vietnamese assets were successfully transferred to the heirs within 14 months of engagement. The apartment sold for USD 520K (5% above pre-sale appraisal), the commercial property for USD 480K, and bank deposits totalling USD 180K were released. Trading-company interests were liquidated through company-arranged buy-back at fair market value of USD 60K. Total proceeds remitted to the heirs in California: approximately USD 1.18M after taxes, fees, and currency conversion costs. The family preserved approximately 98% of the original asset value through the cross-border process.",
  legalIssues: [
    'Recognition of foreign probate decisions',
    'Vietnamese inheritance procedure for cross-border estates',
    'Foreign-ownership eligibility for inherited residential property',
    'State Bank of Vietnam foreign-exchange approvals',
    'Coordination of US and Vietnamese estate administration',
  ],
  applicableLaw: [
    {
      code: 'Civil Code 2015 — Articles 609-687',
      description: 'Inheritance and succession rules including testamentary and intestate succession.',
    },
    {
      code: 'Law on Housing 2014 (now 2023) — Articles 159-162',
      description: 'Foreign ownership of residential property and consequences of inheritance.',
    },
    {
      code: 'Foreign Exchange Ordinance 2005 (and amendments)',
      description: 'Foreign-exchange controls on remittance of funds abroad, including from inheritance.',
    },
  ],
  lessonsLearned:
    "Cross-border inheritance is one of the most under-planned areas in Vietnamese-American family law. Many Vietnamese-Americans hold meaningful Vietnamese assets but assume their California or Texas wills will travel — they do not. Estate planning for clients with Vietnamese assets should include a Vietnam-specific component: either a separate Vietnamese will for the Vietnamese assets, or clear provisions in the home-country will that anticipate the Vietnamese inheritance procedure. Similarly, the foreign-exchange-control framework rewards advance approval and complete documentation; arriving at the State Bank with a partial file is a recipe for delay.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 8. VIAC ARBITRATION TRADE DISPUTE — GERMAN
// ============================================================================

const viacArbitrationGerman: CaseStudy = {
  title: 'VIAC Arbitration for International Trade Dispute',
  country: 'Germany',
  flag: '🇩🇪',
  area: 'Arbitration',
  practiceAreaSlug: 'arbitration',
  year: 2024,
  matterValue: '$1.5M',
  clientContext:
    'A German engineering firm specialising in industrial weighing and process-control equipment for the food and beverage industry. The client had supplied a complete quality-control line to a Vietnamese state-owned beverage producer under an EPC-style contract worth USD 4.8M, including installation, commissioning, and a 24-month performance warranty. The contract specified VIAC arbitration in English, governed by Vietnamese law, with the seat in Ho Chi Minh City.',
  challenge:
    "Following installation and commissioning in 2022, the equipment operated within specification for over twelve months. The Vietnamese buyer had paid two of three installment payments totalling USD 3.3M. The third and final payment of USD 1.5M was due upon completion of the 24-month performance period, which was approaching.\n\nApproximately three months before the final payment date, the buyer wrote to the supplier asserting that recent performance data showed equipment defects, demanding a price reduction equivalent to the final payment amount, and indicating that no further payment would be made. The asserted defects were technically detailed but, on the supplier's analysis, reflected operating parameters being run outside the specified envelope rather than equipment performance issues. The supplier's own performance data, collected from the equipment's monitoring systems, showed continuous in-specification operation.\n\nFor the German supplier, the matter raised more than the immediate USD 1.5M. The buyer was a state-owned enterprise; an unfavourable outcome could affect the supplier's broader Vietnam business and its reputation across Southeast Asia. The decision to invoke arbitration rather than negotiate further was made cautiously and with full board approval at the German parent.",
  approach:
    "We commenced VIAC arbitration on behalf of the German supplier, claiming the outstanding USD 1.5M plus contractual interest and the costs of arbitration. The contract's choice of VIAC arbitration in English was decisive: the proceedings ran in a language all parties could fully engage with, the procedure was crisp, and the tribunal was constituted within six weeks.\n\nWe assembled an evidentiary case across three layers. First, technical: the equipment's continuous monitoring data, the calibration records, and independent expert testimony on the operating parameters during the periods of asserted defect. Second, contractual: the precise specification of the equipment's performance envelope and the provisions allocating risk for operation outside that envelope. Third, commercial: the parties' communications during the warranty period, which showed no contemporary defect complaints — the issues were raised only as the final payment came due.\n\nThe tribunal of three arbitrators included a German engineering expert (party-appointed by claimant), a Vietnamese commercial-arbitration specialist (party-appointed by respondent), and a Singapore-based barrister as president. The merits hearing in HCMC ran four days, with technical expert evidence, witness testimony from both sides' commissioning teams, and submissions on contract construction. We produced operational data covering the entire 24-month warranty period — a level of evidence the buyer had not anticipated.",
  outcome:
    "The VIAC tribunal issued a unanimous award six weeks after the merits hearing: full payment of USD 1.5M plus contractual interest of approximately USD 75K, plus the costs of the arbitration (around USD 60K) and 80% of the supplier's counsel fees (approximately USD 240K). The total award was paid voluntarily by the buyer within 60 days, avoiding any need for enforcement proceedings.\n\nNotably, the long-term commercial relationship was preserved. The buyer retained the equipment, continued to operate it, and the supplier subsequently provided routine after-sales service and a software upgrade. Both parties learned from the dispute: the supplier improved its contract drafting on operating-envelope risk allocation; the buyer improved its internal commissioning and operations data review. A subsequent supply contract between the same parties was concluded in 2024.",
  legalIssues: [
    'VIAC arbitration of EPC-contract disputes',
    'Technical performance and operating-envelope analysis',
    'Contract construction under Vietnamese commercial law',
    'Costs allocation in international arbitration',
    'Voluntary award compliance and relationship preservation',
  ],
  applicableLaw: [
    {
      code: 'Law on Commercial Arbitration 2010 — Articles 4-21',
      description: 'Foundational provisions on arbitration agreement, tribunal, and arbitral procedure.',
    },
    {
      code: 'VIAC Arbitration Rules 2017',
      description: 'Procedural rules governing the arbitration including English-language procedure.',
    },
    {
      code: 'Commercial Law 2005 — Articles 297-322',
      description: 'Commercial-contract provisions including breach, damages, and contract construction.',
    },
  ],
  lessonsLearned:
    "A well-drafted arbitration clause is the single most important commercial-contract provision when the contract crosses borders. The choice of VIAC, English language, and clear seat made every subsequent procedural step straightforward. Operating-envelope and performance-warranty provisions reward detailed drafting at contract signature: ambiguity becomes a buyer's tool when payment comes due. Continuous monitoring data, where available, can decide a technical dispute on the documents alone — designing equipment with comprehensive performance logs is as much a legal protection as an operational tool.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 9. CORPORATE GOVERNANCE — TAIWAN
// ============================================================================

const corporateGovernanceTaiwan: CaseStudy = {
  title: 'Protecting Foreign Investor Rights in Corporate Governance Dispute',
  country: 'Taiwan',
  flag: '🇹🇼',
  area: 'Corporate',
  practiceAreaSlug: 'corporate-and-commercial',
  year: 2023,
  matterValue: '$8M',
  clientContext:
    'A Taiwanese investor — a private investment vehicle backed by a publicly-listed Taiwanese conglomerate — holding a 35% minority stake in a Vietnamese consumer-products company. The Vietnamese company had grown rapidly to annual revenue of around USD 50M and was preparing for a possible Hanoi listing within three years. The Taiwanese investor\'s stake was acquired in 2019 for USD 8M, with shareholder protections drafted carefully into the Investment Agreement.',
  challenge:
    "In early 2023, the Vietnamese majority shareholders proposed a 'restructuring' transaction to be approved at an extraordinary shareholders' meeting scheduled for three weeks later. The proposed transaction: the Vietnamese company would acquire two affiliated companies (also majority-owned by the Vietnamese majority shareholders) at valuations that, on the Taiwanese investor's preliminary review, appeared substantially above market.\n\nThe transaction would be funded through: (1) issuance of new shares, diluting the Taiwanese investor's 35% stake to approximately 22%; and (2) cash from the Vietnamese company's reserves, reducing dividend capacity for the next two years. If the transaction proceeded as proposed, the Taiwanese investor estimated it would suffer approximately USD 2.5M in dilution loss plus a multi-year delay in dividend payments. More fundamentally, the deal would shift control of the company further toward the Vietnamese majority and reduce the Taiwanese investor's ability to influence the future listing strategy.\n\nThe Investment Agreement included a related-party-transaction clause requiring approval by 75% of shares — meaning the Taiwanese investor's 35% gave it a clear blocking right. The Vietnamese majority shareholders were aware of this provision and were proposing to characterise the transaction as 'ordinary course' to avoid the supermajority requirement.",
  approach:
    "We needed to prevent the transaction from proceeding while engaging in negotiated resolution. The first step was an immediate filing for emergency court injunction at the competent Provincial People's Court, supported by:\n\n(1) the Investment Agreement's related-party-transaction provisions and the proposed transaction's clear status as related-party;\n\n(2) preliminary independent valuation evidence suggesting the proposed acquisition prices exceeded fair market by approximately 30-40%;\n\n(3) procedural defects in the convening notice for the extraordinary shareholders' meeting (insufficient detail about the transactions to be voted on under Article 142 of the Enterprise Law).\n\nThe court granted the injunction within nine days, halting the shareholders' meeting and the proposed transaction. The Vietnamese majority shareholders' response was immediate: a request for negotiation. We agreed but on three conditions: (1) the injunction would remain in place during negotiations; (2) the Vietnamese majority would commission an independent valuation from a firm acceptable to both sides; (3) any restructured transaction would be subject to the Investment Agreement's supermajority requirement.\n\nThe independent valuation came in approximately 35% below the originally proposed prices. With this baseline, we negotiated a restructured transaction: smaller acquisition (only one of the two affiliated companies), at fair-market price, with the consideration paid in shares from a portion of the Vietnamese majority's holding rather than new issuance. This eliminated dilution of the Taiwanese investor's stake and maintained dividend capacity.",
  outcome:
    "The restructured transaction was approved at a properly-convened shareholders' meeting with the Taiwanese investor's affirmative vote. The Taiwanese investor maintained its 35% stake and its blocking-right protection. The Vietnamese company subsequently performed strongly through 2024, and as of late 2024 was on track for a 2026 Hanoi listing. The Taiwanese investor's stake has appreciated approximately 80% from its 2019 acquisition cost based on third-party valuation references.\n\nThe negotiated outcome preserved the working relationship between the shareholders. Subsequent governance has been notably more careful, with related-party transactions properly identified and submitted for supermajority approval as a matter of routine.",
  legalIssues: [
    'Minority shareholder protection in private companies',
    'Related-party transaction disclosure and approval',
    'Emergency court injunction in support of investment agreement',
    'Independent valuation procedures',
    'Shareholders\' meeting procedural requirements',
  ],
  applicableLaw: [
    {
      code: 'Enterprise Law 2020 — Articles 167-172',
      description: 'Related-party transactions and approval requirements for joint stock companies.',
    },
    {
      code: 'Enterprise Law 2020 — Articles 138-148',
      description: 'Shareholders\' meeting convening procedure, notice requirements, and resolutions.',
    },
    {
      code: 'Civil Procedure Code 2015 — Articles 114-130',
      description: 'Court-issued interim measures including injunctions to preserve the status quo.',
    },
  ],
  lessonsLearned:
    "Investment Agreements drafted carefully at the time of investment are the backbone of minority-shareholder protection in Vietnam. The related-party-transaction supermajority provision in this matter was negotiated in 2019 over considerable resistance — and four years later, it was the entire basis of a successful intervention. Speed matters: the three-week window before the proposed shareholders' meeting was tight but sufficient. Filing the emergency injunction within ten days of awareness of the transaction was the difference between negotiating from strength and negotiating from a position of fait accompli.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 10. COMPLEX DIVORCE — CANADIAN
// ============================================================================

const complexDivorceCanadian: CaseStudy = {
  title: 'Complex Multi-Jurisdictional Divorce with Child Custody',
  country: 'Canada',
  flag: '🇨🇦',
  area: 'Family Law',
  practiceAreaSlug: 'family-law-and-divorce',
  year: 2024,
  matterValue: 'N/A',
  clientContext:
    'A couple — Canadian husband and Vietnamese-Canadian (dual-citizen) wife — with two children aged 8 and 11. The family had lived in Hanoi for the previous four years following the Canadian husband\'s posting; the children attended an international school in Hanoi; both parents had professional careers. Significant assets in both countries: family home in Hanoi (registered in joint LURC), a Toronto investment property in the wife\'s name, retirement and investment accounts in Canada and Vietnam, and a small consultancy business in Vietnam co-owned by both parents.',
  challenge:
    "The wife filed for divorce in Toronto without notice to the husband, simultaneously seeking interim sole custody of the children and an order that the children be relocated to Toronto immediately. The Toronto court granted interim sole custody and a non-removal order for both children — at a hearing the husband did not attend because he had not yet been served with the proceedings.\n\nThe wife travelled to Hanoi the following week and informed the husband of the Canadian proceedings, asserting that the Toronto custody order required immediate relocation of the children to Canada. The husband, supported by Canadian counsel, responded by filing in Vietnam: divorce, interim joint custody, and a non-removal order preventing the wife from taking the children out of Vietnam. The Vietnamese court granted the husband's non-removal order within five days.\n\nThe result: parallel proceedings in Toronto and Hanoi, conflicting interim orders, two children with their lives suddenly in cross-jurisdictional limbo, and a high-conflict environment between the parents. The matter risked becoming a Hague Convention abduction case had either parent acted unilaterally on their respective court order.",
  approach:
    "We immediately coordinated with the husband's Canadian family-law counsel to manage the parallel proceedings. The first decision: which jurisdiction was the appropriate forum for the substantive issues? The factual case for Vietnam was strong:\n\n- Children's habitual residence: Vietnam (last four years);\n\n- Children's schooling, friendships, medical care, and language: Vietnamese and English in Vietnam;\n\n- Joint marital home: Vietnam;\n\n- Both parents resident in Vietnam at the time the marriage broke down;\n\n- Substantial Vietnamese assets including the consultancy business.\n\nWe filed comprehensive evidence of these factors with the Vietnamese court and made parallel submissions in Toronto (through Canadian counsel) urging the Canadian court to defer to Vietnamese jurisdiction on the principle of forum non conveniens.\n\nIn parallel, we worked with Canadian counsel and a court-appointed child welfare assessor in Hanoi to develop a comprehensive parenting plan. Recognising that the wife had genuine Canadian connections and that the children had Canadian citizenship, the plan provided for the children to remain primarily in Hanoi during school terms, generous summer and winter holiday periods in Canada with the mother, and structured travel protocols requiring written consent from both parents and notice to both courts.\n\nThe property settlement followed a similar structure: Vietnamese assets divided in Vietnam under Vietnamese law, Canadian assets divided in Canada under Canadian law, with a side-agreement reconciling the totals to ensure overall equitable division.",
  outcome:
    "The Vietnamese court issued a final order incorporating the negotiated parenting plan and Vietnamese-asset division, six months after our initial filing. The Toronto court accepted Vietnamese jurisdiction over the substantive parenting issues and adjusted its proceedings to address only the Canadian-asset and Canadian-immigration questions, which were resolved through corresponding orders.\n\nThe arrangement has now operated for nearly a year. The children continue to attend school in Hanoi; they spent eight weeks in Toronto over the summer holiday with their mother; both parents speak with the children daily through video calls. There has been no further court intervention. The mother subsequently relocated to Toronto on her existing professional commitments, and the children's primary residence with the father in Hanoi has been stable.",
  legalIssues: [
    'Cross-border jurisdictional analysis (forum non conveniens)',
    'Coordination of parallel divorce and custody proceedings',
    'Non-removal orders and child-protection measures',
    'Multi-jurisdictional asset division',
    'Recognition of Vietnamese custody order in foreign jurisdictions',
  ],
  applicableLaw: [
    {
      code: 'Law on Marriage and Family 2014 — Articles 81-88',
      description: 'Custody and child welfare in family proceedings.',
    },
    {
      code: 'Civil Procedure Code 2015 — Articles 466 et seq',
      description: 'Procedural rules for family proceedings with foreign elements.',
    },
    {
      code: 'Civil Procedure Code 2015 — Article 131',
      description: 'Interim measures preventing children from leaving Vietnam during proceedings.',
    },
  ],
  lessonsLearned:
    "Coordinated cross-border family proceedings can stabilise even highly conflicted situations within weeks rather than years. Parallel filings — in both jurisdictions — are sometimes necessary to protect the children before the appropriate forum is determined. Working with capable foreign family-law counsel from day one is essential; the matter cannot be managed in Vietnam alone. The 'best interests of the child' framework, applied carefully to specific facts (school continuity, language, friendships, medical care), almost always produces a defensible result that both parents can accept once heat has dissipated.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 11. CONSTRUCTION DISPUTE — ITALIAN
// ============================================================================

const constructionItalian: CaseStudy = {
  title: 'Construction Dispute Involving Foreign Contractor',
  country: 'Italy',
  flag: '🇮🇹',
  area: 'Civil Litigation',
  practiceAreaSlug: 'civil-litigation',
  year: 2023,
  matterValue: '$4M',
  clientContext:
    'An Italian construction firm specialising in luxury commercial-building interiors, with project experience across Europe, the Middle East, and Asia. The client had been engaged by a Vietnamese hospitality-developer to deliver the architectural finish-out and interior design for a new boutique hotel in Da Nang, value approximately USD 9.5M. Contract drafted on a modified FIDIC Yellow Book template, governed by Vietnamese law, with provincial-court dispute resolution.',
  challenge:
    "The contractor delivered the project on schedule and was issued a final completion certificate by the project's Vietnamese architect-of-record. Of the contract value, approximately USD 5.5M had been paid through milestone payments. The final USD 4M, due thirty days after the completion certificate, was withheld by the developer.\n\nThe developer's stated grounds: a list of approximately 40 alleged minor defects, mostly cosmetic (paint touch-ups, hardware adjustments, minor finish blemishes), valued by the developer at approximately USD 800K. The contractor had inspected each cited item and either remedied them or, where the items had not in fact existed at handover, documented the position. The contractor offered a USD 50K final reduction as a goodwill gesture.\n\nThe developer rejected the offer and asserted that the alleged defects supported full retention of the USD 4M. Contemporaneously, the developer began discussing the project publicly in terms that the contractor considered defamatory, suggesting the project had quality issues that did not exist. The contractor was concerned about its reputation in the Vietnamese market and across its broader Asian portfolio.",
  approach:
    "We filed a civil claim at the Provincial People's Court in Da Nang for the unpaid USD 4M plus contractual interest, plus damages for delayed payment. The defence we prepared anticipated the developer's defect claims with a comprehensive evidentiary file: the architect-of-record's completion certificate; photographs and video walk-throughs of the entire project at handover; the contractor's response log to each cited 'defect' with photographs documenting the actual condition or remediation; and independent expert reports on the alleged remaining issues.\n\nWe also filed an application for an interim asset-freeze under Article 114 of the Civil Procedure Code, citing the developer's apparent unwillingness to pay and the risk of further dissipation of the project funds. The asset freeze was granted within twelve days and immediately changed the dispute's dynamic.\n\nAt the first court-annexed mediation conference, we presented the case file and proposed a settlement at 95% of the outstanding amount plus contractual interest. The developer's counsel asked for time to review. At the second mediation conference six weeks later, the developer agreed in principle but proposed a payment schedule over twelve months. We countered with payment within 45 days at 95% — non-negotiable. The court endorsed the structure and a binding settlement was concluded.",
  outcome:
    "The contractor recovered USD 3.8M (95% of the outstanding amount) plus contractual interest of approximately USD 110K, paid within 45 days of settlement. The asset freeze was lifted on the first scheduled payment.\n\nMore importantly for the contractor's broader position, the rapid resolution and the substantive vindication of its work product preserved its reputation in Vietnam and across Southeast Asia. The contractor has subsequently been engaged on three additional Vietnamese projects, two of which were referred by the same Vietnamese-developer group despite the dispute.",
  legalIssues: [
    'FIDIC-style construction contract enforcement',
    'Defect claim defence and architect-of-record certification',
    'Interim asset freeze in civil proceedings',
    'Court-annexed mediation strategy',
    'Reputation and commercial-relationship preservation',
  ],
  applicableLaw: [
    {
      code: 'Construction Law 2014 (and amendments)',
      description: 'Foundational statute on construction contracts, completion certification, and warranty.',
    },
    {
      code: 'Civil Code 2015 — Articles 419-423',
      description: 'Damages for delayed payment and breach of contract.',
    },
    {
      code: 'Civil Procedure Code 2015 — Article 114',
      description: 'Interim measures including asset freezes.',
    },
  ],
  lessonsLearned:
    "Construction disputes in Vietnam reward thorough contemporaneous documentation. The contractor's discipline of photographing the project at handover and logging each defect-claim response made the substantive case all but unanswerable. Architect-of-record certification, properly obtained at the time, is one of the strongest pieces of evidence available. As in many construction matters, the dispute's centre of gravity shifts decisively when the unpaid contractor demonstrates both willingness and ability to litigate; settlement at near-full value followed quickly.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// 12. FRANCHISE DISPUTE — US
// ============================================================================

const franchiseDisputeUS: CaseStudy = {
  title: 'Franchise Agreement Dispute for International Brand',
  country: 'United States',
  flag: '🇺🇸',
  area: 'Corporate',
  practiceAreaSlug: 'corporate-and-commercial',
  year: 2024,
  matterValue: '$2.5M',
  clientContext:
    'A US-based hospitality-franchise operator with approximately 200 franchised restaurant locations across North America and Asia, including 12 in Vietnam. The brand is well-recognised internationally with established trademarks registered in Vietnam. The company\'s Vietnam franchise programme was operated through a master-franchisee structure with bilateral agreements directly between the US franchisor and each individual restaurant operator.',
  challenge:
    'A Vietnamese franchisee, operating two locations in Hanoi for approximately five years, fell into substantial arrears on royalty payments and committed a series of brand-standard violations (menu modifications without approval, sub-par interior maintenance, unauthorised promotional materials). The franchisor terminated the franchise agreements following the contractual procedure: written notices, cure periods, formal termination.\n\nThe terminated franchisee responded by continuing to operate the two restaurants under variations of the brand name (slight modifications to the trademark), continuing to use the franchisor\'s recipes and operating systems, and continuing to project an association with the franchisor in marketing and consumer-facing communications. The franchisee\'s argument was that the modifications to the brand name distinguished its operations from the franchisor\'s — an argument unsupported by Vietnamese trademark law.\n\nThe franchisor faced a dual problem: ongoing trademark infringement undermining the brand in Vietnam, and a potential precedent that other terminated franchisees might follow. There was also the financial dimension: approximately USD 2.5M in unpaid royalties, ongoing fees, and damages for the brand harm.',
  approach:
    "We pursued a coordinated multi-track strategy:\n\n(1) **Trademark infringement proceedings** — administrative complaint to the Vietnam Intellectual Property Office and civil claim at the Hanoi Provincial People's Court for trademark infringement, seeking damages and injunctive relief.\n\n(2) **Contract enforcement** — civil claim for the unpaid royalties and damages for breach of contract.\n\n(3) **Injunctive relief** — emergency application for an injunction prohibiting the former franchisee from continuing to use any brand element, including modified names, recipes, operating systems, or promotional language suggesting association with the franchisor.\n\nThe injunction application was supported by:\n\n- evidence of trademark registration in Vietnam covering all current and modified usage;\n\n- side-by-side comparison of the franchisor's protected materials and the franchisee's continued use;\n\n- evidence of consumer confusion (review-site comments, press references treating the operations as franchisor-affiliated);\n\n- evidence of irreparable harm (brand value, ongoing reputational damage).\n\nThe court granted the injunction within fourteen days of filing. The administrative complaint to the IP Office produced a finding of infringement within two months.\n\nWith both proceedings going against the former franchisee, we engaged in negotiation. The franchisee's counsel indicated willingness to settle subject to discussion of the unpaid royalty quantum and the specific cessation requirements.",
  outcome:
    "Settlement concluded eight months after engagement. Terms:\n\n(1) Cessation of all use of the franchisor's trademarks, recipes, and operating systems within thirty days, including changing all signage, menus, packaging, promotional materials, and online presence.\n\n(2) Payment of USD 1.85M to the franchisor — substantially the unpaid royalties plus partial damages for brand harm.\n\n(3) Three-year non-compete preventing the former franchisee from operating any restaurant business within a defined radius of the existing franchisor locations.\n\n(4) Dismissal of all proceedings on completion.\n\nThe former franchisee complied within the thirty-day period; the two locations were re-branded to a new (unrelated) concept. The franchisor's brand integrity in Vietnam was preserved, and no other Vietnamese franchisees attempted similar conduct in the subsequent two years.",
  legalIssues: [
    'Trademark infringement in Vietnam',
    'Franchise agreement termination and post-termination obligations',
    'Coordinated administrative and civil proceedings',
    'Emergency injunctive relief against intellectual-property infringement',
    'Settlement of multi-issue disputes',
  ],
  applicableLaw: [
    {
      code: 'Intellectual Property Law 2005 (and amendments)',
      description: 'Trademark protection, infringement, remedies, and administrative enforcement.',
    },
    {
      code: 'Commercial Law 2005 — Articles 284-290',
      description: 'Franchise agreements, registration requirements, and termination.',
    },
    {
      code: 'Civil Procedure Code 2015 — Articles 114-130',
      description: 'Interim injunctive measures against ongoing infringement.',
    },
  ],
  lessonsLearned:
    "Franchise disputes benefit enormously from parallel administrative and civil proceedings. The IP Office's administrative track is faster and cheaper than civil litigation and produces enforceable findings; the civil track preserves the option of substantial damages. Pre-emptive trademark registration covering both the brand and reasonably foreseeable variations is the foundation of all of this — without registration, the dispute would have been substantially harder. Franchise agreements should include detailed post-termination obligations covering the specific elements (signage, recipes, operating systems, online presence) that need to be unwound, with clear timelines and contractual penalties.",
  heroImageId: 'caseDocumentSigning',
}

// ============================================================================
// EXPORT
// ============================================================================

export const casesData: Record<string, CaseStudy> = {
  'european-company-contract-dispute': europeanContractDispute,
  'international-divorce-australian': australianDivorce,
  'land-use-rights-foreign-investor': landUseRightsSingapore,
  'criminal-defense-foreign-national': criminalDefenceUK,
  'joint-venture-dispute-korean': jointVentureKorean,
  'employment-dispute-japanese': employmentJapanese,
  'cross-border-inheritance': crossBorderInheritance,
  'viac-arbitration-trade-dispute': viacArbitrationGerman,
  'corporate-governance-dispute': corporateGovernanceTaiwan,
  'complex-divorce-child-custody': complexDivorceCanadian,
  'construction-dispute-foreign-contractor': constructionItalian,
  'franchise-agreement-dispute': franchiseDisputeUS,
}

export const caseSlugs = Object.keys(casesData)
