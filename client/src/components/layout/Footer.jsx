import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 3,
        mt: 'auto',
        borderTop: '1px solid #e2e8f0',
        bgcolor: '#ffffff',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2026 EduInsight AI. MCA Final-Year Major Project.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="#privacy" variant="body2" color="text.secondary" underline="hover">
          Privacy Policy
        </Link>
        <Link href="#terms" variant="body2" color="text.secondary" underline="hover">
          Terms of Service
        </Link>
        <Link href="#docs" variant="body2" color="text.secondary" underline="hover">
          Documentation
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
