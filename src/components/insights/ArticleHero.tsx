import Image from 'next/image'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Badge from '@/components/ui/Badge'
import { IMAGES, type ImageId } from '@/lib/images'

interface ArticleHeroProps {
  title: string
  category: string
  date: string
  readTime: string
  heroImageId: ImageId
  excerpt: string
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ArticleHero({
  title,
  category,
  date,
  readTime,
  heroImageId,
  excerpt,
}: ArticleHeroProps) {
  const hero = IMAGES[heroImageId]

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.cdn}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Legal Insights', href: '/insights' },
            { label: title },
          ]}
        />

        <div className="mt-8 max-w-3xl">
          <div className="flex items-center gap-3">
            <Badge variant="teal">{category}</Badge>
            <span className="text-xs text-accent uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
              {readTime} read
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
            {title}
          </h1>

          <div className="mt-6 h-[2px] w-20 bg-accent" />

          <p className="mt-6 text-lg text-white/80 leading-relaxed">{excerpt}</p>

          <p className="mt-8 text-sm text-white/50 font-[family-name:var(--font-inter)]">
            By Henry Vo · {formatDate(date)}
          </p>
        </div>
      </div>
    </section>
  )
}
