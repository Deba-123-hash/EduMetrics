import { departmentsRepository } from '../repositories/departments.repository.js';
import ApiError from '../utils/ApiError.js';

export const departmentsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await departmentsRepository.findAll(limit, offset);
    const total = await departmentsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await departmentsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Departments record not found');
    }
    return item;
  }
};

export default departmentsService;
