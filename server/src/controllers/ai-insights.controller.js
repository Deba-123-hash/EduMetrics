import { aiInsightsService } from '../services/ai-insights.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getAiInsightsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await aiInsightsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'AiInsights records fetched successfully');
});

export const getAiInsightsById = asyncHandler(async (req, res) => {
  const data = await aiInsightsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'AiInsights details fetched successfully');
});

export default {
  getAiInsightsList,
  getAiInsightsById
};
