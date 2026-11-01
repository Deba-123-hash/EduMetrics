import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';

// Auth
import LoginPage from '../features/auth/pages/LoginPage.jsx';
import RegisterPage from '../features/auth/pages/RegisterPage.jsx';
import ForgotPasswordPage from '../features/auth/pages/ForgotPasswordPage.jsx';

// Admin
import AdminDashboard from '../features/admin/pages/AdminDashboard.jsx';
import UserManagement from '../features/admin/pages/UserManagement.jsx';
import DepartmentManagement from '../features/admin/pages/DepartmentManagement.jsx';
import AcademicManagement from '../features/admin/pages/AcademicManagement.jsx';
import SystemSettings from '../features/admin/pages/SystemSettings.jsx';
import AuditLogs from '../features/admin/pages/AuditLogs.jsx';

// Faculty
import FacultyDashboard from '../features/faculty/pages/FacultyDashboard.jsx';
import MyClasses from '../features/faculty/pages/MyClasses.jsx';
import MyStudents from '../features/faculty/pages/MyStudents.jsx';
import MarkAttendance from '../features/faculty/pages/MarkAttendance.jsx';
import EnterMarks from '../features/faculty/pages/EnterMarks.jsx';
import FacultyAnalytics from '../features/faculty/pages/FacultyAnalytics.jsx';

// Student
import StudentDashboard from '../features/student/pages/StudentDashboard.jsx';
import MyPerformance from '../features/student/pages/MyPerformance.jsx';
import MyAttendance from '../features/student/pages/MyAttendance.jsx';
import MyResults from '../features/student/pages/MyResults.jsx';
import MyRecommendations from '../features/student/pages/MyRecommendations.jsx';

// Students Management
import StudentList from '../features/students/pages/StudentList.jsx';
import StudentDetails from '../features/students/pages/StudentDetails.jsx';
import AddStudent from '../features/students/pages/AddStudent.jsx';
import EditStudent from '../features/students/pages/EditStudent.jsx';

// AI
import AIInsightsPage from '../features/ai-insights/pages/AIInsightsPage.jsx';
import AIAssistantPage from '../features/ai-assistant/pages/AIAssistantPage.jsx';

// Route Guards
import PublicRoutes from '../routes/PublicRoutes.jsx';
import AdminRoutes from '../routes/AdminRoutes.jsx';
import FacultyRoutes from '../routes/FacultyRoutes.jsx';
import StudentRoutes from '../routes/StudentRoutes.jsx';
import { ROUTES } from '../constants/routes.constants.js';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Landing & Auth Routes */}
      <Route path="/" element={<Home />} />
      <Route element={<PublicRoutes />}>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      </Route>

      {/* Admin Protected Routes */}
      <Route element={<AdminRoutes />}>
        <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
        <Route path={ROUTES.ADMIN_STUDENTS} element={<StudentList />} />
        <Route path="/admin/students/add" element={<AddStudent />} />
        <Route path="/admin/students/:id" element={<StudentDetails />} />
        <Route path="/admin/students/:id/edit" element={<EditStudent />} />
        <Route path={ROUTES.ADMIN_FACULTY} element={<UserManagement />} />
        <Route path={ROUTES.ADMIN_DEPARTMENTS} element={<DepartmentManagement />} />
        <Route path={ROUTES.ADMIN_CLASSES} element={<AcademicManagement />} />
        <Route path={ROUTES.ADMIN_SETTINGS} element={<SystemSettings />} />
        <Route path={ROUTES.ADMIN_AUDIT} element={<AuditLogs />} />
      </Route>

      {/* Faculty Protected Routes */}
      <Route element={<FacultyRoutes />}>
        <Route path={ROUTES.FACULTY_DASHBOARD} element={<FacultyDashboard />} />
        <Route path={ROUTES.FACULTY_CLASSES} element={<MyClasses />} />
        <Route path={ROUTES.FACULTY_STUDENTS} element={<MyStudents />} />
        <Route path={ROUTES.FACULTY_ATTENDANCE} element={<MarkAttendance />} />
        <Route path={ROUTES.FACULTY_MARKS} element={<EnterMarks />} />
        <Route path={ROUTES.FACULTY_ANALYTICS} element={<FacultyAnalytics />} />
      </Route>

      {/* Student Protected Routes */}
      <Route element={<StudentRoutes />}>
        <Route path={ROUTES.STUDENT_DASHBOARD} element={<StudentDashboard />} />
        <Route path={ROUTES.STUDENT_PERFORMANCE} element={<MyPerformance />} />
        <Route path={ROUTES.STUDENT_ATTENDANCE} element={<MyAttendance />} />
        <Route path={ROUTES.STUDENT_RESULTS} element={<MyResults />} />
        <Route path={ROUTES.STUDENT_RECOMMENDATIONS} element={<MyRecommendations />} />
      </Route>

      {/* AI Features (Accessible to authorized roles) */}
      <Route path={ROUTES.AI_INSIGHTS} element={<AIInsightsPage />} />
      <Route path={ROUTES.AI_ASSISTANT} element={<AIAssistantPage />} />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
