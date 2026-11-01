import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  Award,
  BarChart2,
  Sparkles,
  Bot,
  Settings,
  ShieldAlert
} from 'lucide-react';
import { useDashboardContext } from '../../context/DashboardContext.jsx';
import { ROUTES } from '../../constants/routes.constants.js';

const navItems = [
  { label: 'Admin Dashboard', path: ROUTES.ADMIN_DASHBOARD, icon: LayoutDashboard },
  { label: 'Students', path: ROUTES.ADMIN_STUDENTS, icon: GraduationCap },
  { label: 'Faculty', path: ROUTES.ADMIN_FACULTY, icon: Users },
  { label: 'Classes & Subjects', path: ROUTES.ADMIN_CLASSES, icon: BookOpen },
  { label: 'Attendance', path: ROUTES.FACULTY_ATTENDANCE, icon: CalendarCheck },
  { label: 'Exams & Marks', path: ROUTES.ADMIN_EXAMS, icon: Award },
  { label: 'Analytics', path: ROUTES.FACULTY_ANALYTICS, icon: BarChart2 },
  { label: 'AI Insights', path: ROUTES.AI_INSIGHTS, icon: Sparkles },
  { label: 'AI Assistant', path: ROUTES.AI_ASSISTANT, icon: Bot },
  { label: 'Audit Logs', path: ROUTES.ADMIN_AUDIT, icon: ShieldAlert },
  { label: 'Settings', path: ROUTES.ADMIN_SETTINGS, icon: Settings }
];

export function Sidebar() {
  const { sidebarOpen } = useDashboardContext();
  const drawerWidth = 240;

  return (
    <Drawer
      variant="persistent"
      open={sidebarOpen}
      sx={{
        width: sidebarOpen ? drawerWidth : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid #e2e8f0',
          bgcolor: '#ffffff',
          top: 64,
          height: 'calc(100vh - 64px)'
        }
      }}
    >
      <Box sx={{ overflow: 'auto', py: 1 }}>
        <List dense>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <ListItem key={item.path} disablePadding sx={{ display: 'block', px: 1, py: 0.5 }}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  sx={{
                    borderRadius: 1.5,
                    color: 'text.secondary',
                    '&.active': {
                      bgcolor: 'primary.light',
                      color: 'primary.dark',
                      fontWeight: 600,
                      '& .MuiListItemIcon-root': { color: 'primary.main' }
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: 'text.secondary' }}>
                    <Icon size={18} />
                  </ListItemIcon>
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
