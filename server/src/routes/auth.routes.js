import { Router } from 'express';
import {
  login,
  register,
  refreshToken,
  logout,
  getMe,
  forgotPassword,
  changePassword,
  getAuthList,
  getAuthById
} from '../controllers/auth.controller.js';
import { validateRequest } from '../middleware/validation.middleware.js';
import {
  loginSchema,
  registerSchema,
  forgotPasswordSchema,
  changePasswordSchema
} from '../validators/auth.validator.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

// Public auth endpoints
router.post('/login', validateRequest(loginSchema), login);
router.post('/register', validateRequest(registerSchema), register);
router.post('/refresh', refreshToken);
router.post('/logout', logout);
router.post('/forgot-password', validateRequest(forgotPasswordSchema), forgotPassword);

// Protected auth endpoints
router.get('/me', authenticate, getMe);
router.post('/change-password', authenticate, validateRequest(changePasswordSchema), changePassword);

// Scaffolding endpoints (backward compatibility)
router.get('/', getAuthList);
router.get('/:id', getAuthById);

export default router;
