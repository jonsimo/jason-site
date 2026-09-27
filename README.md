# SightlessVision — portfolio site

Static rebuild of the Base44 "SightlessVision" site, built with [Astro](https://astro.build) + Tailwind CSS and deployed to GitHub Pages.

Same look as the Base44 version — same palette, type (Playfair Display + Inter), layout and copy — rebuilt to be ~20× lighter and work properly on static hosting.

**Live:** https://jonsimo.github.io/jason-site/

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321/jason-site/
npm run build      # outputs static site to dist/
npm run verify     # checks every link/image in dist/ resolves
npm run preview    # serve dist/ locally
```

Requires Node 22.12+.

## Editing content

**Almost everything lives in one file: [`src/data/site.ts`](src/data/site.ts)** — brand name, email, phone, hero text, services, projects, awards, about copy, stats, timeline, client logos.

- **Add a project:** drop a JPG into `src/assets/work/`, import it at the top of `site.ts`, add an entry to `projects`. Set `featured: true` to show it on the home page. Portrait/square images tile three-across on the home page; anything wider than ~1.4:1 runs full-width.
- **Images:** commit the original (JPG, up to ~2400px long edge). The build generates AVIF + WebP at every size needed — never hand-optimise or upload pre-shrunk versions.
- **Hero video (optional):** set `hero.video` to an MP4 (8–15 s loop, muted, ~5 MB). The hero image becomes its poster frame.
- **Client logos:** transparent PNG, light-on-transparent works best (they render as subtle white marks on the dark background).
- Anything marked `TODO` in `site.ts` is placeholder content carried over from the Base44 template.

## Contact form

GitHub Pages can't run server code, so the form posts to a form service:

1. Create a free form at [formspree.io](https://formspree.io) (or [web3forms.com](https://web3forms.com)).
2. Paste the endpoint into `formEndpoint` in `src/data/site.ts`.

Until that's set, submitting opens the visitor's email app pre-filled and addressed to `site.email`.

## Deploying

Pushing to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.

One-time setup: **GitHub repo → Settings → Pages → Build and deployment → Source: GitHub Actions.**

### Custom domain later

1. Add the domain in Settings → Pages and point DNS at GitHub.
2. In `.github/workflows/deploy.yml` set `BASE_PATH: /` and `SITE_URL: https://yourdomain.com`.

All internal links go through `url()` in `src/lib/url.ts`, so nothing else changes.

## Project structure

```
src/
  data/site.ts          ← all content
  assets/               ← source images (optimised at build)
  components/           ← Nav, Footer, Hero, ProjectCard, Lightbox, …
  layouts/Base.astro    ← <head>, SEO, social cards, page shell
  pages/                ← one file per route (index, portfolio, awards, about, contact, 404)
  styles/global.css     ← design tokens + animations
  lib/                  ← url() helper, hero image pipeline
```

## Working with AI coding agents (Codex, Claude Code)

Project rules are in [`AGENTS.md`](AGENTS.md); step-by-step playbooks for common jobs are in [`.agents/skills/`](.agents/skills). Agents pick these up automatically.

## What changed from the Base44 export

See [`docs/AUDIT.md`](docs/AUDIT.md) for the full audit and rationale.
