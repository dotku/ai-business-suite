import { sequence } from 'astro:middleware';
import i18nPkg from "astro-i18n";

const { createMiddleware } = i18nPkg;

export const onRequest = sequence(
  createMiddleware()
);
