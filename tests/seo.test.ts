import assert from 'node:assert/strict';
import { test } from 'node:test';
import { canonicalUrl, siteOrigin } from '../src/utils/seo.ts';

test('site configuration omits unset domains and validates configured origins', () => {
  assert.equal(siteOrigin(), undefined);
  assert.equal(siteOrigin('  '), undefined);
  assert.equal(siteOrigin('https://portfolio.example.test/'), 'https://portfolio.example.test');
  for (const value of ['not-a-url', 'ftp://example.test', 'https://user:secret@example.test', 'https://example.test/subpath', 'https://example.test?x=1']) assert.throws(() => siteOrigin(value));
});

test('canonicals use the configured domain and remove tracking and fragments', () => {
  assert.equal(canonicalUrl('/projects/'), undefined);
  assert.equal(canonicalUrl('/projects/demo?utm_source=test#gallery', new URL('https://portfolio.example.test')), 'https://portfolio.example.test/projects/demo/');
  assert.equal(canonicalUrl('/', new URL('https://portfolio.example.test')), 'https://portfolio.example.test/');
});
