import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy — Henry Vo | International Lawyer in Vietnam',
  description: 'Privacy policy for lawyer.id.vn. How we collect, use, and protect your personal data, including GDPR considerations for European visitors.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
    ]),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="bg-primary pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-white/60">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-primary mt-0">1. Information We Collect</h2>
              <p>When you use our website or contact us, we may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information:</strong> Name, email address, phone number, country</li>
                <li><strong>Matter information:</strong> Type of legal matter, description of your situation</li>
                <li><strong>Technical data:</strong> IP address, browser type, pages visited (collected via analytics)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide legal services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We will never sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">3. Attorney-Client Privilege</h2>
              <p>
                Information shared through our contact form or during consultations is treated as
                confidential and may be protected by attorney-client privilege under Vietnamese law.
                We maintain strict confidentiality standards for all client communications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">4. Data Storage and Security</h2>
              <p>
                Your data is stored securely using encrypted databases hosted by Supabase. We
                implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">5. GDPR Rights (European Visitors)</h2>
              <p>If you are a resident of the European Union, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
              <p>To exercise these rights, please contact us at contact@apolo.com.vn.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">6. Cookies</h2>
              <p>
                This website uses essential cookies for functionality. We may use analytics cookies
                to understand how visitors use our site. You can control cookie settings through
                your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary">7. Contact</h2>
              <p>
                For questions about this privacy policy or your data, contact us at:
              </p>
              <p>
                <strong>Email:</strong> contact@apolo.com.vn<br />
                <strong>Address:</strong> 108 Tran Dinh Xu Street, Cau Ong Lanh Ward, Ho Chi Minh City, Vietnam
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
