import { Router } from 'express';
import { getDepartmentsList, getDepartmentsById } from '../controllers/departments.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { authorizeRole } from '../middleware/role.middleware.js';
import { ROLES } from '../constants/roles.constants.js';

const router = Router();

// Departments accessible to Admin and Faculty
router.use(authenticate);
router.use(authorizeRole(ROLES.ADMIN, ROLES.FACULTY));

router.get('/', getDepartmentsList);
router.get('/:id', getDepartmentsById);

export default router;
