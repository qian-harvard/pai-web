import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('Updates page features the upcoming Yi Ju seminar', async () => {
  const page = await readFile(new URL('../Updates.html', import.meta.url), 'utf8');

  const featured = page.split('Seminars from 2026</h2>')[0];
  assert.match(featured, /Upcoming seminar[\s\S]*Mobility-Centric Modeling and Scalable Optimization on Demand Flexibility in Electric Vehicle Charging/);
  assert.match(featured, /Friday, October 9, 2026/);
  assert.match(featured, /<img src="images\/yi-ju\.jpg" alt="Yi Ju"/);
});

test('Updates page archives the Jin Ma seminar in 2026', async () => {
  const page = await readFile(new URL('../Updates.html', import.meta.url), 'utf8');

  const archive = page.split('Seminars from 2026</h2>')[1].split('Seminars from 2025</h2>')[0];
  assert.match(archive, /Structure and Data - Mechanism Understanding and Knowledge Discovery in Complex Energy Systems/);
  assert.match(archive, /October 2, 2026/);
  assert.doesNotMatch(page.split('Seminars from 2026</h2>')[0], /Structure and Data/);
  assert.ok(archive.indexOf('Structure and Data') < archive.indexOf('From PhD to Nasdaq'));
});

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
