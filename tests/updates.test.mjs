import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('Updates page archives the Siyu Huang Factorial Energy seminar in 2026', async () => {
  const page = await readFile(new URL('../Updates.html', import.meta.url), 'utf8');

  const archive = page.split('Seminars from 2026</h2>')[1].split('Seminars from 2025</h2>')[0];
  assert.match(archive, /From PhD to Nasdaq: Dr\. Siyu Huang of Factorial Energy/);
  assert.doesNotMatch(page.split('Seminars from 2026</h2>')[0], /From PhD to Nasdaq/);
  assert.match(archive, /September 11, 2026/);
  assert.match(page, /The Node \(SEC 2\.203\)/);
  assert.match(page, /https:\/\/grid\.harvard\.edu\/event-details\/from-phd-to-nasdaq-dr-siyu-huang-of-factorial-energy/);
  assert.match(page, /<img src="images\/siyu-huang-factorial-energy\.pdf-figure\.png" alt="Event flyer for Dr\. Siyu Huang's Factorial Energy seminar"/);
});

test('Updates page archives the Qianwen Xu seminar in 2026', async () => {
  const page = await readFile(new URL('../Updates.html', import.meta.url), 'utf8');

  assert.match(page, /Seminars from 2026[\s\S]*AI-Driven Stability and Control of Converter-Dominated Energy Systems/);
});
