import { settingsRepository } from '../repositories/settings.repository.js';
import ApiError from '../utils/ApiError.js';

export const settingsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await settingsRepository.findAll(limit, offset);
    const total = await settingsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await settingsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Settings record not found');
    }
    return item;
  }
};

export default settingsService;
