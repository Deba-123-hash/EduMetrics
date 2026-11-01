export const appConfig = {
  appName: 'EduInsight AI',
  appTitle: 'AI-Powered Student Performance Analytics and Prediction Dashboard',
  version: '1.0.0',
  apiBaseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  roles: {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
  },
  defaultPagination: {
    page: 1,
    limit: 10
  }
};

export default appConfig;
