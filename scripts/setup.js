#!/usr/bin/env node

/**
 * EduInsight AI - Automated Setup Script
 * Copies .env.example files to .env if not present, and sets up project prerequisites.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('--- Initializing EduInsight AI Workspace Setup ---');

function copyIfNotExists(src, dest) {
  if (fs.existsSync(src) && !fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    console.log(`Created: ${path.relative(ROOT_DIR, dest)} from template.`);
  } else if (fs.existsSync(dest)) {
    console.log(`Preserved existing: ${path.relative(ROOT_DIR, dest)}`);
  }
}

copyIfNotExists(path.join(ROOT_DIR, '.env.example'), path.join(ROOT_DIR, '.env'));
copyIfNotExists(path.join(ROOT_DIR, 'client', '.env.example'), path.join(ROOT_DIR, 'client', '.env'));
copyIfNotExists(path.join(ROOT_DIR, 'server', '.env.example'), path.join(ROOT_DIR, 'server', '.env'));

console.log('Setup finished successfully.');
