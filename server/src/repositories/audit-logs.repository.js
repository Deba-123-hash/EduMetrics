import { query } from '../config/database.js';

const DEMO_LOGS = [
  { id: 'l0000000-0000-0000-0000-000000000001', action: 'LOGIN_SUCCESS', entity_type: 'users', details: { ip: '127.0.0.1' }, created_at: new Date().toISOString() },
  { id: 'l0000000-0000-0000-0000-000000000002', action: 'MARKS_SUBMITTED', entity_type: 'marks', details: { class_id: 'MCA-S3' }, created_at: new Date().toISOString() }
];

export const auditLogsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM audit_logs LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_LOGS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM audit_logs WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_LOGS.find((l) => l.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM audit_logs;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_LOGS.length;
    }
  }
};

export default auditLogsRepository;
