import { getImage } from 'astro:assets';
import { hero } from '../data/site';

const widths = [640, 960, 1280, 1536];
export const heroSizes = '100vw';

/** Shared so the <head> preload and the <picture> use identical URLs. */
export async function getHeroSources() {
  const [avif, webp, fallback] = await Promise.all([
    getImage({ src: hero.image, widths, format: 'avif', quality: 60 }),
    getImage({ src: hero.image, widths, format: 'webp', quality: 72 }),
    getImage({ src: hero.image, width: 1536, format: 'jpg', quality: 78 }),
  ]);
  return { avif, webp, fallback };
}
