import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import { Menu as MenuIcon, Bell, User, LogOut, Settings as SettingsIcon, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDashboardContext } from '../../context/DashboardContext.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { useThemeContext } from '../../theme/themeContext.jsx';
import { ThemeSwitcher } from '../common/ThemeSwitcher.jsx';
import { NotificationPanel } from './NotificationPanel.jsx';
import { ROUTES } from '../../constants/routes.constants.js';

export function Navbar() {
  const { toggleSidebar } = useDashboardContext();
  const { user, logout } = useAuth();
  const { activeThemeTokens } = useThemeContext();
  const navigate = useNavigate();

  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);

  const handleOpenUserMenu = (e) => setUserMenuAnchor(e.currentTarget);
  const handleCloseUserMenu = () => setUserMenuAnchor(null);

  const handleOpenNotifications = (e) => setNotificationAnchor(e.currentTarget);
  const handleCloseNotifications = () => setNotificationAnchor(null);

  const handleLogout = () => {
    handleCloseUserMenu();
    logout();
    navigate(ROUTES.LOGIN);
  };

  const roleName = user?.role_name || (typeof user?.role === 'string' ? user.role : 'User');

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        bgcolor: 'var(--color-bg-glass, rgba(255, 255, 255, 0.85))',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: 1100,
        transition: 'background-color 0.25s ease, border-color 0.25s ease'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 3 }, minHeight: 64 }}>
        {/* Left Section: Sidebar Toggle & Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleSidebar}
            sx={{
              borderRadius: 2,
              p: 1,
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': { bgcolor: 'action.hover' }
            }}
            aria-label="Toggle navigation drawer"
          >
            <MenuIcon size={19} />
          </IconButton>

          <Box
            onClick={() => navigate('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer'
            }}
          >
            <Box component="img" src="/logo.svg" alt="EduInsight AI" sx={{ height: 28 }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              EduInsight AI
            </Typography>
          </Box>
        </Box>

        {/* Right Section: Theme Switcher, Notifications & Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
          {/* Theme Switcher Widget */}
          <ThemeSwitcher />

          {/* Notifications Trigger */}
          <Tooltip title="Notifications">
            <IconButton
              size="small"
              onClick={handleOpenNotifications}
              sx={{
                color: 'text.secondary',
                p: 1,
                borderRadius: '10px',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  bgcolor: 'action.hover'
                }
              }}
              aria-label="View notifications"
            >
              <Badge color="primary" variant="dot" invisible={false}>
                <Bell size={18} />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Notifications Popover */}
          <Popover
            open={Boolean(notificationAnchor)}
            anchorEl={notificationAnchor}
            onClose={handleCloseNotifications}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
              sx: {
                mt: 1.5,
                boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                borderRadius: 3,
                bgcolor: 'transparent'
              }
            }}
          >
            <NotificationPanel onClose={handleCloseNotifications} />
          </Popover>

          {/* User Profile Pill */}
          <Box
            onClick={handleOpenUserMenu}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              cursor: 'pointer',
              py: 0.5,
              px: 1,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.2s',
              '&:hover': {
                bgcolor: 'action.hover',
                borderColor: 'primary.main'
              }
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontSize: '0.85rem',
                fontWeight: 700,
                boxShadow: '0 0 10px var(--color-primary-glow)'
              }}
            >
              {user?.full_name ? user.full_name.charAt(0).toUpperCase() : <User size={16} />}
            </Avatar>
            <Box sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'left' }}>
              <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.825rem', lineHeight: 1.2 }}>
                {user?.full_name || 'Guest User'}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', textTransform: 'capitalize' }}>
                {roleName}
              </Typography>
            </Box>
          </Box>

          {/* User Profile Dropdown Menu */}
          <Menu
            anchorEl={userMenuAnchor}
            open={Boolean(userMenuAnchor)}
            onClose={handleCloseUserMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
              sx: {
                mt: 1.5,
                minWidth: 200,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                p: 0.5
              }
            }}
          >
            <Box sx={{ px: 2, py: 1.2, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                {user?.full_name || 'Guest User'}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                {user?.email || 'user@eduinsight.ai'}
              </Typography>
              <Chip
                size="small"
                label={roleName.toUpperCase()}
                color="primary"
                sx={{ mt: 0.8, height: 20, fontSize: '0.65rem', fontWeight: 700 }}
              />
            </Box>

            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                navigate(ROUTES.ADMIN_SETTINGS);
              }}
              sx={{ borderRadius: 2, my: 0.3 }}
            >
              <ListItemIcon>
                <SettingsIcon size={16} />
              </ListItemIcon>
              Settings & Themes
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                navigate(ROUTES.AI_INSIGHTS);
              }}
              sx={{ borderRadius: 2, my: 0.3 }}
            >
              <ListItemIcon>
                <Sparkles size={16} />
              </ListItemIcon>
              AI Insights
            </MenuItem>

            <MenuItem onClick={handleLogout} sx={{ borderRadius: 2, my: 0.3, color: 'error.main' }}>
              <ListItemIcon sx={{ color: 'error.main' }}>
                <LogOut size={16} />
              </ListItemIcon>
              Sign Out
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
