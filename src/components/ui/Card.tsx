import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  title: string
  description?: string
  href: string
  image?: string
  imageAlt?: string
  badge?: string
  icon?: React.ReactNode
}

export default function Card({
  title,
  description,
  href,
  image,
  imageAlt,
  badge,
  icon,
}: CardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-border rounded-sm overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {badge && (
            <span className="absolute top-4 left-4 bg-accent/90 text-white text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider px-3 py-1 rounded-sm">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        {icon && !image && (
          <div className="mb-4 text-accent">{icon}</div>
        )}
        <h3 className="text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium font-[family-name:var(--font-inter)] uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
