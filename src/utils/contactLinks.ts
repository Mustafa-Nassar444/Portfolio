import type { ProfessionalLink } from '../types/content';
import { webUrl } from './webUrl.ts';

/** Accept a single mailbox, never mail headers or multiple recipients. */
export function emailLink(value?: string): { address: string; url: string } | undefined {
  const address = value?.trim();
  if (!address || !/^[^\s@<>:;?,\\]+@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z]{2,}$/i.test(address)) return undefined;
  return { address, url: `mailto:${encodeURIComponent(address).replace('%40', '@')}` };
}

export function professionalLinks(links: ProfessionalLink[]): ProfessionalLink[] {
  return links.flatMap(({ label, url }) => {
    const href = webUrl(url);
    return href && label.trim() ? [{ label: label.trim(), url: href }] : [];
  });
}
