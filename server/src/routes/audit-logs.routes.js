import { Router } from 'express';
import { getAuditLogsList, getAuditLogsById } from '../controllers/audit-logs.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { authorizeRole } from '../middleware/role.middleware.js';
import { ROLES } from '../constants/roles.constants.js';

const router = Router();

// Audit logs are restricted to Admin
router.use(authenticate);
router.use(authorizeRole(ROLES.ADMIN));

router.get('/', getAuditLogsList);
router.get('/:id', getAuditLogsById);

export default router;
