#!/usr/bin/env node

import { pool } from '../config/database.js';
import { env } from '../config/env.js';

async function checkDatabase() {
  console.log('--- Checking PostgreSQL / Neon Connectivity ---');

  if (!env.DATABASE_URL) {
    console.warn('Status: DATABASE_URL is not set in environment.');
    console.log('To connect to Neon PostgreSQL, set DATABASE_URL in server/.env');
    return;
  }

  // Obfuscate credentials for safe diagnostic logging
  try {
    const url = new URL(env.DATABASE_URL);
    console.log(`Target Host: ${url.hostname}`);
    console.log(`Database Name: ${url.pathname.replace('/', '')}`);
    console.log(`SSL Mode Required: ${url.searchParams.get('sslmode') === 'require'}`);
  } catch {
    console.log('Database URL configured (format non-standard URI).');
  }

  try {
    const client = await pool.connect();
    console.log('Successfully acquired client from PostgreSQL pool!');

    const timeRes = await client.query('SELECT NOW() AS current_time, version();');
    console.log(`Database Time: ${timeRes.rows[0].current_time}`);
    console.log(`PostgreSQL Engine Version: ${timeRes.rows[0].version}`);

    const tablesRes = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name ASC;
    `);

    const tableNames = tablesRes.rows.map((r) => r.table_name);
    console.log(`Application Tables Detected (${tableNames.length}):`, tableNames);

    client.release();
    console.log('Database diagnostic check PASSED.');
  } catch (err) {
    console.error('PostgreSQL Connection Check FAILED:', err.message);
  } finally {
    await pool.end();
  }
}

checkDatabase();
