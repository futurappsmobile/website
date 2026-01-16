import * as locales from './locales';
import { en } from './locales/en';

export async function getLegalContent(lang: string) {
    // @ts-ignore
    const content = locales[lang];
    return { ...en, ...content };
}

const languageToCountryMap: Record<string, string> = {
  en: 'us',
  es: 'es',
  fr: 'fr',
  de: 'de',
  it: 'it',
  pt: 'pt',
  ru: 'ru',
  ja: 'jp',
  ko: 'kr',
  zh: 'cn',
  ar: 'sa',
  hi: 'in',
  bn: 'in',
  ur: 'pk',
  fa: 'us', // Apple Store not available in Iran
  he: 'il',
  ms: 'my',
  tr: 'tr',
  pl: 'pl',
  cs: 'cz',
  id: 'id',
  uk: 'ua',
  vi: 'vn',
  th: 'th',
  nl: 'nl',
};

export function getAppStoreLink(lang: string): string {
  const countryCode = languageToCountryMap[lang] || 'us';
  return `https://apps.apple.com/${countryCode}/app/snapfuel-ai-nutrition-diet/id6757562709`;
}
