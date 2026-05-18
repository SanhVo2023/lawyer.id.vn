import Link from 'next/link'
import Image from 'next/image'
import { IDENTITY } from '@/data/identity'

const affiliations = [
  {
    src: '/asset/logo-transparent.png',
    alt: 'Apolo Lawyers — Solicitors & Litigators',
    href: 'https://www.apololawyers.com',
  },
  {
    src: '/asset/logo-lsvn.png',
    alt: 'Liên Đoàn Luật Sư Việt Nam — Vietnam Bar Federation',
    href: undefined,
  },
  {
    src: '/asset/logo-aea-en.png',
    alt: 'Association of European Attorneys (AEA)',
    href: undefined,
  },
  {
    src: '/asset/logo-global-law-experts.webp',
    alt: 'Global Law Experts',
    href: undefined,
  },
]

const practiceAreaLinks = [
  { label: 'Civil Litigation', href: '/practice-areas/civil-litigation' },
  { label: 'Land & Property', href: '/practice-areas/land-and-property' },
  { label: 'Family Law & Divorce', href: '/practice-areas/family-law-and-divorce' },
  { label: 'Corporate & Commercial', href: '/practice-areas/corporate-and-commercial' },
  { label: 'Labor & Employment', href: '/practice-areas/labor-and-employment' },
  { label: 'Criminal Defense', href: '/practice-areas/criminal-defense' },
  { label: 'Arbitration', href: '/practice-areas/arbitration' },
  { label: 'FDI, Investment & Immigration', href: '/practice-areas/fdi-investment-immigration' },
]

const resourceLinks = [
  { label: 'Legal Insights', href: '/insights' },
  { label: 'Vietnam Legal System Guide', href: '/vietnam-legal-system-guide' },
  { label: 'Working with Foreign Clients', href: '/working-with-foreign-clients' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Credentials', href: '/credentials' },
]

const ecosystemLinks = [
  { label: 'Apolo Lawyers', href: 'https://www.apololawyers.com', description: 'Our firm' },
  { label: 'Lawyers in Vietnam', href: 'https://lawyersinvietnam.com', description: 'Find lawyers' },
  { label: 'Vo Thien Hien (Vietnamese)', href: 'https://vothienhien.com', description: 'Profile in Vietnamese' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-heading)] text-xl text-white tracking-[0.1em]">
                HENRY VO
              </span>
              <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-accent/70 mt-1">
                International Lawyer in Vietnam
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Managing Partner at Apolo Lawyers. Helping foreign clients, expats, and international
              businesses navigate Vietnam&apos;s legal system with confidence.
            </p>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${IDENTITY.callCenterWhatsApp}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors font-[family-name:var(--font-inter)]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {IDENTITY.callCenterDisplay}
            </a>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 mt-8">
              Our Network
            </h3>
            <ul className="space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Contact
            </h3>
            <div className="space-y-5 text-sm text-white/60">
              {IDENTITY.offices.map((office) => (
                <div key={office.label}>
                  <p className="font-medium text-white/80 mb-1">{office.label}</p>
                  {office.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <div className="mt-2 space-y-0.5">
                    {office.phones.map((p) => (
                      <p key={p.tel}>
                        <span className="text-white/40">{p.label}: </span>
                        <a href={`tel:${p.tel}`} className="hover:text-accent transition-colors">
                          {p.display}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <p>
                  <a href={`mailto:${IDENTITY.email}`} className="hover:text-accent transition-colors">
                    {IDENTITY.email}
                  </a>
                </p>
                <p>
                  <span className="text-white/40">Call Center: </span>
                  <a href={`tel:${IDENTITY.callCenterTel}`} className="hover:text-accent transition-colors">
                    {IDENTITY.callCenterDisplay}
                  </a>
                </p>
              </div>
              <p className="text-xs text-white/40 font-[family-name:var(--font-inter)]">
                Office Hours: Mon–Fri, 8:30 AM – 6:00 PM (GMT+7)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliations strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent/70 font-medium font-[family-name:var(--font-inter)]">
              <span className="w-8 h-px bg-accent/40" />
              Affiliations & Memberships
              <span className="w-8 h-px bg-accent/40" />
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center">
            {affiliations.map((a) => {
              const inner = (
                <div className="group relative h-20 w-full flex items-center justify-center">
                  <Image
                    src={a.src}
                    alt={a.alt}
                    width={160}
                    height={80}
                    className="max-h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              )
              return a.href ? (
                <a
                  key={a.src}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={a.alt}
                >
                  {inner}
                </a>
              ) : (
                <div key={a.src} aria-label={a.alt}>{inner}</div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-[family-name:var(--font-inter)]">
            &copy; {new Date().getFullYear()} Henry Vo (Vo Thien Hien) — Apolo Lawyers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-accent transition-colors font-[family-name:var(--font-inter)]">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="text-xs text-white/40 hover:text-accent transition-colors font-[family-name:var(--font-inter)]">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
