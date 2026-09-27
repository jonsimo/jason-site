---
name: update-site-content
description: Change any text or facts on the SightlessVision site — name, tagline, email, phone, location, social links, hero copy, services, about bio, stats, timeline, awards list, client logos. Use for wording/info edits. For adding portfolio projects with images use add-portfolio-project; for the hero image/video use update-hero-media.
---

# Update site content

Almost every word on the site lives in **`src/data/site.ts`**. Edit there, not in the components.

## Where each thing is (in `src/data/site.ts`)
| Owner says… | Edit |
|---|---|
| name, tagline, footer blurb, SEO description | `site.name`, `site.tagline`, `site.footerBlurb`, `site.description` |
| email / phone / city / time zone | `site.email`, `site.phone` (`''` hides it), `site.location`, `site.timeZone` |
| Instagram / YouTube | `site.social.instagram`, `site.social.youtube` (full `https://` URLs) |
| hero headline, subtext, button | `hero.titleTop`, `hero.titleAccent`, `hero.body`, `hero.cta` |
| services | `services[]` — `icon` must be one of `camera`, `film`, `palette` (or add one to `src/components/Icon.astro`) |
| about bio, badge, stats, timeline | `about.paragraphs`, `about.badge`, `about.stats` (numbers count up), `about.timeline` |
| awards / nominations | `awarded[]`, `nominated[]` (each needs an image in `src/assets/awards/`, imported at top) |
| client logos strip | `clients[]` — see "Logos" below |
| nav menu | `nav[]` (also drives the footer menu) |

## Rules
- **Never invent facts.** Awards, stats, client names, years and quotes must come from the owner.
  If something is marked `TODO`, show the current value and ask. Leave the `TODO` comment until confirmed, then delete it.
- Keep the voice: short, confident, first person ("I"), no exclamation marks.
- Italic gold accent words in headings come from markup in components, not from `site.ts`; don't add HTML to data strings.
- Keep `about.stats[].value` a number (it animates); put `+` in `suffix`.
- Removing an award/logo: delete the entry **and** its `import` line, and delete the image file if nothing else uses it.

## Logos
Transparent PNG, light marks on transparent background, trimmed tight (no padding), ~600px on the long side.
Drop into `src/assets/logos/`, import it in `site.ts`, add to `clients[]`. Sizing is automatic
(optical balancing in `src/components/Clients.astro`). If the logo is dark-on-transparent, it must be
converted to white first — ask the owner for a white version or convert it (invert luminance to white, keep alpha).

## Finish
Run the **verify-and-deploy** skill.
