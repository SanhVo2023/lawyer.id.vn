import type { ArticleData } from './insights'

// ============================================================================
// 1. ARRESTED IN VIETNAM AS A FOREIGN NATIONAL
// ============================================================================

const arrestedForeignNational: ArticleData = {
  slug: 'arrested-in-vietnam-foreign-national',
  title: 'What to Do If Arrested in Vietnam as a Foreign National',
  date: '2026-04-22',
  category: 'For Expats',
  excerpt:
    'A practical step-by-step guide for foreign nationals facing detention or arrest in Vietnam — your rights under the Criminal Procedure Code, the role of your consulate, bail, and the first 24 hours.',
  heroImageId: 'articleHeroExpat',
  readTime: '14 min',
  tableOfContents: [
    { id: 'first-24-hours', label: 'The first 24 hours' },
    { id: 'rights', label: 'Your rights under the Criminal Procedure Code' },
    { id: 'consulate', label: 'The role of your consulate' },
    { id: 'criminal-vs-civil', label: 'Criminal vs civil characterisation' },
    { id: 'bail', label: 'Bail and pre-trial release' },
    { id: 'common-scenarios', label: 'Common scenarios I see' },
    { id: 'choosing-counsel', label: 'Choosing counsel and what to expect' },
  ],
  intro: [
    "Few experiences are more disorienting than being detained in a country whose language and legal system you do not know. The interrogation room looks different. The forms are different. The people in uniform are operating under procedures you have never read. For foreign nationals arrested in Vietnam — whether for an alleged commercial fraud, a traffic incident, an immigration matter, or anything else — the first hours and days are the period in which the right decisions matter most.",
    "I have represented foreign clients in Vietnamese criminal proceedings for over a decade. The clients who do best are not the ones who happened to be innocent (most are, in fact, blameless or at most peripheral to the alleged conduct). They are the ones who, with their families and their lawyers, made calm and informed decisions in the early hours. This article is intended to help foreign residents and visitors — and the families who may receive a phone call at 3am — make those decisions.",
    "Nothing in this article is a substitute for counsel in an actual matter. But understanding the framework before something happens can be the difference between a manageable problem and a serious one.",
  ],
  sections: [
    {
      id: 'first-24-hours',
      heading: 'The first 24 hours',
      body: [
        "Vietnamese criminal procedure distinguishes between several forms of state custody. **Administrative detention** (typically up to 12 hours, extendable to 24) is used for identity verification and minor matters. **Emergency arrest** (Article 110 of the Criminal Procedure Code 2015) and **arrest of a person caught committing an offence** (Article 111) are short-term measures pending a formal decision. **Custody** (tạm giữ, Article 117) can hold a suspect for up to three days, extendable twice — meaning a person can be held in custody for up to nine days before formal **temporary detention** (tạm giam) is ordered by the Procuracy.",
        "What this means in practice: from the moment of arrest, the clock starts. Within hours the police must inform the suspect of the alleged offence and rights; within 12 hours of the custody decision the family must be notified; within 24 hours the consulate of the foreign suspect's country must in principle be informed (though delays are common, which is why the family or counsel often reach the consulate first). The investigation agency files materials with the Procuracy, which decides whether to approve continued custody and any further detention.",
        "If you are the person detained: stay calm. Do not sign anything you do not understand. Do not give substantive statements about facts before you have spoken with counsel. You are entitled to silence on substantive matters — your name, identification, and address are required, but the details of any alleged offence are not. Ask repeatedly, in writing if you can, for counsel and for consular notification.",
        "If you are the family member who has just been called: your job in the first hours is to (1) confirm where the person is being held and under what authority; (2) contact the relevant consulate; (3) instruct Vietnamese counsel immediately, ideally counsel with experience in foreign-national matters. Do not assume the police will provide an interpreter or counsel — they may, but the quality and independence of state-provided counsel can vary, and an independent lawyer engaged by the family is almost always preferable.",
      ],
      pullQuote:
        "From the moment of arrest, the clock starts. The decisions made in the first 24 hours often define the next 24 months.",
    },
    {
      id: 'rights',
      heading: 'Your rights under the Criminal Procedure Code',
      body: [
        "Article 16 of the Criminal Procedure Code 2015 sets out the **principle of guaranteed right to defence**: every person against whom criminal proceedings are conducted has the right to defend themselves, or to be defended by a defence counsel. The right attaches from the moment of arrest or custody — not from the formal charging decision, and not from the trial.",
        "Specifically, Article 58 (rights of an arrested person) and Article 60 (rights of an accused) guarantee, among other things: the right to be informed of the alleged offence; the right to know the rights themselves; the right to silence on substantive matters; the right to be examined in a language one understands (which means an interpreter for any foreign suspect not fluent in Vietnamese — and the interpreter must be qualified, not a fellow inmate or junior officer who happens to speak some English); the right to defence counsel; the right to family notification; the right to medical care; and the right to be free from coerced confessions.",
        "**The interpreter point matters more than people realise.** Many of the foreign-national matters I have handled involve early statements taken with inadequate interpretation — sometimes a friend of the suspect, sometimes a junior officer, sometimes machine translation. Statements taken under inadequate interpretation are vulnerable on later challenge but are extremely hard to take back once made. If you are a foreign suspect: insist on a qualified, independent interpreter and refuse to give substantive statements without one.",
        "Article 73 governs the right to counsel. Counsel must be permitted to attend interrogations, review the case file as it develops, communicate privately with the client, and prepare the defence. In practice, access in the early days can be uneven; experienced counsel knows how to push effectively for full access without alienating the investigators in ways that harm the client.",
      ],
    },
    {
      id: 'consulate',
      heading: 'The role of your consulate',
      body: [
        "Vietnam is a party to the **Vienna Convention on Consular Relations 1963**. Article 36 of the Vienna Convention requires the receiving state to inform a detained foreign national, without delay, of their right to have the consular post of their state notified — and, if the detained person so requests, to forward that notification. The detained person has the right to communicate with the consular post, and consular officers have the right to visit, communicate with, and arrange legal representation for their nationals.",
        "What your consulate will do varies by country. Most consulates will: visit the detainee in custody (typically within days, sometimes longer in remote areas); provide a list of local lawyers (note: a list, not a recommendation — embassies are usually careful not to endorse specific firms); communicate with family members in the home country; ensure that consular access is being respected and that obvious abuses are not occurring; and observe major hearings.",
        "What your consulate will **not** do: pay for your lawyer; intervene in the substance of the proceedings; arrange for your release; or override Vietnamese sovereignty in criminal matters. The consulate is there to ensure the process is followed and that you are not abandoned, not to extract you from a Vietnamese legal proceeding.",
        "For families in the home country: contacting the consulate or embassy of the detained person's country is one of the first practical steps. Many embassies have 24-hour emergency lines for citizens in distress abroad. Embassies in Hanoi cover central and northern Vietnam; consulates in Ho Chi Minh City cover the south. For matters in Da Nang, Nha Trang, or other cities, regional consular cover varies — your embassy in Hanoi can advise.",
      ],
    },
    {
      id: 'criminal-vs-civil',
      heading: 'Criminal vs civil characterisation',
      body: [
        "One of the most consequential issues in foreign-national matters is the **characterisation of the underlying conduct as criminal rather than civil**. Vietnam's criminal law contains broad offences — fraud (Article 174 of the Criminal Code 2015), abuse of trust to appropriate property (Article 175), and several economic-crime offences — that can apply to conduct that in many Western jurisdictions would be a purely civil dispute.",
        "I see this pattern repeatedly: a commercial counterparty (often a Vietnamese partner or supplier) pursues criminal complaint against a foreign businessperson over what is fundamentally a contract dispute. The complaint may be filed strategically, to create leverage in commercial negotiations. The investigation begins, the foreign person may be detained or placed under travel restrictions, and what should have been a civil court matter is now a criminal proceeding with custody implications.",
        "The defence response in these cases is twofold. First, **factual**: demonstrate that the conduct lacks criminal intent and that the dispute is genuinely civil — payment delays, contract performance disputes, accounting disagreements — rather than fraudulent. Second, **procedural**: engage with the investigation agency and the Procuracy to argue for declassification from criminal to civil. Vietnamese prosecutors do, when properly briefed, drop matters that should not have been criminalised — but the briefing has to be done early, professionally, and with the right evidentiary framework.",
        "For traffic matters, the criminal / administrative line is also important. Most traffic incidents are administrative; serious accidents involving injury or death can become criminal under Articles 260-262 of the Criminal Code. Drug matters are uniformly serious — Vietnamese drug law is among the most severe in the region, and even small quantities can attract significant sentences. Immigration matters (overstaying, working without a work permit) are typically administrative but can escalate to criminal in cases involving forged documents or systematic violations.",
      ],
    },
    {
      id: 'bail',
      heading: 'Bail and pre-trial release',
      body: [
        "Vietnamese law provides for several alternatives to pre-trial detention. **Bail** (đặt tiền để bảo đảm, Article 122 of the Criminal Procedure Code) allows release against a monetary deposit. **Bail by guarantee** (bảo lĩnh, Article 121) allows release into the custody of an organisation or qualifying individual who guarantees the suspect's appearance. **Travel restrictions** (cấm đi khỏi nơi cư trú, Article 123) keep the person at their registered residence pending proceedings.",
        "Bail under Article 122 is not, in practice, available in every case. The Procuracy or court considers the seriousness of the alleged offence, the risk of flight, the risk of further offences, the risk of obstruction of the investigation, and the suspect's personal circumstances (residence, family, occupation, prior record). For foreign nationals, the flight-risk factor weighs heavily — and rebutting it requires careful evidentiary preparation: passport surrender, residence guarantees, employer or family undertakings, and sometimes electronic monitoring or daily reporting commitments.",
        "The deposit amount is set by the Procuracy or court considering the seriousness of the offence and the assets of the accused. Deposits in serious commercial matters can be substantial. The deposit is returned if the suspect complies with all conditions and appears as required; it is forfeited (or partially forfeited) if conditions are breached.",
        "In my practice, securing bail or a non-custodial measure for a foreign national requires: (1) a comprehensive package demonstrating ties to Vietnam and minimising flight risk; (2) consular engagement (a consulate's interest can be a moderating factor in custody decisions); (3) a legal argument on the merits showing that the case is weaker, or the conduct less serious, than the initial classification suggests; and (4) credible alternatives (residence guarantee, passport surrender, regular reporting). Not every case allows release before trial, but more cases do than foreign families initially expect.",
      ],
    },
    {
      id: 'common-scenarios',
      heading: 'Common scenarios I see',
      body: [
        "**Commercial dispute reframed as fraud.** A Vietnamese supplier or business partner files a criminal complaint over a payment dispute, contract termination, or accounting disagreement. The foreign businessperson is summoned, sometimes detained, and finds the dispute now sitting on a prosecutor's desk. Defence: rapid civil-vs-criminal argument, factual rebuttal of intent, sometimes parallel civil mediation to demonstrate that the matter belongs in the civil courts.",
        "**Traffic incident with injury.** Foreign driver involved in an accident causing injury or death. Vietnamese law presumes considerable fault on the larger vehicle in many configurations. Defence: technical evidence (CCTV, witnesses, accident reconstruction), prompt and appropriate compensation arrangements with affected families (which can be a significant mitigating factor), and ensuring procedural rights are observed.",
        "**Drug allegations.** Vietnamese drug law is severe. Even small quantities can attract significant sentences; commercial-scale offences attract very long terms or worse. The first 48 hours in drug matters are critical — the early statements, the search, and any cooperation decisions all shape the trajectory. Counsel involvement from the earliest moment is essential. I do not advise foreign clients to negotiate drug matters on their own under any circumstances.",
        "**Immigration violations.** Overstaying, working without a work permit, working in violation of permitted scope, residing at an unregistered address. These are typically administrative — fine and possible deportation — but can escalate where forged documents or systematic violation patterns are alleged. Defence and resolution often involve voluntary regularisation where possible, fine payment, and sometimes departure on agreed terms rather than deportation (which has different long-term consequences for re-entry).",
        "**Customs and tax matters.** Allegations of under-invoicing, mis-classification, or tax evasion in connection with import/export or business operations. These are technical matters where the line between administrative penalty and criminal liability turns on the volumes involved and the alleged intent. Defence requires technical specialists in addition to criminal counsel.",
      ],
    },
    {
      id: 'choosing-counsel',
      heading: 'Choosing counsel and what to expect',
      body: [
        "For foreign nationals, the most important attributes in Vietnamese criminal counsel are: experience with foreign-national matters (the procedural and consular dimensions are different); fluent working English (or the client's working language); credibility with the relevant investigation agency and Procuracy (Vietnamese criminal practice is partly a relationship system, properly conducted); and willingness to be candid about the realistic range of outcomes.",
        "What to expect on engagement: a written engagement letter setting out scope, fees, and conduct standards; rapid filing of the notice of defence (giấy đăng ký bào chữa) with the relevant authority; consular liaison if not yet established; family liaison; immediate review of any statements already made; and a defence strategy tailored to the case.",
        "**Fees** in serious foreign-national matters vary considerably. Straightforward administrative-track matters and simple traffic cases are typically resolved on a fixed-fee basis. Serious criminal matters (commercial fraud allegations, drug cases, fatal traffic incidents) are typically billed on time-incurred plus disbursements, often with a meaningful retainer. Bail-package work is sometimes scoped separately. I provide written estimates and detailed billing on every matter.",
        "**Timeline expectations.** The investigation phase under Vietnamese criminal procedure is typically two months, extendable; serious-crime investigations can extend to twelve months or longer. The Procuracy review (truy tố) takes 20-30 days. The first-instance trial generally occurs 30-60 days after the prosecutor's indictment. Appeals add 4-6 months. Bail or non-custodial release can compress the practical experience considerably even where the formal process takes longer.",
      ],
    },
  ],
  keyTakeaways: [
    'The first 24 hours after arrest are when decisions matter most — instruct counsel and contact the consulate immediately.',
    'Article 16 of the Criminal Procedure Code 2015 guarantees defence rights from the moment of arrest, not just at trial.',
    'You have the right to silence on substantive matters and to a qualified independent interpreter — exercise both.',
    'The Vienna Convention requires consular notification; your consulate provides a safety net but cannot override Vietnamese process.',
    'Many foreign-national matters are commercial disputes reframed as criminal fraud — early civil-vs-criminal argument is critical.',
    'Bail under Article 122 is available more often than families expect, with the right evidentiary package.',
    'Drug matters are exceptionally serious in Vietnam — never negotiate them without counsel from the first hour.',
  ],
  practicalChecklist: {
    title: 'First 48 Hours After a Foreign-National Arrest',
    items: [
      'Confirm where the person is being held and under what legal authority (custody, emergency arrest, administrative detention)',
      'Note the time of detention precisely — Vietnamese custody clocks run in hours, not days',
      'Contact Vietnamese criminal counsel with foreign-national experience before any substantive statement is given',
      "Notify the detainee's consulate or embassy and request consular access under Vienna Convention Article 36",
      'Confirm that a qualified independent interpreter is being provided for any interrogation',
      'Do not sign any statement, document, or waiver without a copy and counsel review',
      'Assemble identity, residence, and employment documentation to support a non-custodial measure application',
      'Identify potential bail guarantors (employer, residence registration, family) and supporting documents',
      'Preserve any evidence relevant to the alleged conduct — communications, contracts, financial records',
      "Notify the detainee's family in the home country and arrange a single point of communication",
      'Confirm whether the matter is genuinely criminal or a civil dispute that has been criminalised, and brief counsel accordingly',
      'Document any procedural irregularities (denial of interpreter, denial of counsel, coercion) contemporaneously',
    ],
  },
  authorNote:
    "Few areas of practice are more time-sensitive than foreign-national criminal defence. If you or a family member faces detention in Vietnam, contact our office at any hour — we maintain capacity to respond to urgent matters around the clock.",
  relatedArticles: [
    'top-legal-risks-foreign-investors-vietnam',
    'work-permit-disputes-vietnam',
  ],
  relatedPracticeAreas: ['criminal-defense', 'civil-litigation'],
}

// ============================================================================
// 2. PRENUPTIAL AGREEMENTS IN VIETNAM
// ============================================================================

const prenuptialAgreements: ArticleData = {
  slug: 'prenuptial-agreements-vietnam',
  title: 'Prenuptial Agreements in Vietnam: Are They Enforceable?',
  date: '2026-04-15',
  category: 'For Expats',
  excerpt:
    'A practical guide to prenuptial and post-nuptial agreements under Vietnamese law — what Article 28 of the Law on Marriage and Family permits, notarisation requirements, and how foreign-couple prenups are recognised.',
  heroImageId: 'articleHeroExpat',
  readTime: '11 min',
  tableOfContents: [
    { id: 'framework', label: 'The legal framework' },
    { id: 'what-can-be-agreed', label: 'What can and cannot be agreed' },
    { id: 'notarisation', label: 'Notarisation and form requirements' },
    { id: 'enforcement', label: 'Enforcement on divorce' },
    { id: 'foreign-prenups', label: 'Recognition of foreign prenups' },
    { id: 'drafting', label: 'Drafting checklist for international couples' },
  ],
  intro: [
    "Prenuptial agreements were not part of Vietnamese family-law tradition until relatively recently. The 2014 Law on Marriage and Family changed this — for the first time, Vietnamese law expressly recognised the ability of spouses to set their own property regime by written agreement. More than ten years on, prenuptial and post-nuptial agreements are increasingly common, particularly among international couples, professional couples, and families with significant pre-marriage assets.",
    "The framework is workable but specific. A Vietnamese prenup that follows the formalities and respects the substantive limits is an effective tool; one that overlooks them is sometimes treated as no agreement at all when it is most needed. This article walks through what the law allows, what it does not, and how to draft an agreement that will actually do its job.",
  ],
  sections: [
    {
      id: 'framework',
      heading: 'The legal framework',
      body: [
        "**Article 28** of the Law on Marriage and Family 2014 establishes that spouses may choose between the **statutory property regime** (community property — assets acquired during marriage are jointly owned and divided on divorce, with limited recognition of separate property) and an **agreed property regime** documented in writing before marriage. Articles 47 to 50 set out the form and content requirements for the agreed regime.",
        "Vietnamese law therefore recognises two main forms: a **prenuptial agreement** (made before marriage, taking effect from the date of marriage) and what is sometimes loosely called a **post-nuptial agreement** — though the position on post-nuptial modification is more constrained, requiring the agreement to be made by mutual consent and notarised, and not operating retroactively to property already characterised under the statutory regime.",
        "The default — community property — is what applies if no valid agreement is made. Under the default, assets acquired during marriage are jointly owned (regardless of which spouse's income or labour produced them), and on divorce are divided equitably with consideration of contributions, the welfare of children, and the parties' circumstances. Pre-marriage assets remain separate unless converted into joint property. Inheritance and gifts during marriage are separate unless made jointly. Income from separate property during the marriage is generally treated as joint property — a point that often surprises foreign clients.",
      ],
    },
    {
      id: 'what-can-be-agreed',
      heading: 'What can and cannot be agreed',
      body: [
        "Article 48 sets out the matters a property-regime agreement can address: identification of separate and joint assets; rights and obligations of the spouses with respect to each category; conditions and procedure for division of joint assets during marriage; and other matters the parties agree are necessary.",
        "**What can be agreed:** complete separation of property (each spouse retains exclusive ownership of all assets in their name during and after marriage); modified community property (specific categories of assets remain separate, others become joint); treatment of business interests (typically held separate to protect business operations from divorce-related disruption); treatment of pre-marriage assets and any appreciation thereof; treatment of inheritances and gifts; provisions for management of joint assets; and procedures and triggers for division of joint property during the marriage (relevant where business circumstances or estate planning require it).",
        "**What cannot be agreed:** matters concerning the personal rights and obligations of spouses (Article 50 prohibits agreements that violate the equality principle, the rights and welfare of children, or the rights of third parties to whom support is owed); waiver of statutory child-support obligations; waiver of duty of fidelity and mutual support; provisions that would render one spouse unable to meet basic living expenses; and provisions contrary to Vietnamese public policy.",
        "**Foreign-jurisdiction concepts that often do not translate directly:** sunset clauses tied to length of marriage (uncertain enforceability under Vietnamese law); aggressive lifestyle clauses (waiver of support if spouse gains weight, etc. — not enforceable); unilateral termination provisions (an agreement cannot generally be terminated by one party without consent of the other); and choice-of-law clauses applying foreign law to assets located in Vietnam (Vietnamese courts apply Vietnamese law to assets in Vietnam regardless of any contrary agreement).",
      ],
      pullQuote:
        "A Vietnamese prenup is a real and useful instrument — but only if it is drafted within the substantive limits of Vietnamese law. Imported templates from Western jurisdictions routinely fail at the moments they are needed most.",
    },
    {
      id: 'notarisation',
      heading: 'Notarisation and form requirements',
      body: [
        "**Form requirements** under Article 47: the agreement must be in writing, signed by both intending spouses, and **notarised or certified** before the marriage is registered. Notarisation is performed by a Vietnamese notary public; certification by the relevant local authority is also acceptable.",
        "The agreement must be in Vietnamese (or accompanied by a certified Vietnamese translation if drafted in another language). For international couples where neither party is fully fluent in Vietnamese, the practical approach is: bilingual drafting (Vietnamese and English in parallel columns), certified translation of any non-Vietnamese text, and notarisation in front of a notary who can confirm that both parties understand the content. An interpreter at the notarisation is often used — and the notary will record the interpretation.",
        "**Timing:** the agreement must be in place before the marriage is registered with the Vietnamese authorities. A prenuptial agreement signed after marriage registration is not a prenuptial agreement under Vietnamese law; it is a post-nuptial modification with the more limited scope discussed below. For couples planning a Vietnamese marriage registration, the practical sequence is: (1) draft and review; (2) notarise the agreement; (3) register the marriage. There should typically be no more than a few weeks between notarisation and registration.",
        "**Post-nuptial modification:** Article 49 allows spouses to modify the property regime during marriage by written agreement, notarised. The modification operates prospectively — assets already characterised under the previous regime are not retroactively reclassified. Post-nuptial agreements are useful for couples whose circumstances change (a new business, an inheritance, a change in jurisdiction of residence) but are not a substitute for a properly executed prenup.",
      ],
    },
    {
      id: 'enforcement',
      heading: 'Enforcement on divorce',
      body: [
        "When a marriage with a valid property-regime agreement ends, the court applies the agreement rather than the statutory community-property rules. The agreement defines what is separate, what is joint, and how the joint property is divided. The court will not lightly set the agreement aside; the burden is on the party seeking to invalidate it to show specific grounds (lack of capacity at signing, fraud, duress, violation of Article 50 prohibitions, or failure of form requirements).",
        "**Practical points on enforcement:** courts will scrutinise the circumstances of execution — was the agreement signed under apparent free will, did each party have the opportunity for independent legal advice, was full disclosure of assets made, was the agreement notarised properly. Where these elements are clearly evidenced (independent counsel for each side, signed acknowledgments of disclosure, careful notarisation records), the agreement is robust. Where they are absent, challenges become possible.",
        "Even with a valid agreement, **child-related matters are not delegated to the agreement**. Custody, child support, and the children's welfare are determined by the court applying the best-interests-of-the-child standard regardless of any pre-existing agreement between the spouses. A prenup cannot waive child support or pre-determine custody; it can only address the property dimension.",
        "Where an agreement is silent on specific assets or categories that emerge during the marriage, the statutory community-property regime fills the gap. A common drafting error is to address only the assets that exist at marriage — a thorough agreement addresses categories that may emerge (business interests, intellectual property, retirement entitlements, inherited assets, gifts).",
      ],
    },
    {
      id: 'foreign-prenups',
      heading: 'Recognition of foreign prenups',
      body: [
        "Couples often arrive in Vietnam with a prenuptial agreement executed in another jurisdiction — a US prenup, a UK prenup, a French contrat de mariage, a Japanese agreement. The recognition question for Vietnamese courts is partial. Vietnamese courts will, in principle, give effect to the parties' choice of property regime as expressed in a foreign agreement — for assets located outside Vietnam, and for matters not contrary to Vietnamese public policy.",
        "For **assets located in Vietnam** (real estate, Vietnamese-incorporated company shares, Vietnamese bank accounts), Vietnamese courts apply Vietnamese law. A foreign prenup that designates Vietnamese real property as the separate property of one spouse will be respected, but its enforcement on divorce will follow Vietnamese procedure. A foreign prenup that purports to apply foreign law to Vietnamese real property will be applied to the extent it does not conflict with Vietnamese mandatory rules.",
        "For **substantive provisions that exceed Vietnamese-law limits** (broad lifestyle waivers, child-support waivers, unilateral termination), those provisions will be unenforceable in Vietnam regardless of what the foreign agreement says.",
        "For international couples planning to make Vietnam their long-term home, the **best practice** is twofold: (1) maintain or update a foreign prenup covering assets and arrangements in the home jurisdiction; and (2) execute a Vietnamese-law prenup or post-nuptial agreement covering Vietnamese assets. The two documents should be coordinated to avoid contradiction. I draft both and coordinate with foreign counsel where the home-jurisdiction document is being prepared in parallel.",
      ],
    },
    {
      id: 'drafting',
      heading: 'Drafting checklist for international couples',
      body: [
        "A well-drafted Vietnamese prenuptial agreement for an international couple addresses the following — each typically warranting its own clause or sub-clause. The document is not boilerplate; it is bespoke to the couple's circumstances and goals, and an off-the-shelf template is inadequate.",
        "The checklist below summarises the elements I typically address. Drafting and execution from initial consultation through notarisation typically takes 4-8 weeks, longer if foreign assets require coordinated treatment. Independent counsel for each prospective spouse is strongly recommended — both to strengthen the agreement against future challenge and because it ensures both parties are protected.",
      ],
    },
  ],
  keyTakeaways: [
    'Article 28 of the Law on Marriage and Family 2014 expressly authorises Vietnamese prenuptial agreements.',
    'A valid prenup must be in writing, notarised, and executed before marriage registration.',
    'Substantive limits apply: child support cannot be waived, equality cannot be undermined, public policy cannot be violated.',
    'Foreign-language prenups are workable but require Vietnamese translation and proper notarisation procedure.',
    'Foreign prenups are partially recognised — Vietnamese courts apply Vietnamese law to Vietnamese assets.',
    'Best practice for international couples: a foreign prenup plus a coordinated Vietnamese prenup covering Vietnamese assets.',
    'Independent counsel for each spouse strengthens enforceability and ensures balanced protection.',
  ],
  practicalChecklist: {
    title: 'Vietnamese Prenuptial Agreement — Drafting Checklist',
    items: [
      'Full disclosure schedule of pre-marriage assets and liabilities of each party (real estate, securities, businesses, retirement entitlements, inheritances anticipated)',
      'Definition of separate property — assets that remain individually owned during and after marriage',
      'Definition of joint property — assets that are or become jointly owned',
      'Treatment of income generated by separate property during the marriage (joint by default — modify if desired)',
      'Treatment of business interests and protection of business operations from divorce-related disruption',
      'Treatment of intellectual property and royalties created during marriage',
      'Treatment of inheritances and gifts received by either spouse during marriage',
      'Provisions for management and disposition of joint property requiring both signatures',
      'Provisions for division of joint property during marriage if needed (Article 38 procedures)',
      'Coordination clause linking to any foreign-jurisdiction prenuptial agreement',
      'Bilingual drafting (Vietnamese and English) with controlling-language designation',
      'Notarisation logistics — interpreter arrangements, witness requirements, timing relative to marriage registration',
    ],
  },
  authorNote:
    "Prenuptial agreements are most useful when never needed but always available. For confidential drafting or review of a Vietnamese or international prenup, contact our office.",
  relatedArticles: [
    'getting-divorced-vietnam-foreigner-guide',
    'child-custody-across-borders-vietnam',
    'buying-property-vietnam-foreigner',
  ],
  relatedPracticeAreas: ['family-law-and-divorce'],
}

// ============================================================================
// 3. CHILD CUSTODY ACROSS BORDERS
// ============================================================================

const childCustodyAcrossBorders: ArticleData = {
  slug: 'child-custody-across-borders-vietnam',
  title: 'Child Custody Across Borders: Vietnam and International Law',
  date: '2026-04-08',
  category: 'For Expats',
  excerpt:
    'How Vietnamese courts handle international custody disputes — jurisdiction, non-removal orders, parenting plans, and the recognition and enforcement of orders abroad in a non-Hague Convention country.',
  heroImageId: 'articleHeroExpat',
  readTime: '14 min',
  tableOfContents: [
    { id: 'hague-vacuum', label: 'Vietnam outside the Hague Convention' },
    { id: 'jurisdiction', label: 'Jurisdictional analysis' },
    { id: 'non-removal', label: 'Non-removal orders under Article 131' },
    { id: 'parenting-plans', label: 'Parenting plans for international families' },
    { id: 'recognition-abroad', label: 'Recognition of Vietnamese orders abroad' },
    { id: 'support-enforcement', label: 'Enforcement of child support across jurisdictions' },
    { id: 'practical', label: 'Practical considerations and strategy' },
  ],
  intro: [
    "Of all the legal questions that arise for international families in Vietnam, the most painful are the ones involving children. The legal framework is complex, the emotional stakes are extreme, and the practical realities — courts in two countries, parents on different continents, children caught between — make even straightforward cases logistically demanding. The framework below is offered with that reality in mind.",
    "The single most important fact about Vietnamese international child-custody law is that **Vietnam is not a party to the Hague Convention on the Civil Aspects of International Child Abduction (1980)**. This shapes every other question in the field: how disputes are resolved, how orders are enforced, how parents can plan, and what recourse is available when things go wrong. Understanding this framework is essential for any international family with significant connection to Vietnam.",
    "I have represented foreign and Vietnamese parents in cross-border custody matters for over a decade — some originating in Vietnam, some originating abroad with Vietnamese enforcement, many involving parallel proceedings. The legal substance is technical; the practical realities require both clear strategy and persistent execution.",
  ],
  sections: [
    {
      id: 'hague-vacuum',
      heading: 'Vietnam outside the Hague Convention',
      body: [
        "The 1980 Hague Convention provides a streamlined return mechanism for children wrongfully removed or retained across borders between contracting states. A parent in a contracting state whose child has been taken to another contracting state can typically obtain a return order through expedited procedures, often within months, with the receiving state's courts focused narrowly on the return question rather than the merits of underlying custody.",
        "Vietnam is not a contracting state. Neither is the Hague Convention as such recognised or applied by Vietnamese courts. A parent whose child has been brought to Vietnam without consent cannot invoke Hague return procedures; they must navigate Vietnamese family-law procedure on the merits. Conversely, a Vietnamese court order awarding custody to a Vietnamese parent does not benefit from Hague-style automatic recognition abroad — the foreign court will apply its own recognition principles, which vary by jurisdiction.",
        "The practical consequences are considerable. **Parents with concerns about possible abduction need to use prevention-focused tools** — non-removal orders before the fact, careful travel-consent protocols, advance custody documentation — rather than relying on post-hoc Hague return. **Parents whose children have been brought to or taken from Vietnam need merits-based litigation** rather than streamlined return procedures. **International planning needs to be more proactive** because reactive remedies are weaker.",
        "Vietnam's accession to the Hague Convention has been discussed periodically and remains a subject of legal-policy interest. As of 2026, no accession has occurred, and there is no firm timeline for one.",
      ],
      pullQuote:
        "Vietnam is not a Hague Convention country. That single fact reshapes every cross-border custody strategy — toward prevention, documentation, and proactive coordination, away from reactive return procedures.",
    },
    {
      id: 'jurisdiction',
      heading: 'Jurisdictional analysis',
      body: [
        "When parents separate across borders, the threshold question is which country's courts have jurisdiction over custody. Multiple courts may have jurisdiction simultaneously, and the choice of forum can affect every subsequent issue.",
        "**Vietnamese jurisdiction** under the Civil Procedure Code 2015 attaches when: at least one parent or the child is a Vietnamese citizen; or the child is habitually resident in Vietnam at the time of filing; or both parents agree to Vietnamese jurisdiction. Habitual residence is a fact-based concept — it considers where the child has been living, schooling, receiving healthcare, and forming social ties. A short visit to Vietnam does not establish habitual residence; a year of resident schooling typically does.",
        "**Foreign jurisdiction** typically attaches under similar principles in the foreign country: nationality, habitual residence, or consent. Where Vietnamese and foreign jurisdiction overlap, the result is a choice-of-forum decision.",
        "The choice considerations are: where the child principally resides and what court is best placed to assess best interests; where each parent resides and the practical access to the court; whether one country's substantive law is more favourable on key issues (custody standards, relocation rules, support calculations); where any order will need to be enforced; and timing — Vietnamese proceedings can be fast or slow depending on the matter and the court, and the foreign proceedings have their own pace.",
        "I work closely with foreign family-law counsel on this analysis. The right answer is rarely intuitive; the choice has long-term consequences and is one of the few decisions in international custody where outcomes can differ markedly depending on which court hears the case.",
      ],
    },
    {
      id: 'non-removal',
      heading: 'Non-removal orders under Article 131',
      body: [
        "**Article 131** of the Civil Procedure Code 2015 (interim and emergency measures in civil proceedings — read alongside the family-specific provisions of the Law on Marriage and Family) provides for protective orders in family matters, including non-removal orders preventing children from leaving Vietnam during proceedings. This is the single most important protective tool in Vietnamese cross-border custody practice.",
        "**When the order is appropriate:** there is credible evidence that one parent may unilaterally remove the child from Vietnam, the removal would compromise the child's welfare or the other parent's ability to maintain meaningful contact, and the proceedings to determine custody on the merits are pending or about to be filed. The threshold is not formalistic — courts respond to specific facts (prior threats, recent passport applications, sudden booking of international flights, sale of Vietnamese property indicating departure preparations).",
        "**Procedure:** the order can be applied for at the time of filing the divorce or custody petition or as a separate emergency measure. The application sets out the factual basis for concern, the proposed terms (typically: child to remain in Vietnam pending order; passports surrendered to court or counsel; airport authorities notified; specific exceptions for medical or family emergencies subject to court approval). Courts typically consider applications quickly when supported by clear evidence; ex parte issuance is possible in genuine emergencies.",
        "**Enforcement:** the non-removal order is implemented by notification to immigration authorities at all departure points. Children whose names appear on the no-fly list (effectively, the implementing notification) are prevented from leaving Vietnam regardless of which parent is travelling. Passport surrender to a neutral party (the court, counsel, or a designated notary) reinforces the practical effect. Violation is a criminal offence (Article 380 of the Criminal Code, obstruction of judicial decisions).",
        "**Limitations:** the order operates within Vietnam. If the child has already left Vietnam, the non-removal order has no extraterritorial effect; recovery requires foreign-law procedures (which, again, do not include Hague return). This is why timing matters — the non-removal order is most useful when applied for early.",
      ],
    },
    {
      id: 'parenting-plans',
      heading: 'Parenting plans for international families',
      body: [
        "International families benefit substantially from comprehensive parenting plans — both as a tool for cooperation while the relationship is intact (in case of accidents or unforeseen events) and as a framework if separation occurs. A good plan addresses everything that might be contested later, when emotion makes negotiation harder.",
        "**Core elements:** primary residence designation; school choice and education-related decision making; medical care decision making; religious and cultural upbringing; international travel protocols (see below); communication during the other parent's time; holiday and special-occasion schedules; relocation protocols (notice periods, consent requirements, fallback procedures); and dispute-resolution procedures for plan modifications.",
        "**International travel protocols** deserve particular attention. The standard structure: each parent provides advance written consent for the other parent's international travel with the child; specific notice period (often 30-60 days for non-routine travel); itinerary disclosure (flights, accommodations, return date); emergency contact protocols; return-trip booking before departure (a confirmed return ticket is one of the simplest abduction-prevention tools); and a specific protocol for any extended stay (longer than X weeks requires additional consent or court order). For travel to non-Hague jurisdictions, parents may agree on additional protections (escrow of passports, financial deposits returned on confirmed return, etc.).",
        "**Communication during the other parent's time** is increasingly important for international families because physical access is intermittent. Specifying frequency (typically daily video call or otherwise as agreed), reasonable times accommodating time zones, the child's age-appropriate access to communication tools, and a no-disparagement provision are all helpful.",
        "**Documenting the plan** is best done either as part of a divorce judgment (so it has the force of court order) or as a notarised standalone agreement (which can be enforced as a contract and is also admissible to support a later application for court orders).",
      ],
    },
    {
      id: 'recognition-abroad',
      heading: 'Recognition of Vietnamese orders abroad',
      body: [
        "A Vietnamese custody order is automatically valid throughout Vietnam. Its recognition abroad is a separate question and depends on the law of the country where recognition is sought.",
        "**Most Western countries** apply general principles for recognition of foreign family-law orders: the court that issued the order had appropriate jurisdiction (typically habitual residence of the child), the parties had appropriate notice and opportunity to be heard, and the order does not violate the home country's public policy. Where these elements are present, recognition is generally available — but typically requires a separate proceeding in the home country, not automatic recognition.",
        "**Common challenges to recognition** abroad: arguments that Vietnamese jurisdiction was inappropriate (the child was actually habitually resident elsewhere); arguments that one parent did not have adequate notice or opportunity (particularly where the parent abroad did not appear in the Vietnamese proceedings); arguments that the substance violates the home country's public policy (rare but possible where Vietnamese custody assessment differs markedly from home-country standards).",
        "**Strategies for orders that need to be recognised abroad:** ensure both parents have meaningful opportunity to be heard in the Vietnamese proceedings (not just nominal service — actual participation, ideally with foreign counsel involvement); structure the order to be expressed in concepts that translate to the foreign forum (joint legal custody / primary residence rather than untranslated Vietnamese terminology); consider parallel consent proceedings in both countries (a Vietnamese order plus a foreign court's adoption of the same terms creates a dual-jurisdiction enforcement basis); document the welfare assessment thoroughly in the Vietnamese record so the substance is visible to a later foreign reviewing court.",
        "I work routinely with foreign family-law counsel on these issues. For high-stakes cases, parallel proceedings in Vietnam and abroad — coordinated to produce consistent orders — are often the most secure approach.",
      ],
    },
    {
      id: 'support-enforcement',
      heading: 'Enforcement of child support across jurisdictions',
      body: [
        "Child support is awarded in Vietnamese custody orders based on the paying parent's income, the child's needs, and the cost of living in the relevant location. There is no strict formula. For international families, two scenarios commonly arise: the paying parent earns abroad, or the receiving parent and child move abroad after the order.",
        "**Paying parent abroad:** Vietnamese courts can set support based on the paying parent's foreign income (with appropriate evidence — tax records, employer letters, bank records). Enforcement abroad is the practical challenge. Vietnam has bilateral judicial assistance treaties with several countries that facilitate recognition of support orders; for countries without such treaties, enforcement requires a separate proceeding in the paying parent's country to recognise and enforce the Vietnamese order, on principles similar to recognition of any foreign order. In some cases, a parallel support order in the paying parent's home country (issued at the same time as the Vietnamese custody order, or shortly after) provides more direct enforceability.",
        "**Receiving parent and child abroad:** if the order is in Vietnamese dong, currency conversion and remittance need to be planned (foreign-exchange-control compliance for outbound transfers). The order can usually be modified to provide for direct payment in the receiving currency to a foreign bank account.",
        "**Modification over time:** child support is modifiable as circumstances change. A parent moving abroad, a substantial change in income, or a substantial change in the child's needs can support modification. The Vietnamese court typically retains modification jurisdiction so long as it had original jurisdiction; foreign courts may also assert modification jurisdiction once the child has habitual residence in their country.",
        "**Practical advice:** include in the Vietnamese order a clear payment mechanism (account, currency, due date), an annual review mechanism for cost-of-living adjustments, and an arbitration or mediation clause for support modifications. This reduces the need for return-to-court for routine adjustments.",
      ],
    },
    {
      id: 'practical',
      heading: 'Practical considerations and strategy',
      body: [
        "**Move before there is a problem.** Most of the foreign-parent custody outcomes that go badly involve one parent who waited too long to take protective steps. Documentation, residence registration, school enrolment in the parent's preferred country, parenting plan execution — these are all done more easily before crisis than during. Couples in international marriages should treat parenting-plan documentation as a basic step alongside other estate-planning measures.",
        "**Coordinate with foreign counsel early.** Cross-border custody matters almost always benefit from coordinated foreign and Vietnamese counsel. The foreign counsel handles home-jurisdiction proceedings, recognition strategy, and enforcement of any foreign orders; Vietnamese counsel handles the Vietnamese proceedings and Vietnamese-asset elements. The two should communicate from day one.",
        "**Mediation is often the right answer.** Contested custody litigation across borders is expensive, slow, and rarely produces an outcome that either party is happy with. Mediation — in person or virtual, with appropriate professional support — frequently produces parenting plans that work for everyone. Where mediation is not possible, structured negotiation through counsel often achieves the same result more efficiently than full contested proceedings.",
        "**Be realistic about timelines.** Cross-border custody matters take time. A Vietnamese contested custody case typically takes 9-18 months at first instance. Coordination with parallel foreign proceedings adds to this. The focus throughout should be on stability for the child during the process — interim arrangements that work, not just the final order.",
        "**Above all, the child.** Every decision is more easily made — and better made — when the welfare and stability of the child is the genuine starting point. Vietnamese courts apply this standard rigorously. International families who approach disputes with the same orientation tend to reach better outcomes, in court and out of it.",
      ],
    },
  ],
  keyTakeaways: [
    'Vietnam is not a party to the 1980 Hague Convention — cross-border custody requires merits-based proceedings, not streamlined return.',
    'Jurisdictional choice is a critical early decision; coordinate Vietnamese and foreign counsel from day one.',
    'Article 131 non-removal orders are the most important protective tool against unilateral child-removal.',
    'Comprehensive parenting plans — including international travel protocols and communication provisions — are essential for international families.',
    'Vietnamese custody orders are recognised abroad through general foreign-judgment principles; ensure proper jurisdiction and notice.',
    'Cross-border child-support enforcement often benefits from parallel orders in both jurisdictions.',
    'Mediation typically produces better outcomes than contested cross-border litigation.',
  ],
  authorNote:
    "International custody matters are among the most demanding in family-law practice. Where they are handled well, the impact on a child's life is profound. For confidential consultation on a specific situation, contact our office.",
  relatedArticles: [
    'getting-divorced-vietnam-foreigner-guide',
    'prenuptial-agreements-vietnam',
  ],
  relatedPracticeAreas: ['family-law-and-divorce', 'civil-litigation'],
}

// ============================================================================
// 4. WORK PERMIT DISPUTES
// ============================================================================

const workPermitDisputes: ArticleData = {
  slug: 'work-permit-disputes-vietnam',
  title: "Work Permit Disputes in Vietnam: A Foreign Employee's Guide",
  date: '2026-04-02',
  category: 'For Expats',
  excerpt:
    'A practical guide for foreign employees in Vietnam — the work-permit framework under Decree 152/2020, exemption categories, what happens on termination, dispute paths, and worst-case planning.',
  heroImageId: 'articleHeroExpat',
  readTime: '12 min',
  tableOfContents: [
    { id: 'framework', label: 'The Decree 152/2020 framework' },
    { id: 'exemptions', label: 'Exemption categories' },
    { id: 'employer-tied', label: 'Employer-tied permits and what that means' },
    { id: 'termination', label: 'What happens on termination' },
    { id: 'immigration', label: 'Immigration consequences' },
    { id: 'disputes', label: 'Dispute paths' },
    { id: 'worst-case', label: 'Planning for the worst case' },
  ],
  intro: [
    "Most foreign employees in Vietnam work under the **work permit** framework: an employer-sponsored authorisation that ties the right to work to a specific employer, position, and (often) location. The framework is workable for most, but it produces specific vulnerabilities — particularly around termination, where the work permit and the underlying immigration status can collapse together if not managed carefully.",
    "I have represented foreign employees in work-permit disputes across most major sectors in Ho Chi Minh City and Hanoi: technology, manufacturing, education, finance, professional services, hospitality. The patterns recur. This article walks through the framework, the practical pressure points, and the dispute paths available to foreign employees who find themselves in difficulty.",
  ],
  sections: [
    {
      id: 'framework',
      heading: 'The Decree 152/2020 framework',
      body: [
        "The principal source of work-permit law for foreign employees is **Decree 152/2020/ND-CP** (and amending Decree 70/2023/ND-CP), regulating foreign workers in Vietnam. The Decree implements provisions of the Labour Code 2019 and is supplemented by guidance from the Ministry of Labour, Invalids and Social Affairs (MOLISA).",
        "**Who needs a work permit:** foreign nationals working for a Vietnamese employer for more than 30 cumulative days in a year, or carrying out specified categories of activity that require permit irrespective of duration (managerial roles, technical experts, etc.). The categories of permitted foreign employee are defined: experts, executives, managers, and technical workers. Each category has specific qualification requirements (years of relevant experience, educational qualifications, employer justification of the need for a foreign rather than Vietnamese employee).",
        "**The application process:** the employer initiates the application (with the foreign employee's document package), MOLISA or the relevant provincial Department of Labour approves the position-and-employee combination, and a permit issues for a maximum two-year term, renewable. Renewal applications follow similar procedures and are typically filed in advance of expiry.",
        "**Documentation:** the foreign employee provides educational certificates, work-experience evidence, criminal-record check (Vietnamese and home-country), health certificate, and identity documents — all typically apostilled or legalised and translated. The employer provides justification of the position and employment terms. The full document package is prepared with care; defects in documentation are the most common cause of application delay or refusal.",
      ],
    },
    {
      id: 'exemptions',
      heading: 'Exemption categories',
      body: [
        "Some foreign workers are **exempt** from the work-permit requirement under Article 7 of Decree 152/2020. Common exempt categories include: managers or owners of capital contributors of an LLC or JSC; the chief representative of a foreign organisation in Vietnam; foreigners married to Vietnamese citizens and residing in Vietnam (in some cases); intra-company transfers within the eleven service sectors specified under WTO commitments (subject to conditions); foreign lawyers practising in foreign-law-firm representative offices; and several other narrowly defined categories.",
        "**Confirmation procedures:** even exempt workers typically need formal confirmation of exemption from MOLISA before commencing work, on application by the employer. The confirmation is not a permit but functionally similar — it must be obtained before work starts, it ties to the specific position, and it must be renewed or amended on changes.",
        "**Strategic implications:** the exemption categories matter for two reasons. First, they can simplify the path for senior foreign employees and capital contributors who would otherwise face the full work-permit process. Second, they affect what happens if the underlying basis changes — an exempt manager who ceases to be a manager loses the exemption and must obtain a work permit (or leave). Foreign workers should know which category they fall into and what triggers a category change.",
        "Common errors I see: foreign capital contributors assuming their visa-free entry rights cover work — they do not, work always requires either a permit or a confirmed exemption; foreign spouses of Vietnamese citizens assuming the marriage automatically permits work — it does not in all cases; representative-office staff assuming they can shift to LLC roles without a new permit — they cannot.",
      ],
    },
    {
      id: 'employer-tied',
      heading: 'Employer-tied permits and what that means',
      body: [
        "A Vietnamese work permit is tied to a **specific employer, specific position, and (in many cases) specific work location**. The permit does not authorise the holder to work generally — it authorises a defined work relationship. Changes in any of these elements typically require permit amendment or, in some cases, a new permit application.",
        "**Implications for the employee:** if the employment ends, the work permit's purpose ceases. The permit itself remains technically issued for the original term, but the right to work under it ends with the employment relationship. The Decree requires the employer to notify MOLISA of permit revocation, and immigration authorities are alerted.",
        "**Implications for changing employers:** moving from one Vietnamese employer to another is not a simple administrative change. The new employer initiates a new work-permit application for the new position, with the same documentation and approval process as the original. This can take 30-60 days. During the gap between the old and new permits, the foreign worker is technically not authorised to work — and depending on visa status, may not be authorised to remain.",
        "**Implications for promotion or role change within the same employer:** changes in title, scope, or responsibility may require permit amendment. Moving from a technical role to a managerial role, or from an executive role to a different function, are typical triggers. Employers and employees should consult before making changes that affect the position description on the permit.",
      ],
      pullQuote:
        "The work permit ties the right to work to a specific employment relationship. When the relationship ends, the right to work ends — often within days, regardless of visa expiry on paper.",
    },
    {
      id: 'termination',
      heading: 'What happens on termination',
      body: [
        "Termination of employment — whether by resignation, dismissal, mutual agreement, or expiry of fixed-term contract — has cascading consequences for foreign employees that often surprise those who have not faced the situation before.",
        "**The work permit:** ceases to authorise work on termination of the underlying employment. The employer is required to return the permit to the issuing authority within a specified period (typically 15 days under current rules) and notify MOLISA of the termination. The employee retains the physical permit document until that point but cannot lawfully work under it.",
        "**The temporary residence card (TRC):** if the foreign employee held a TRC linked to employment, the TRC's basis ends with the employment. Practical consequence: the TRC may be cancelled, or its expiry brought forward, requiring the foreign worker to either obtain a new basis (new employer's permit, new investment, marriage to Vietnamese citizen, etc.) or depart.",
        "**Severance and statutory protections:** Vietnamese labour law provides protections for foreign employees similar to (though not identical to) Vietnamese employees. Unilateral termination by the employer must be on grounds permitted under the Labour Code, with required notice or payment in lieu. Severance allowance applies in defined cases. Where dismissal is alleged to be unlawful (without proper grounds, without proper procedure, or in breach of contract), the foreign employee has standing to challenge through the dispute paths discussed below — though the procedural realities (immigration status, ability to remain in Vietnam during the dispute) need careful planning.",
        "**Final settlements:** at termination, foreign employees are entitled to: payment of all earned wages and unused annual leave; severance allowance if applicable (typically half a month's wages per year of service); refund of social-insurance contributions in some cases (with home-country tax considerations); return of personal belongings; references and confirmation of employment in the form required by the home country. Disputes commonly arise about the calculation of these elements; documenting the terms in the employment contract is the best protection.",
      ],
    },
    {
      id: 'immigration',
      heading: 'Immigration consequences',
      body: [
        "The **practical immigration cascade** is what most foreign employees underestimate. The sequence is typically: termination of employment → revocation or expiry of work-permit basis → cancellation or expiry of TRC → loss of legal residence basis → required departure or change of basis.",
        "The **available timeframes** are short. Once the work permit's basis has ended, the TRC may be cancelled within weeks. There is no statutory grace period in the law for foreign employees to remain in Vietnam to seek new employment — though in practice, regularised exit-permit procedures or short-term tourist-visa conversions can buy time. Foreign workers facing termination should plan immigration steps simultaneously with employment-dispute steps, not sequentially.",
        "**Alternative bases for remaining:** include securing new employment (new employer's work-permit application, with bridging arrangements); investment-based residence (capital contribution to a Vietnamese company); marriage to a Vietnamese citizen with appropriate documentation; long-term tourist or business visa renewals (limited and not a long-term solution). Each has its own timeline and documentation requirements.",
        "**Penalties for unauthorised work or overstay:** working without a permit attracts administrative penalties (fines for both employer and employee) and possible deportation. Overstaying visa or TRC validity attracts fines and can compromise re-entry. These consequences are administrative rather than criminal in most cases, but the deportation and re-entry consequences can be lasting.",
      ],
    },
    {
      id: 'disputes',
      heading: 'Dispute paths',
      body: [
        "Foreign employees who consider their termination unlawful, or who have substantial unpaid claims (wages, severance, bonus), have several dispute paths under Vietnamese law.",
        "**Administrative complaint to MOLISA or the provincial Department of Labour.** Where the dispute concerns work-permit issues, employment law violations, or social-insurance compliance, the labour authorities have inspection and mediation jurisdiction. This path is relatively informal, fast (days to weeks), and can resolve clear-cut violations without litigation. It is well-suited to disputes about unpaid wages, missing work-permit obligations, and administrative compliance.",
        "**Labour conciliation.** Article 188 of the Labour Code 2019 provides for labour conciliation through provincial labour mediators as an initial step for individual labour disputes. Conciliation is generally a precondition to court action for individual disputes (with limited exceptions for unilateral termination disputes). The conciliation process is brief — typically 5 working days from referral — and aims at settlement; if conciliation fails, the dispute can move to the People's Court.",
        "**Civil court.** The District People's Court (or Provincial People's Court for matters with foreign elements) has jurisdiction over individual employment disputes. Standard timelines: 4-6 months at first instance, longer for complex matters. The court applies the Labour Code and the parties' employment contract. Foreign-element matters allocate to the Provincial People's Court and follow the procedures of the Civil Procedure Code 2015. Court fees are modest by international standards.",
        "**Arbitration.** Some employment contracts (typically senior or expatriate contracts) provide for arbitration of disputes. Arbitration is permissible for individual labour disputes under specified conditions and is sometimes faster and more confidential than court. VIAC handles employment-related arbitration with experienced panellists.",
        "**Practical sequencing:** for most foreign-employee disputes, the practical sequence is to file an administrative complaint and conciliation simultaneously, attempt settlement, and proceed to court only if settlement is not achievable. Most cases settle before trial when both sides are well-advised; a small minority require full proceedings.",
      ],
    },
    {
      id: 'worst-case',
      heading: 'Planning for the worst case',
      body: [
        "The worst-case scenario for a foreign employee is termination combined with a short timeline to depart, unpaid claims, and limited leverage. Planning for this — even briefly, before it happens — substantially reduces the risk and improves outcomes.",
        "**Documentation discipline.** Keep clear copies of: signed employment contract; work permit and any amendments; TRC; pay slips and bonus-payment records; tax-payment records; social-insurance contribution records; appraisals and disciplinary records (if any); all written communications with the employer that bear on terms or performance. Keep these in a location accessible from outside the workplace (cloud storage, home).",
        "**Emergency contacts and counsel.** Maintain the contact details of an employment lawyer who can act on short notice. The first 24-48 hours after a sudden termination are when key procedural steps (objection to dismissal procedure, preservation of immigration status, documentation requests) need to happen.",
        "**Financial cushion.** Maintain savings sufficient for at least 3-6 months of living expenses outside the immediate paycheck, particularly if you are sponsoring a TRC and dependents. The financial pressure of a sudden termination can force decisions (accept inadequate severance, depart prematurely) that are not in the long-term interest.",
        "**Negotiation leverage.** The strongest negotiating position is created by being right on the law and being prepared to enforce. Where unilateral termination is not properly grounded, where notice is inadequate, where severance is short, or where unpaid claims are clear, well-prepared assertion through counsel often produces meaningful improvement in the settlement before any formal dispute filing. Employers prefer to resolve clean disputes; they fight ones that are unclear or where counsel is uninformed.",
        "**Departure on agreed terms vs. deportation.** Where remaining in Vietnam is not feasible, departure on regularised terms (resignation accepted, exit permits issued, no unpaid administrative penalties) preserves re-entry options. Departure under deportation order, or with unresolved administrative penalties, can create lasting consequences. Where the underlying dispute is not fully resolvable in the available timeframe, structured departure with claims preserved (under arbitration agreement or otherwise) is often the right answer.",
      ],
    },
  ],
  keyTakeaways: [
    'Decree 152/2020 sets the work-permit framework; Decree 70/2023 amends key procedural elements.',
    'Some senior roles and capital contributors fall within exemption categories — confirmation is still required.',
    'Work permits tie the right to work to a specific employer and position; changes typically require amendment or new application.',
    'Termination triggers a cascade: permit basis ends, TRC basis ends, residence basis ends — sometimes within weeks.',
    'Multiple dispute paths exist: administrative complaint, conciliation, civil court, arbitration; sequencing matters.',
    'Documentation discipline before any dispute is the foundation of effective enforcement.',
    'Departure on agreed terms preserves re-entry options; deportation creates lasting consequences.',
  ],
  practicalChecklist: {
    title: 'Foreign Employee — Document Preparedness',
    items: [
      'Signed employment contract (Vietnamese and English versions, both signed)',
      'Current work permit and any amendments',
      'Current temporary residence card (TRC) and any sponsor documentation',
      'Pay slips for the past 24 months and bonus payment records',
      'Personal income tax payment records (annual filings and withholding)',
      'Social and health insurance contribution records',
      'All performance appraisals and any disciplinary correspondence',
      'Employer policy documents (handbook, code of conduct, disciplinary procedures)',
      'Copies of all amendments to terms (salary changes, role changes, allowances)',
      'Education and prior-employment documents in apostilled / legalised form (originals or certified copies)',
      'Contact details for an employment lawyer who can respond on 24-48 hour notice',
      'Plan for alternative residence basis if employment ends (new employment, investment, family-based, departure)',
    ],
  },
  authorNote:
    "Work-permit and employment matters can move quickly when they go wrong. For foreign employees facing termination or work-permit difficulties, contact our office promptly — early advice typically produces better outcomes.",
  relatedArticles: [
    'arrested-in-vietnam-foreign-national',
    'top-legal-risks-foreign-investors-vietnam',
  ],
  relatedPracticeAreas: ['labor-and-employment', 'civil-litigation'],
}

// ============================================================================
// EXPORT
// ============================================================================

export const expatArticles: Record<string, ArticleData> = {
  'arrested-in-vietnam-foreign-national': arrestedForeignNational,
  'prenuptial-agreements-vietnam': prenuptialAgreements,
  'child-custody-across-borders-vietnam': childCustodyAcrossBorders,
  'work-permit-disputes-vietnam': workPermitDisputes,
}
