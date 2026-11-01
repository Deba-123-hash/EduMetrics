import { Router } from 'express';
import { getAiInsightsList, getAiInsightsById } from '../controllers/ai-insights.controller.js';

const router = Router();

router.get('/', getAiInsightsList);
router.get('/:id', getAiInsightsById);

export default router;
