import { query } from '../config/database.js';

export const settingsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    const res = await query('SELECT * FROM system_settings LIMIT $1 OFFSET $2;', [limit, offset]);
    return res.rows;
  },
  findById: async (id) => {
    const res = await query('SELECT * FROM system_settings WHERE id = $1;', [id]);
    return res.rows[0] || null;
  },
  countAll: async () => {
    const res = await query('SELECT COUNT(*) AS total FROM system_settings;');
    return parseInt(res.rows[0].total, 10);
  }
};

export default settingsRepository;
