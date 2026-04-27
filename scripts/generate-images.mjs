// One-shot generator for app/icon.png and app/apple-icon.png.
// Run with: node scripts/generate-images.mjs
//
// Produces an 8-ray cream sun on a gold-to-red radial gradient circle,
// teal inner ring + gold outer ring. Tropical Venezuelan emblem at any size.
// Pure SVG geometry — no font dependencies, fast, deterministic.

import { Resvg } from "@resvg/resvg-js";
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const APP_DIR = join(ROOT, "app");

const PALETTE = {
  cream: "#fdf6e3",
  gold: "#e8b84b",
  goldDeep: "#c8981b",
  red: "#e63946",
  teal: "#2a9d8f",
};

function renderSvg(svg, outPath, width) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    background: "rgba(0,0,0,0)",
  });
  const png = resvg.render().asPng();
  return writeFile(outPath, png).then(() => console.log("wrote", outPath));
}

// ----- Avatar / favicon -----------------------------------------------------
function avatarSvg() {
  // 512×512 logical canvas; resvg resizes to target width.
  // Layout from outside in:
  //   r=256 gold outer ring
  //   r=242 teal inner ring
  //   r=228 gold-to-red radial gradient disc
  //   8-ray cream sun centred (16-point polygon)
  const cx = 256;
  const cy = 256;

  const sunOuter = 144;
  const sunInner = 56;
  const sunCore = 36;
  const sunPts = [];
  for (let i = 0; i < 16; i++) {
    const angle = (Math.PI / 8) * i - Math.PI / 2;
    const r = i % 2 === 0 ? sunOuter : sunInner;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    sunPts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="discGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%"  stop-color="${PALETTE.gold}"/>
      <stop offset="60%" stop-color="${PALETTE.goldDeep}"/>
      <stop offset="100%" stop-color="${PALETTE.red}"/>
    </radialGradient>
  </defs>
  <circle cx="${cx}" cy="${cy}" r="256" fill="${PALETTE.gold}"/>
  <circle cx="${cx}" cy="${cy}" r="242" fill="${PALETTE.teal}"/>
  <circle cx="${cx}" cy="${cy}" r="228" fill="url(#discGrad)"/>
  <polygon points="${sunPts.join(" ")}" fill="${PALETTE.cream}"/>
  <circle cx="${cx}" cy="${cy}" r="${sunCore}" fill="${PALETTE.cream}"/>
</svg>`;
}

await mkdir(APP_DIR, { recursive: true });
await renderSvg(avatarSvg(), join(APP_DIR, "icon.png"), 512);
await renderSvg(avatarSvg(), join(APP_DIR, "apple-icon.png"), 180);

console.log("Done.");
