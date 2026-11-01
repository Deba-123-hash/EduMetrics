import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export function Alert({ severity = 'info', title, children, onClose, sx = {} }) {
  return (
    <Box sx={{ mb: 2, ...sx }}>
      <MuiAlert severity={severity} onClose={onClose} sx={{ borderRadius: 2 }}>
        {title && <strong>{title}: </strong>}
        {children}
      </MuiAlert>
    </Box>
  );
}

export default Alert;
