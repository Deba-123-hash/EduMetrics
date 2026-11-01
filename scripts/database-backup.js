#!/usr/bin/env node

/**
 * EduInsight AI - Database Backup Helper Script
 * Automates schema and data backup documentation.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const backupDir = path.join(ROOT_DIR, 'database', 'backups');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

console.log('Database backup utility ready.');
console.log(`Backups directory: ${path.relative(ROOT_DIR, backupDir)}`);
console.log('To dump from Neon PostgreSQL, run:');
console.log('  pg_dump "$DATABASE_URL" -F p -b -v -f ./database/backups/eduinsight_backup.sql');
