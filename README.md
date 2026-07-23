# Inkingi Digital Solutions — website

The digital identity of Inkingi Digital Solutions, a premium technology
partner in Kigali, Rwanda. Built to be part of the company's own portfolio:
every page is meant to earn trust before a conversation happens.

## Stack

- **Astro** — static output, zero client framework, HTML-first
- **Handcrafted CSS** — no Tailwind, no UI kit. A design system of custom
  properties in `src/styles/` (`tokens.css`, `base.css`, `components.css`)
- **Vanilla TypeScript** — small, isolated `<script>` islands for the reveal
  engine, theme, nav, process tabs, estimator, and forms
- **Satoshi** — self-hosted (`public/fonts/`), the brand typeface, 4 weights
- **@astrojs/sitemap** — sitemap + SEO

No React, no Framer Motion, no runtime dependencies shipped to the browser.

## Design system

- **Colour** — Deep Navy `#0B1F3A`, Emerald `#00C48C`, Electric Blue `#3B82F6`,
  cold-paper neutrals. Emerald is darkened to `--emerald-2` for accessible text
  on light surfaces. Light and dark themes, plus an `.on-navy` island scope for
  inverted sections inside a light page.
- **Type** — Satoshi throughout, fluid `clamp()` scale, tabular numerals for
  every metric.
- **Motion** — one `IntersectionObserver` reveal engine; scroll-linked custom
  properties (`[data-track]` → `--p`) written once per frame; the logo mark
  assembles, connects, and recurs as a structural system. All motion respects
  `prefers-reduced-motion`.

## The idea

The Inkingi mark (three diamonds forming a foundation) is treated as a living
system: it assembles itself in the hero as an engineering drawing, punctuates
the copy as a diamond bullet, and separates behind the closing call to action.

Each capability is **shown, not listed** — the homepage runs live, hand-built
demos of a website, an operations dashboard, an automation flow, cloud
infrastructure, and document AI. No stock photography anywhere; all imagery is
drawn in SVG/CSS.

## Pages

`/` home · `/approach` · `/what-we-build` · `/work` · `/pricing`
(transparent RWF pricing + estimator on `/contact`) · `/insights` ·
`/careers` · `/contact` · `404`

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Local dev server at `localhost:4321`        |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

## Before going live

- Replace anonymised client stories in `src/data/site.ts` with named,
  approved case studies as permissions allow.
- Point `site` (in `astro.config.mjs`) and contact details in
  `src/data/site.ts` at the real domain and inboxes.
- Wire the contact and newsletter forms to a real endpoint (currently they
  validate and confirm client-side only).
