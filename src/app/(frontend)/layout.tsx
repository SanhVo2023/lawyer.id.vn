import type { Metadata } from 'next'
import '../globals.css'
import { dmSerifDisplay, sourceSans3, inter, dmSans } from '@/lib/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Henry Vo | Vietnamese Lawyer for International Clients',
    template: '%s | Henry Vo - Vietnamese Lawyer for International Clients',
  },
  description:
    'Henry Vo (Vo Thien Hien) — Managing Partner of Apolo Lawyers since 2018. Vietnamese lawyer with over 20 years of practice serving foreign clients, expatriates, and international businesses in civil litigation, corporate law, family law, criminal defence, and arbitration.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lawyer.id.vn'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Henry Vo - Vietnamese Lawyer for International Clients',
    images: [
      {
        url: 'https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/og/og-default-760157f0.webp',
        width: 1200,
        height: 630,
        alt: 'Henry Vo — Vietnamese Lawyer for International Clients',
      },
    ],
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSerifDisplay.variable} ${sourceSans3.variable} ${inter.variable} ${dmSans.variable} antialiased`}
      >
        <Header />
        <main className="min-h-[600px] sm:min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
