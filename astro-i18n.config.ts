import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: ['zh'],
  showDefaultLangCode: false,
  translations: {
    en: "src/i18n/en.json",
    zh: "src/i18n/zh.json"
  },
  routeTranslations: {
    en: "src/i18n/routes.ts"
  }
})
