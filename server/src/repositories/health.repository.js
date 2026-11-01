import { query } from '../config/database.js';

export const healthRepository = {
  checkDatabaseTime: async () => {
    const res = await query('SELECT NOW() AS database_time;');
    return res.rows[0];
  }
};

export default healthRepository;
