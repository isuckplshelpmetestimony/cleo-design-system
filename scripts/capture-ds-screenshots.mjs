#!/usr/bin/env node
/**
 * Full-page screenshots of Cleo DS docs site → Cleo vault attachments.
 * Run: node scripts/capture-ds-screenshots.mjs
 */
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';

const BASE = process.env.CLEO_DS_URL ?? 'http://localhost:4321';
const VAULT =
  process.env.CLEO_VAULT ??
  path.join(
    process.env.HOME,
    'Library/Mobile Documents/iCloud~md~obsidian/Documents/Cleo Second Brain'
  );
const OUT = path.join(VAULT, 'attachments/cleo-ds-screenshots');

const routes = [
  '/',
  '/introduction/emotional-brief',
  '/introduction/journey',
  '/introduction/quiet-authority',
  '/introduction/how-to-use',
  '/principles',
  '/getting-started/cursor-vault',
  '/getting-started/designers',
  '/getting-started/engineers',
  '/getting-started/ai-prompt',
  '/foundations/color',
  '/foundations/typography',
  '/foundations/spacing',
  '/foundations/motion',
  '/foundations/illustration',
  '/foundations/theming',
  '/registry',
  '/components/buttons',
  '/components/inputs',
  '/components/cards',
  '/components/navigation',
  '/components/status',
  '/components/note-completion',
  '/components/denial-indicator',
  '/components/ai-assistance',
  '/components/errors-warnings',
  '/components/hitl',
  '/components/ipad-constraints',
  '/blocks/visit-shell',
  '/blocks/status-strip',
  '/blocks/stepper',
  '/blocks/tab-bar',
  '/blocks/treatment-table',
  '/blocks/locked-band',
  '/blocks/validate-sign',
  '/blocks/note-completion',
  '/patterns/landing-arc',
  '/patterns/onboarding',
  '/patterns/ai-assistance',
  '/patterns/errors',
  '/patterns/hitl',
  '/patterns/ipad-constraints',
  '/voice',
  '/art',
];

function slug(route) {
  if (route === '/') return 'home';
  return route.replace(/^\//, '').replace(/\//g, '-');
}

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const route of routes) {
  const url = `${BASE}${route}`;
  const file = path.join(OUT, `${slug(route)}.png`);
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(400);
    await page.screenshot({ path: file, fullPage: true });
    console.log('ok', route, '→', path.basename(file));
  } catch (err) {
    console.error('fail', route, err.message);
  }
}

await browser.close();
console.log('done', OUT);
