import assert from 'node:assert/strict';
import { test } from 'node:test';
import { emailLink, professionalLinks } from '../src/utils/contactLinks.ts';

test('configured mailbox creates an encoded mailto without injecting headers', () => {
  assert.deepEqual(emailLink(' developer+portfolio@example.com '), { address: 'developer+portfolio@example.com', url: 'mailto:developer%2Bportfolio@example.com' });
  for (const address of [undefined, '', 'not-email', 'a@example..com', 'a@example.com?subject=test', 'a@example.com\r\nBcc:b@example.com', 'a@example.com,b@example.com']) assert.equal(emailLink(address), undefined);
});

test('missing, unlabeled, and unsafe professional links do not render actions', () => {
  assert.deepEqual(professionalLinks([]), []);
  assert.deepEqual(professionalLinks([
    { label: ' LinkedIn ', url: 'https://www.linkedin.com/in/test-fixture' },
    { label: 'GitHub', url: 'https://github.com/test-fixture' },
    { label: '', url: 'https://example.com' },
    { label: 'Bad link', url: 'javascript:alert(1)' },
    { label: 'Missing', url: '' },
  ]), [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/test-fixture' },
    { label: 'GitHub', url: 'https://github.com/test-fixture' },
  ]);
});
