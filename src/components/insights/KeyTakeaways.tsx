import Image from 'next/image'
import { IMAGES } from '@/lib/images'

interface KeyTakeawaysProps {
  items: string[]
  title?: string
}

export default function KeyTakeaways({
  items,
  title = 'Key Takeaways',
}: KeyTakeawaysProps) {
  return (
    <aside className="my-12 rounded-sm border border-accent/30 bg-accent/5 p-8">
      <div className="flex items-center gap-3 mb-6">
        <Image
          src={IMAGES.iconScales.cdn}
          alt=""
          width={32}
          height={32}
          className="opacity-90"
        />
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)]">
          {title}
        </h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent text-white text-xs font-bold font-[family-name:var(--font-inter)]">
              {i + 1}
            </span>
            <span className="text-base text-primary leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
