import { Router } from 'express';
import { getClassesList, getClassesById } from '../controllers/classes.controller.js';

const router = Router();

router.get('/', getClassesList);
router.get('/:id', getClassesById);

export default router;
