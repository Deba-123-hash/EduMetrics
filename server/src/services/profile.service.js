import { profileRepository } from '../repositories/profile.repository.js';
import ApiError from '../utils/ApiError.js';

export const profileService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await profileRepository.findAll(limit, offset);
    const total = await profileRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await profileRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('Profile record not found');
    }
    return item;
  }
};

export default profileService;
