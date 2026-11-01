import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation } from 'react-router-dom';
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
  ShieldAlert,
  Building,
  ClipboardList
} from 'lucide-react';
import { useDashboardContext } from '../../context/DashboardContext.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { ROUTES } from '../../constants/routes.constants.js';

export function Sidebar() {
  const { sidebarOpen, closeSidebar } = useDashboardContext();
  const { user } = useAuth();
  const location = useLocation();
  const drawerWidth = 260;

  const role = (user?.role_name || user?.role || 'admin').toLowerCase();

  // Role-specific navigation groups
  const getNavItems = () => {
    if (role === 'student') {
      return [
        { label: 'Dashboard', path: ROUTES.STUDENT_DASHBOARD, icon: LayoutDashboard },
        { label: 'My Performance', path: ROUTES.STUDENT_PERFORMANCE, icon: BarChart2 },
        { label: 'My Attendance', path: ROUTES.STUDENT_ATTENDANCE, icon: CalendarCheck },
        { label: 'My Results', path: ROUTES.STUDENT_RESULTS, icon: Award },
        { label: 'Recommendations', path: ROUTES.STUDENT_RECOMMENDATIONS, icon: Sparkles }
      ];
    }

    if (role === 'faculty') {
      return [
        { label: 'Dashboard', path: ROUTES.FACULTY_DASHBOARD, icon: LayoutDashboard },
        { label: 'Assigned Classes', path: ROUTES.FACULTY_CLASSES, icon: BookOpen },
        { label: 'Student Directory', path: ROUTES.FACULTY_STUDENTS, icon: GraduationCap },
        { label: 'Attendance Entry', path: ROUTES.FACULTY_ATTENDANCE, icon: CalendarCheck },
        { label: 'Marks Management', path: ROUTES.FACULTY_MARKS, icon: Award },
        { label: 'Class Analytics', path: ROUTES.FACULTY_ANALYTICS, icon: BarChart2 }
      ];
    }

    // Default: Admin
    return [
      { label: 'Overview', path: ROUTES.ADMIN_DASHBOARD, icon: LayoutDashboard },
      { label: 'Students', path: ROUTES.ADMIN_STUDENTS, icon: GraduationCap },
      { label: 'Faculty', path: ROUTES.ADMIN_FACULTY, icon: Users },
      { label: 'Departments', path: ROUTES.ADMIN_DEPARTMENTS, icon: Building },
      { label: 'Classes & Sections', path: ROUTES.ADMIN_CLASSES, icon: BookOpen },
      { label: 'Examinations', path: ROUTES.ADMIN_EXAMS, icon: Award },
      { label: 'Attendance Ledger', path: ROUTES.FACULTY_ATTENDANCE, icon: CalendarCheck },
      { label: 'System Settings', path: ROUTES.ADMIN_SETTINGS, icon: Settings },
      { label: 'Audit Trail', path: ROUTES.ADMIN_AUDIT, icon: ShieldAlert }
    ];
  };

  const mainItems = getNavItems();

  const aiItems = [
    { label: 'AI Risk Analytics', path: ROUTES.AI_INSIGHTS, icon: Sparkles, badge: 'AI' },
    { label: 'AI Academic Assistant', path: ROUTES.AI_ASSISTANT, icon: Bot, badge: 'GPT' }
  ];

  return (
    <Drawer
      variant="persistent"
      open={sidebarOpen}
      sx={{
        width: sidebarOpen ? drawerWidth : 0,
        flexShrink: 0,
        transition: 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          top: 64,
          height: 'calc(100vh - 64px)',
          overflowX: 'hidden'
        }
      }}
    >
      <Box sx={{ overflowY: 'auto', p: 1.5, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Core Navigation Section */}
        <Typography
          variant="caption"
          sx={{
            px: 1.5,
            py: 1,
            fontWeight: 700,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.68rem'
          }}
        >
          {role.toUpperCase()} WORKSPACE
        </Typography>

        <List dense sx={{ p: 0, mb: 2 }}>
          {mainItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <ListItem key={item.path} disablePadding sx={{ mb: 0.4 }}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => {
                    if (window.innerWidth < 900 && closeSidebar) closeSidebar();
                  }}
                  sx={{
                    borderRadius: 2.5,
                    px: 1.5,
                    py: 1,
                    color: isActive ? 'primary.main' : 'text.secondary',
                    bgcolor: isActive ? 'action.selected' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'primary.main' : 'transparent',
                    boxShadow: isActive ? '0 0 12px var(--color-primary-glow)' : 'none',
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: 'action.hover',
                      color: 'text.primary',
                      transform: 'translateX(3px)'
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32, color: isActive ? 'primary.main' : 'inherit' }}>
                    <Icon size={18} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      fontWeight: isActive ? 700 : 500
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* AI Intelligence Section */}
        <Typography
          variant="caption"
          sx={{
            px: 1.5,
            py: 1,
            fontWeight: 700,
            color: 'primary.main',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.68rem',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <Sparkles size={13} />
          AI ENGINE
        </Typography>

        <List dense sx={{ p: 0 }}>
          {aiItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <ListItem key={item.path} disablePadding sx={{ mb: 0.4 }}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => {
                    if (window.innerWidth < 900 && closeSidebar) closeSidebar();
                  }}
                  sx={{
                    borderRadius: 2.5,
                    px: 1.5,
                    py: 1,
                    color: isActive ? 'primary.main' : 'text.secondary',
                    bgcolor: isActive ? 'action.selected' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'primary.main' : 'transparent',
                    boxShadow: isActive ? '0 0 12px var(--color-primary-glow)' : 'none',
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: 'action.hover',
                      color: 'text.primary',
                      transform: 'translateX(3px)'
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32, color: isActive ? 'primary.main' : 'inherit' }}>
                    <Icon size={18} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      fontWeight: isActive ? 700 : 500
                    }}
                  />
                  {item.badge && (
                    <Box
                      sx={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        px: 0.8,
                        py: 0.1,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText'
                      }}
                    >
                      {item.badge}
                    </Box>
                  )}
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
