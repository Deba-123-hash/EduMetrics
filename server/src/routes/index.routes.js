import { Router } from 'express';
import healthRoutes from './health.routes.js';
import authRoutes from './auth.routes.js';
import usersRoutes from './users.routes.js';
import studentsRoutes from './students.routes.js';
import facultyRoutes from './faculty.routes.js';
import departmentsRoutes from './departments.routes.js';
import classesRoutes from './classes.routes.js';
import subjectsRoutes from './subjects.routes.js';
import academicYearsRoutes from './academic-years.routes.js';
import examsRoutes from './exams.routes.js';
import marksRoutes from './marks.routes.js';
import attendanceRoutes from './attendance.routes.js';
import analyticsRoutes from './analytics.routes.js';
import aiInsightsRoutes from './ai-insights.routes.js';
import predictionsRoutes from './predictions.routes.js';
import recommendationsRoutes from './recommendations.routes.js';
import aiAssistantRoutes from './ai-assistant.routes.js';
import reportsRoutes from './reports.routes.js';
import notificationsRoutes from './notifications.routes.js';
import profileRoutes from './profile.routes.js';
import settingsRoutes from './settings.routes.js';
import auditLogsRoutes from './audit-logs.routes.js';

const router = Router();

// Health
router.use('/health', healthRoutes);

// Auth & Users
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/profile', profileRoutes);

// Academic Core
router.use('/departments', departmentsRoutes);
router.use('/academic-years', academicYearsRoutes);
router.use('/classes', classesRoutes);
router.use('/subjects', subjectsRoutes);
router.use('/students', studentsRoutes);
router.use('/faculty', facultyRoutes);

// Exams, Marks & Attendance
router.use('/exams', examsRoutes);
router.use('/marks', marksRoutes);
router.use('/attendance', attendanceRoutes);

// Analytics & AI
router.use('/analytics', analyticsRoutes);
router.use('/ai-insights', aiInsightsRoutes);
router.use('/predictions', predictionsRoutes);
router.use('/recommendations', recommendationsRoutes);
router.use('/ai-assistant', aiAssistantRoutes);

// System, Reports & Auditing
router.use('/reports', reportsRoutes);
router.use('/notifications', notificationsRoutes);
router.use('/settings', settingsRoutes);
router.use('/audit-logs', auditLogsRoutes);

export default router;
