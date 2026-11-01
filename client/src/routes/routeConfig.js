import { ROUTES } from '../constants/routes.constants.js';

export const routeConfig = {
  public: [
    { path: ROUTES.HOME, title: 'Home' },
    { path: ROUTES.LOGIN, title: 'Login' },
    { path: ROUTES.REGISTER, title: 'Register' },
    { path: ROUTES.FORGOT_PASSWORD, title: 'Forgot Password' }
  ],
  admin: [
    { path: ROUTES.ADMIN_DASHBOARD, title: 'Admin Dashboard' },
    { path: ROUTES.ADMIN_STUDENTS, title: 'Student Management' },
    { path: ROUTES.ADMIN_FACULTY, title: 'Faculty Management' },
    { path: ROUTES.ADMIN_DEPARTMENTS, title: 'Departments' },
    { path: ROUTES.ADMIN_CLASSES, title: 'Classes' },
    { path: ROUTES.ADMIN_SUBJECTS, title: 'Subjects' },
    { path: ROUTES.ADMIN_EXAMS, title: 'Examinations' },
    { path: ROUTES.ADMIN_SETTINGS, title: 'System Settings' },
    { path: ROUTES.ADMIN_AUDIT, title: 'Audit Trail' }
  ],
  faculty: [
    { path: ROUTES.FACULTY_DASHBOARD, title: 'Faculty Dashboard' },
    { path: ROUTES.FACULTY_CLASSES, title: 'My Classes' },
    { path: ROUTES.FACULTY_STUDENTS, title: 'My Students' },
    { path: ROUTES.FACULTY_ATTENDANCE, title: 'Attendance' },
    { path: ROUTES.FACULTY_MARKS, title: 'Marks Entry' },
    { path: ROUTES.FACULTY_ANALYTICS, title: 'Course Analytics' }
  ],
  student: [
    { path: ROUTES.STUDENT_DASHBOARD, title: 'Student Dashboard' },
    { path: ROUTES.STUDENT_PERFORMANCE, title: 'My Performance' },
    { path: ROUTES.STUDENT_ATTENDANCE, title: 'My Attendance' },
    { path: ROUTES.STUDENT_RESULTS, title: 'My Results' },
    { path: ROUTES.STUDENT_RECOMMENDATIONS, title: 'My Recommendations' }
  ]
};

export default routeConfig;
