/**
 * Is the Kinyarwanda version public yet?
 *
 * While this is `false` the /rw/ pages are built and reachable by direct link —
 * so a native speaker can review them on the real site — but:
 *   - no language switch appears in the header,
 *   - every /rw/ page carries `noindex`,
 *   - /rw/ is left out of the sitemap and of hreflang.
 *
 * Flip to `true` once the Kinyarwanda has been read and approved. That is the
 * only change needed to launch it.
 *
 * (A plain .mjs file so astro.config.mjs can import it as well.)
 */
export const RW_PUBLIC = false;
