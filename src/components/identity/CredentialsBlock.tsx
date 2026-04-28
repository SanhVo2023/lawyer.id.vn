import Image from 'next/image'
import { IDENTITY } from '@/data/identity'
import { IMAGES } from '@/lib/images'

interface CredentialsBlockProps {
  /**
   * Layout variant:
   * - `horizontal` — single row of 3-4 credentials, label + detail stacked. Best for hero areas.
   * - `compact` — minimal one-liner with label only, dot-separated. Best for slim trust-bar contexts.
   * - `list` — full bulleted list. Best for /credentials page body.
   */
  variant?: 'horizontal' | 'compact' | 'list'
  /** When `true`, optimised for placement on dark background (white text). */
  light?: boolean
  /** Optional override of which credentials to show. Defaults to all from IDENTITY. */
  items?: typeof IDENTITY.credentials
  /** Show the small section eyebrow above the block. */
  showLabel?: boolean
  className?: string
}

export default function CredentialsBlock({
  variant = 'horizontal',
  light = false,
  items = IDENTITY.credentials,
  showLabel = true,
  className = '',
}: CredentialsBlockProps) {
  const labelColor = light ? 'text-accent' : 'text-accent'
  const titleColor = light ? 'text-white' : 'text-primary'
  const detailColor = light ? 'text-white/60' : 'text-text-secondary'

  if (variant === 'compact') {
    return (
      <div className={`inline-flex flex-wrap items-center gap-x-3 gap-y-2 font-[family-name:var(--font-inter)] ${className}`}>
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            {i > 0 && <span className={light ? 'text-white/30' : 'text-border'}>·</span>}
            <span className={`text-xs uppercase tracking-[0.15em] ${titleColor}`}>{c.label}</span>
          </span>
        ))}
      </div>
    )
  }

  if (variant === 'list') {
    return (
      <ul className={`space-y-4 ${className}`}>
        {items.map((c, i) => (
          <li key={i} className="flex items-start gap-4">
            <Image
              src={IMAGES.iconScales.cdn}
              alt=""
              width={28}
              height={28}
              className="flex-shrink-0 mt-1 opacity-80"
            />
            <div>
              <div className={`text-base font-semibold ${titleColor}`}>{c.label}</div>
              <div className={`mt-0.5 text-sm ${detailColor} font-[family-name:var(--font-inter)]`}>
                {c.detail}
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  // Default: horizontal grid (3 or 4 columns)
  const colClass = items.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
  return (
    <div className={className}>
      {showLabel && (
        <div className={`mb-4 text-xs uppercase tracking-[0.25em] font-medium font-[family-name:var(--font-inter)] ${labelColor}`}>
          Credentials
        </div>
      )}
      <dl className={`grid grid-cols-2 ${colClass} gap-x-6 gap-y-5`}>
        {items.map((c, i) => (
          <div key={i} className="border-l-2 border-accent/30 pl-4">
            <dt className={`text-sm font-semibold leading-snug ${titleColor}`}>{c.label}</dt>
            <dd className={`mt-1 text-xs ${detailColor} font-[family-name:var(--font-inter)] leading-relaxed`}>
              {c.detail}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
