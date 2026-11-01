import { departmentsService } from '../services/departments.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getDepartmentsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await departmentsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Departments records fetched successfully');
});

export const getDepartmentsById = asyncHandler(async (req, res) => {
  const data = await departmentsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Departments details fetched successfully');
});

export default {
  getDepartmentsList,
  getDepartmentsById
};
