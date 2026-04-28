'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export default function StatCounter({ value, label, suffix = '', prefix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <div className="font-[family-name:var(--font-inter)] text-4xl font-bold text-accent md:text-5xl lg:text-6xl">
        {prefix}{count}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary font-[family-name:var(--font-inter)]">
        {label}
      </div>
    </div>
  )
}
