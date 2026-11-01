import { Router } from 'express';
import { getSubjectsList, getSubjectsById } from '../controllers/subjects.controller.js';

const router = Router();

router.get('/', getSubjectsList);
router.get('/:id', getSubjectsById);

export default router;
