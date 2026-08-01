import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const DIR = "public/images";
const MAX_WIDTH = 1600;
const QUALITY = 80;

const files = (await fs.readdir(DIR)).filter((f) => /\.(jpe?g)$/i.test(f));

for (const file of files) {
  const target = path.join(DIR, file);
  const before = (await fs.stat(target)).size;

  const buffer = await sharp(target)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  await fs.writeFile(target, buffer);
  const after = (await fs.stat(target)).size;

  console.log(
    `${file}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`
  );
}
