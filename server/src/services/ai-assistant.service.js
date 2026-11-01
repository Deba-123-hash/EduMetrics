import { aiAssistantRepository } from '../repositories/ai-assistant.repository.js';
import ApiError from '../utils/ApiError.js';

export const aiAssistantService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await aiAssistantRepository.findAll(limit, offset);
    const total = await aiAssistantRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await aiAssistantRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('AiAssistant record not found');
    }
    return item;
  }
};

export default aiAssistantService;
