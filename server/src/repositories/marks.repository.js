import { query } from '../config/database.js';

const DEMO_MARKS = [
  { id: '60000000-0000-0000-0000-000000000001', student_id: '30000000-0000-0000-0000-000000000001', subject: 'CS301', marks_obtained: 82.5, maximum_marks: 100 }
];

export const marksRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM marks LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_MARKS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM marks WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_MARKS.find((m) => m.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM marks;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_MARKS.length;
    }
  }
};

export default marksRepository;
