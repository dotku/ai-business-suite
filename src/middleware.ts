import { sequence } from 'astro:middleware';
import { i18nMiddleware } from 'astro-i18n';

export const onRequest = sequence(
  i18nMiddleware
);
