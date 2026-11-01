import { healthRepository } from '../repositories/health.repository.js';
import { env } from '../config/env.js';

export const healthService = {
  getSystemHealth: () => {
    return {
      success: true,
      message: 'Backend is running',
      service: 'EduInsight AI Backend API',
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
      database: data.database_name || 'neondb',
      data: {
        database_time: data.database_time,
        database_name: data.database_name
      }
    };
  }
};

export default healthService;
