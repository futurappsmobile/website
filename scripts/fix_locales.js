
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const localesDir = '/Users/furkan/myself/web/src/i18n/locales';

const languages = [
    'es', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'cs', 'uk', 'ru',
    'ja', 'zh', 'ko', 'ar', 'hi', 'bn', 'ur', 'fa', 'he', 'ms',
    'id', 'vi', 'th'
];

let totalFixed = 0;

languages.forEach(lang => {
    const filePath = path.join(localesDir, `${lang}.ts`);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // Pattern: Check for missing comma before screenshots
        // The previous script inserted `\n    screenshots: {` before `};`
        // So we likely have `}\n    screenshots: {`

        if (content.match(/}[ \t\n\r]*screenshots:/)) {
            // Replace the whitespace between `}` and `screenshots:` with `,` + whitespace
            // But we want to keep the formatting nice.
            // We can just look for the specific sequence we created.

            // Regex to find "}" followed by whitespace then "screenshots:"
            const regex = /(})([ \t\n\r]+)(screenshots:)/;

            if (content.match(regex)) {
                const newContent = content.replace(regex, '$1,$2$3');
                fs.writeFileSync(filePath, newContent, 'utf-8');
                console.log(`Fixed ${lang}.ts`);
                totalFixed++;
            } else {
                console.log(`Pattern not found in ${lang}.ts (might be correct or different)`);
            }
        }
    } else {
        console.log(`Warning: ${lang}.ts not found`);
    }
});

console.log(`Total files fixed: ${totalFixed}`);
