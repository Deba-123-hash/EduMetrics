import { classesRepository } from '../repositories/classes.repository.js';
import ApiError from '../utils/ApiError.js';

export const classesService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await classesRepository.findAll(limit, offset);
    const total = await classesRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await classesRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Classes record not found');
    }
    return item;
  }
};

export default classesService;
