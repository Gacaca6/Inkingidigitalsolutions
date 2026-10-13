# previews/ — the phone previews on /work

Each image in `src/assets/work/` is a **real capture of the live product**,
framed in the Pixel 10 Pro bezel from
[Goldie](https://github.com/software-mansion-labs/goldie) and styled as
Inkingi Digital Solutions (warm black, terracotta, Satoshi). Astro resizes them
to WebP at build time.

Goldie itself drives iOS simulators and Android emulators for native apps.
These products are web apps, so Goldie's bezel art and measured screen geometry
are reused, and headless Microsoft Edge does the capturing instead. Credits:
`frames/ATTRIBUTION.md`.

## Rebuild after a product changes

```bash
cd previews
npm install
npm run capture   # live public pages, at the bezel's exact screen size
npm run compose   # frame + headline → src/assets/work/<id>.jpg
```

Both take project ids to do just one, e.g. `npm run compose -- hanobus`.

## Rules the scripts keep

- **Public pages only.** Nothing signs in. Where a capture goes past a first
  screen it uses the app's own controls — skipping an intro, choosing a
  language, HanoBus's "Continue as Guest". The two IDUKA in-app screens
  (`raw/iduka-stock.png`, `raw/iduka-till.png`) come from an authorised demo
  shop and are kept in git rather than re-captured.
- **No invented headlines.** Each is a line the product already uses publicly.
  MusiMe has no tagline, so its line comes from its description on /work.
- **A status bar is drawn** in each app's own top colour, so the phone's camera
  hole sits over it instead of over the app's header.

## Adding a project

1. Add a capture entry to `capture.mjs` and run it.
2. Add a preview entry to `compose.mjs` (the order there should match
   `portfolio` in `src/data/site.ts`; the first is the featured one).
3. Add the project to `portfolio` with the same `id`.
