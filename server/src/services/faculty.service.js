import { facultyRepository } from '../repositories/faculty.repository.js';
import ApiError from '../utils/ApiError.js';

export const facultyService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await facultyRepository.findAll(limit, offset);
    const total = await facultyRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await facultyRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Faculty record not found');
    }
    return item;
  }
};

export default facultyService;
