interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'teal' | 'outline'
}

const variants = {
  default: 'bg-surface text-text-secondary border border-border',
  teal: 'bg-accent/10 text-accent border border-accent/20',
  outline: 'bg-transparent text-text-secondary border border-border',
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
