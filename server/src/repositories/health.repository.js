import { query } from '../config/database.js';

export const healthRepository = {
  checkDatabaseTime: async () => {
    const res = await query('SELECT NOW() AS database_time, current_database() AS database_name;');
    return res.rows[0];
  }
};

export default healthRepository;
