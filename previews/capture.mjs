#!/usr/bin/env node
/**
 * Captures each project's LIVE public pages at the exact pixel size of the
 * Pixel 10 Pro screen cutout in Goldie's bezel art (1280 × 2856), so nothing is
 * stretched when compose.mjs drops them into the frame.
 *
 * Only public pages are captured. Nothing here signs in to anything: in-app
 * screens that need an account come from captures made earlier from an
 * authorised demonstration shop (see README.md), never from a live login.
 *
 * Drives the copy of Microsoft Edge already installed on this machine through
 * playwright-core, so no browser is downloaded.
 *
 *   npm run capture
 */
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const HERE = dirname(fileURLToPath(import.meta.url));
const RAW = join(HERE, 'raw');

/** Goldie's Pixel 10 Pro screen cutout, from src/frame.ts. */
const SCREEN = { width: 1280, height: 2856 };
/** A real phone's CSS width; the scale factor makes the capture land on SCREEN exactly. */
const CSS_WIDTH = 412;
const SCALE = SCREEN.width / CSS_WIDTH;
const CSS_HEIGHT = Math.round(SCREEN.height / SCALE);

/**
 * Consent and install prompts are hidden with CSS rather than clicked. Hiding a
 * banner gives no consent to anything; clicking "accept" on someone's site to
 * get a clean screenshot would.
 */
const HIDE = `
  [id*="cookie" i], [class*="cookie" i], [id*="consent" i], [class*="consent" i],
  [class*="install-prompt" i], [id*="install-banner" i] { display: none !important; }
  * { caret-color: transparent !important; }
`;

/** @type {{ id: string, url: string, then?: (page: import('playwright-core').Page) => Promise<void> }[]} */
const SHOTS = [
  { id: 'iduka-home', url: 'https://app.idukarw.workers.dev/' },

  { id: 'somabooks-home', url: 'https://www.somabooks.workers.dev/' },
  { id: 'somabooks-browse', url: 'https://www.somabooks.workers.dev/search' },

  // Kinyarwanda leads in the product, so the home screen is shown as people use it.
  // A fresh device first sees a language picker; choosing is a local setting only.
  {
    id: 'kora-home',
    url: 'https://kora-utsinde.vercel.app/',
    then: async (page) => {
      const rw = page.getByRole('button', { name: /^ikinyarwanda$/i }).first();
      if (await rw.count()) { await rw.click(); await page.waitForTimeout(1500); }
    }
  },
  {
    // The exam screen, in English so a reader of the portfolio can follow it.
    // Starting the free exam happens entirely on the device; nothing is sent anywhere.
    id: 'kora-exam',
    url: 'https://kora-utsinde.vercel.app/?lang=en',
    then: async (page) => {
      const start = page.getByRole('button', { name: /start (the )?exam/i }).first();
      if (await start.count()) {
        await start.click();
        await page.waitForTimeout(1500);
        // Some flows confirm before the timer starts.
        const go = page.getByRole('button', { name: /^(start|begin|continue)/i }).first();
        if (await go.count()) { await go.click().catch(() => {}); await page.waitForTimeout(1500); }
      } else {
        console.warn('    kora-exam: no "start exam" button found — capturing the home screen instead');
      }
    }
  },

  { id: 'ongera-home', url: 'https://ongeraubeho.rw/' },
  { id: 'ongera-news', url: 'https://ongeraubeho.rw/news.html' },

  { id: 'learn4africa-home', url: 'https://learn4africa.vercel.app/' },
  { id: 'akazi-home', url: 'https://akaziconnect.vercel.app/' },
  { id: 'hanobus-home', url: 'https://hanobusapp.vercel.app/' },
  { id: 'kinawige-home', url: 'https://kina-wige.vercel.app/' },
  { id: 'musime-home', url: 'https://musi-me.vercel.app/' },

  // One step past each first-run screen. Skipping an intro or choosing a
  // language is a local setting; nothing here signs in or submits anything.
  { id: 'akazi-main', url: 'https://akaziconnect.vercel.app/', then: skip },
  {
    id: 'hanobus-main',
    url: 'https://hanobusapp.vercel.app/',
    then: async (page) => {
      // The app listens for touch, so tap. Through the intro, then the app's
      // own "Continue as Guest" — its no-account mode; nothing is signed in.
      for (let i = 0; i < 6; i++) {
        const b = page.locator('button:visible', { hasText: /^(next|get started|continue as guest)/i }).last();
        if (!(await b.count())) break;
        await b.tap().catch(() => {});
        await page.waitForTimeout(1600);
      }
      await page.waitForTimeout(5000); // map tiles and live buses
    }
  },
  {
    id: 'kinawige-main',
    url: 'https://kina-wige.vercel.app/',
    then: async (page) => {
      const rw = page.getByRole('button', { name: /^ikinyarwanda$/i }).first();
      if (await rw.count()) { await rw.click(); await page.waitForTimeout(2500); }
    }
  },
  {
    id: 'learn4africa-more',
    url: 'https://learn4africa.vercel.app/',
    keepScroll: true,
    then: async (page) => { await page.evaluate(() => window.scrollTo(0, 860)); await page.waitForTimeout(1200); }
  },
  {
    // A public catalogue search, the app's own first action for a new listener.
    id: 'musime-search',
    url: 'https://musi-me.vercel.app/',
    then: async (page) => {
      const box = page.getByPlaceholder(/search/i).first();
      if (await box.count()) { await box.fill('jazz'); await box.press('Enter'); await page.waitForTimeout(5000); }
    }
  }
];

/** Walk past an onboarding carousel by its own Skip button. */
async function skip(page) {
  for (let i = 0; i < 3; i++) {
    const b = page.getByText(/^skip$/i).first();
    if (!(await b.count())) break;
    await b.click().catch(() => {});
    await page.waitForTimeout(1800);
  }
}

const only = process.argv.slice(2);

await mkdir(RAW, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  for (const shot of SHOTS) {
    if (only.length && !only.includes(shot.id)) continue;
    const context = await browser.newContext({
      viewport: { width: CSS_WIDTH, height: CSS_HEIGHT },
      deviceScaleFactor: SCALE,
      isMobile: true,
      hasTouch: true,
      reducedMotion: 'reduce', // reveal-on-scroll sites show their content immediately
      locale: 'en-RW',
      userAgent:
        'Mozilla/5.0 (Linux; Android 15; Pixel 10 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36'
    });
    const page = await context.newPage();
    process.stdout.write(`  ${shot.id.padEnd(18)} ${shot.url} … `);
    try {
      await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 60_000 });
      await page.addStyleTag({ content: HIDE });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1800);
      if (shot.then) await shot.then(page);
      if (!shot.keepScroll) await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      const path = join(RAW, `${shot.id}.png`);
      await page.screenshot({ path });
      console.log('ok');
    } catch (err) {
      console.log(`FAILED — ${err.message.split('\n')[0]}`);
      process.exitCode = 1;
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
console.log(`\nScreen size: ${SCREEN.width} × ${SCREEN.height} (CSS ${CSS_WIDTH} × ${CSS_HEIGHT} @ ${SCALE.toFixed(4)}x)`);
