import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function PageHeader({ title, subtitle, actions, badge }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        mb: 3.5,
        pb: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'border-color 0.25s ease'
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'text.primary'
            }}
          >
            {title}
          </Typography>
          {badge && (
            <Box
              sx={{
                px: 1,
                py: 0.2,
                borderRadius: 1.5,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              {badge}
            </Box>
          )}
        </Box>
        {subtitle && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, fontSize: '0.875rem' }}>
            {subtitle}
          </Typography>
        )}
      </Box>
      {actions && <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap', alignItems: 'center' }}>{actions}</Box>}
    </Box>
  );
}

export default PageHeader;
