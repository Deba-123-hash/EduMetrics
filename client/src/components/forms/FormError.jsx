import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AlertCircle } from 'lucide-react';

export function FormError({ message }) {
  if (!message) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        p: 1.5,
        mb: 2,
        borderRadius: 1.5,
        bgcolor: '#fef2f2',
        border: '1px solid #fecaca',
        color: '#b91c1c'
      }}
    >
      <AlertCircle size={16} />
      <Typography variant="body2">{message}</Typography>
    </Box>
  );
}

export default FormError;
