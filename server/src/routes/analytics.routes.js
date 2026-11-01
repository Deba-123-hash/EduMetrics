import { Router } from 'express';
import { getAnalyticsList, getAnalyticsById } from '../controllers/analytics.controller.js';

const router = Router();

router.get('/', getAnalyticsList);
router.get('/:id', getAnalyticsById);

export default router;
