import { query } from '../config/database.js';

const DEMO_ATTENDANCE = [
  { id: '70000000-0000-0000-0000-000000000001', student_id: '30000000-0000-0000-0000-000000000001', date: '2025-10-01', status: 'present' }
];

export const attendanceRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM attendance LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_ATTENDANCE.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM attendance WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_ATTENDANCE.find((a) => a.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM attendance;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_ATTENDANCE.length;
    }
  }
};

export default attendanceRepository;
