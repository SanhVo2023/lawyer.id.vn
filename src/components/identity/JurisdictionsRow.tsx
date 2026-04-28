import { IDENTITY } from '@/data/identity'

interface JurisdictionsRowProps {
  /** When `true`, optimised for placement on dark background. */
  light?: boolean
  /** Show the small "Practices at" eyebrow above the row. */
  showLabel?: boolean
  className?: string
}

export default function JurisdictionsRow({
  light = false,
  showLabel = true,
  className = '',
}: JurisdictionsRowProps) {
  const labelColor = light ? 'text-accent' : 'text-accent'
  const pillBase = light
    ? 'border-accent/30 bg-white/5 text-white/85 hover:border-accent/60'
    : 'border-border bg-white text-primary hover:border-accent/40'

  return (
    <div className={className}>
      {showLabel && (
        <div className={`mb-3 text-[10px] uppercase tracking-[0.25em] font-medium font-[family-name:var(--font-inter)] ${labelColor}`}>
          Practices at
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {IDENTITY.jurisdictions.map((j) => (
          <span
            key={j}
            className={`inline-flex items-center px-3 py-1.5 text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-[0.15em] rounded-sm border transition-colors ${pillBase}`}
          >
            {j}
          </span>
        ))}
      </div>
    </div>
  )
}
