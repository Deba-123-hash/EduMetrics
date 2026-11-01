import { aiInsightsRepository } from '../repositories/ai-insights.repository.js';
import ApiError from '../utils/ApiError.js';

export const aiInsightsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await aiInsightsRepository.findAll(limit, offset);
    const total = await aiInsightsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await aiInsightsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('AiInsights record not found');
    }
    return item;
  }
};

export default aiInsightsService;
