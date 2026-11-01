import { query } from '../config/database.js';

const DEMO_FACULTY = [
  {
    id: '20000000-0000-0000-0000-000000000001',
    user_id: '10000000-0000-0000-0000-000000000002',
    employee_id: 'EMP-MCA-001',
    full_name: 'Prof. Ananya Gupta',
    designation: 'Associate Professor',
    department: 'Master of Computer Applications'
  }
];

export const facultyRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM faculty LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_FACULTY.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM faculty WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_FACULTY.find((f) => f.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM faculty;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_FACULTY.length;
    }
  }
};

export default facultyRepository;
