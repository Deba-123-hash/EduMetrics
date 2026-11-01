import { attendanceRepository } from '../repositories/attendance.repository.js';
import ApiError from '../utils/ApiError.js';

export const attendanceService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await attendanceRepository.findAll(limit, offset);
    const total = await attendanceRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await attendanceRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Attendance record not found');
    }
    return item;
  }
};

export default attendanceService;
