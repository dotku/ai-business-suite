/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'zh'],
  i18next: {
    debug: true,
    resources: {
      en: {
        translation: () => import('./src/i18n/en.json')
      },
      zh: {
        translation: () => import('./src/i18n/zh.json')
      }
    }
  }
};
