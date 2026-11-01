import React from 'react';
import Box from '@mui/material/Box';

export function DashboardGrid({ children, columns = { xs: 1, sm: 2, md: 4 } }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: `repeat(${columns.xs || 1}, 1fr)`,
          sm: `repeat(${columns.sm || 2}, 1fr)`,
          md: `repeat(${columns.md || 4}, 1fr)`
        },
        gap: 2.5,
        mb: 3
      }}
    >
      {children}
    </Box>
  );
}

export default DashboardGrid;
