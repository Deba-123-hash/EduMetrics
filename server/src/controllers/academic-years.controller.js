import { academicYearsService } from '../services/academic-years.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getAcademicYearsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await academicYearsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'AcademicYears records fetched successfully');
});

export const getAcademicYearsById = asyncHandler(async (req, res) => {
  const data = await academicYearsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'AcademicYears details fetched successfully');
});

export default {
  getAcademicYearsList,
  getAcademicYearsById
};
