import { Router } from 'express';
import { getReportsList, getReportsById } from '../controllers/reports.controller.js';

const router = Router();

router.get('/', getReportsList);
router.get('/:id', getReportsById);

export default router;
