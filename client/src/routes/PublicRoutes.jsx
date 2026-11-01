import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { ROUTES } from '../constants/routes.constants.js';

export function PublicRoutes() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user) {
    if (user.role === 'admin') return <Navigate to={ROUTES.ADMIN_DASHBOARD} replace />;
    if (user.role === 'faculty') return <Navigate to={ROUTES.FACULTY_DASHBOARD} replace />;
    if (user.role === 'student') return <Navigate to={ROUTES.STUDENT_DASHBOARD} replace />;
  }

  return <Outlet />;
}

export default PublicRoutes;
