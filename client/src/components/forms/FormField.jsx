import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function FormField({ label, required, error, children, helperText }) {
  return (
    <Box sx={{ mb: 2 }}>
      {label && (
        <Typography variant="body2" fontWeight={500} color="text.primary" sx={{ mb: 0.75 }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </Typography>
      )}
      {children}
      {(error || helperText) && (
        <Typography variant="caption" color={error ? 'error.main' : 'text.secondary'} sx={{ mt: 0.5, display: 'block' }}>
          {error || helperText}
        </Typography>
      )}
    </Box>
  );
}

export default FormField;
