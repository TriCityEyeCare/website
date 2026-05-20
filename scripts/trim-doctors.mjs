// Trim solid-color borders from doctor portraits so they all frame the teal circle equally,
// then upscale the small JPEGs so they don't render blurry on retina screens.
//
// Source images from waterlooeye.ca have inconsistent framing — the JPEGs are
// 240x272 with wide white margins, while the PNGs are 1000x1133 with the circle
// nearly edge-to-edge. We auto-trim the borders then resize to a common width.

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const dir = new URL('../public/doctors/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const TARGET_WIDTH = 800;

const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const path = join(dir, file);
  const before = await stat(path);
  const ext = extname(file).toLowerCase();
  const stem = basename(file, ext);

  // Trim auto-detects the border color from the corner pixels.
  // Threshold of 12 tolerates faint JPEG compression noise around the white edges.
  let pipeline = sharp(path).trim({ threshold: 12 });

  // Resize to a consistent width. The PNGs are already larger than this; the JPEGs
  // will be upscaled with Lanczos to keep them sharp on retina screens.
  pipeline = pipeline.resize({ width: TARGET_WIDTH, withoutEnlargement: false, kernel: 'lanczos3' });

  // Re-encode: keep PNG transparency where present, JPEG for the rest.
  const outPath = path; // overwrite in place
  if (ext === '.png') {
    await pipeline.png({ compressionLevel: 9 }).toFile(outPath + '.tmp');
  } else {
    // Flatten any alpha onto white so the trimmed JPEG keeps a clean white outside-circle.
    await pipeline.flatten({ background: '#ffffff' }).jpeg({ quality: 88, mozjpeg: true }).toFile(outPath + '.tmp');
  }
  // sharp won't overwrite the file it's reading; swap via tmp
  const { rename } = await import('node:fs/promises');
  await rename(outPath + '.tmp', outPath);

  const after = await stat(path);
  const meta = await sharp(path).metadata();
  console.log(
    `${file.padEnd(28)} ${meta.width}x${meta.height}  ${Math.round(before.size / 1024)}KB → ${Math.round(after.size / 1024)}KB`,
  );
}
