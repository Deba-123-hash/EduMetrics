import { query } from '../config/database.js';

export const aiAssistantRepository = {
  findAll: async (limit = 10, offset = 0) => {
    const res = await query('SELECT * FROM ai_insights LIMIT $1 OFFSET $2;', [limit, offset]);
    return res.rows;
  },
  findById: async (id) => {
    const res = await query('SELECT * FROM ai_insights WHERE id = $1;', [id]);
    return res.rows[0] || null;
  },
  countAll: async () => {
    const res = await query('SELECT COUNT(*) AS total FROM ai_insights;');
    return parseInt(res.rows[0].total, 10);
  }
};

export default aiAssistantRepository;
