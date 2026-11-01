import React from 'react';
import ProtectedRoutes from './ProtectedRoutes.jsx';
import { ROLES } from '../constants/roles.constants.js';

export function AdminRoutes() {
  return <ProtectedRoutes allowedRoles={[ROLES.ADMIN]} />;
}

export default AdminRoutes;
