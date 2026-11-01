import React from 'react';
import ProtectedRoutes from './ProtectedRoutes.jsx';
import { ROLES } from '../constants/roles.constants.js';

export function FacultyRoutes() {
  return <ProtectedRoutes allowedRoles={[ROLES.FACULTY, ROLES.ADMIN]} />;
}

export default FacultyRoutes;
