import { auditLogsService } from '../services/audit-logs.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getAuditLogsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await auditLogsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'AuditLogs records fetched successfully');
});

export const getAuditLogsById = asyncHandler(async (req, res) => {
  const data = await auditLogsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'AuditLogs details fetched successfully');
});

export default {
  getAuditLogsList,
  getAuditLogsById
};
