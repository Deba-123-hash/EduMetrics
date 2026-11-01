import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');
const clientDistDir = path.join(rootDir, 'client', 'dist');

describe('Performance & Bundle Optimization Suite', () => {
  test('Vite production build directory must exist and contain index.html', () => {
    assert.ok(fs.existsSync(clientDistDir), 'client/dist directory does not exist');
    const indexHtml = path.join(clientDistDir, 'index.html');
    assert.ok(fs.existsSync(indexHtml), 'client/dist/index.html does not exist');
    const content = fs.readFileSync(indexHtml, 'utf-8');
    assert.match(content, /<!doctype html>/i);
    assert.match(content, /<div id="root">/i);
  });

  test('Production assets folder must contain CSS and JavaScript chunks', () => {
    const assetsDir = path.join(clientDistDir, 'assets');
    assert.ok(fs.existsSync(assetsDir), 'assets folder missing in client/dist');
    const files = fs.readdirSync(assetsDir);
    const cssFiles = files.filter((f) => f.endsWith('.css'));
    const jsFiles = files.filter((f) => f.endsWith('.js'));

    assert.ok(cssFiles.length >= 1, 'At least 1 compiled CSS stylesheet must exist');
    assert.ok(jsFiles.length >= 1, 'Compiled JS chunks must exist');
  });

  test('All JavaScript chunks must be optimized and under 600 KB minified', () => {
    const assetsDir = path.join(clientDistDir, 'assets');
    const files = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.js'));

    const oversized = [];
    files.forEach((file) => {
      const fullPath = path.join(assetsDir, file);
      const sizeKb = fs.statSync(fullPath).size / 1024;
      if (sizeKb > 600) {
        oversized.push({ file, sizeKb: sizeKb.toFixed(2) });
      }
    });

    assert.equal(oversized.length, 0, `Oversized chunks found: ${JSON.stringify(oversized)}`);
  });

  test('Compiled CSS stylesheet must be lightweight (< 50 KB)', () => {
    const assetsDir = path.join(clientDistDir, 'assets');
    const cssFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.css'));

    cssFiles.forEach((file) => {
      const fullPath = path.join(assetsDir, file);
      const sizeKb = fs.statSync(fullPath).size / 1024;
      assert.ok(sizeKb < 50, `CSS file ${file} is ${sizeKb.toFixed(2)} KB, expected < 50 KB`);
    });
  });

  test('PWA manifest and SVG brand assets must exist in dist output', () => {
    const manifestPath = path.join(clientDistDir, 'manifest.json');
    const faviconPath = path.join(clientDistDir, 'favicon.svg');
    const logoPath = path.join(clientDistDir, 'logo.svg');

    assert.ok(fs.existsSync(manifestPath), 'manifest.json missing in dist');
    assert.ok(fs.existsSync(faviconPath), 'favicon.svg missing in dist');
    assert.ok(fs.existsSync(logoPath), 'logo.svg missing in dist');
  });
});

