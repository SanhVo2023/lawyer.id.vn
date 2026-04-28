import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const MANIFEST_PATH = join(__dirname, '..', 'image-assets.json')

const REF = './references/92369506_3333414680001932_3958936570953728000_n.jpg'

const newEntries = [
  {
    id: 'about-hero-cinematic',
    name: 'About Hero — Cinematic Office Portrait of Mr Hiển',
    type: 'image-to-image',
    prompt:
      "Editorial photograph of the SAME lawyer as the reference image (preserve his face exactly: clean short haircut, rectangular wire-frame glasses, calm composed smile, slight stubble). Three-quarter angle. He stands in a high-floor modern law office in Ho Chi Minh City overlooking the panoramic city skyline at golden hour through floor-to-ceiling windows. Wearing a charcoal pinstripe suit (matching reference) with a white open-collar shirt. Looking thoughtfully outward toward the city. Soft natural golden-hour light from the window, subtle warm reflections from an antique gold desk lamp on the right edge. Cinematic, sophisticated, international-business atmosphere. Composition leaves the upper-left third as negative space for overlaid headline. No readable text on documents, no signage.",
    reference_image: REF,
    style: 'editorial cinematic',
    category: 'hero',
    aspect: '16:9',
    width: 1920,
    priority: 'high',
    status: 'pending',
  },
  {
    id: 'about-mr-hien-desk',
    name: 'About — Mr Hiển at Desk Reviewing Documents',
    type: 'image-to-image',
    prompt:
      "Editorial photograph of the SAME lawyer as the reference image (preserve face, glasses, hair, charcoal pinstripe suit). Seated at a polished walnut desk in a modern law office, three-quarter angle from above-right, both hands resting on an open formal legal document (no readable text). An antique gold fountain pen rests beside the document. Floor-to-ceiling windows with HCMC skyline in soft-focus background. Warm natural light from the window. Calm focused expression. Sophisticated, intellectual, premium editorial.",
    reference_image: REF,
    style: 'editorial natural',
    category: 'content',
    aspect: '3:2',
    width: 1600,
    priority: 'high',
    status: 'pending',
  },
  {
    id: 'about-mr-hien-bookshelf',
    name: 'About — Mr Hiển at Law Library Bookshelf',
    type: 'image-to-image',
    prompt:
      "Editorial photograph of the SAME lawyer as the reference image (preserve face exactly). Standing in a private law library, half-body shot from a slight low angle. He has just pulled a leather-bound legal volume from a tall walnut bookshelf and holds it in one hand, looking down at a page. Wearing the charcoal pinstripe suit from the reference, white shirt, no tie. Warm tungsten ceiling light combined with soft daylight from a side window. Background shelves filled with legal volumes, soft-focus. Contemplative, scholarly atmosphere.",
    reference_image: REF,
    style: 'editorial scholarly',
    category: 'content',
    aspect: '3:2',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'about-mr-hien-meeting',
    name: 'About — Mr Hiển in Client Consultation',
    type: 'image-to-image',
    prompt:
      "Editorial photograph of the SAME lawyer as the reference image (preserve face, glasses, hair). Seated at a modern conference table in profile, leaning slightly forward with hands gestured open as if explaining a point. Wearing the charcoal pinstripe suit. A second person (anonymous, only their hands and shoulder visible) sits across, listening. Open legal documents on the table between them, no readable text. Soft window light from the left. Warm professional atmosphere. International-law-firm conference room with floor-to-ceiling windows in soft-focus background.",
    reference_image: REF,
    style: 'editorial professional',
    category: 'content',
    aspect: '3:2',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'about-mr-hien-walking',
    name: 'About — Mr Hiển Walking in District 1',
    type: 'image-to-image',
    prompt:
      "Editorial lifestyle photograph of the SAME lawyer as the reference image (preserve face, glasses, hair). Walking along a leafy tamarind-tree-lined boulevard in District 1, Ho Chi Minh City at midday, three-quarter view. French-colonial architecture in soft-focus background. Wearing the charcoal pinstripe suit (jacket open, shirt open-collar, no tie), carrying a slim leather portfolio. Calm purposeful stride. Soft dappled light through the trees. Subtle motion blur on the background suggests movement. Warm lifestyle editorial tone.",
    reference_image: REF,
    style: 'lifestyle editorial',
    category: 'content',
    aspect: '3:2',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'about-mr-hien-speaking',
    name: 'About — Mr Hiển Speaking at Conference',
    type: 'image-to-image',
    prompt:
      "Editorial photograph of the SAME lawyer as the reference image (preserve face, glasses, hair). Standing at a clean modern wooden lectern in a corporate-conference setting, three-quarter angle from below-right, mid-speech with one hand mid-gesture. Wearing the charcoal pinstripe suit, white shirt, no tie. Soft warm stage light from above-left, slight haze. Background out-of-focus suggests an audience and a discreet conference banner (no readable text). Confident composed expression. Professional thought-leadership atmosphere.",
    reference_image: REF,
    style: 'editorial conference',
    category: 'content',
    aspect: '3:2',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
]

const manifestRaw = readFileSync(MANIFEST_PATH, 'utf8')
const manifest = JSON.parse(manifestRaw)

const existingIds = new Set(manifest.images.map((img) => img.id))
const toAppend = newEntries.filter((entry) => !existingIds.has(entry.id))
const skipped = newEntries.length - toAppend.length

manifest.images.push(...toAppend)
manifest.last_modified = new Date().toISOString()

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n')

console.log(`Appended ${toAppend.length} new entries (skipped ${skipped} duplicates).`)
console.log(`Total entries now: ${manifest.images.length}`)
for (const e of toAppend) console.log(`  - ${e.id} (${e.type}, ${e.aspect})`)
