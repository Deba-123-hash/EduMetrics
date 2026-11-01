import { subjectsRepository } from '../repositories/subjects.repository.js';
import ApiError from '../utils/ApiError.js';

export const subjectsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await subjectsRepository.findAll(limit, offset);
    const total = await subjectsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await subjectsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Subjects record not found');
    }
    return item;
  }
};

export default subjectsService;
