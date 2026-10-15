export function siteOrigin(value?: string): string | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash || url.pathname !== '/') {
    throw new Error('SITE_URL must be an absolute HTTP(S) origin, without credentials, a path, query, or fragment.');
  }
  return url.origin;
}

export function canonicalUrl(pathname: string, site?: URL): string | undefined {
  if (!site) return undefined;
  const url = new URL(pathname, site);
  url.search = ''; url.hash = '';
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.href;
}
