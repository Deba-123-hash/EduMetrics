import { marksService } from '../services/marks.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getMarksList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await marksService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Marks records fetched successfully');
});

export const getMarksById = asyncHandler(async (req, res) => {
  const data = await marksService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Marks details fetched successfully');
});

export default {
  getMarksList,
  getMarksById
};
