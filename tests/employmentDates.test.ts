import assert from 'node:assert/strict';
import { test } from 'node:test';
import { employmentMonth } from '../src/utils/employmentDates.ts';

test('employment months use stable labels and preserve machine-readable dates', () => {
  assert.deepEqual(employmentMonth('2026-01'), { dateTime: '2026-01', label: 'Jan 2026' });
  assert.deepEqual(employmentMonth('2024-12'), { dateTime: '2024-12', label: 'Dec 2024' });
});

test('missing and malformed months cannot produce misleading employment dates', () => {
  for (const value of [undefined, '', '2026', '2026-00', '2026-13', '2026-1', '2026-01-01', '0000-01', 'not-a-date']) {
    assert.equal(employmentMonth(value), undefined);
  }
});
