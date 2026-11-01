#!/usr/bin/env node

/**
 * EduInsight AI - Clean Script
 * Removes build artifacts, caches, and temporary files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const targets = [
  path.join(ROOT_DIR, 'client', 'dist'),
  path.join(ROOT_DIR, 'client', '.vite'),
  path.join(ROOT_DIR, 'server', 'dist'),
  path.join(ROOT_DIR, 'coverage')
];

for (const target of targets) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`Cleaned: ${path.relative(ROOT_DIR, target)}`);
  }
}

console.log('Clean operation finished.');
