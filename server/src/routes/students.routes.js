import { Router } from 'express';
import { getStudentsList, getStudentsById } from '../controllers/students.controller.js';

const router = Router();

router.get('/', getStudentsList);
router.get('/:id', getStudentsById);

export default router;
