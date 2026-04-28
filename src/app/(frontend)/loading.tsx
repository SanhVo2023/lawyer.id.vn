export default function Loading() {
  return (
    <div className="flex min-h-[600px] sm:min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <span className="text-sm text-text-secondary font-[family-name:var(--font-inter)] tracking-wider uppercase">
          Loading
        </span>
      </div>
    </div>
  )
}
