import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'

const replacements = [
  { from: /\baspect-\[4\/5\](?! sm:)/g, to: 'aspect-[4/3] sm:aspect-[4/5]' },
  { from: /\baspect-\[3\/4\](?! sm:)/g, to: 'aspect-[3/2] sm:aspect-[3/4]' },
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
