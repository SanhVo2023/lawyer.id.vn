import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/layout/Breadcrumb'
import SectionHeading from '@/components/ui/SectionHeading'
import CredentialsBlock from '@/components/identity/CredentialsBlock'
import JurisdictionsRow from '@/components/identity/JurisdictionsRow'
import ContactCTA from '@/components/ContactCTA'
import { generatePageMetadata, generateBreadcrumbJsonLd, generatePersonJsonLd } from '@/lib/metadata'
import { IMAGES } from '@/lib/images'
import { IDENTITY } from '@/data/identity'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Henry Vo — Vietnamese Lawyer for International Clients',
  description:
    'Henry Vo (Vo Thien Hien) — Managing Partner of Apolo Lawyers since 2018. Vietnamese lawyer with over 20 years of practice representing foreign clients in Vietnam across civil litigation, corporate, family law, criminal defence, and arbitration.',
  path: '/about',
})

const timeline = [
  {
    year: 'Education',
    title: 'Ho Chi Minh City University of Law',
    description:
      'Completed legal education in civil and commercial law. Followed by post-graduate professional training at the Judicial Academy of Vietnam.',
  },
  {
    year: 'Bar',
    title: 'Vietnam Bar Federation',
    description:
      'Admitted as a Member of the Vietnam Bar Federation and the Ho Chi Minh City Bar Association.',
  },
  {
    year: 'Practice',
    title: 'Two decades of legal practice',
    description:
      'Over 20 years of legal practice in Vietnam focusing on civil litigation, corporate law, family law, criminal defence, and arbitration related matters for foreign clients.',
  },
  {
    year: 'Since 2018',
    title: 'Managing Partner, Apolo Lawyers',
    description:
      'Has led Apolo Lawyers as Managing Partner since 2018, overseeing legal strategy, case management, and professional direction across the firm.',
  },
  {
    year: 'Arbitration',
    title: 'VIAC arbitration counsel experience',
    description:
      'Arbitration counsel experience in matters before the Vietnam International Arbitration Centre, working with clients from multiple jurisdictions.',
  },
  {
    year: 'Memberships',
    title: 'Association of European Attorneys (AEA)',
    description:
      'Member of the Association of European Attorneys, supporting cross-border working relationships with foreign law firms.',
  },
  {
    year: 'International',
    title: 'Clients from 20+ countries',
    description:
      'Serving Fortune 500 companies, family-owned businesses, expatriate individuals, and foreign law firms seeking reliable local counsel in Vietnam.',
  },
]

const recognition = [
  {
    title: 'VIAC Arbitration',
    detail: 'Arbitration counsel experience in matters before the Vietnam International Arbitration Centre',
  },
  {
    title: 'Association of European Attorneys',
    detail: 'Member of the AEA — cross-border working network with foreign law firms',
  },
  {
    title: 'Speaker, regional legal forums',
    detail: 'On Vietnamese investment law, dispute resolution, and cross-border practice',
  },
  {
    title: 'Local counsel for foreign law firms',
    detail: 'Engaged by international law firms requiring reliable Vietnamese-law representation',
  },
]

export default function AboutPage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ]),
    {
      ...generatePersonJsonLd(),
      '@type': ['Person', 'Attorney', 'ProfilePage'],
      description:
        'Henry Vo (Vo Thien Hien) is the Managing Partner of Apolo Lawyers since 2018, with over 20 years of legal practice in Vietnam representing foreign clients in civil litigation, corporate law, family law, criminal defence, and arbitration.',
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero — cinematic office portrait */}
      <section className="relative bg-primary pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.aboutHeroCinematic.cdn}
            alt={IMAGES.aboutHeroCinematic.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/40" />
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <Breadcrumb items={[{ label: 'About' }]} />
          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
              <span className="w-8 h-px bg-accent" />
              Profile
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              {IDENTITY.name}
            </h1>
            <p className="mt-3 text-2xl md:text-3xl text-accent/85 font-[family-name:var(--font-heading)] italic">
              {IDENTITY.vietnameseName}
            </p>
            <p className="mt-2 text-sm text-white/60 font-[family-name:var(--font-inter)] uppercase tracking-[0.25em]">
              {IDENTITY.title} · {IDENTITY.firm}
            </p>

            <div className="mt-8 h-[2px] w-24 bg-accent" />

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed">
              A Vietnamese lawyer with over {IDENTITY.yearsExperience} years of legal
              practice in Vietnam and international client experience. Since{' '}
              {IDENTITY.managingPartnerSince}, he has led {IDENTITY.firmShort} as
              Managing Partner, advising and representing foreign individuals,
              foreign-invested enterprises and overseas corporations in civil
              litigation, corporate law, family matters, criminal defence and
              arbitration related matters.
            </p>

            <div className="mt-10">
              <JurisdictionsRow light showLabel />
            </div>
          </div>
        </div>
      </section>

      {/* Long-form biography with sticky sidebar */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
                <span className="w-8 h-px bg-accent" />
                Biography
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-tight">
                A Vietnamese Lawyer for{' '}
                <span className="italic text-accent font-[family-name:var(--font-heading)]">
                  International Clients
                </span>{' '}
                in Vietnam
              </h2>
              <div className="mt-6 h-[2px] w-20 bg-accent" />

              <div className="mt-10 prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-6">
                <p className="text-xl text-primary font-medium">
                  Lawyer Vo Thien Hien, also known as Henry Vo, is a Vietnamese lawyer
                  with more than {IDENTITY.yearsExperience} years of legal practice
                  experience in Vietnam, focusing on litigation, arbitration, dispute
                  resolution and legal advisory work.
                </p>
                <p>
                  He assists foreign clients, expatriates living in Vietnam,
                  foreign-invested enterprises and overseas law firms that require
                  reliable local counsel with a practical understanding of Vietnamese
                  law, procedures and legal practice.
                </p>
                <p>
                  Since {IDENTITY.managingPartnerSince}, Lawyer Vo Thien Hien has served
                  as the Managing Partner of {IDENTITY.firmShort}. In this role, he
                  oversees legal strategy, case management and professional direction,
                  and has been directly involved in matters with foreign elements across
                  civil litigation, commercial disputes, corporate law, family law,
                  criminal defence and arbitration.
                </p>
                <p>
                  His practice serves clients from more than {IDENTITY.countriesServed}{' '}
                  countries — including Fortune 500 companies, family-owned businesses,
                  expatriate individuals and foreign law firms — through direct
                  partner-level engagement supported by an English-speaking legal team
                  responsive to cross-border working requirements.
                </p>
                <p>
                  Outside client work, he contributes to legal commentary and
                  professional discussion on Vietnamese law, with the view that clear
                  explanation of legal concepts is part of effective representation for
                  international clients.
                </p>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-2">
              <aside className="lg:sticky lg:top-32 space-y-8">
                {/* Quick facts */}
                <div className="rounded-sm border border-border bg-surface p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-6">
                    Quick Facts
                  </h3>
                  <dl className="space-y-3">
                    {[
                      { label: 'Practice', value: 'Litigation, Arbitration & Cross-Border Matters' },
                      { label: 'Bar', value: 'Vietnam' },
                      { label: 'Firm', value: IDENTITY.firmShort },
                      { label: 'Title', value: IDENTITY.title },
                      { label: 'Languages', value: IDENTITY.languages.join('; ') },
                      { label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
                      { label: 'Education', value: 'Ho Chi Minh City University of Law' },
                      { label: 'Arbitration', value: 'Counsel experience in VIAC matters' },
                    ].map((fact) => (
                      <div
                        key={fact.label}
                        className="flex justify-between gap-4 border-b border-border pb-2.5 last:border-b-0 last:pb-0"
                      >
                        <dt className="text-sm text-text-secondary font-[family-name:var(--font-inter)]">
                          {fact.label}
                        </dt>
                        <dd className="text-sm font-medium text-primary text-right">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href="/credentials"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors"
                  >
                    View Full Credentials
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Contact card */}
                <div className="rounded-sm border border-accent/20 bg-accent/5 p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium font-[family-name:var(--font-inter)]">
                    Direct Contact
                  </span>
                  <div className="mt-3 space-y-2 text-sm">
                    <a
                      href={`mailto:${IDENTITY.directEmail}`}
                      className="block text-primary hover:text-accent transition-colors"
                    >
                      {IDENTITY.directEmail}
                    </a>
                    <a
                      href={`tel:${IDENTITY.callCenterTel}`}
                      className="block text-primary hover:text-accent transition-colors"
                    >
                      {IDENTITY.callCenterDisplay}
                    </a>
                    <p className="text-xs text-text-secondary font-[family-name:var(--font-inter)]">
                      {IDENTITY.officeHours}
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Image-text feature: At the desk */}
      <section className="bg-surface py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-sm overflow-hidden img-zoom">
                <Image
                  src={IMAGES.aboutMrHienDesk.cdn}
                  alt={IMAGES.aboutMrHienDesk.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/20 pointer-events-none" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-accent" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-accent" />
            </div>

            <div>
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
                <span className="w-8 h-px bg-accent" />
                The Path to Law
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-tight">
                Why this practice exists
              </h2>
              <div className="mt-6 h-[2px] w-20 bg-accent" />

              <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
                <p>
                  International clients often come to Vietnam with legitimate concerns:
                  a different legal system, unfamiliar procedures, language barriers, and
                  uncertainty about how decisions are made in practice. These concerns are
                  understandable. Vietnamese law has its own structure, logic and
                  procedures, and effective legal support requires more than translating
                  statutes or court documents.
                </p>
                <p>
                  My practice is built on helping foreign clients understand Vietnam&apos;s
                  legal system in a clear, practical and strategic way. This means
                  explaining the law in context, identifying the real legal and procedural
                  risks, assessing evidence carefully, and guiding clients through each
                  stage of a dispute, transaction or legal matter with realistic options.
                </p>
                <p>
                  With more than {IDENTITY.yearsExperience} years of experience and a
                  supporting English-speaking team, this is the gap the practice is
                  designed to close — Vietnamese law, delivered with international
                  fluency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-primary py-10 sm:py-14 md:py-20 lg:py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Image
            src={IMAGES.iconScales.cdn}
            alt=""
            width={56}
            height={56}
            className="mx-auto opacity-90 mb-6"
          />
          <blockquote>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-[family-name:var(--font-heading)] italic">
              &ldquo;Foreign clients navigating Vietnam&apos;s legal system deserve counsel
              that meets the standard of any major international jurisdiction. That is the
              standard I hold myself to on every matter.&rdquo;
            </p>
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium font-[family-name:var(--font-inter)]">
              {IDENTITY.name}
            </span>
            <span className="w-12 h-px bg-accent" />
          </div>
        </div>
      </section>

      {/* Image-text feature reverse: International work */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2 relative">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-sm overflow-hidden img-zoom">
                <Image
                  src={IMAGES.aboutMrHienMeeting.cdn}
                  alt={IMAGES.aboutMrHienMeeting.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/20 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-accent" />
            </div>

            <div className="lg:order-1">
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
                <span className="w-8 h-px bg-accent" />
                Working internationally
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-tight">
                Cross-border counsel,{' '}
                <span className="italic text-accent font-[family-name:var(--font-heading)]">
                  fluently delivered
                </span>
              </h2>
              <div className="mt-6 h-[2px] w-20 bg-accent" />

              <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
                <p>
                  My practice now serves clients from over twenty countries — Fortune 500
                  multinationals, family-owned manufacturers, expat individuals, and the
                  foreign law firms that retain me as their local counsel of choice.
                </p>
                <p>
                  Working internationally means more than speaking English well. It means
                  coordinating with foreign counsel across time zones, managing the
                  legalisation and translation of evidence across jurisdictions, and
                  understanding when a U.S. client&apos;s instinct differs from a Korean
                  client&apos;s instinct from a German client&apos;s instinct — and
                  translating Vietnamese procedure into something that makes sense to each
                  of them.
                </p>
                <p>
                  It also means being directly available. International matters do not wait
                  for office hours. WhatsApp, email, video calls — whatever channel works
                  for the client&apos;s context, I respond personally and within 24 hours.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Active jurisdictions', value: 'VIAC · SIAC · ICC' },
                  { label: 'Network reach', value: '20+ countries' },
                  { label: 'Working languages', value: 'EN · VI' },
                  { label: 'Response time', value: '< 24 hours' },
                ].map((item) => (
                  <div key={item.label} className="rounded-sm border border-border bg-surface p-4">
                    <div className="text-xs uppercase tracking-[0.15em] text-text-secondary font-[family-name:var(--font-inter)]">
                      {item.label}
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-primary font-[family-name:var(--font-inter)]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image-text feature: Beyond the courtroom */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-sm overflow-hidden img-zoom">
                <Image
                  src={IMAGES.aboutMrHienSpeaking.cdn}
                  alt={IMAGES.aboutMrHienSpeaking.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/20 pointer-events-none" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-accent" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-accent" />
            </div>

            <div>
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
                <span className="w-8 h-px bg-accent" />
                Beyond the Courtroom
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-primary leading-tight">
                Speaking, writing, and contribution
              </h2>
              <div className="mt-6 h-[2px] w-20 bg-accent" />

              <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
                <p>
                  I speak regularly at international legal conferences on Vietnamese
                  investment law, dispute resolution, and the practical realities of
                  cross-border practice. I write for the Apolo Lawyers insights publication
                  and contribute to international legal commentary.
                </p>
                <p>
                  Mentorship matters. I supervise junior attorneys at the firm, host
                  annual training for foreign-law-firm secondees, and contribute to
                  pro-bono work on access-to-justice initiatives that reach clients who
                  could not otherwise afford international-quality counsel.
                </p>
                <p>
                  The law is a profession of teaching as much as practice. The best counsel
                  I have ever worked alongside have been generous educators — and I aim to
                  do the same.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-5">
                  Recognition
                </h3>
                <ul className="space-y-4">
                  {recognition.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Image
                        src={IMAGES.iconGavel.cdn}
                        alt=""
                        width={24}
                        height={24}
                        className="flex-shrink-0 mt-0.5 opacity-80"
                      />
                      <div>
                        <div className="text-base font-semibold text-primary leading-snug">
                          {r.title}
                        </div>
                        <div className="text-sm text-text-secondary mt-0.5">{r.detail}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials block (full) */}
      <section className="bg-surface py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Credentials"
            title="Professional standing"
            subtitle="Legal practice credentials, professional memberships, arbitration experience, and education."
          />
          <div className="max-w-4xl mx-auto rounded-sm border border-border bg-white p-10">
            <CredentialsBlock variant="list" showLabel={false} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/credentials"
              className="inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors group"
            >
              View Detailed Credentials Page
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Career"
            title="Professional Background"
            subtitle="Two decades of Vietnamese legal practice serving international clients."
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-14 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-white -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}
                >
                  <span className="text-sm font-bold text-accent font-[family-name:var(--font-inter)] tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-base font-semibold text-primary mt-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image-text feature: District 1 / personal */}
      <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2 relative">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-sm overflow-hidden img-zoom">
                <Image
                  src={IMAGES.aboutMrHienWalking.cdn}
                  alt={IMAGES.aboutMrHienWalking.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/20 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-accent" />
            </div>

            <div className="lg:order-1 text-white">
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
                <span className="w-8 h-px bg-accent" />
                A Vietnamese Practice
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
                Rooted in{' '}
                <span className="italic text-accent font-[family-name:var(--font-heading)]">
                  Ho Chi Minh City
                </span>
              </h2>
              <div className="mt-6 h-[2px] w-20 bg-accent" />

              <div className="mt-8 space-y-5 text-white/80 leading-relaxed">
                <p>
                  Ho Chi Minh City has been the home of my practice for two decades. From
                  the courthouses of District 1 to the industrial zones of Binh Duong, from
                  the corporate offices of District 2 to the conference rooms of the major
                  international hotels — these are the rooms where Vietnamese law actually
                  happens.
                </p>
                <p>
                  Knowing this city is not optional for an international lawyer working
                  here. The relationships with court administrators, the working language
                  with local government departments, the networks of trusted notaries,
                  translators, and accountants — all of it is what turns the substantive
                  legal advice into actual outcomes for clients.
                </p>
                <p>
                  I am, fundamentally, a Vietnamese lawyer. Practising in Vietnam, in
                  Vietnamese, before Vietnamese institutions. The international dimension of
                  my practice is what I do for foreign clients — not what I am.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
                {IDENTITY.offices.map((office) => (
                  <div key={office.label}>
                    <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium font-[family-name:var(--font-inter)]">
                      {office.label}
                    </div>
                    <div className="mt-2 text-sm text-white/70 leading-relaxed">
                      {office.lines.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookshelf / closing pull-quote */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/2] sm:aspect-[3/4] rounded-sm overflow-hidden img-zoom">
                <Image
                  src={IMAGES.aboutMrHienBookshelf.cdn}
                  alt={IMAGES.aboutMrHienBookshelf.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)]">
                <span className="w-8 h-px bg-accent" />
                A Lifetime of Reading
              </span>
              <blockquote className="mt-8">
                <p className="text-2xl md:text-3xl text-primary font-[family-name:var(--font-heading)] italic leading-relaxed">
                  &ldquo;The law rewards those who read deeply and write clearly. Every case
                  I take on begins with the discipline of going back to the primary
                  sources — and ends with the discipline of explaining the conclusion in
                  language a client can act on.&rdquo;
                </p>
              </blockquote>
              <p className="mt-8 text-sm text-text-secondary font-[family-name:var(--font-inter)]">
                — {IDENTITY.name}, on his approach to legal research
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center font-[family-name:var(--font-inter)] text-sm font-medium uppercase tracking-wider bg-accent text-white px-7 py-3.5 transition-all duration-300 hover:bg-primary btn-shimmer"
                >
                  View Practice Areas
                </Link>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent hover:text-primary transition-colors"
                >
                  Read Legal Insights
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem links */}
      <section className="py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm text-text-secondary font-[family-name:var(--font-inter)]">
            Henry Vo is the Managing Partner of{' '}
            <a
              href="https://www.apololawyers.com"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apolo Lawyers
            </a>
            . Find more lawyers at{' '}
            <a
              href="https://lawyersinvietnam.com"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              lawyersinvietnam.com
            </a>
            . View his profile in Vietnamese at{' '}
            <a
              href="https://vothienhien.com"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              vothienhien.com
            </a>
            .
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
