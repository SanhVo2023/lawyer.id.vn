// Pass-through root layout. The actual <html>/<body> chrome is provided by:
//   - src/app/(frontend)/layout.tsx — public site (loads globals.css, fonts, Header, Footer)
//   - src/app/(payload)/layout.tsx  — Payload admin (its own styling, isolated)
// This keeps Tailwind's preflight + site fonts out of the /admin tree.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
