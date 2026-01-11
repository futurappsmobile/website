import * as locales from './locales';
import { en } from './locales/en';

export async function getLegalContent(lang: string) {
    // @ts-ignore
    const content = locales[lang];
    return { ...en, ...content };
}
