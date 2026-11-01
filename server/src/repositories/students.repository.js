import { query } from '../config/database.js';

const DEMO_STUDENTS = [
  {
    id: '30000000-0000-0000-0000-000000000001',
    user_id: '10000000-0000-0000-0000-000000000003',
    student_id: 'MCA2024-001',
    full_name: 'Rahul Verma',
    department: 'Master of Computer Applications',
    class_name: 'MCA 2nd Year',
    attendance_pct: 88.5,
    average_marks: 74.2,
    risk_level: 'low'
  }
];

export const studentsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM students LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_STUDENTS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM students WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_STUDENTS.find((s) => s.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM students;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_STUDENTS.length;
    }
  }
};

export default studentsRepository;
