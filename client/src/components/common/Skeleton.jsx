import React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export function Skeleton({ variant = 'rectangular', width = '100%', height = 40, count = 1 }) {
  if (count === 1) {
    return <MuiSkeleton variant={variant} width={width} height={height} sx={{ borderRadius: 1 }} />;
  }

  return (
    <Box sx={{ width }}>
      {Array.from({ length: count }).map((_, idx) => (
        <MuiSkeleton
          key={idx}
          variant={variant}
          width="100%"
          height={height}
          sx={{ mb: 1, borderRadius: 1 }}
        />
      ))}
    </Box>
  );
}

export default Skeleton;
