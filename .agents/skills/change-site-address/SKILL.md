---
name: change-site-address
description: Change where the SightlessVision site lives — after moving/renaming the GitHub repo, or connecting a custom domain like sightlessvision.com. Use when the owner mentions a new repo name, new GitHub account, domain, DNS, or broken styling/links right after a move.
---

# Change the site address

The site is served under a **base path**. Every internal link goes through `url()` (`src/lib/url.ts`),
so the address is controlled in exactly two places:
- `.github/workflows/deploy.yml` → `SITE_URL` and `BASE_PATH` env on the Build step (used for the live site)
- `astro.config.mjs` → fallback defaults (used for local `npm run build` / `npm run dev`)

## Repo moved or renamed (still on github.io)
The workflow already derives `https://<owner>.github.io` and `/<repo-name>` automatically — nothing breaks.
Still update the local defaults in `astro.config.mjs` so local previews match the live site:
`SITE_URL ?? 'https://<owner>.github.io'` and `BASE_PATH ?? '/<repo-name>'`.
Also update links in `README.md`. In the new repo: **Settings → Pages → Source: GitHub Actions**.

## Custom domain (e.g. sightlessvision.com)
1. Owner buys the domain. DNS (at their registrar):
   - apex `@`: A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (and AAAA `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`)
   - `www`: CNAME → `<owner>.github.io`
2. Repo **Settings → Pages → Custom domain**: enter the domain, wait for the DNS check, tick **Enforce HTTPS**.
3. In `deploy.yml` replace the env with:
   ```yaml
   SITE_URL: https://sightlessvision.com
   BASE_PATH: /
   ```
   and in `astro.config.mjs` set the same defaults (`'https://sightlessvision.com'`, `'/'`).
4. Add `public/CNAME` containing just the domain (one line) as a backup record.
5. Build, `npm run verify -- --base /`, deploy, then check the live domain, a sub-page (e.g. `/about/`),
   images, and that `robots.txt` and `sitemap-index.xml` show the new domain.

## Don't
- Don't hard-code the domain or base path in components — only the two config places above.
- DNS changes can take up to 24h; don't keep changing settings while waiting.
