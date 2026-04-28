#!/usr/bin/env node
/**
 * Auto-generated asset implementation script for lawyer.id.vn
 * Generated: 2026-04-28T04:26:43.452Z
 *
 * This script copies all generated images into public/images/
 * and outputs a mapping file the site code can import.
 *
 * Usage: node scripts/implement-assets.js
 */

const fs = require("fs");
const path = require("path");

const ASSETS = [
  {
    "id": "hero-home",
    "name": "Homepage Hero — HCMC Skyline from Office",
    "category": "hero",
    "width": 1920,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/hero-home-9a98774e.webp",
    "local_path": "assets/hero/hero-home.webp",
    "alt": "Homepage Hero — HCMC Skyline from Office - lawyer.id.vn"
  },
  {
    "id": "hero-about-portrait",
    "name": "About Page Hero — Attorney Portrait (ref required)",
    "category": "hero",
    "width": 1920,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/hero-about-portrait-043e86a0.webp",
    "local_path": "assets/hero/hero-about-portrait.webp",
    "alt": "About Page Hero — Attorney Portrait (ref required) - lawyer.id.vn"
  },
  {
    "id": "hero-international-clients",
    "name": "International Clients Section Hero",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/hero-international-clients-afb2eea8.webp",
    "local_path": "assets/hero/hero-international-clients.webp",
    "alt": "International Clients Section Hero - lawyer.id.vn"
  },
  {
    "id": "og-default",
    "name": "OG Card — Default",
    "category": "og",
    "width": 1200,
    "aspect": "1200:630",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/og/og-default-760157f0.webp",
    "local_path": "assets/og/og-default.webp",
    "alt": "OG Card — Default - lawyer.id.vn"
  },
  {
    "id": "icon-scales",
    "name": "Icon — Scales of Justice",
    "category": "icon",
    "width": 1024,
    "aspect": "1:1",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/icon/icon-scales-fece7b9a.webp",
    "local_path": "assets/icon/icon-scales.webp",
    "alt": "Icon — Scales of Justice - lawyer.id.vn"
  },
  {
    "id": "icon-gavel",
    "name": "Icon — Gavel",
    "category": "icon",
    "width": 1024,
    "aspect": "1:1",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/icon/icon-gavel-7c512f4b.webp",
    "local_path": "assets/icon/icon-gavel.webp",
    "alt": "Icon — Gavel - lawyer.id.vn"
  },
  {
    "id": "icon-globe",
    "name": "Icon — World Globe with Meridians",
    "category": "icon",
    "width": 1024,
    "aspect": "1:1",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/icon/icon-globe-bf1be779.webp",
    "local_path": "assets/icon/icon-globe.webp",
    "alt": "Icon — World Globe with Meridians - lawyer.id.vn"
  },
  {
    "id": "icon-contract",
    "name": "Icon — Contract and Pen",
    "category": "icon",
    "width": 1024,
    "aspect": "1:1",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/icon/icon-contract-c1b3320d.webp",
    "local_path": "assets/icon/icon-contract.webp",
    "alt": "Icon — Contract and Pen - lawyer.id.vn"
  },
  {
    "id": "icon-handshake",
    "name": "Icon — Handshake (Client Partnership)",
    "category": "icon",
    "width": 1024,
    "aspect": "1:1",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/icon/icon-handshake-910b9149.webp",
    "local_path": "assets/icon/icon-handshake.webp",
    "alt": "Icon — Handshake (Client Partnership) - lawyer.id.vn"
  },
  {
    "id": "icon-favicon",
    "name": "Favicon — Mini Scales",
    "category": "icon",
    "width": 512,
    "aspect": "1:1",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/icon/icon-favicon-b008b699.webp",
    "local_path": "assets/icon/icon-favicon.webp",
    "alt": "Favicon — Mini Scales - lawyer.id.vn"
  },
  {
    "id": "bg-office-texture",
    "name": "Subtle Office Section Background",
    "category": "background",
    "width": 1920,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/background/bg-office-texture-de13c103.webp",
    "local_path": "assets/background/bg-office-texture.webp",
    "alt": "Subtle Office Section Background - lawyer.id.vn"
  },
  {
    "id": "practice-civil-litigation-hero",
    "name": "Practice Hero — Civil Litigation",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/practice-civil-litigation-hero-6fdc55d4.webp",
    "local_path": "assets/hero/practice-civil-litigation-hero.webp",
    "alt": "Practice Hero — Civil Litigation - lawyer.id.vn"
  },
  {
    "id": "practice-land-property-hero",
    "name": "Practice Hero — Land & Property",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/practice-land-property-hero-14d4e92e.webp",
    "local_path": "assets/hero/practice-land-property-hero.webp",
    "alt": "Practice Hero — Land & Property - lawyer.id.vn"
  },
  {
    "id": "practice-family-divorce-hero",
    "name": "Practice Hero — Family Law & Divorce",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/practice-family-divorce-hero-5fff892a.webp",
    "local_path": "assets/hero/practice-family-divorce-hero.webp",
    "alt": "Practice Hero — Family Law & Divorce - lawyer.id.vn"
  },
  {
    "id": "practice-corporate-hero",
    "name": "Practice Hero — Corporate & Commercial",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/practice-corporate-hero-af96e83d.webp",
    "local_path": "assets/hero/practice-corporate-hero.webp",
    "alt": "Practice Hero — Corporate & Commercial - lawyer.id.vn"
  },
  {
    "id": "practice-labor-employment-hero",
    "name": "Practice Hero — Labor & Employment",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/practice-labor-employment-hero-b70bb84a.webp",
    "local_path": "assets/hero/practice-labor-employment-hero.webp",
    "alt": "Practice Hero — Labor & Employment - lawyer.id.vn"
  },
  {
    "id": "practice-criminal-defense-hero",
    "name": "Practice Hero — Criminal Defense",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/practice-criminal-defense-hero-e5f66da3.webp",
    "local_path": "assets/hero/practice-criminal-defense-hero.webp",
    "alt": "Practice Hero — Criminal Defense - lawyer.id.vn"
  },
  {
    "id": "practice-arbitration-hero",
    "name": "Practice Hero — International Arbitration",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/practice-arbitration-hero-11f50a5d.webp",
    "local_path": "assets/hero/practice-arbitration-hero.webp",
    "alt": "Practice Hero — International Arbitration - lawyer.id.vn"
  },
  {
    "id": "practice-overview-hero",
    "name": "Practice Hero — Overview / Hub",
    "category": "hero",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/practice-overview-hero-30afe367.webp",
    "local_path": "assets/hero/practice-overview-hero.webp",
    "alt": "Practice Hero — Overview / Hub - lawyer.id.vn"
  },
  {
    "id": "infographic-court-system",
    "name": "Infographic — Vietnam Court System Hierarchy",
    "category": "content",
    "width": 1200,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/infographic-court-system-96144862.webp",
    "local_path": "assets/content/infographic-court-system.webp",
    "alt": "Infographic — Vietnam Court System Hierarchy - lawyer.id.vn"
  },
  {
    "id": "infographic-dispute-resolution",
    "name": "Infographic — Dispute Resolution Decision Tree",
    "category": "content",
    "width": 1200,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/infographic-dispute-resolution-dd0fd788.webp",
    "local_path": "assets/content/infographic-dispute-resolution.webp",
    "alt": "Infographic — Dispute Resolution Decision Tree - lawyer.id.vn"
  },
  {
    "id": "bg-section-divider-1",
    "name": "Section Divider — Gold Lines on Navy",
    "category": "background",
    "width": 1920,
    "aspect": "21:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/background/bg-section-divider-1-772d6688.webp",
    "local_path": "assets/background/bg-section-divider-1.webp",
    "alt": "Section Divider — Gold Lines on Navy - lawyer.id.vn"
  },
  {
    "id": "bg-section-divider-2",
    "name": "Section Divider — Topographic Lines",
    "category": "background",
    "width": 1920,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/background/bg-section-divider-2-82282ad6.webp",
    "local_path": "assets/background/bg-section-divider-2.webp",
    "alt": "Section Divider — Topographic Lines - lawyer.id.vn"
  },
  {
    "id": "bg-pattern-meridians",
    "name": "Decorative Pattern — Globe Meridians",
    "category": "background",
    "width": 1600,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/background/bg-pattern-meridians-106fd87e.webp",
    "local_path": "assets/background/bg-pattern-meridians.webp",
    "alt": "Decorative Pattern — Globe Meridians - lawyer.id.vn"
  },
  {
    "id": "case-cross-border-flow",
    "name": "Case Visual — Cross-Border Connections",
    "category": "content",
    "width": 1200,
    "aspect": "3:2",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/case-cross-border-flow-c2916624.webp",
    "local_path": "assets/content/case-cross-border-flow.webp",
    "alt": "Case Visual — Cross-Border Connections - lawyer.id.vn"
  },
  {
    "id": "case-document-signing",
    "name": "Case Visual — Document Signing Close-up",
    "category": "content",
    "width": 1200,
    "aspect": "3:2",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/case-document-signing-4fdb5944.webp",
    "local_path": "assets/content/case-document-signing.webp",
    "alt": "Case Visual — Document Signing Close-up - lawyer.id.vn"
  },
  {
    "id": "article-hero-investor",
    "name": "Article Hero — For Foreign Investors",
    "category": "content",
    "width": 1200,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/article-hero-investor-ba01593f.webp",
    "local_path": "assets/content/article-hero-investor.webp",
    "alt": "Article Hero — For Foreign Investors - lawyer.id.vn"
  },
  {
    "id": "article-hero-expat",
    "name": "Article Hero — For Expats",
    "category": "content",
    "width": 1200,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/article-hero-expat-2cdb278e.webp",
    "local_path": "assets/content/article-hero-expat.webp",
    "alt": "Article Hero — For Expats - lawyer.id.vn"
  },
  {
    "id": "about-hero-cinematic",
    "name": "About Hero — Cinematic Office Portrait of Mr Hiển",
    "category": "hero",
    "width": 1920,
    "aspect": "16:9",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/hero/about-hero-cinematic-1963dd1f.webp",
    "local_path": "assets/hero/about-hero-cinematic.webp",
    "alt": "About Hero — Cinematic Office Portrait of Mr Hiển - lawyer.id.vn"
  },
  {
    "id": "about-mr-hien-desk",
    "name": "About — Mr Hiển at Desk Reviewing Documents",
    "category": "content",
    "width": 1600,
    "aspect": "3:2",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/about-mr-hien-desk-bd4a1f21.webp",
    "local_path": "assets/content/about-mr-hien-desk.webp",
    "alt": "About — Mr Hiển at Desk Reviewing Documents - lawyer.id.vn"
  },
  {
    "id": "about-mr-hien-bookshelf",
    "name": "About — Mr Hiển at Law Library Bookshelf",
    "category": "content",
    "width": 1600,
    "aspect": "3:2",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/about-mr-hien-bookshelf-2c088245.webp",
    "local_path": "assets/content/about-mr-hien-bookshelf.webp",
    "alt": "About — Mr Hiển at Law Library Bookshelf - lawyer.id.vn"
  },
  {
    "id": "about-mr-hien-meeting",
    "name": "About — Mr Hiển in Client Consultation",
    "category": "content",
    "width": 1600,
    "aspect": "3:2",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/about-mr-hien-meeting-0de7fb66.webp",
    "local_path": "assets/content/about-mr-hien-meeting.webp",
    "alt": "About — Mr Hiển in Client Consultation - lawyer.id.vn"
  },
  {
    "id": "about-mr-hien-walking",
    "name": "About — Mr Hiển Walking in District 1",
    "category": "content",
    "width": 1600,
    "aspect": "3:2",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/about-mr-hien-walking-3f32c261.webp",
    "local_path": "assets/content/about-mr-hien-walking.webp",
    "alt": "About — Mr Hiển Walking in District 1 - lawyer.id.vn"
  },
  {
    "id": "about-mr-hien-speaking",
    "name": "About — Mr Hiển Speaking at Conference",
    "category": "content",
    "width": 1600,
    "aspect": "3:2",
    "cdn_url": "https://pub-ebe397ad6fc946888f5c9aacc3cc48bb.r2.dev/lawyer.id.vn/content/about-mr-hien-speaking-6c193131.webp",
    "local_path": "assets/content/about-mr-hien-speaking.webp",
    "alt": "About — Mr Hiển Speaking at Conference - lawyer.id.vn"
  }
];

const PUBLIC_DIR = path.resolve(__dirname, "../public/images");

function main() {
  console.log("\n=== Implementing Image Assets for lawyer.id.vn ===\n");

  // Create public/images directories
  const categories = [...new Set(ASSETS.map(a => a.category))];
  for (const cat of categories) {
    fs.mkdirSync(path.join(PUBLIC_DIR, cat), { recursive: true });
  }

  // Copy local assets to public/images/
  let copied = 0;
  for (const asset of ASSETS) {
    if (asset.local_path) {
      const src = path.resolve(__dirname, "..", asset.local_path);
      const dest = path.join(PUBLIC_DIR, asset.category, asset.id + ".webp");
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`  Copied: ${asset.id}.webp → public/images/${asset.category}/`);
        copied++;
      } else {
        console.log(`  SKIP (no local file): ${asset.id}`);
      }
    }
  }

  // Generate TypeScript image map for the site code
  const tsMap = `// Auto-generated image asset map for lawyer.id.vn
// Generated: 2026-04-28T04:26:43.453Z
// Usage: import { IMAGES } from "@/lib/images";
//        <Image src={IMAGES.heroPortrait.cdn} alt={IMAGES.heroPortrait.alt} />

export const IMAGES = {
${ASSETS.map(a => {
    const key = a.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const cdn = a.cdn_url ? `"${a.cdn_url}"` : "null";
    const local = `"/images/${a.category}/${a.id}.webp"`;
    return `  ${key}: {
    id: "${a.id}",
    name: "${a.name}",
    category: "${a.category}",
    cdn: ${cdn},
    local: ${local},
    src: ${cdn} || ${local},
    alt: "${a.alt}",
    width: ${a.width},
    aspect: "${a.aspect}",
  }`;
  }).join(",\n")}
} as const;

export type ImageId = keyof typeof IMAGES;
`;

  const libDir = path.resolve(__dirname, "../src/lib");
  fs.mkdirSync(libDir, { recursive: true });
  fs.writeFileSync(path.join(libDir, "images.ts"), tsMap);
  console.log(`\n  Generated: src/lib/images.ts (${ASSETS.length} images)`);

  // Generate a quick reference markdown
  let readme = "# Image Assets\n\n";
  readme += "| Variable | CDN URL | Local | Alt |\n";
  readme += "|----------|---------|-------|-----|\n";
  for (const a of ASSETS) {
    const key = a.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    readme += `| IMAGES.${key} | ${a.cdn_url || "N/A"} | /images/${a.category}/${a.id}.webp | ${a.alt} |\n`;
  }
  fs.writeFileSync(path.join(PUBLIC_DIR, "README.md"), readme);

  console.log(`\n=== Done! ${copied} files copied, images.ts generated ===`);
  console.log("\nNext steps for the agent:");
  console.log("  1. Import { IMAGES } from '@/lib/images' in your components");
  console.log("  2. Use IMAGES.heroPortrait.src for the src prop");
  console.log("  3. Use IMAGES.heroPortrait.alt for the alt prop");
  console.log("  4. CDN URLs are preferred (IMAGES.xxx.cdn), local fallback (IMAGES.xxx.local)\n");
}

main();
