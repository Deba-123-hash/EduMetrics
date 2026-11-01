import { query } from '../config/database.js';

const DEMO_USERS = [
  { id: '10000000-0000-0000-0000-000000000001', full_name: 'Dr. Ramesh Kumar', email: 'admin@eduinsight.ai', role: 'admin', is_active: true },
  { id: '10000000-0000-0000-0000-000000000002', full_name: 'Prof. Ananya Gupta', email: 'faculty@eduinsight.ai', role: 'faculty', is_active: true },
  { id: '10000000-0000-0000-0000-000000000003', full_name: 'Rahul Verma', email: 'student@eduinsight.ai', role: 'student', is_active: true }
];

export const usersRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM users LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_USERS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT u.*, r.name as role FROM users u LEFT JOIN roles r ON u.role_id = r.id WHERE u.id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_USERS.find((u) => u.id === id) || null;
    }
  },
  findByEmail: async (email) => {
    try {
      const res = await query('SELECT u.*, r.name as role FROM users u LEFT JOIN roles r ON u.role_id = r.id WHERE u.email = $1;', [email]);
      return res.rows[0] || null;
    } catch {
      return DEMO_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
    }
  },
  create: async ({ roleId, fullName, email, passwordHash, phone }) => {
    const res = await query(
      `INSERT INTO users (role_id, full_name, email, password_hash, phone, is_active)
       VALUES ($1, $2, $3, $4, $5, true)
       RETURNING id, full_name, email, role_id, phone, is_active, created_at;`,
      [roleId, fullName, email, passwordHash, phone]
    );
    return res.rows[0];
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM users;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_USERS.length;
    }
  }
};

export default usersRepository;
