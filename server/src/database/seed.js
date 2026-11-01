#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import { pool } from '../config/database.js';
import { env } from '../config/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SEEDS_DIR = path.resolve(__dirname, '../../../database/seeds');

async function runSeeds() {
  console.log('--- Starting EduInsight AI Database Seeding ---');
  if (!env.DATABASE_URL) {
    console.error('ERROR: DATABASE_URL environment variable is not defined.');
    process.exit(1);
  }

  const client = await pool.connect();
  try {
    const files = fs
      .readdirSync(SEEDS_DIR)
      .filter((f) => f.endsWith('.sql') || f.endsWith('.js'))
      .sort();

    console.log(`Executing ${files.length} seed files in sequence...`);

    for (const file of files) {
      console.log(`Seeding: ${file}...`);
      const filePath = path.join(SEEDS_DIR, file);

      if (file.endsWith('.sql')) {
        const sql = fs.readFileSync(filePath, 'utf-8');
        await client.query(sql);
        console.log(`  -> Applied SQL seed: ${file}`);
      } else if (file.endsWith('.js')) {
        const module = await import(`file://${filePath}`);
        if (typeof module.seed === 'function') {
          await module.seed(client, bcrypt);
          console.log(`  -> Applied JS seed module: ${file}`);
        }
      }
    }

    console.log('Database seeding completed successfully.');
  } catch (err) {
    console.error('Seeding halted due to error:', err.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

runSeeds();
