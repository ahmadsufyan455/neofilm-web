import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.resolve(__dirname, '../public/images/photos');
const outputDir = path.resolve(__dirname, '../public/images/photos/thumbs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((f) => f.endsWith('.jpg') && !f.includes('thumb'));

console.log(`[NeoFilm Optimizer] Processing ${files.length} gallery photos...`);

async function processAll() {
  let totalOrig = 0;
  let totalThumb = 0;

  for (const file of files) {
    const srcPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;
    const destPath = path.join(outputDir, `${baseName}.webp`);

    const origStat = fs.statSync(srcPath);
    totalOrig += origStat.size;

    // Generate responsive 1000px max thumbnail with high quality WebP
    await sharp(srcPath)
      .resize(1000, 1000, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85, effort: 4 })
      .toFile(destPath);

    const thumbStat = fs.statSync(destPath);
    totalThumb += thumbStat.size;
  }

  const origMB = (totalOrig / (1024 * 1024)).toFixed(2);
  const thumbMB = (totalThumb / (1024 * 1024)).toFixed(2);
  const savings = ((1 - totalThumb / totalOrig) * 100).toFixed(1);

  console.log(`[NeoFilm Optimizer] Complete!`);
  console.log(`  - Original Master Size: ${origMB} MB`);
  console.log(`  - Optimized Thumbnails: ${thumbMB} MB`);
  console.log(`  - Total Data Saved: ${savings}% reduction`);
}

processAll().catch((err) => {
  console.error('[NeoFilm Optimizer] Error processing images:', err);
  process.exit(1);
});
