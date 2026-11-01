import { facultyService } from '../services/faculty.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getFacultyList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await facultyService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Faculty records fetched successfully');
});

export const getFacultyById = asyncHandler(async (req, res) => {
  const data = await facultyService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Faculty details fetched successfully');
});

export default {
  getFacultyList,
  getFacultyById
};
