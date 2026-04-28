import dns from 'node:dns'
import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

// Force IPv4 first — fixes Supabase IPv6-only DNS resolution on some networks
dns.setDefaultResultOrder('ipv4first')

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev',
        pathname: '/lawyer.id.vn/**',
      },
    ],
  },
}

export default withPayload(nextConfig)
