interface PullQuoteProps {
  children: React.ReactNode
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <figure className="my-12 border-l-4 border-accent pl-8 py-2">
      <blockquote>
        <p className="text-xl md:text-2xl font-[family-name:var(--font-heading)] italic text-primary leading-relaxed">
          {children}
        </p>
      </blockquote>
    </figure>
  )
}
