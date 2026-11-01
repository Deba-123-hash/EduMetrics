import { query } from '../config/database.js';

const DEMO_DEPARTMENTS = [
  { id: 'c0000000-0000-0000-0000-000000000001', code: 'MCA', name: 'Master of Computer Applications' },
  { id: 'c0000000-0000-0000-0000-000000000002', code: 'BCA', name: 'Bachelor of Computer Applications' },
  { id: 'c0000000-0000-0000-0000-000000000003', code: 'CSE', name: 'Computer Science and Engineering' }
];

export const departmentsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM departments LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_DEPARTMENTS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM departments WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_DEPARTMENTS.find((d) => d.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM departments;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_DEPARTMENTS.length;
    }
  }
};

export default departmentsRepository;
