import { Router } from 'express';
import { getNotificationsList, getNotificationsById } from '../controllers/notifications.controller.js';

const router = Router();

router.get('/', getNotificationsList);
router.get('/:id', getNotificationsById);

export default router;
