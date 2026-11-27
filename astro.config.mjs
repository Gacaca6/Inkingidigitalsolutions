// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { RW_PUBLIC } from "./src/i18n/flags.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://inkingidigitalsolutions.rw",
  integrations: [
    sitemap({
      // Kinyarwanda pages join the sitemap only once they are approved and
      // public (src/i18n/flags.mjs). Until then they are noindex as well.
      filter: (page) => RW_PUBLIC || !/\/rw(\/|$)/.test(new URL(page).pathname),
    }),
  ],
  build: { inlineStylesheets: "auto" },
});
