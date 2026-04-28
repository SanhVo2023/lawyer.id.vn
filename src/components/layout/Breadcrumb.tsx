import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-[family-name:var(--font-inter)]">
        <li>
          <Link href="/" className="text-text-secondary hover:text-accent transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg className="h-3 w-3 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {item.href ? (
              <Link href={item.href} className="text-text-secondary hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
