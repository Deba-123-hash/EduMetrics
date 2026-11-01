import { examsRepository } from '../repositories/exams.repository.js';
import ApiError from '../utils/ApiError.js';

export const examsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await examsRepository.findAll(limit, offset);
    const total = await examsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await examsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Exams record not found');
    }
    return item;
  }
};

export default examsService;
