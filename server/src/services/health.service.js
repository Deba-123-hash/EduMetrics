import { healthRepository } from '../repositories/health.repository.js';
import { env } from '../config/env.js';

export const healthService = {
  getSystemHealth: () => {
    return {
      success: true,
      service: 'EduInsight AI Backend API',
      message: 'EduInsight AI backend is running',
      environment: env.NODE_ENV,
      timestamp: new Date().toISOString()
    };
  },

  getDatabaseHealth: async () => {
    if (!env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not configured');
    }
    const data = await healthRepository.checkDatabaseTime();
    return {
      success: true,
      message: 'Database connected successfully',
      data: {
        database_time: data.database_time
      }
    };
  }
};

export default healthService;
