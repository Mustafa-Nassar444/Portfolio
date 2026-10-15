import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, unlinkSync, rmdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { publicDocumentUrl } from '../src/utils/publicDocument.ts';

test('CV links require a real, non-empty document in the public documents folder', () => {
  const root = mkdtempSync(join(tmpdir(), 'portfolio-cv-'));
  const previousDirectory = process.cwd();
  const publicRoot = join(root, 'public');
  const documents = join(publicRoot, 'documents');
  mkdirSync(documents, { recursive: true });
  const cv = join(documents, 'My CV.pdf');
  const empty = join(documents, 'empty.pdf');
  writeFileSync(cv, 'test fixture');
  writeFileSync(empty, '');
  try {
    process.chdir(root);
    assert.equal(publicDocumentUrl('/documents/My CV.pdf'), '/documents/My%20CV.pdf');
    for (const path of [undefined, '', '/documents/missing.pdf', '/documents/empty.pdf', '/documents/', '/documents/../outside.pdf', 'https://example.com/cv.pdf', '/documents/cv.pdf?x=1', '/documents\\cv.pdf']) {
      assert.equal(publicDocumentUrl(path), undefined, `Must omit invalid or unavailable path: ${path}`);
    }
  } finally {
    process.chdir(previousDirectory);
    unlinkSync(cv);
    unlinkSync(empty);
    rmdirSync(documents);
    rmdirSync(publicRoot);
    rmdirSync(root);
  }
});
