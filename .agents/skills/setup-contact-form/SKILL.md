---
name: setup-contact-form
description: Make the SightlessVision contact form actually deliver messages (Formspree or Web3Forms), change where messages go, or debug "the form doesn't send". Use for anything about the contact form's delivery; for changing the email/phone shown on the page use update-site-content.
---

# Set up the contact form

GitHub Pages has no server, so the form posts to a third-party form service. The form lives in
`src/components/ContactForm.astro`; the endpoint is `site.formEndpoint` in `src/data/site.ts`.
With no endpoint the form falls back to opening the visitor's email app (addressed to `site.email`).

## Recommended: Formspree (works with the current code as-is)
1. The owner creates a free account at https://formspree.io, creates a form, and verifies their email.
   (They must do the signup themselves — never create accounts or enter passwords for them.)
2. They give you the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Set `site.formEndpoint` to it. Field names (`name`, `email`, `project_type`, `message`) and the
   `_gotcha` spam honeypot already match Formspree.
4. Build, deploy, then have the owner send a test message from the **live** site and confirm it arrives
   (Formspree may ask them to confirm the first submission).

## Alternative: Web3Forms
Needs an extra hidden field. Add inside the `<form>` in `ContactForm.astro`:
`<input type="hidden" name="access_key" value="THE-ACCESS-KEY" />` and set
`site.formEndpoint = 'https://api.web3forms.com/submit'`. (The access key is designed to be public.)

## Rules
- Keep the success/error states and the honeypot. Keep labels linked to inputs (`for`/`id`).
- Don't add a backend, serverless function, or email API key to this repo.
- `site.email` should be a real inbox the owner controls — the error message and fallback use it.

## Finish
Run **verify-and-deploy**, then the live test above.
