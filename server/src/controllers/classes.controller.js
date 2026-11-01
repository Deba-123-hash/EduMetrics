import { classesService } from '../services/classes.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getClassesList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await classesService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Classes records fetched successfully');
});

export const getClassesById = asyncHandler(async (req, res) => {
  const data = await classesService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Classes details fetched successfully');
});

export default {
  getClassesList,
  getClassesById
};
