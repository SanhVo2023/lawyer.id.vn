'use client'

export default function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Teal orb top-right */}
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #1A9DB0 0%, transparent 70%)',
          animation: 'orb-drift-1 20s ease-in-out infinite',
        }}
      />
      {/* Steel slate orb bottom-left */}
      <div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #3D5A80 0%, transparent 70%)',
          animation: 'orb-drift-2 25s ease-in-out infinite',
        }}
      />
      {/* Bright accent center */}
      <div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #1A9DB0 0%, transparent 60%)',
          animation: 'orb-drift-3 30s ease-in-out infinite',
        }}
      />
    </div>
  )
}
