import { pool } from './database.js';
import { env } from './env.js';

export async function testDatabaseConnection() {
  console.log('======================================================');
  console.log('       Testing Neon PostgreSQL Connection Status      ');
  console.log('======================================================');

  if (!env.DATABASE_URL) {
    console.error('ERROR: DATABASE_URL is not configured in environment.');
    process.exit(1);
  }

  // Obfuscate credentials when logging host/database
  try {
    const url = new URL(env.DATABASE_URL);
    console.log(`Target Host   : ${url.hostname}`);
    console.log(`Database Name : ${url.pathname.replace('/', '')}`);
    console.log(`SSL Mode      : ${url.searchParams.get('sslmode') || 'require'}`);
  } catch {
    console.log('Target Database: Configured');
  }

  let client;
  try {
    console.log('Acquiring client from PostgreSQL connection pool...');
    client = await pool.connect();
    console.log('Connection pool client acquired successfully!');

    // Execute standard verification query
    const result = await client.query('SELECT NOW() AS current_time, current_database() AS database_name;');
    const row = result.rows[0];

    console.log('\n--- Query Verification Results ---');
    console.log(`Current Time  : ${row.current_time}`);
    console.log(`Database Name : ${row.database_name}`);
    console.log('PostgreSQL Responded : YES');
    console.log('Connection Pool Status: HEALTHY');

    // Check table count
    const tablesResult = await client.query(`
      SELECT COUNT(*) AS total_tables
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `);
    console.log(`Total Tables in 'public' schema: ${tablesResult.rows[0].total_tables}`);

    console.log('\n======================================================');
    console.log('STATUS: NEON DATABASE CONNECTED SUCCESSFULLY');
    console.log('======================================================');
    return {
      success: true,
      database: row.database_name,
      time: row.current_time
    };
  } catch (err) {
    console.error('\nERROR: Failed to connect to Neon PostgreSQL database.');
    console.error('Reason:', err.message);
    console.log('\n======================================================');
    console.log('STATUS: DATABASE CONNECTION FAILED');
    console.log('======================================================');
    process.exit(1);
  } finally {
    if (client) {
      client.release();
    }
    await pool.end();
  }
}

// Execute directly if run as a script
if (process.argv[1] && process.argv[1].endsWith('testDatabase.js')) {
  testDatabaseConnection();
}

export default testDatabaseConnection;
