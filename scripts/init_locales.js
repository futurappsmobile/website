import fs from 'fs';
import path from 'path';

const languages = [
    'ja', 'ko', 'zh', 'ar', 'hi', 'bn', 'ur', 'fa', 'he',
    'ms', 'pl', 'cs', 'id', 'uk', 'vi', 'th', 'nl'
];

const template = `import { en } from './en';

export const LANG_CODE = {
  ...en,
  privacy: {
    ...en.privacy,
    title: "Privacy Policy (English)", // Indicating it's English for now
  },
  terms: {
    ...en.terms,
    title: "Terms of Use (English)",
  }
};
`;

const targetDir = path.join(process.cwd(), 'src/i18n/locales');

languages.forEach(lang => {
    const filePath = path.join(targetDir, `${lang}.ts`);
    if (!fs.existsSync(filePath)) {
        const content = template.replace(/LANG_CODE/g, lang);
        fs.writeFileSync(filePath, content);
        console.log(`Created ${lang}.ts`);
    }
});
