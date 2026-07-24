/**
 * Generates the social-share (Open Graph) image at public/og.png.
 * Run with: node scripts/make-og.mjs
 * Only needs re-running if the branding or wording changes.
 */
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const W = 1200;
const H = 630;

// Brand tokens (must match src/styles/tokens.css)
const CREAM = "#f6f2ea";
const INK = "#1a1512";
const CLAY = "#c0562e";
const MUTED = "#786c5f";

const diamond = (x, y, size, fill) => {
  const h = size / 2;
  return `<rect x="${x - h}" y="${y - h}" width="${size}" height="${size}" rx="${size * 0.26}"
    fill="${fill}" transform="rotate(45 ${x} ${y})"/>`;
};

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${CREAM}"/>

  <!-- soft clay bloom, bottom-right -->
  <defs>
    <radialGradient id="bloom" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${CLAY}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${CLAY}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="1090" cy="560" r="430" fill="url(#bloom)"/>

  <!-- the mark -->
  <g transform="translate(90, 92)">
    ${diamond(46, 26, 46, INK)}
    ${diamond(16, 68, 46, INK)}
    ${diamond(70, 78, 46, CLAY)}
  </g>

  <!-- wordmark -->
  <text x="196" y="132" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="40" font-weight="800" fill="${INK}" letter-spacing="-1.2">inkingi</text>
  <text x="197" y="160" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="15" font-weight="700" fill="${CLAY}" letter-spacing="4.6">DIGITAL SOLUTIONS</text>

  <!-- headline -->
  <text x="90" y="330" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="76" font-weight="800" fill="${INK}" letter-spacing="-3">Websites that win</text>
  <text x="90" y="416" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="76" font-weight="800" fill="${CLAY}" letter-spacing="-3">you customers.</text>

  <!-- supporting line -->
  <text x="90" y="474" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="26" font-weight="400" fill="${MUTED}">Web design · Hosting · Branding · Digital marketing</text>

  <!-- footer rule + domain -->
  <rect x="90" y="536" width="64" height="4" rx="2" fill="${CLAY}"/>
  <text x="90" y="580" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="24" font-weight="700" fill="${INK}">inkingidigitalsolutions.rw</text>
  <text x="1110" y="580" text-anchor="end" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="22" font-weight="600" fill="${MUTED}">Kigali, Rwanda</text>
</svg>`;

const out = "public/og.png";
await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(out);
console.log("wrote", out);
