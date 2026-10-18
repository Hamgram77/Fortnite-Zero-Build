import { readFile, rm, writeFile } from 'node:fs/promises';

const outputPath = new URL('../dist/index.html', import.meta.url);
const serverBundlePath = new URL('../.prerender/staticMarkup.js', import.meta.url);
const serverOutputPath = new URL('../.prerender/', import.meta.url);
const { renderStaticSite } = await import(serverBundlePath.href);
const html = await readFile(outputPath, 'utf8');
const rootMarker = '<div id="root"></div>';
const googleVerification = /<meta\s+name="google-site-verification"\s+content="qNuObu2RHrX6sKwxbCZ5j013WckDOmJqqZO2w8SiCCM"\s*\/?>/;

if (!googleVerification.test(html)) {
  throw new Error('The Google site-verification meta tag changed or is missing.');
}

if (!html.includes(rootMarker)) {
  throw new Error('Unable to find the application root in dist/index.html.');
}

await writeFile(outputPath, html.replace(rootMarker, `<div id="root">${renderStaticSite()}</div>`));
await rm(serverOutputPath, { recursive: true, force: true });
