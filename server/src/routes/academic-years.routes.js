import { Router } from 'express';
import { getAcademicYearsList, getAcademicYearsById } from '../controllers/academic-years.controller.js';

const router = Router();

router.get('/', getAcademicYearsList);
router.get('/:id', getAcademicYearsById);

export default router;
