---
name: add-portfolio-project
description: Add, replace, reorder, feature or remove portfolio projects (photos/stills) on the SightlessVision site, including award images. Use whenever the owner shares new images for the portfolio or asks to change what shows in Featured Projects or the Portfolio grid.
---

# Add or change a portfolio project

## 1. Get the facts from the owner
Title, category (`Photography`, `Cinematography` or `Creative Direction` — see `categories` in
`src/data/site.ts`), whether it should be **featured** on the home page, and a one-line description of
what's in the image for the alt text. Don't guess titles or categories.

## 2. Prepare the image
- JPG, long edge **≤ 2400px**, sRGB. Name it after the project in kebab-case: `night-drive.jpg`.
- On macOS (no installs needed): `sips -Z 2400 -s format jpeg -s formatOptions 90 "IN.png" --out src/assets/work/night-drive.jpg`
- HEIC/PNG/TIFF → convert with the same command. Never commit RAW/PSD/huge files, never put photos in `public/`.
- Check for baked-in black letterbox bars (common on video stills); if present, crop them off so the tile isn't framed in black.
- Award images go in `src/assets/awards/` the same way.

## 3. Register it in `src/data/site.ts`
```ts
import nightDrive from '../assets/work/night-drive.jpg';   // with the other work imports
...
{ slug: 'night-drive', title: 'Night Drive', category: 'Cinematography', image: nightDrive,
  alt: 'Car light trails on a wet city street at night', featured: true },
```
- `slug` must be unique, lowercase-kebab — it powers the page-to-page image morph animation.
- Order in `projects[]` = order in the Portfolio grid.
- **Home "Featured Projects" layout:** portrait/square images tile three across at 3:4; anything wider than
  ~1.4:1 runs full width. Best look: 3 portrait/square + 1 wide. Tell the owner if their featured set will look unbalanced.
- New category? Add it to `categories` — the filter buttons update automatically.

## 4. Removing / replacing
Delete the entry and its import; delete the image file if nothing else imports it. To replace an image,
overwrite the file with the same name (keep the slug so links and animations still work).

## 5. Finish
Run **verify-and-deploy**. For visual changes, show the owner `npm run preview` before pushing.
