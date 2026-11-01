import { query } from '../config/database.js';

const DEMO_PREDICTIONS = [
  {
    id: '90000000-0000-0000-0000-000000000001',
    student_id: '30000000-0000-0000-0000-000000000001',
    risk_level: 'low',
    risk_score: 18.5,
    prediction_summary: 'Consistently strong marks and healthy attendance (>85%). Low academic risk profile.',
    predicted_at: new Date().toISOString()
  }
];

export const predictionsRepository = {
  findAll: async (limit = 10, offset = 0) => {
    try {
      const res = await query('SELECT * FROM predictions LIMIT $1 OFFSET $2;', [limit, offset]);
      return res.rows;
    } catch {
      return DEMO_PREDICTIONS.slice(offset, offset + limit);
    }
  },
  findById: async (id) => {
    try {
      const res = await query('SELECT * FROM predictions WHERE id = $1;', [id]);
      return res.rows[0] || null;
    } catch {
      return DEMO_PREDICTIONS.find((p) => p.id === id) || null;
    }
  },
  countAll: async () => {
    try {
      const res = await query('SELECT COUNT(*) AS total FROM predictions;');
      return parseInt(res.rows[0].total, 10);
    } catch {
      return DEMO_PREDICTIONS.length;
    }
  }
};

export default predictionsRepository;
