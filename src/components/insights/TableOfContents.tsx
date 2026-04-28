'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  label: string
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <aside className="lg:sticky lg:top-32 rounded-sm border border-border bg-surface p-6">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)] mb-5">
        In this article
      </h3>
      <ol className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block transition-colors leading-snug ${
                activeId === item.id
                  ? 'text-accent font-medium border-l-2 border-accent pl-3'
                  : 'text-text-secondary hover:text-accent border-l-2 border-transparent pl-3'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}
