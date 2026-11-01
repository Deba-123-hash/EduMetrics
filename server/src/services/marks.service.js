import { marksRepository } from '../repositories/marks.repository.js';
import ApiError from '../utils/ApiError.js';

export const marksService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await marksRepository.findAll(limit, offset);
    const total = await marksRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await marksRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Marks record not found');
    }
    return item;
  }
};

export default marksService;
