import { Router } from 'express';
import { getAiAssistantList, getAiAssistantById } from '../controllers/ai-assistant.controller.js';

const router = Router();

router.get('/', getAiAssistantList);
router.get('/:id', getAiAssistantById);

export default router;
