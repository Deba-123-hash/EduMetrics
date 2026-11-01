import { query } from '../config/database.js';

const DEMO_INSIGHTS = [
  {
    id: 'a1000000-0000-0000-0000-000000000001',
    student_id: '30000000-0000-0000-0000-000000000001',
    insight_type: 'performance',
    title: 'Strong DBMS Aptitude',
    description: 'Rahul shows superior conceptual mastery in Database Management Systems and SQL query optimization.',
    severity: 'low',
    generated_at: new Date().toISOString()
  }
];

export const aiInsightsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM ai_insights LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_INSIGHTS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM ai_insights WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_INSIGHTS.find((i) => i.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM ai_insights;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_INSIGHTS.length;
    }
  }
};

export default aiInsightsRepository;
