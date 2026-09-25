/** Prefix an internal path with the deploy base (e.g. /jason-site). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** True when `pathname` is the page for `href` (handles base + trailing slash). */
export function isActive(pathname: string, href: string): boolean {
  const norm = (p: string) => p.replace(/\/+$/, '') || '/';
  return norm(pathname) === norm(url(href));
}
