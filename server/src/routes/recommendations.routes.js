import { Router } from 'express';
import { getRecommendationsList, getRecommendationsById } from '../controllers/recommendations.controller.js';

const router = Router();

router.get('/', getRecommendationsList);
router.get('/:id', getRecommendationsById);

export default router;
