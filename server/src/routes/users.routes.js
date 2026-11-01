import { Router } from 'express';
import { getUsersList, getUsersById } from '../controllers/users.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { authorizeRole } from '../middleware/role.middleware.js';
import { ROLES } from '../constants/roles.constants.js';

const router = Router();

// Users management is restricted to Admin
router.use(authenticate);
router.use(authorizeRole(ROLES.ADMIN));

router.get('/', getUsersList);
router.get('/:id', getUsersById);

export default router;
