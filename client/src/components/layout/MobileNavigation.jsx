import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart2, Bot } from 'lucide-react';
import { ROUTES } from '../../constants/routes.constants.js';

export function MobileNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { sm: 'none' },
        zIndex: 1200,
        borderTop: '1px solid #e2e8f0'
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(_, newValue) => navigate(newValue)}
      >
        <BottomNavigationAction label="Dashboard" value={ROUTES.ADMIN_DASHBOARD} icon={<LayoutDashboard size={20} />} />
        <BottomNavigationAction label="Students" value={ROUTES.ADMIN_STUDENTS} icon={<Users size={20} />} />
        <BottomNavigationAction label="Analytics" value={ROUTES.FACULTY_ANALYTICS} icon={<BarChart2 size={20} />} />
        <BottomNavigationAction label="Assistant" value={ROUTES.AI_ASSISTANT} icon={<Bot size={20} />} />
      </BottomNavigation>
    </Paper>
  );
}

export default MobileNavigation;
