import pkg from 'pg';
const { Pool } = pkg;
import { env } from './env.js';

const isProduction = env.NODE_ENV === 'production';
const hasSsl = env.DATABASE_URL.includes('sslmode=require') || isProduction;

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: hasSsl ? { rejectUnauthorized: false } : false,
  max: 20, // Max clients in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client pool:', err.message);
});

export const query = async (text, params) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  if (!isProduction && duration > 100) {
    console.warn(`Slow SQL query (${duration}ms):`, text);
  }
  return res;
};

export const getClient = async () => {
  const client = await pool.connect();
  return client;
};

export default {
  pool,
  query,
  getClient
};
