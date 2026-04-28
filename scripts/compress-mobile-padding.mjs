// Mobile padding compression: sweep all section-level py-* values across the codebase
// to add tighter mobile defaults while keeping desktop spacing.

import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'

// Ordered carefully: longer/more-specific patterns first so they don't get partially matched
// by shorter ones in the same regex pass.
const replacements = [
  // Hero CONTENT padding (inside hero sections): py-32 lg:py-40
  { from: /\bpy-32 lg:py-40\b/g, to: 'py-16 sm:py-20 md:py-32 lg:py-40' },

  // Section-level padding: py-24 md:py-32
  { from: /\bpy-24 md:py-32\b/g, to: 'py-12 sm:py-16 md:py-24 lg:py-32' },

  // Section-level padding: py-24 md:py-28
  { from: /\bpy-24 md:py-28\b/g, to: 'py-12 sm:py-16 md:py-20 lg:py-28' },

  // Section-level: py-20 md:py-24
  { from: /\bpy-20 md:py-24\b/g, to: 'py-10 sm:py-14 md:py-20 lg:py-24' },

  // Section-level: standalone py-24
  { from: /\bpy-24\b(?! md:)(?! lg:)/g, to: 'py-12 sm:py-16 md:py-24' },

  // Section-level: standalone py-20
  { from: /\bpy-20\b(?! md:)(?! lg:)/g, to: 'py-10 sm:py-14 md:py-20' },

  // SectionHeading bottom margin
  { from: /\bmb-12 md:mb-16\b/g, to: 'mb-8 sm:mb-10 md:mb-16' },
]

const filesRaw = execSync(
  `find src/components src/app -type f \\( -name "*.tsx" -o -name "*.ts" \\) -not -path "*/node_modules/*"`,
  { cwd: process.cwd(), encoding: 'utf8' }
)
const files = filesRaw.trim().split('\n').filter(Boolean)

let totalEdits = 0
const editedFiles = []

for (const f of files) {
  let content = readFileSync(f, 'utf8')
  let edits = 0
  for (const { from, to } of replacements) {
    const before = content
    content = content.replace(from, to)
    if (content !== before) {
      edits += (before.match(from) || []).length
    }
  }
  if (edits > 0) {
    writeFileSync(f, content)
    editedFiles.push({ file: f, edits })
    totalEdits += edits
  }
}

console.log(`Total replacements: ${totalEdits} across ${editedFiles.length} files`)
for (const e of editedFiles) console.log(`  ${e.edits.toString().padStart(3)} × ${e.file}`)
