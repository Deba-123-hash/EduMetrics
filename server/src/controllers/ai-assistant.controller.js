import { aiAssistantService } from '../services/ai-assistant.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getAiAssistantList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await aiAssistantService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'AiAssistant records fetched successfully');
});

export const getAiAssistantById = asyncHandler(async (req, res) => {
  const data = await aiAssistantService.getById(req.params.id);
  return ApiResponse.success(res, data, 'AiAssistant details fetched successfully');
});

export default {
  getAiAssistantList,
  getAiAssistantById
};
