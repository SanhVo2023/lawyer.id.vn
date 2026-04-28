import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from '@/lib/payload'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, country, matterType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const payload = await getPayload()

    await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        email,
        phone: phone || undefined,
        country: country || undefined,
        matterType: matterType || undefined,
        message,
        submittedAt: new Date().toISOString(),
        status: 'new',
      },
    })

    // Mirror to centralized Apolo Contact Form Hub (fire-and-forget).
    // Local Payload write is the source of truth; hub failure must NOT block the user.
    if (process.env.CONTACT_HUB_URL) {
      fetch(process.env.CONTACT_HUB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site: 'lawyer.id.vn',
          name,
          email,
          phone: phone || '',
          country: country || '',
          matter_type: matterType || 'other',
          message,
          language: 'en',
          locale: request.headers.get('accept-language') || '',
          user_agent: request.headers.get('user-agent') || '',
          source_url: request.headers.get('referer') || '',
        }),
      }).catch((err) => console.error('Contact hub mirror failed:', err))
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to submit contact form.' },
      { status: 500 }
    )
  }
}
