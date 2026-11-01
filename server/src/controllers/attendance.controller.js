import { attendanceService } from '../services/attendance.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getAttendanceList = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;
  const data = await attendanceService.getAll(limit, offset);
  return ApiResponse.success(res, data, 'Attendance records fetched successfully');
});

export const getAttendanceById = asyncHandler(async (req, res) => {
  const data = await attendanceService.getById(req.params.id);
  return ApiResponse.success(res, data, 'Attendance details fetched successfully');
});

export default {
  getAttendanceList,
  getAttendanceById
};
