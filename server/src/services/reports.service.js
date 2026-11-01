import { reportsRepository } from '../repositories/reports.repository.js';
import ApiError from '../utils/ApiError.js';

export const reportsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await reportsRepository.findAll(limit, offset);
    const total = await reportsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await reportsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Reports record not found');
    }
    return item;
  }
};

export default reportsService;
