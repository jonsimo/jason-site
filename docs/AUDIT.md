# Base44 export — audit & rebuild notes

*September 2026. Covers the Base44 export of "SightlessVision" (internal Base44 name: "Lumina Creative Studio") and the static rebuild in this repo.*

## TL;DR

- **The export doesn't run as delivered.** The exporter find-and-replaced `base44` → `db` across the codebase, which broke every image URL, the build config, and the auth bootstrap. Fixing it in place would still leave a heavy React SPA that GitHub Pages can't route properly.
- **Rebuilt as a static Astro site** with the same design and copy. Every page is real prerendered HTML; the browser downloads ~2.5 KB of JavaScript instead of a React app.
- **Home page weight: ~8.7 MB of images → ~0.4 MB total.** Lighthouse (mobile, throttled): Performance 96–98, Accessibility 100, Best Practices 100, SEO 100.
- **Content needs a pass before launch.** Placeholder email/phone, a conflicting city, and a template awards list (TIFF, Cannes Lions, World Press Photo) that clients can easily check. Details below.

---

## 1. Why the export is broken

| # | Problem | Effect |
|---|---|---|
| 1 | Every image points to `media.db.com/...` (the exporter rewrote `base44` → `db`). The real files are still at `media.base44.com`. `export-report.json` lists them as "Failed to fetch." | Every image on the site is broken. |
| 2 | A shim line (`const db = globalThis.__B44_DB__ \|\| …`) was prepended to `index.html`, `README.md` and 10 JSX files. | `index.html` renders that JavaScript as visible text above the page. The HTML is invalid. |
| 3 | `vite.config.js` calls `base44({...})` but never imports it. | `npm run build` / `npm run dev` crash with a ReferenceError. |
| 4 | `AuthContext` calls `createAxiosClient` (undefined) and hits `/api/apps/public/...` Base44 endpoints before rendering anything. | Even with 1–3 fixed, the site hangs on a spinner or throws. A public portfolio was gated behind an auth check. |
| 5 | The images are still served from Base44's CDN under the app's ID. | If the Base44 plan lapses, the images can disappear. **All 26 are now copied into this repo.** |

The site also had platform scaffolding it never used: an OAuth consent page, `ProtectedRoute`, `UserNotRegisteredError`, react-query and the Base44 SDK.

## 2. Bloat

- **61 runtime dependencies** for a 5-page portfolio: three.js, Stripe, jsPDF, html2canvas, react-quill, Leaflet, Recharts, both moment *and* date-fns, lodash, and others. Most were never imported.
- **48 shadcn/ui components**. The site used 3 of them (input, textarea, button).
- **framer-motion** was used only for fade-ins. It is replaced with ~20 lines of CSS plus one shared IntersectionObserver.
- **Images were raw PNGs, 1–1.9 MB each.** The home page alone pulled ~8.7 MB (hero 1.4 MB, four featured images 5.6 MB, nine logos 1.7 MB). The About portrait was a 5 MB, 3387×5081 JPEG displayed at about 600 px wide.

## 3. GitHub Pages problems with the original SPA

- **Deep links 404.** `BrowserRouter` needs a server rewrite. GitHub Pages has none, so refreshing `/portfolio` or sharing the link returns GitHub's 404.
- **Base path.** A project site lives at `/jason-site/`. Every hard-coded `/portfolio` link and every asset path would need rewriting.
- **Blank until JavaScript loads.** No HTML content for search engines or link previews. Every page had the title "Base44 APP", the favicon was the Base44 logo, and `/manifest.json` returned 404.

## 4. Single load-out vs. page loads: the decision

The three options for a small portfolio:

1. **SPA, single bundle** (what Base44 produced). Transitions are smooth, but it's JS-heavy, SEO-hostile and fragile on GitHub Pages (see §3).
2. **One long scrolling page.** It's the lightest option, but it throws away the five-page structure Jason designed, and each section loses its own URL, title and share card.
3. **Static multi-page, with navigation that feels like an SPA** ← *chosen.*
   - Every route is real prerendered HTML: instant first paint, correct titles and meta, and it works with JS disabled.
   - **Native cross-document View Transitions** handle page changes. Pages cross-fade, and project images *morph* from the Home grid into the Portfolio grid. This needs zero JavaScript (Chrome, Edge and Safari 18+; other browsers navigate normally).
   - **Speculation Rules** prerender a page when the visitor hovers a link, so clicks are effectively instant in Chrome and Edge. An Astro prefetch fallback covers other browsers.

Result: it feels like a single load-out, but each page is independently fast, shareable and indexable.

## 5. Design and UX fixes (look kept the same)

- **Portfolio grid.** The original forced mixed aspect ratios into equal-height rows, which left gaps and letterboxing. It is now a masonry layout that shows every image at its natural ratio.
- **Home "Featured Projects".** It's now an editorial layout: three portrait frames across, then the widescreen piece running full-width at its native 2.3:1 cinematic ratio.
- **Neon Nocturne** had black letterbox bars baked into the image. They're cropped out.
- **Project cards were clickable in name only** (`cursor-pointer`, no action). They now open a lightbox with keyboard arrows, swipe, a counter and neighbour preloading. The lightbox respects the active filter.
- **Titles only appeared on hover,** so they were invisible on phones. Touch devices now always show a caption over a gradient. Desktop keeps the hover reveal.
- **Portfolio filters** animate the re-flow and are deep-linkable, e.g. `/portfolio/?category=cinematography`.
- **Client logos.** BMW and Vossen had a fake checkerboard "transparency" baked into the pixels, which showed as faint squares on the site. The CSS `invert` filter also turned the Porsche crest into a photo negative. All nine logos are now pre-processed: backgrounds removed, trimmed, converted to monochrome and optically balanced so each carries the same visual weight. They scroll in a slow marquee that pauses on hover.
- **The contact form was fake.** It waited 1.2 s and then said "Message Sent"; messages went nowhere. It now posts to a form service (Formspree or Web3Forms, one line to configure). Until that's configured, it opens the visitor's email app pre-filled. It also gained a honeypot spam trap and properly associated labels.
- **Small touches.** Subtle film grain and a slow settle on the hero, staggered load-in, count-up stats on About, a scroll cue, and an underline hover on the nav. Every motion respects `prefers-reduced-motion`.
- **Accessibility.** Skip link, labelled icon buttons, `aria-current` on nav, a focusable lightbox dialog, and visible focus rings.
- **SEO.** Per-page titles and descriptions, canonical URLs, an Open Graph / Twitter card (a 1200×630 crop generated from the hero), Person JSON-LD, a sitemap, robots.txt, a custom favicon and a branded 404 page.
- **Fonts are self-hosted** instead of loaded from Google Fonts. That saves a third-party connection, removes the render-blocking request and avoids the GDPR issue. The headline fonts are preloaded.

## 6. Content to confirm before launch

These are carried over as-is and flagged with `TODO` in `src/data/site.ts`:

- **Brand name.** The nav says *SightlessVision*, but the footer © and timeline said *LENS & VISION*. Both are unified to SightlessVision; confirm that's right.
- **Email** `hello@lensandvision.com` is a template domain. **Replace it before launch**, otherwise mail (including the form fallback) goes to a domain he doesn't own.
- **Phone** `+1 (310) 555-0192` is a fictional 555 number with an LA area code. Set it to `''` to hide the row.
- **Location.** About and the footer say Toronto; Contact said Los Angeles. Unified to Toronto.
- **Timeline.** "Since 2016" vs. a timeline starting in 2014 vs. "12+ years."
- **Awards.** The awards list reads like template content (TIFF Best Cinematography, Cannes Lions Gold, World Press Photo, Communication Arts Creative Director of the Year). It also contradicts itself: the About badge says "Award Winner — Tribeca", but Tribeca only appears as a nomination, and "Luminance" is "screened at Tribeca" in the timeline but "won at TIFF" on Awards. **Named awards are public record. If any aren't real, remove them** — a prospective client checking one is a credibility risk.
- **Imagery.** Every portfolio and award image is AI-generated (`generated_*.png` in the originals). A cinematographer's portfolio should show his actual frames, and art directors can tell. Swapping in real work is the single biggest upgrade left, and it's just drop-in files plus a line each in `site.ts`.
- **Hero resolution.** The source is only 1536×672 and gets upscaled on large and retina screens. A 3000 px+ original would look much crisper.
- **Social links.** Instagram and YouTube point to `#`.
