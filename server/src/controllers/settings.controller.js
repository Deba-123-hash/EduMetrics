import { settingsService } from '../services/settings.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getSettingsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await settingsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Settings records fetched successfully');
});

export const getSettingsById = asyncHandler(async (req, res) => {
  const data = await settingsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Settings details fetched successfully');
});

export default {
  getSettingsList,
  getSettingsById
};
