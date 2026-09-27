---
name: update-hero-media
description: Replace the big full-screen image at the top of the SightlessVision home page, or add/replace a looping showreel video there. Use when the owner wants a new hero shot, a reel/video background, or says the hero looks soft/blurry.
---

# Update the hero image or showreel

Config lives in `hero` in `src/data/site.ts`; rendering in `src/components/Hero.astro` and `src/lib/heroImage.ts`.

## New hero image
1. Landscape, **at least 2560px wide** (3000–3840 ideal — the current one is only 1536px and looks soft on big screens).
   Dark or moody areas on the left help the headline read.
2. Save as `src/assets/work/<name>.jpg` (≤ ~3840px long edge: `sips -Z 3840 -s format jpeg -s formatOptions 90 IN --out src/assets/work/<name>.jpg`).
3. In `site.ts`: import it and set `hero.image` and `hero.alt`.
4. If the new image is larger than 1536px, add bigger sizes in `src/lib/heroImage.ts`:
   `const widths = [640, 960, 1280, 1920, 2560];` and set the jpg fallback `width` to 1920.
   The preload in `src/pages/index.astro` uses the same function, so it stays in sync automatically.
5. The same image is also used for the social-share card (1200×630 crop) — check the crop keeps the subject.

## Showreel video (optional)
1. Short loop, 8–15 s, no audio, ≤ ~6 MB. Compress with ffmpeg:
   `ffmpeg -i reel.mov -an -vf "scale=1920:-2,fps=24" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart public/reel.mp4`
2. Set `hero.video: '/reel.mp4'` in `site.ts` (the component adds the base path itself).
3. The hero image automatically becomes the poster frame, so still update it to match the reel's first frame.
4. Videos over ~10 MB hurt load time and GitHub rejects files over 100 MB — never commit large masters.
5. To remove the video, set `hero.video: ''`.

## Don't
- Don't remove the gradient overlays in `Hero.astro` — they keep the headline readable.
- Don't lazy-load the hero; it's the page's main (LCP) image and is deliberately preloaded.

## Finish
Show the owner `npm run preview`, then **verify-and-deploy**.
