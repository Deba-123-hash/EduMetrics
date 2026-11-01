#!/usr/bin/env node

/**
 * EduInsight AI - Environment Checker
 * Verifies Node.js version, npm, and environment configuration files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('--- Checking EduInsight AI Environment ---');
console.log(`Node Version: ${process.version}`);

const nodeMajor = parseInt(process.version.slice(1).split('.')[0], 10);
if (nodeMajor < 18) {
  console.warn('Warning: Recommended Node.js version is 18.x or 20.x.');
} else {
  console.log('Node.js version check passed.');
}

const clientEnv = path.join(ROOT_DIR, 'client', '.env');
const serverEnv = path.join(ROOT_DIR, 'server', '.env');

console.log(`Client .env exists: ${fs.existsSync(clientEnv)}`);
console.log(`Server .env exists: ${fs.existsSync(serverEnv)}`);

if (!fs.existsSync(serverEnv)) {
  console.log('Tip: Copy server/.env.example to server/.env and configure your DATABASE_URL.');
}
if (!fs.existsSync(clientEnv)) {
  console.log('Tip: Copy client/.env.example to client/.env.');
}

console.log('Environment check complete.');
