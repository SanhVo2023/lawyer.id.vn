import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const MANIFEST_PATH = join(__dirname, '..', 'image-assets.json')

const newEntries = [
  // Practice-area heroes
  {
    id: 'practice-civil-litigation-hero',
    name: 'Practice Hero — Civil Litigation',
    type: 'text-to-image',
    prompt:
      "Editorial photograph of a Vietnamese courtroom interior: judge's bench in dark walnut, the national emblem of Vietnam in subdued gold above the bench, tall arched windows letting in late-afternoon golden light, polished marble floor, empty wooden defense table in foreground. No people. Composition leaves left negative space for overlaid headline. Sophisticated, institutional, deep navy and warm gold palette.",
    style: 'editorial, institutional',
    category: 'hero',
    aspect: '16:9',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'practice-land-property-hero',
    name: 'Practice Hero — Land & Property',
    type: 'text-to-image',
    prompt:
      'Aerial drone photograph of a modern Ho Chi Minh City residential development at golden hour: clusters of contemporary apartment towers along the Saigon River, palm-lined boulevards, lush greenery between buildings, high-end finish. Soft golden light, light haze on horizon. No watermarks, no readable signage. Negative space upper third for text overlay.',
    style: 'editorial real-estate photography',
    category: 'hero',
    aspect: '16:9',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'practice-family-divorce-hero',
    name: 'Practice Hero — Family Law & Divorce',
    type: 'text-to-image',
    prompt:
      'Soft warm photograph: two pairs of clasped hands resting on an open legal document on a walnut desk, antique gold pen alongside, a single delicate lily in soft focus background. Cinematic lighting, intimate but professional, suggesting compassionate counsel for sensitive family matters. Muted neutral palette with warm gold accents. No faces visible.',
    style: 'editorial intimate',
    category: 'hero',
    aspect: '16:9',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'practice-corporate-hero',
    name: 'Practice Hero — Corporate & Commercial',
    type: 'text-to-image',
    prompt:
      'Architectural photograph of a modern glass corporate office building exterior in District 1, Ho Chi Minh City: sleek curtain wall, deep blue glass with reflections of clouds, a small antique-gold sun catching the upper floors. Clean composition, low angle, no people, no readable signage. International business district atmosphere.',
    style: 'architectural editorial',
    category: 'hero',
    aspect: '16:9',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'practice-labor-employment-hero',
    name: 'Practice Hero — Labor & Employment',
    type: 'text-to-image',
    prompt:
      'Editorial photograph of a cross-cultural business handshake across a modern conference table: one Vietnamese professional in dark suit, one Western professional in lighter suit, captured at moment of agreement. Soft natural light from floor-to-ceiling windows behind, panoramic city beyond. No faces visible — focus on hands and posture. Warm professional tones, deep navy + warm gold.',
    style: 'editorial business',
    category: 'hero',
    aspect: '16:9',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'practice-criminal-defense-hero',
    name: 'Practice Hero — Criminal Defense',
    type: 'text-to-image',
    prompt:
      'Dramatic exterior of a Vietnamese courthouse at twilight: classical pillared façade with the national emblem in subdued gold, deep blue overcast sky, low-angle composition emphasizing institutional authority. Soft warm courtyard lighting beginning to glow. No people, no readable signage. Cinematic, deep navy + low-key gold accents.',
    style: 'cinematic institutional',
    category: 'hero',
    aspect: '16:9',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'practice-arbitration-hero',
    name: 'Practice Hero — International Arbitration',
    type: 'text-to-image',
    prompt:
      'Editorial photograph of an international arbitration hearing room: long polished walnut table extending into the frame with five tall leather chairs on each side, individual microphones at each seat, water carafes and glasses, neat stacks of bound briefs in front of each seat. Floor-to-ceiling windows behind reveal a hazy international skyline. No people. Neutral institutional palette, deep navy + warm gold accents.',
    style: 'editorial institutional',
    category: 'hero',
    aspect: '16:9',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'practice-overview-hero',
    name: 'Practice Hero — Overview / Hub',
    type: 'text-to-image',
    prompt:
      'Composite editorial still life: leather-bound legal volumes stacked beside a fanned arrangement of unmarked legal documents, an antique-gold scales-of-justice paperweight at center, a classical fountain pen resting alongside. Polished walnut desk, soft window light from upper left. Sophisticated, professional, emblematic of the legal profession. No readable text on documents. Deep navy backdrop with warm gold accents.',
    style: 'editorial still life',
    category: 'hero',
    aspect: '16:9',
    width: 1600,
    priority: 'medium',
    status: 'pending',
  },

  // Section ornaments / infographics
  {
    id: 'infographic-court-system',
    name: 'Infographic — Vietnam Court System Hierarchy',
    type: 'text-to-image',
    prompt:
      'Clean professional infographic on dark navy background: hierarchical flow diagram of the Vietnam court system. Top: a single rounded rectangle reading "SUPREME PEOPLE\'S COURT" in warm gold. Below it: three rounded rectangles labeled "HIGH PEOPLE\'S COURTS — Hanoi, Da Nang, Ho Chi Minh City". Below those: "PROVINCIAL PEOPLE\'S COURTS" spanning width. Bottom: "DISTRICT PEOPLE\'S COURTS". Connected by thin teal lines with arrowheads. Sans-serif typography, English labels, generous whitespace. Minimalist flat design.',
    style: 'flat infographic',
    category: 'content',
    aspect: '16:9',
    width: 1200,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'infographic-dispute-resolution',
    name: 'Infographic — Dispute Resolution Decision Tree',
    type: 'text-to-image',
    prompt:
      'Clean professional decision-tree infographic on dark navy background: starting node "DISPUTE ARISES" branches to four paths labeled in warm gold: NEGOTIATION, MEDIATION, ARBITRATION (subdivided into VIAC, SIAC, ICC), LITIGATION (subdivided into District Court, Provincial Court). Thin teal connection lines, sans-serif English labels, generous whitespace. Minimalist flat design.',
    style: 'flat infographic',
    category: 'content',
    aspect: '16:9',
    width: 1200,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'bg-section-divider-1',
    name: 'Section Divider — Gold Lines on Navy',
    type: 'text-to-image',
    prompt:
      'Abstract minimal section divider: a single horizontal field of deep navy with three thin parallel antique-gold lines of varying length crossing horizontally, slight shimmer, evoking classical legal heraldry. Almost empty composition with negative space — suitable as a 1920×400 background between content sections. No text, no figures.',
    style: 'minimal abstract',
    category: 'background',
    aspect: '21:9',
    width: 1920,
    priority: 'low',
    status: 'pending',
  },
  {
    id: 'bg-section-divider-2',
    name: 'Section Divider — Topographic Lines',
    type: 'text-to-image',
    prompt:
      'Abstract minimal background pattern: subtle topographic-style contour lines in deep blue against a slightly darker navy field, low contrast, suggesting cartography and global reach. Suitable as a sectional background overlay at 5-10% opacity. No text, no figures, no legend.',
    style: 'minimal abstract pattern',
    category: 'background',
    aspect: '16:9',
    width: 1920,
    priority: 'low',
    status: 'pending',
  },
  {
    id: 'bg-pattern-meridians',
    name: 'Decorative Pattern — Globe Meridians',
    type: 'text-to-image',
    prompt:
      'Decorative pattern: classical globe meridian lines in deep navy and faint teal on a subtle off-white field, overlapping ovals suggesting spheres in different orientations. Evokes a 19th-century world atlas. Tileable, suitable as section background overlay. No text, no continents drawn.',
    style: 'classical decorative pattern',
    category: 'background',
    aspect: '16:9',
    width: 1600,
    priority: 'low',
    status: 'pending',
  },

  // Case-study supporting visuals
  {
    id: 'case-cross-border-flow',
    name: 'Case Visual — Cross-Border Connections',
    type: 'text-to-image',
    prompt:
      'Stylized illustration of a world map silhouette in deep navy: thin antique-gold connection arcs radiating from a single bright teal node positioned at Vietnam to multiple international cities (New York, London, Tokyo, Sydney, Singapore, Seoul, Frankfurt). Editorial, minimalist, generous negative space. Suitable for case-study or international-reach feature blocks.',
    style: 'editorial minimal illustration',
    category: 'content',
    aspect: '3:2',
    width: 1200,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'case-document-signing',
    name: 'Case Visual — Document Signing Close-up',
    type: 'text-to-image',
    prompt:
      "Cinematic close-up photograph: two professional hands across a polished walnut desk, one holding a classical fountain pen poised over the signature line of a formal legal document, the other resting flat. Soft warm lighting from upper right, shallow depth of field, no readable text on document, no logos. Suggests a moment of closure, agreement reached.",
    style: 'cinematic close-up',
    category: 'content',
    aspect: '3:2',
    width: 1200,
    priority: 'medium',
    status: 'pending',
  },

  // Article hero placeholders
  {
    id: 'article-hero-investor',
    name: 'Article Hero — For Foreign Investors',
    type: 'text-to-image',
    prompt:
      'Editorial photograph: an international business professional (back to camera) in a charcoal suit reviewing a stack of legal documents at a tall window of a modern Ho Chi Minh City office tower at sunset, the city skyline glowing warmly beyond. No faces visible, no readable text on documents. Sophisticated international-business atmosphere.',
    style: 'editorial business',
    category: 'content',
    aspect: '16:9',
    width: 1200,
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'article-hero-expat',
    name: 'Article Hero — For Expats',
    type: 'text-to-image',
    prompt:
      'Warm editorial photograph: a Western expat in casual professional attire (cream linen shirt, no jacket) walking along a leafy boulevard in District 1 Ho Chi Minh City at midday, dappled light through tamarind trees, French-colonial architecture in the background. Soft motion blur on the subject suggesting movement and life. No faces visible (back or three-quarter view). Lifestyle editorial.',
    style: 'lifestyle editorial',
    category: 'content',
    aspect: '16:9',
    width: 1200,
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
console.log(`Pending entries:`)
for (const e of toAppend) console.log(`  - ${e.id} (${e.category}, ${e.aspect})`)
