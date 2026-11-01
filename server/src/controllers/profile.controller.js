import { profileService } from '../services/profile.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getProfileList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await profileService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Profile records fetched successfully');
});

export const getProfileById = asyncHandler(async (req, res) => {
  const data = await profileService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Profile details fetched successfully');
});

export default {
  getProfileList,
  getProfileById
};
