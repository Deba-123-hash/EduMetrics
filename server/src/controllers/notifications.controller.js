import { notificationsService } from '../services/notifications.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getNotificationsList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await notificationsService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Notifications records fetched successfully');
});

export const getNotificationsById = asyncHandler(async (req, res) => {
  const data = await notificationsService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Notifications details fetched successfully');
});

export default {
  getNotificationsList,
  getNotificationsById
};
