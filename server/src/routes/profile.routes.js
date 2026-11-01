import { Router } from 'express';
import { getProfileList, getProfileById } from '../controllers/profile.controller.js';

const router = Router();

router.get('/', getProfileList);
router.get('/:id', getProfileById);

export default router;
