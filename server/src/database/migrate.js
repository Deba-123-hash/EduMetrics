#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool, query } from '../config/database.js';
import { env } from '../config/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MIGRATIONS_DIR = path.resolve(__dirname, '../../../database/migrations');

async function runMigrations() {
  console.log('--- Starting EduInsight AI Database Migrations ---');
  if (!env.DATABASE_URL) {
    console.error('ERROR: DATABASE_URL environment variable is not defined.');
    console.error('Configure server/.env with your Neon PostgreSQL connection string before migrating.');
    process.exit(1);
  }

  const client = await pool.connect();
  try {
    // 1. Ensure migrations tracking table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        id SERIAL PRIMARY KEY,
        migration_name VARCHAR(255) UNIQUE NOT NULL,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 2. Fetch already applied migrations
    const { rows } = await client.query('SELECT migration_name FROM schema_migrations ORDER BY id ASC;');
    const appliedSet = new Set(rows.map((r) => r.migration_name));

    // 3. Read migration files in numeric order
    if (!fs.existsSync(MIGRATIONS_DIR)) {
      throw new Error(`Migrations directory not found: ${MIGRATIONS_DIR}`);
    }

    const files = fs
      .readdirSync(MIGRATIONS_DIR)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    console.log(`Found ${files.length} migration file(s). ${appliedSet.size} already applied.`);

    let newlyApplied = 0;
    for (const file of files) {
      if (appliedSet.has(file)) {
        continue;
      }

      console.log(`Applying migration: ${file}...`);
      const filePath = path.join(MIGRATIONS_DIR, file);
      const sql = fs.readFileSync(filePath, 'utf-8');

      await client.query('BEGIN');
      try {
        await client.query(sql);
        await client.query('INSERT INTO schema_migrations (migration_name) VALUES ($1);', [file]);
        await client.query('COMMIT');
        console.log(`  -> Successfully applied: ${file}`);
        newlyApplied++;
      } catch (err) {
        await client.query('ROLLBACK');
        console.error(`  -> FAILED on migration: ${file}`);
        console.error('Error Details:', err.message);
        throw err;
      }
    }

    console.log(`Migration completed successfully. Applied ${newlyApplied} new migration(s).`);
  } catch (err) {
    console.error('Migration execution halted due to error:', err.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

runMigrations();
