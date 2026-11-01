import { auditLogsRepository } from '../repositories/audit-logs.repository.js';
import ApiError from '../utils/ApiError.js';

export const auditLogsService = {
  getAll: async (limit = 10, offset = 0) => {
    const items = await auditLogsRepository.findAll(limit, offset);
    const total = await auditLogsRepository.countAll();
    return { items, total };
  },
  getById: async (id) => {
    const item = await auditLogsRepository.findById(id);
    if (!item) {
      throw ApiError.notFound('AuditLogs record not found');
    }
    return item;
  }
};

export default auditLogsService;
