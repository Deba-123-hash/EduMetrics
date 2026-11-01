import { query } from '../config/database.js';

const DEMO_ANALYTICS = [
  { id: '80000000-0000-0000-0000-000000000001', metric: 'OVERALL_ATTENDANCE_AVG', value: 84.6, updated_at: new Date().toISOString() }
];

export const analyticsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM analytics LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_ANALYTICS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM analytics WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_ANALYTICS.find((a) => a.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM analytics;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_ANALYTICS.length;
    }
  }
};

export default analyticsRepository;
