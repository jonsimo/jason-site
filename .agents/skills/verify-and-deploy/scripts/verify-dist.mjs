#!/usr/bin/env node
// Verifies a built site in dist/: every internal link/asset uses the base path and points at a real file.
// Usage: node .agents/skills/verify-and-deploy/scripts/verify-dist.mjs [--base /repo-name]
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
if (!existsSync(dist)) {
  console.error('✗ dist/ not found — run `npm run build` first.');
  process.exit(1);
}

// Base path: --base flag > BASE_PATH env > default in astro.config.mjs
let base = process.env.BASE_PATH;
const flag = process.argv.indexOf('--base');
if (flag > -1) base = process.argv[flag + 1];
if (!base) {
  const cfg = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
  base = cfg.match(/BASE_PATH\s*\?\?\s*['"]([^'"]+)['"]/)?.[1] ?? '/';
}
base = '/' + base.replace(/^\/+|\/+$/g, '');
const prefix = base === '/' ? '/' : base + '/';

const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) htmlFiles.push(p);
  }
})(dist);

const problems = [];
let checked = 0;
const attr = /\s(?:href|src|poster|srcset|imagesrcset)="([^"]+)"/g;
const cssUrl = /url\(([^)'"]+)\)/g;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const refs = [];
  for (const m of html.matchAll(attr)) {
    for (const part of m[1].split(',')) refs.push(part.trim().split(/\s+/)[0]);
  }
  for (const m of html.matchAll(cssUrl)) refs.push(m[1].trim());

  for (const ref of refs) {
    if (!ref.startsWith('/') || ref.startsWith('//')) continue; // external, relative, data:, mailto:, #
    checked++;
    const where = relative(dist, file);
    if (base !== '/' && ref !== base && !ref.startsWith(prefix)) {
      problems.push(`${where}: "${ref}" is missing the base path "${base}" — wrap it in url() from src/lib/url.ts`);
      continue;
    }
    let path = decodeURI(ref.slice(base === '/' ? 0 : base.length).split(/[?#]/)[0]) || '/';
    let target = join(dist, path);
    if (path.endsWith('/')) target = join(target, 'index.html');
    else if (!existsSync(target) && existsSync(join(target, 'index.html'))) target = join(target, 'index.html');
    if (!existsSync(target)) problems.push(`${where}: "${ref}" → file not found in dist/`);
  }
}

// Leftovers from the Base44 export should never come back
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (/media\.(db|base44)\.com|__B44_DB__/.test(html)) problems.push(`${relative(dist, file)}: references Base44 hosting/shims`);
}

const unique = [...new Set(problems)];
if (unique.length) {
  console.error(`✗ ${unique.length} problem(s) in ${htmlFiles.length} pages (base "${base}"):`);
  unique.slice(0, 50).forEach((p) => console.error('  - ' + p));
  process.exit(1);
}
console.log(`✓ ${htmlFiles.length} pages, ${checked} internal links/assets checked — all resolve under base "${base}".`);
