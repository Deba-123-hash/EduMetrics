import React from 'react';
import ProtectedRoutes from './ProtectedRoutes.jsx';
import { ROLES } from '../constants/roles.constants.js';

export function StudentRoutes() {
  return <ProtectedRoutes allowedRoles={[ROLES.STUDENT, ROLES.ADMIN]} />;
}

export default StudentRoutes;
