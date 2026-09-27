# AGENTS.md — guide for AI coding agents (Codex, Claude Code, etc.)

Read this before changing anything. Keep it up to date when the project changes.

## What this is
SightlessVision — a photographer / cinematographer portfolio. Static site built with
**Astro 7 + Tailwind CSS 4**, deployed to **GitHub Pages** by GitHub Actions on every push to `main`.
Originally exported from Base44 (a React SPA); rebuilt as prerendered static HTML. The untouched
Base44 export lives in git history at tag `base44-export` — reference only, do not restore it.

## Commands
- `npm ci` — install (Node 22.12+, see `.nvmrc`)
- `npm run dev` — local dev server at http://localhost:4321/jason-site/ (path includes the base!)
- `npm run build` — production build to `dist/` (must pass before every commit)
- `npm run preview` — serve the built `dist/`

## Where things live
- `src/data/site.ts` — **ALL content**: brand, contact, hero, services, projects, awards, about, clients.
  Normal content edits happen here only. Items marked `TODO` are placeholder copy to confirm with the owner.
- `src/assets/` — source images (`work/`, `awards/`, `about/`, `logos/`). Commit originals (JPG ≤ ~2400px).
  The build generates AVIF/WebP + responsive sizes. Never commit pre-shrunk copies or anything in `dist/`.
- `src/components/` — Nav, Footer, Hero, ProjectCard, AwardCard, Lightbox, Services, Clients, CTA, ContactForm, Icon
- `src/pages/` — one file per route: index, portfolio, awards, about, contact, 404, robots.txt.ts
- `src/layouts/Base.astro` — `<head>`, SEO/OG/JSON-LD, scroll-reveal, image fade-in, "View" cursor
- `src/styles/global.css` — design tokens (`@theme`), animations, view transitions, reduced-motion rules
- `src/lib/url.ts` — `url()` helper; `lqip.ts` — blurred placeholders; `heroImage.ts` — hero srcset
- `.github/workflows/deploy.yml` — build + deploy to Pages
- `docs/AUDIT.md` — why the site is built this way

## Hard rules (don't break these)
1. **Every internal link/asset goes through `url()`** from `src/lib/url.ts`. The site is served under a base
   path (`/<repo-name>/`). Hard-coded `/about` style links WILL 404 on GitHub Pages.
2. **Stay static.** No React/Vue islands, no SPA router, no backend, no client-side data fetching for content.
   JS budget is tiny (a few KB of inline scripts). Don't add framer-motion, jQuery, GSAP, etc. — use CSS.
3. **Images:** use Astro `<Picture>`/`getImage` from `astro:assets` with an imported file from `src/assets/`.
   Never `<img src="https://...">` to a remote host, never raw files in `public/` for photos.
4. **Keep the design system:** colours/fonts come from tokens in `global.css` (`bg-background`, `text-primary`,
   `font-heading`, etc.). Don't introduce new colours or fonts ad hoc. Fonts are self-hosted via @fontsource.
5. **Motion must respect `prefers-reduced-motion`** and content must stay readable with JS disabled
   (reveal styles are gated behind `@media (scripting: enabled)`).
6. **Accessibility:** keep alt text on every image, labels on form fields, `aria-label` on icon-only links/buttons,
   visible focus states.
7. Don't edit `package-lock.json` by hand; don't upgrade major versions (Astro/Tailwind) unless asked.
8. Before committing: `npm run build` must succeed with no errors. Keep commits small with clear messages.

## Deploy / hosting facts
- Pages source must be **GitHub Actions** (repo Settings → Pages).
- The workflow sets `BASE_PATH=/<repo-name>` and `SITE_URL=https://<owner>.github.io` automatically,
  so renaming/moving the repo just works. For a custom domain: set `BASE_PATH: /` and `SITE_URL` in the workflow.
- Contact form: GitHub Pages has no server. Set `site.formEndpoint` (Formspree / Web3Forms) in `site.ts`;
  otherwise it falls back to opening the visitor's email app.

## Common tasks
- **Add a project:** add JPG to `src/assets/work/`, import it in `site.ts`, add to `projects[]`
  (`featured: true` to show on Home; panoramic > 1.4:1 runs full-width there).
- **Add an award:** image to `src/assets/awards/`, entry in `awarded[]` or `nominated[]`.
- **Hero video:** put an MP4 in `public/` and set `hero.video: '/reel.mp4'` (goes through `url()` already).
- **New page:** create `src/pages/<name>.astro` using `Base` layout, add to `nav` in `site.ts`.
