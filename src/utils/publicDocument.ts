import { statSync } from 'node:fs';
import { resolve } from 'node:path';

/** Build-time only: publish a document link only when its local file exists. */
export function publicDocumentUrl(path?: string): string | undefined {
  if (!path?.startsWith('/documents/') || /[\\?#\u0000]/.test(path)) return undefined;
  const segments = path.slice(1).split('/');
  if (segments.some((segment) => !segment || segment === '.' || segment === '..')) return undefined;
  try {
    const file = statSync(resolve(process.cwd(), 'public', ...segments));
    if (!file.isFile() || file.size === 0) return undefined;
    return '/' + segments.map(encodeURIComponent).join('/');
  } catch {
    return undefined;
  }
}
