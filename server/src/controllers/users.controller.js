import { usersService } from '../services/users.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getUsersList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await usersService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Users records fetched successfully');
});

export const getUsersById = asyncHandler(async (req, res) => {
  const data = await usersService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Users details fetched successfully');
});

export default {
  getUsersList,
  getUsersById
};
