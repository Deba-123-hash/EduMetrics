import { Router } from 'express';
import { getExamsList, getExamsById } from '../controllers/exams.controller.js';

const router = Router();

router.get('/', getExamsList);
router.get('/:id', getExamsById);

export default router;
