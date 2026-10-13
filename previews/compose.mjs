#!/usr/bin/env node
/**
 * Frames the captures from capture.mjs into the project previews on /work,
 * Goldie-style: real screens inside a real device bezel, over a background,
 * with a headline.
 *
 * Styled as Inkingi Digital Solutions, not as the product: the warm-black
 * island, terracotta and Satoshi from src/styles/tokens.css, with each
 * product's own colour as a soft glow so the grid reads as one studio's work.
 *
 * Headlines are lines the product already uses publicly (its site, its intro
 * screens, its own campaigns). The one exception is MusiMe, which has no
 * public tagline; its line is taken from the description already on /work.
 *
 * Output (written straight into the Astro asset folder, which resizes them):
 *   feature 1600 × 1050  (the first project on /work, 16:10.5)
 *   tile    1600 × 1000  (16:10)
 *
 *   npm run compose            # all
 *   npm run compose -- iduka   # one
 */
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { chromium } from 'playwright-core';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const RAW = join(HERE, 'raw');
const OUT = join(ROOT, 'src', 'assets', 'work');
const FONTS = join(ROOT, 'public', 'fonts');

/** Goldie's Pixel 10 Pro geometry (src/frame.ts), in the bezel art's own pixels. */
const G = { w: 1410, h: 2968, sx: 59, sy: 60, sw: 1280, sh: 2856, r: 178 };
const pct = (a, b) => `${((a / b) * 100).toFixed(4)}%`;

/** Laid out on an 1800-wide canvas, then scaled to the output width. */
const CANVAS = {
  feature: { w: 1800, h: 1181, out: 1600 },
  tile: { w: 1800, h: 1125, out: 1600 }
};

/** Two phones, back and front, bleeding off the bottom edge. */
const PAIR = (back, front) => [
  { src: back, x: 870, y: 250, w: 440, rot: -6, z: 1 },
  { src: front, x: 1210, y: 150, w: 500, rot: 4, z: 2 }
];

/**
 * Order here is the order on /work; the first is the featured project.
 * @type {{ id: string, glow: string, label: string, headline: string[], sub: string, phones: object[] }[]}
 */
const PREVIEWS = [
  {
    id: 'iduka',
    glow: '36, 105, 76',
    label: 'IDUKA · SHOP MANAGEMENT',
    headline: ['Your shop.', 'A clearer', 'picture.'], // IDUKA's own campaign line
    sub: 'Sales, stock and the credit book for Rwandan shops — in Kinyarwanda, English or French.',
    phones: PAIR('iduka-till.png', 'iduka-home.png')
  },
  {
    id: 'somabooks',
    glow: '180, 69, 31',
    label: 'SOMABOOKS · AFRICAN BOOKS',
    headline: ['Every story', 'deserves', 'a reader.'], // from somabooks.workers.dev
    sub: 'Readers pay authors directly, with the wallet they already use.',
    phones: PAIR('somabooks-browse.png', 'somabooks-home.png')
  },
  {
    id: 'korautware',
    glow: '29, 120, 86',
    label: 'KORA UTWARE · PROVISOIRE',
    headline: ['Banza', 'wipime.'], // "Test yourself first" — the product's own voice
    sub: 'Test yourself first: twenty questions, twenty minutes, pass at twelve.',
    phones: PAIR('kora-home.png', 'kora-exam.png')
  },
  {
    id: 'ongeraubeho',
    glow: '44, 90, 62',
    label: 'ONGERA UBEHO · ONGERAUBEHO.RW',
    headline: ['Live more.', 'Choose life.'], // the organisation's slogan
    sub: 'Youth and family mentorship in Rwanda — with a site the team updates itself.',
    phones: PAIR('ongera-news.png', 'ongera-home.png')
  },
  {
    id: 'learn4africa',
    glow: '168, 112, 63',
    label: 'LEARN4AFRICA · AI LEARNING',
    headline: ['Any topic.', 'Taught the', 'African way.'], // its own hero line
    sub: 'Courses with reading, flashcards, quizzes and podcasts — free.',
    phones: PAIR('learn4africa-home.png', 'learn4africa-more.png')
  },
  {
    id: 'akaziconnect',
    glow: '16, 96, 62',
    label: 'AKAZI CONNECT · JOBS',
    headline: ['Find work', 'near you.'], // its own intro screen
    sub: 'Farming, construction, delivery and more — no CV needed.',
    phones: PAIR('akazi-home.png', 'akazi-main.png')
  },
  {
    id: 'hanobus',
    glow: '24, 92, 255',
    label: 'HANOBUS · KIGALI TRANSPORT',
    headline: ['Know exactly', 'where your', 'bus is.'], // its own intro screen
    sub: 'Live bus positions, trip planning and arrival times across Kigali.',
    phones: PAIR('hanobus-home.png', 'hanobus-main.png')
  },
  {
    id: 'kina-wige',
    glow: '24, 110, 70',
    label: 'KINA WIGE · EARLY LEARNING',
    headline: ['Murakaza', 'neza,', 'mubyeyi.'], // "Welcome, parent" — its own first screen
    sub: 'Welcome, parent. Learning games for young children, in Kinyarwanda.',
    phones: PAIR('kinawige-home.png', 'kinawige-main.png')
  },
  {
    id: 'musime',
    glow: '110, 90, 230',
    label: 'MUSIME · OFFLINE MUSIC',
    headline: ['Save it.', 'Play it', 'offline.'], // from the /work description
    sub: 'Saving and playing your music offline, with playlists — on an iPhone or any phone.',
    phones: PAIR('musime-home.png', 'musime-search.png')
  }
];

/**
 * A web capture has no status bar, so its header would sit under the Pixel's
 * camera hole. A real phone draws one there in the app's own top colour, so we
 * do the same: the bar is filled by sampling the capture's top-left pixel.
 */
const STATUS = 118 / G.sh;
const ICONS =
  `<svg viewBox="0 0 66 14" aria-hidden="true">` +
  `<rect x="0" y="9" width="3" height="5" rx="1"/><rect x="5" y="6" width="3" height="8" rx="1"/>` +
  `<rect x="10" y="3" width="3" height="11" rx="1"/><rect x="15" y="0" width="3" height="14" rx="1"/>` +
  `<path d="M24 5.2a11 11 0 0 1 14 0l-1.7 2a8.4 8.4 0 0 0-10.6 0z"/><path d="M27.4 9.1a5.8 5.8 0 0 1 7.2 0L31 13.4z"/>` +
  `<rect x="44" y="1.5" width="19" height="11" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.4"/>` +
  `<rect x="46" y="3.5" width="12" height="7" rx="1.2"/><rect x="63.6" y="5" width="2" height="4" rx="1"/>` +
  `</svg>`;

const dataUrl = async (path, mime) => `data:${mime};base64,${(await readFile(path)).toString('base64')}`;

async function phoneHtml(p, bezel) {
  const h = (p.w * G.h) / G.w;
  const bar = ((h * G.sh) / G.h) * STATUS;
  // Data URLs so the in-page sampler can read pixels without a tainted canvas.
  const src = await dataUrl(join(RAW, p.src), 'image/png');
  return `
    <div class="phone" style="left:${p.x}px;top:${p.y}px;width:${p.w}px;height:${h}px;transform:rotate(${p.rot}deg);z-index:${p.z}">
      <div class="screen">
        <div class="sb" style="height:${bar}px;font-size:${(bar * 0.4).toFixed(1)}px;padding:0 ${(bar * 0.95).toFixed(1)}px"><span>9:30</span>${ICONS}</div>
        <img class="cap" src="${src}" alt="" style="top:${bar}px;height:calc(100% - ${bar}px)">
      </div>
      <img class="bezel" src="${bezel}" alt="">
    </div>`;
}

async function pageHtml(v, kind, fonts, bezel) {
  const c = CANVAS[kind];
  const top = kind === 'feature' ? 205 : 180;
  const phones = (await Promise.all(v.phones.map((p) => phoneHtml(
    kind === 'feature' ? { ...p, y: p.y + 40 } : p, bezel)))).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face{font-family:Satoshi;font-weight:500;src:url(${fonts[500]}) format('woff2')}
  @font-face{font-family:Satoshi;font-weight:700;src:url(${fonts[700]}) format('woff2')}
  @font-face{font-family:Satoshi;font-weight:900;src:url(${fonts[900]}) format('woff2')}
  html,body{margin:0;background:#14100e}
  .stage{position:relative;width:${c.w}px;height:${c.h}px;overflow:hidden;zoom:${c.out / c.w};
    background:
      radial-gradient(${Math.round(c.w * 0.6)}px ${Math.round(c.h * 0.8)}px at 76% 32%, rgba(${v.glow}, .55), transparent 64%),
      radial-gradient(${Math.round(c.w * 0.42)}px ${Math.round(c.h * 0.5)}px at 2% 104%, rgba(192, 86, 46, .30), transparent 62%),
      #14100e}
  /* The studio's engineering-drawing grid, very faint. */
  .grid{position:absolute;inset:0;opacity:.07;
    background-image:linear-gradient(#ede7de 1px,transparent 1px),linear-gradient(90deg,#ede7de 1px,transparent 1px);
    background-size:90px 90px;mask-image:linear-gradient(90deg,#000 0%,#000 46%,transparent 74%)}
  .copy{position:absolute;left:110px;top:${top}px;width:720px;z-index:5;font-family:Satoshi,sans-serif}
  .label{font-weight:700;font-size:23px;letter-spacing:.2em;color:#e08a5c;margin:0 0 30px}
  h1{font-weight:900;font-size:118px;line-height:.98;letter-spacing:-.035em;color:#f4efe7;margin:0}
  .sub{font-weight:500;font-size:34px;line-height:1.35;color:#c4b9ac;margin:34px 0 0;max-width:640px}
  .mark{position:absolute;left:110px;bottom:84px;display:flex;gap:10px;align-items:center;
        font:700 20px Satoshi,sans-serif;letter-spacing:.18em;color:#948a7c;z-index:5}
  .mark svg{width:34px;height:34px;display:block}
  .phone{position:absolute;filter:drop-shadow(0 46px 60px rgba(0,0,0,.6)) drop-shadow(0 10px 18px rgba(0,0,0,.4))}
  .screen{position:absolute;left:${pct(G.sx, G.w)};top:${pct(G.sy, G.h)};width:${pct(G.sw, G.w)};height:${pct(G.sh, G.h)};
          border-radius:${pct(G.r, G.sw)} / ${pct(G.r, G.sh)};overflow:hidden;background:#000}
  .screen .cap{position:absolute;left:0;width:100%;object-fit:cover;object-position:top center;display:block}
  .sb{position:absolute;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;justify-content:space-between;
      font-family:Satoshi,sans-serif;font-weight:700;background:#000;color:#fff}
  .sb svg{height:42%;fill:currentColor}
  .bezel{position:absolute;inset:0;width:100%;height:100%;display:block}
</style></head><body>
<div class="stage">
  <div class="grid"></div>
  <div class="copy">
    <p class="label">${v.label}</p>
    <h1>${v.headline.join('<br>')}</h1>
    <p class="sub">${v.sub}</p>
  </div>
  <div class="mark"><svg viewBox="0 0 100 100" aria-hidden="true"><rect x="33" y="7" width="34" height="34" rx="9" fill="#ede7de" transform="rotate(45 50 24)"/><rect x="12" y="35" width="34" height="34" rx="9" fill="#ede7de" transform="rotate(45 29 52)"/><rect x="47" y="41" width="34" height="34" rx="9" fill="#d2673c" transform="rotate(45 64 58)"/></svg><span>BUILT BY INKINGI</span></div>
  ${phones}
</div>
<script>
  window.__statusReady = (async () => {
    for (const scr of document.querySelectorAll('.screen')) {
      const img = scr.querySelector('.cap'); await img.decode();
      const c = document.createElement('canvas'); c.width = 1; c.height = 1;
      const g = c.getContext('2d'); g.drawImage(img, 6, 4, 1, 1, 0, 0, 1, 1);
      const [r, gr, b] = g.getImageData(0, 0, 1, 1).data;
      const sb = scr.querySelector('.sb');
      sb.style.background = 'rgb(' + r + ',' + gr + ',' + b + ')';
      sb.style.color = (0.299 * r + 0.587 * gr + 0.114 * b) > 150 ? '#1c1b1a' : '#f4f2ee';
    }
    return true;
  })();
</script>
</body></html>`;
}

const only = process.argv.slice(2);

for (const v of PREVIEWS) {
  for (const p of v.phones) {
    await stat(join(RAW, p.src)).catch(() => {
      console.error(`Missing capture raw/${p.src} for ${v.id}. Run: npm run capture`);
      process.exit(1);
    });
  }
}

const fonts = {
  500: await dataUrl(join(FONTS, 'satoshi-500.woff2'), 'font/woff2'),
  700: await dataUrl(join(FONTS, 'satoshi-700.woff2'), 'font/woff2'),
  900: await dataUrl(join(FONTS, 'satoshi-900.woff2'), 'font/woff2')
};
const bezel = await dataUrl(join(HERE, 'frames', 'pixel-10-pro.webp'), 'image/webp');

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  for (const [i, v] of PREVIEWS.entries()) {
    if (only.length && !only.includes(v.id)) continue;
    const kind = i === 0 ? 'feature' : 'tile';
    const c = CANVAS[kind];
    const outH = Math.round((c.h * c.out) / c.w);
    const page = await browser.newPage({ viewport: { width: c.out, height: outH }, deviceScaleFactor: 1 });
    const htmlPath = join(tmpdir(), `inkingi-preview-${v.id}.html`);
    await writeFile(htmlPath, await pageHtml(v, kind, fonts, bezel));
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => window.__statusReady);
    if (!(await page.evaluate(() => document.fonts.check("900 100px Satoshi")))) {
      throw new Error(`${v.id}: Satoshi did not load`);
    }
    const file = join(OUT, `${v.id}.jpg`);
    await page.screenshot({ path: file, type: 'jpeg', quality: 86 });
    console.log(`  ${v.id.padEnd(13)} ${kind.padEnd(8)} ${c.out} × ${outH}  ${((await stat(file)).size / 1024).toFixed(0)} KB`);
    await page.close();
  }
} finally {
  await browser.close();
}
