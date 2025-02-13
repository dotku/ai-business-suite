import { defineAstroI18nConfig } from "astro-i18n"
import en from "./src/i18n/en.json"
import zh from "./src/i18n/zh.json"
import { routes } from "./src/i18n/routes.ts"

export default defineAstroI18nConfig({
  primaryLocale: 'en',
  secondaryLocales: ['zh'],
  showPrimaryLocale: false,
  translations: {
    en,
    zh
  },
  routes
})
