// Regenerates a .webp sibling for every .jpg/.jpeg/.png under src/assets.
// Safe to re-run after adding new images — existing up-to-date .webp files are skipped.
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '..', 'src', 'assets');
const exts = new Set(['.jpg', '.jpeg', '.png']);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, files);
    } else if (exts.has(extname(entry).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = walk(assetsDir);
console.log(`Found ${files.length} raster images to convert.`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const before = statSync(file).size;
  const outPath = join(dirname(file), basename(file, extname(file)) + '.webp');

  if (existsSync(outPath) && statSync(outPath).mtimeMs >= statSync(file).mtimeMs) {
    console.log(`${basename(file)} -> ${basename(outPath)}  (up to date, skipped)`);
    continue;
  }

  await sharp(file).webp({ quality: 82 }).toFile(outPath);
  const after = statSync(outPath).size;
  totalBefore += before;
  totalAfter += after;
  console.log(`${basename(file)} -> ${basename(outPath)}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}

console.log('---');
console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB (${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% smaller)`);
