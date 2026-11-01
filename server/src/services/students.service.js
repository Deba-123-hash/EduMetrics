import { studentsRepository } from '../repositories/students.repository.js';
import ApiError from '../utils/ApiError.js';

export const studentsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await studentsRepository.findAll(limit, offset);
    const total = await studentsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await studentsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Students record not found');
    }
    return item;
  }
};

export default studentsService;
