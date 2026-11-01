import { analyticsRepository } from '../repositories/analytics.repository.js';
import ApiError from '../utils/ApiError.js';

export const analyticsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await analyticsRepository.findAll(limit, offset);
    const total = await analyticsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await analyticsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Analytics record not found');
    }
    return item;
  }
};

export default analyticsService;
