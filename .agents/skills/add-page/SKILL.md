---
name: add-page
description: Add a new page or section to the SightlessVision site (e.g. Services, Reel, Clients, Press, a single project case study) in the existing design language. Use for new routes or new home-page sections; not for editing existing text (update-site-content).
---

# Add a page or section

## New page
1. Create `src/pages/<slug>.astro`:
   ```astro
   ---
   import Base from '../layouts/Base.astro';
   import { url } from '../lib/url';
   ---
   <Base title="Reel" description="One sentence for Google and link previews.">
     <div class="container-x pb-24 pt-32">
       <header class="mb-14">
         <p class="eyebrow eyebrow-line animate-rise mb-4">Reel</p>
         <h1 class="font-heading text-5xl text-foreground md:text-7xl">
           <span class="line-mask"><span style="--d:120ms">Moving <span class="italic">Pictures</span></span></span>
         </h1>
       </header>
       <!-- content -->
     </div>
   </Base>
   ```
2. Put the page's copy/data in `src/data/site.ts` (not hard-coded) so the owner can edit it later.
3. Add it to `nav[]` in `site.ts` if it should be in the menu (this also updates the footer). Five to six nav items max.
4. The sitemap updates automatically.

## Design language (reuse, don't invent)
- Page header: eyebrow with hairline (`eyebrow eyebrow-line`) + Playfair headline with one *italic* word, line-mask reveal.
- Sections: `container-x` width, `py-24 md:py-32` spacing, `border-y border-border bg-card` for alternating bands.
- Scroll reveal: add `data-reveal` (optionally `style="--d:120ms"` to stagger). Content above the fold uses `animate-rise` instead.
- Photos: `<Picture>` from `astro:assets` with `formats={['avif','webp']}`, proper `sizes`, `alt`, and the
  LQIP pattern from `src/components/ProjectCard.astro` (`lqip()` background + `data-fade` + `onload`).
- Buttons/links: copy an existing one (e.g. `src/components/CTA.astro`). Icons: `src/components/Icon.astro`.
- Colours only from theme tokens (`text-primary`, `bg-card`, `text-muted-foreground`…). No new fonts or colour hex values.
- Embedding video: YouTube/Vimeo `<iframe loading="lazy">` with `title`, inside an `aspect-video` wrapper; or a local MP4 in `public/`.

## Rules
- Internal links via `url('/slug/')` — always with the trailing slash.
- No new npm packages or client frameworks without asking the owner.
- Keep it working with JS off and with reduced motion.

## Finish
Show `npm run preview` to the owner, then **verify-and-deploy**.
