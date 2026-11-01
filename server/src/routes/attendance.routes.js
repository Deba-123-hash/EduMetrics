import { Router } from 'express';
import { getAttendanceList, getAttendanceById } from '../controllers/attendance.controller.js';

const router = Router();

router.get('/', getAttendanceList);
router.get('/:id', getAttendanceById);

export default router;
