import { query } from '../config/database.js';

export const reportsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    const res = await query('SELECT * FROM reports LIMIT $1 OFFSET $2;', [limit, offset]);
    return res.rows;
  },
  findById: async (id) => {
    const res = await query('SELECT * FROM reports WHERE id = $1;', [id]);
    return res.rows[0] || null;
  },
  countAll: async () => {
    const res = await query('SELECT COUNT(*) AS total FROM reports;');
    return parseInt(res.rows[0].total, 10);
  }
};

export default reportsRepository;
