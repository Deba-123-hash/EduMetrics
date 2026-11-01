import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2.5,
        px: 3,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1.5,
        transition: 'background-color 0.25s ease, border-color 0.25s ease'
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.825rem' }}>
        © 2026 EduInsight AI • MCA Final-Year Major Project
      </Typography>
      <Box sx={{ display: 'flex', gap: 2.5 }}>
        <Link href="#privacy" variant="body2" sx={{ color: 'text.secondary', fontSize: '0.825rem' }} underline="hover">
          Privacy Policy
        </Link>
        <Link href="#terms" variant="body2" sx={{ color: 'text.secondary', fontSize: '0.825rem' }} underline="hover">
          Terms of Service
        </Link>
        <Link href="#docs" variant="body2" sx={{ color: 'text.secondary', fontSize: '0.825rem' }} underline="hover">
          System Docs
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
