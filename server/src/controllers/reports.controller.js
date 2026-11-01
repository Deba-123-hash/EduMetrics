import { reportsService } from '../services/reports.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getReportsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await reportsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Reports records fetched successfully');
});

export const getReportsById = asyncHandler(async (req, res) => {
  const data = await reportsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Reports details fetched successfully');
});

export default {
  getReportsList,
  getReportsById
};
