import { Router } from 'express';
import { getMarksList, getMarksById } from '../controllers/marks.controller.js';

const router = Router();

router.get('/', getMarksList);
router.get('/:id', getMarksById);

export default router;
