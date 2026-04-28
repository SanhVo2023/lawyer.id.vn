import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export interface LegalCode {
  code: string
  description: string
}

interface LegalFrameworkBoxProps {
  framework: LegalCode[]
  title?: string
  sticky?: boolean
}

export default function LegalFrameworkBox({
  framework,
  title = 'Key Vietnamese Laws',
  sticky = false,
}: LegalFrameworkBoxProps) {
  return (
    <aside
      className={`rounded-sm border border-border bg-surface p-6 ${
        sticky ? 'lg:sticky lg:top-32' : ''
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <Image
          src={IMAGES.iconScales.cdn}
          alt=""
          width={28}
          height={28}
          className="opacity-90"
        />
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent font-[family-name:var(--font-inter)]">
          {title}
        </h3>
      </div>

      <dl className="space-y-4">
        {framework.map((item, i) => (
          <div key={i} className="border-l-2 border-accent/30 pl-4">
            <dt className="text-sm font-semibold text-primary">{item.code}</dt>
            <dd className="mt-1 text-xs text-text-secondary leading-relaxed font-[family-name:var(--font-inter)]">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
