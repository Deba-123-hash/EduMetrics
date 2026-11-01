import { healthService } from '../services/health.service.js';
import ApiResponse from '../utils/ApiResponse.js';

export const getHealth = (req, res) => {
  const healthData = healthService.getSystemHealth();
  return res.status(200).json(healthData);
};

export const getDatabaseHealth = async (req, res) => {
  try {
    const dbHealth = await healthService.getDatabaseHealth();
    return res.status(200).json(dbHealth);
  } catch (error) {
    console.error('Database health check failed:', error.message);
    return res.status(503).json({
      success: false,
      message: 'Database service is currently unavailable or not configured',
      error: 'DATABASE_UNAVAILABLE'
    });
  }
};

export default {
  getHealth,
  getDatabaseHealth
};
