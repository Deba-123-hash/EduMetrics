import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

export function AuthLayout({ children, title, subtitle }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        bgcolor: '#f8fafc'
      }}
    >
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <RouterLink to="/">
          <Box component="img" src="/logo.svg" alt="EduInsight AI" sx={{ height: 38 }} />
        </RouterLink>
      </Box>

      <Card
        sx={{
          maxWidth: 450,
          width: '100%',
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          boxShadow: '0 4px 20px -2px rgba(0,0,0,0.08)'
        }}
      >
        {title && (
          <Typography variant="h5" component="h1" fontWeight={700} textAlign="center" gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 3 }}>
            {subtitle}
          </Typography>
        )}
        {children}
      </Card>

      <Typography variant="caption" color="text.secondary" sx={{ mt: 3 }}>
        © 2026 EduInsight AI. MCA Final-Year Major Project.
      </Typography>
    </Box>
  );
}

export default AuthLayout;
