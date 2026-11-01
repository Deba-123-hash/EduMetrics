import { query } from '../config/database.js';

const DEMO_CLASSES = [
  { id: 'e0000000-0000-0000-0000-000000000001', name: 'MCA-S3', semester: 3, section: 'A' },
  { id: 'e0000000-0000-0000-0000-000000000002', name: 'MCA-S1', semester: 1, section: 'A' }
];

export const classesRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM classes LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_CLASSES.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM classes WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_CLASSES.find((c) => c.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM classes;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_CLASSES.length;
    }
  }
};

export default classesRepository;
