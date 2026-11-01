import { query } from '../config/database.js';

const DEMO_EXAMS = [
  { id: '40000000-0000-0000-0000-000000000001', exam_name: 'Mid-Term Examination 2025', exam_type: 'Mid-Term', exam_date: '2025-10-15', maximum_marks: 100 }
];

export const examsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM exams LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_EXAMS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM exams WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_EXAMS.find((e) => e.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM exams;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_EXAMS.length;
    }
  }
};

export default examsRepository;
