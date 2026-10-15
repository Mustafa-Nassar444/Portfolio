import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] ?? 'dist');
assert.ok(existsSync(root), 'Run npm run build first.');
const pages = [];
function scan(directory) {
  for (const item of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) scan(path);
    else if (item.name.endsWith('.html')) pages.push(path);
  }
}
scan(root);
const documents = new Map(pages.map((path) => [path, readFileSync(path, 'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')]));
const sitemapPath = join(root, 'sitemap-0.xml');
const sitemapXml = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : undefined;
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]));
for (const [path, html] of documents) {
  const label = path.slice(root.length + 1);
  assert.equal((html.match(/<main\b/g) ?? []).length, 1, `${label}: one main landmark`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${label}: one H1`);
  assert.match(html, /<html lang="en"/, `${label}: language`);
  assert.match(html, /<title>[^<]+<\/title>/, `${label}: title`);
  assert.match(html, /name="description" content="[^"]+"/, `${label}: description`);
  assert.match(html, /property="og:title"/, `${label}: Open Graph`);
  if (label === '404.html') {
    assert.ok(!html.includes('rel="canonical"'), '404 must not have an indexable canonical');
  } else if (sitemapXml) {
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical?.endsWith('/'), `${label}: configured canonical`);
    assert.ok(sitemapXml.includes(`<loc>${canonical}</loc>`), `${label}: sitemap membership`);
    assert.ok(html.includes(`property="og:url" content="${canonical}"`), `${label}: matching social URL`);
  } else {
    assert.ok(!html.includes('rel="canonical"'), `${label}: no invented domain`);
  }
  assert.match(html, /<main\b[^>]*id="main-content"/, `${label}: skip-link target`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${label}: unique IDs`);
  let previousHeading = 0;
  for (const match of html.matchAll(/<h([1-6])\b/g)) {
    const level = Number(match[1]);
    assert.ok(level <= previousHeading + 1, `${label}: heading order`);
    previousHeading = level;
  }
  for (const match of html.matchAll(/<(a|img|link|button|nav|section|dialog)\b([^>]*)>/g)) {
    const attrs = attributes(match[2]);
    if (match[1] === 'img' && attrs.src) {
      assert.ok('alt' in attrs && attrs.alt.trim(), `${label}: image alt`);
      assert.ok(Number(attrs.width) > 0 && Number(attrs.height) > 0, `${label}: image dimensions`);
    }
    for (const id of (attrs['aria-labelledby'] ?? attrs['aria-controls'] ?? '').split(' ').filter(Boolean)) assert.ok(ids.includes(id), `${label}: ARIA target ${id}`);
    const value = attrs.href ?? attrs.src;
    if (!value || (!value.startsWith('/') && !value.startsWith('#')) || value.startsWith('//')) continue;
    const url = new URL(value, 'https://verification.example.test/' + label.replaceAll('\\', '/').replace(/index\.html$/, ''));
    const pathname = decodeURIComponent(url.pathname);
    let target = resolve(root, '.' + pathname);
    if (!existsSync(target) || !/\.[a-z0-9]+$/i.test(pathname)) target = join(target, 'index.html');
    assert.ok(existsSync(target), `${label}: broken asset/link ${value}`);
    if (url.hash) {
      const targetHtml = documents.get(target);
      assert.ok(targetHtml?.includes(`id="${url.hash.slice(1)}"`), `${label}: missing anchor ${value}`);
    }
  }
}
assert.match(readFileSync(join(root, '404.html'), 'utf8'), /name="robots" content="noindex, follow"/);
if (sitemapXml) assert.ok(!sitemapXml.includes('/404'), '404 excluded from sitemap');
console.log(`Verified ${pages.length} HTML pages: metadata, headings, landmarks, image dimensions, links, and anchors.`);

const css = readFileSync('src/styles/global.css', 'utf8');
const luminance = (hex) => {
  const channels = [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255).map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
};
for (const selector of [':root', ':root[data-theme="dark"]']) {
  const section = css.slice(css.indexOf(selector + ' {')).split('}')[0];
  const colors = Object.fromEntries([...section.matchAll(/--([\w-]+):\s*(#[a-f\d]{6})\b/gi)].map((match) => [match[1], match[2]]));
  for (const [foreground, background] of [['ink', 'paper'], ['muted', 'paper'], ['muted', 'surface'], ['accent', 'surface'], ['on-accent', 'accent'], ['accent', 'accent-soft']]) {
    const levels = [luminance(colors[foreground]), luminance(colors[background])].sort((a, b) => b - a);
    assert.ok((levels[0] + 0.05) / (levels[1] + 0.05) >= 4.5, `${selector}: contrast ${foreground}/${background}`);
  }
}
console.log('Both theme palettes pass 4.5:1 for the primary text/button color combinations.');
