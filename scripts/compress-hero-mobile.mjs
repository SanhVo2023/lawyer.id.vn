import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'

const replacements = [
  { from: /\bpt-32 pb-20\b/g, to: 'pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20' },
  { from: /\bmin-h-screen\b/g, to: 'min-h-[600px] sm:min-h-screen' },
  { from: /\bmin-h-\[90vh\]/g, to: 'min-h-[60vh] sm:min-h-[80vh] lg:min-h-[90vh]' },
  // Hero inner content padding
  { from: /\bpy-32 lg:py-40\b/g, to: 'py-16 sm:py-20 md:py-32 lg:py-40' },
]

const filesRaw = execSync(
  `find src/components src/app -type f \\( -name "*.tsx" -o -name "*.ts" \\) -not -path "*/node_modules/*"`,
  { encoding: 'utf8' }
)
const files = filesRaw.trim().split('\n').filter(Boolean)

let total = 0
const edited = []
for (const f of files) {
  let c = readFileSync(f, 'utf8')
  let edits = 0
  for (const { from, to } of replacements) {
    const m = c.match(from)
    if (m) {
      c = c.replace(from, to)
      edits += m.length
    }
  }
  if (edits > 0) {
    writeFileSync(f, c)
    total += edits
    edited.push({ f, edits })
  }
}

console.log(`Total: ${total} across ${edited.length} files`)
for (const e of edited) console.log(`  ${e.edits} × ${e.f}`)
