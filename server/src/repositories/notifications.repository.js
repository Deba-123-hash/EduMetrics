import { query } from '../config/database.js';

export const notificationsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    const res = await query('SELECT * FROM notifications LIMIT $1 OFFSET $2;', [limit, offset]);
    return res.rows;
  },
  findById: async (id) => {
    const res = await query('SELECT * FROM notifications WHERE id = $1;', [id]);
    return res.rows[0] || null;
  },
  countAll: async () => {
    const res = await query('SELECT COUNT(*) AS total FROM notifications;');
    return parseInt(res.rows[0].total, 10);
  }
};

export default notificationsRepository;
