import { Router } from 'express';
import { getPredictionsList, getPredictionsById } from '../controllers/predictions.controller.js';

const router = Router();

router.get('/', getPredictionsList);
router.get('/:id', getPredictionsById);

export default router;
