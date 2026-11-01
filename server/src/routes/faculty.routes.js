import { Router } from 'express';
import { getFacultyList, getFacultyById } from '../controllers/faculty.controller.js';

const router = Router();

router.get('/', getFacultyList);
router.get('/:id', getFacultyById);

export default router;
