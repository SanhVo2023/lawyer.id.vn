interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${alignment} mb-8 sm:mb-10 md:mb-16`}>
      {label && (
        <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-accent font-medium font-[family-name:var(--font-inter)] mb-4">
          <span className="w-8 h-px bg-accent" />
          {label}
          {align === 'center' && <span className="w-8 h-px bg-accent" />}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="hero-scale-x w-16 h-[2px] bg-accent origin-left mt-6" style={{ animationDelay: '0.3s' }} />
    </div>
  )
}
