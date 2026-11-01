import { recommendationsRepository } from '../repositories/recommendations.repository.js';
import ApiError from '../utils/ApiError.js';

export const recommendationsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await recommendationsRepository.findAll(limit, offset);
    const total = await recommendationsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await recommendationsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Recommendations record not found');
    }
    return item;
  }
};

export default recommendationsService;
