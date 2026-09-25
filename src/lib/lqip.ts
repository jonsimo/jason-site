import type { ImageMetadata } from 'astro';
import sharp from 'sharp';

/**
 * Build-time blur placeholder: a ~24px WebP inlined as a data URI (~300–600 bytes).
 * Shown behind each photo until the real image has decoded, so nothing ever "pops" in.
 */
const cache = new Map<string, Promise<string>>();

export function lqip(img: ImageMetadata): Promise<string> {
  const fsPath = (img as ImageMetadata & { fsPath?: string }).fsPath;
  if (!fsPath) return Promise.resolve('');
  if (!cache.has(fsPath)) {
    cache.set(
      fsPath,
      sharp(fsPath)
        .resize(24, 24, { fit: 'inside' })
        .modulate({ saturation: 1.15 })
        .webp({ quality: 45 })
        .toBuffer()
        .then((b) => `data:image/webp;base64,${b.toString('base64')}`)
        .catch(() => ''),
    );
  }
  return cache.get(fsPath)!;
}
