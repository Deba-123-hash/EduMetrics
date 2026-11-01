import { academicYearsRepository } from '../repositories/academic-years.repository.js';
import ApiError from '../utils/ApiError.js';

export const academicYearsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await academicYearsRepository.findAll(limit, offset);
    const total = await academicYearsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await academicYearsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('AcademicYears record not found');
    }
    return item;
  }
};

export default academicYearsService;
