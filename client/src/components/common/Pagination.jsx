import React from 'react';
import Box from '@mui/material/Box';
import MuiPagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

export function Pagination({ page = 1, totalPages = 1, totalItems = 0, onPageChange }) {
  if (totalPages <= 1 && totalItems === 0) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 2,
        px: 1,
        flexWrap: 'wrap',
        gap: 1
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Page {page} of {totalPages} {totalItems ? `(${totalItems} items)` : ''}
      </Typography>
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={(_, p) => onPageChange(p)}
        color="primary"
        shape="rounded"
        size="small"
      />
    </Box>
  );
}

export default Pagination;
