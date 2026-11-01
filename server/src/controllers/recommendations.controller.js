import { recommendationsService } from '../services/recommendations.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getRecommendationsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await recommendationsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Recommendations records fetched successfully');
});

export const getRecommendationsById = asyncHandler(async (req, res) => {
  const data = await recommendationsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Recommendations details fetched successfully');
});

export default {
  getRecommendationsList,
  getRecommendationsById
};
