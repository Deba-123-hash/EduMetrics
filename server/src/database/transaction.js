import { pool } from '../config/database.js';

/**
 * Execute an arbitrary callback function inside an atomic database transaction.
 * Automatically handles client acquisition, BEGIN, COMMIT, ROLLBACK, and client release.
 *
 * @param {Function} callback - Async function that receives the database client
 * @returns {Promise<any>} Result returned by the callback
 */
export async function withTransaction(callback) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

export default withTransaction;
