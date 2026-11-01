import { studentsService } from '../services/students.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getStudentsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await studentsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Students records fetched successfully');
});

export const getStudentsById = asyncHandler(async (req, res) => {
  const data = await studentsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Students details fetched successfully');
});

export default {
  getStudentsList,
  getStudentsById
};
