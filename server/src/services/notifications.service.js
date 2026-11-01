import { notificationsRepository } from '../repositories/notifications.repository.js';
import ApiError from '../utils/ApiError.js';

export const notificationsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await notificationsRepository.findAll(limit, offset);
    const total = await notificationsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await notificationsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Notifications record not found');
    }
    return item;
  }
};

export default notificationsService;
