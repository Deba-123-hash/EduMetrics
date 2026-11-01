import { subjectsService } from '../services/subjects.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getSubjectsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await subjectsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Subjects records fetched successfully');
});

export const getSubjectsById = asyncHandler(async (req, res) => {
  const data = await subjectsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Subjects details fetched successfully');
});

export default {
  getSubjectsList,
  getSubjectsById
};
