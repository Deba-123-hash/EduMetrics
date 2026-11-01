import { Router } from 'express';
import { getSettingsList, getSettingsById } from '../controllers/settings.controller.js';

const router = Router();

router.get('/', getSettingsList);
router.get('/:id', getSettingsById);

export default router;
