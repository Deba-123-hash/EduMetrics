import { predictionsRepository } from '../repositories/predictions.repository.js';
import ApiError from '../utils/ApiError.js';

export const predictionsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await predictionsRepository.findAll(limit, offset);
    const total = await predictionsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await predictionsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Predictions record not found');
    }
    return item;
  }
};

export default predictionsService;
