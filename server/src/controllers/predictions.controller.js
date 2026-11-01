import { predictionsService } from '../services/predictions.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getPredictionsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await predictionsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Predictions records fetched successfully');
});

export const getPredictionsById = asyncHandler(async (req, res) => {
  const data = await predictionsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Predictions details fetched successfully');
});

export default {
  getPredictionsList,
  getPredictionsById
};
