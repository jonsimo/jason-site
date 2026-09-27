---
name: verify-and-deploy
description: Build, check, commit and publish the SightlessVision site to GitHub Pages. Use at the end of ANY change to this repo, or when the owner says "publish", "push", "deploy", "make it live" or asks why the live site didn't update. Not for editing content itself.
---

# Verify and deploy

The live site is built by GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.
Nothing reaches the live site unless this whole checklist passes.

## Steps

1. **Build** — `npm run build`. It must finish with `Complete!` and no errors.
   If `node_modules` is missing, run `npm ci` first (Node 22.12+, see `.nvmrc`).
2. **Verify links and assets** — `npm run verify`
   (runs `.agents/skills/verify-and-deploy/scripts/verify-dist.mjs`). It fails if any internal
   link or image skips the base path or points at a file that doesn't exist. Fix the source (use `url()`
   from `src/lib/url.ts`), rebuild, re-verify.
3. **Look at it** — for visual changes run `npm run preview` and tell the owner the exact URL
   (it includes the base path, e.g. `http://localhost:4321/<repo-name>/`). Wait for their OK on anything
   that changes how the site looks.
4. **Commit** — stage only source files (`git status` first). Never commit `dist/`, `.astro/`,
   `node_modules/` or `.DS_Store`. One logical change per commit, message in plain English:
   `Add "Night Drive" project to portfolio`.
5. **Push** — `git push origin main`. Never force-push.
6. **Watch the deploy** — if the GitHub CLI is available: `gh run watch --exit-status` (or `gh run list -L 3`).
   Otherwise tell the owner to check the repo's **Actions** tab.
7. **Confirm live** — after the run succeeds (~1 min), load the live URL
   (`https://<owner>.github.io/<repo-name>/` or the custom domain) and confirm the change is there.
   Browsers cache hard: suggest a hard refresh (Cmd+Shift+R) if the owner doesn't see it.

## If the deploy fails
- Read the failing step's log (`gh run view --log-failed`). Most failures are a build error that also
  reproduces locally with `npm run build` — fix it there.
- "Pages not enabled" / 404 on deploy step → repo **Settings → Pages → Source: GitHub Actions**.
- Don't "fix" CI by editing the workflow unless the owner asked; explain the problem first.
