import { authService } from '../services/auth.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const data = await authService.login(email, password);
  return ApiResponse.success(res, data, 'User logged in successfully');
});

export const register = asyncHandler(async (req, res) => {
  const data = await authService.register(req.body);
  return ApiResponse.created(res, data, 'User registered successfully');
});

export const refreshToken = asyncHandler(async (req, res) => {
  const token = req.body.refreshToken || req.headers['x-refresh-token'];
  const data = await authService.refreshToken(token);
  return ApiResponse.success(res, data, 'Access token refreshed successfully');
});

export const logout = asyncHandler(async (req, res) => {
  return ApiResponse.success(res, null, 'User logged out successfully');
});

export const getMe = asyncHandler(async (req, res) => {
  const user = await authService.getCurrentUser(req.user.id);
  return ApiResponse.success(res, user, 'Current user profile fetched successfully');
});

export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const result = await authService.forgotPassword(email);
  return ApiResponse.success(res, result, 'Password reset request processed');
});

export const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const result = await authService.changePassword(req.user.id, currentPassword, newPassword);
  return ApiResponse.success(res, result, 'Password changed successfully');
});

export const getAuthList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await authService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Auth records fetched successfully');
});

export const getAuthById = asyncHandler(async (req, res) => {
  const data = await authService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Auth details fetched successfully');
});

export default {
  login,
  register,
  refreshToken,
  logout,
  getMe,
  forgotPassword,
  changePassword,
  getAuthList,
  getAuthById
};
