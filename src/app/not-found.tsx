import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[600px] sm:min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-[family-name:var(--font-inter)] text-sm font-medium uppercase tracking-[0.3em] text-accent">
        404
      </span>
      <h1 className="mt-4 text-4xl font-bold text-primary md:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-text-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-secondary"
      >
        Back to Home
      </Link>
    </div>
  )
}
