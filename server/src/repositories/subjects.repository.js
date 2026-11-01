import { query } from '../config/database.js';

const DEMO_SUBJECTS = [
  { id: 'f0000000-0000-0000-0000-000000000001', code: 'CS301', name: 'Advanced Database Management Systems', credits: 4 },
  { id: 'f0000000-0000-0000-0000-000000000002', code: 'CS302', name: 'Machine Learning & AI', credits: 4 }
];

export const subjectsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM subjects LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_SUBJECTS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM subjects WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_SUBJECTS.find((s) => s.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM subjects;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_SUBJECTS.length;
    }
  }
};

export default subjectsRepository;
