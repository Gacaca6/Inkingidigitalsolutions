/**
 * Languages. English lives at /, Kinyarwanda at /rw/.
 *
 * Only some pages are translated (see RW_ROUTES). Every link goes through
 * `href()`, which sends a Kinyarwanda reader to the Kinyarwanda version when
 * one exists and to the English page when it does not — never to a 404.
 *
 * Components read the language from the URL with `langOf(Astro.url)`, so no
 * `lang` prop has to be threaded through every layer.
 */
import { RW_PUBLIC } from "./flags.mjs";

export { RW_PUBLIC };
export type Lang = "en" | "rw";

export const langOf = (url: URL): Lang =>
  /^\/rw(\/|$)/.test(url.pathname) ? "rw" : "en";

/** English pages that have a Kinyarwanda version. */
const RW_ROUTES = [
  /^\/$/,
  /^\/services\/?$/,
  /^\/services\/[^/]+\/?$/,
  /^\/pricing\/?$/,
  /^\/contact\/?$/,
];

const pathOnly = (p: string) => p.split(/[?#]/)[0] || "/";

export const hasRw = (enPath: string): boolean =>
  RW_ROUTES.some((r) => r.test(pathOnly(enPath)));

/** `path` is an English path ("/pricing", "/contact?package=x", "/"). */
export function href(path: string, lang: Lang): string {
  if (lang === "en" || !hasRw(path)) return path;
  return path === "/" ? "/rw/" : `/rw${path}`;
}

/** The English path of any path on the site. */
export const enPathOf = (pathname: string): string =>
  pathname.replace(/^\/rw(?=\/|$)/, "") || "/";

/** The same page in the other language, or that language's home page. */
export function counterpart(pathname: string, to: Lang): string {
  const en = enPathOf(pathname);
  if (to === "en") return en;
  return hasRw(en) ? href(en, "rw") : "/rw/";
}
