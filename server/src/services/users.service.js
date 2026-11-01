import { usersRepository } from '../repositories/users.repository.js';
import ApiError from '../utils/ApiError.js';

export const usersService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await usersRepository.findAll(limit, offset);
    const total = await usersRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await usersRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Users record not found');
    }
    return item;
  }
};

export default usersService;
