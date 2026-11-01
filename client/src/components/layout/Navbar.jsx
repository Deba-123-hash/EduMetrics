import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Menu, Bell, User } from 'lucide-react';
import { useDashboardContext } from '../../context/DashboardContext.jsx';
import { useAuth } from '../../hooks/useAuth.js';

export function Navbar() {
  const { toggleSidebar } = useDashboardContext();
  const { user } = useAuth();

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid #e2e8f0',
        bgcolor: '#ffffff',
        zIndex: 1100
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
            <Menu size={20} />
          </IconButton>
          <Box component="img" src="/logo.svg" alt="EduInsight AI" sx={{ height: 28, display: { xs: 'none', sm: 'block' } }} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="small" color="inherit">
            <Bell size={18} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: '0.875rem' }}>
              {user?.full_name ? user.full_name.charAt(0).toUpperCase() : <User size={16} />}
            </Avatar>
            <Typography variant="body2" fontWeight={600} sx={{ display: { xs: 'none', md: 'block' } }}>
              {user?.full_name || 'Guest User'}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
