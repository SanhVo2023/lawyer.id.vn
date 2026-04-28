/**
 * Flag component — renders an actual country flag SVG (via flagcdn.com).
 *
 * Why: emoji flags rely on the OS having a flag-emoji font. Windows, by default,
 * does not — so 🇺🇸 renders as the regional-indicator letters "US". This component
 * always renders a real flag image regardless of OS or browser.
 *
 * Accepts either:
 *  - `code` (lowercase ISO 3166-1 alpha-2, e.g. "us", "vn") — preferred
 *  - `emoji` (the flag emoji, e.g. "🇺🇸") — auto-converted
 */

interface FlagProps {
  code?: string
  emoji?: string
  alt?: string
  className?: string
  /**
   * Approximate width of the flag in CSS px. The image is served at this size
   * (or the next size up that flagcdn.com offers). Default 40.
   */
  size?: number
  /** Style override for advanced cases (positioning, opacity, etc.). */
  style?: React.CSSProperties
}

const FLAGCDN_SIZES = [20, 40, 80, 160, 320, 640, 1280, 2560]

function emojiToCountryCode(emoji: string): string | null {
  // Each regional indicator is U+1F1E6 (= 'A') through U+1F1FF (= 'Z').
  // A flag emoji is exactly two such code points.
  const codePoints = Array.from(emoji).map((c) => c.codePointAt(0) ?? 0)
  if (codePoints.length !== 2) return null
  const [a, b] = codePoints
  if (a < 0x1f1e6 || a > 0x1f1ff) return null
  if (b < 0x1f1e6 || b > 0x1f1ff) return null
  const charA = String.fromCharCode(0x41 + (a - 0x1f1e6))
  const charB = String.fromCharCode(0x41 + (b - 0x1f1e6))
  return (charA + charB).toLowerCase()
}

export default function Flag({
  code,
  emoji,
  alt,
  className = '',
  size = 40,
  style,
}: FlagProps) {
  const resolvedCode = code?.toLowerCase() ?? (emoji ? emojiToCountryCode(emoji) : null)
  if (!resolvedCode) return null

  // Pick the smallest flagcdn raster size at or above the requested px (×2 for retina).
  const target = size * 2
  const cdnSize = FLAGCDN_SIZES.find((s) => s >= target) ?? FLAGCDN_SIZES[FLAGCDN_SIZES.length - 1]
  const src = `https://flagcdn.com/w${cdnSize}/${resolvedCode}.webp`

  return (
    <img
      src={src}
      alt={alt ?? `${resolvedCode.toUpperCase()} flag`}
      className={className}
      style={{ width: size, height: 'auto', ...style }}
      loading="lazy"
      decoding="async"
    />
  )
}
