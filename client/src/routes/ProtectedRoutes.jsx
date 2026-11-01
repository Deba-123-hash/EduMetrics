import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { ROUTES } from '../constants/routes.constants.js';

export function ProtectedRoutes({ allowedRoles }) {
  const { isAuthenticated, user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return null; // Or Loader component
  }

  // Phase 1/2 developer preview mode: allow browsing demo pages if not authenticated
  // In Phase 3, this enforces strict redirection:
  // if (!isAuthenticated) return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
