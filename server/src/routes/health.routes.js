import { Router } from 'express';
import { getHealth, getDatabaseHealth } from '../controllers/health.controller.js';

const router = Router();

// GET /api/health - Core backend health
router.get('/', getHealth);

// GET /api/health/database - Neon PostgreSQL check
router.get('/database', getDatabaseHealth);

export default router;
