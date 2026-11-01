export const API_ENDPOINTS = {
  HEALTH: '/health',
  HEALTH_DATABASE: '/health/database',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password'
  },
  STUDENTS: '/students',
  FACULTY: '/faculty',
  DEPARTMENTS: '/departments',
  CLASSES: '/classes',
  SUBJECTS: '/subjects',
  ACADEMIC_YEARS: '/academic-years',
  EXAMS: '/exams',
  MARKS: '/marks',
  ATTENDANCE: '/attendance',
  ANALYTICS: '/analytics',
  AI_INSIGHTS: '/ai-insights',
  PREDICTIONS: '/predictions',
  RECOMMENDATIONS: '/recommendations',
  AI_ASSISTANT: '/ai-assistant',
  REPORTS: '/reports',
  NOTIFICATIONS: '/notifications',
  AUDIT_LOGS: '/audit-logs'
};

export default API_ENDPOINTS;
