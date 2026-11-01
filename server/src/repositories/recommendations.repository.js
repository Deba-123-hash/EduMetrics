import { query } from '../config/database.js';

const DEMO_RECOMMENDATIONS = [
  {
    id: 'b1000000-0000-0000-0000-000000000001',
    student_id: '30000000-0000-0000-0000-000000000001',
    recommendation_type: 'revision',
    title: 'Reinforce ML Optimization Algorithms',
    description: 'Review gradient descent and loss function minimization before finals.',
    priority: 'medium',
    is_completed: false
  }
];

export const recommendationsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM recommendations LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_RECOMMENDATIONS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM recommendations WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_RECOMMENDATIONS.find((r) => r.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM recommendations;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_RECOMMENDATIONS.length;
    }
  }
};

export default recommendationsRepository;
