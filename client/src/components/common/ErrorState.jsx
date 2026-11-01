import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AlertCircle } from 'lucide-react';
import Button from './Button.jsx';

export function ErrorState({
  title = 'Something went wrong',
  message = 'Failed to load data from the server. Please try again.',
  onRetry
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
        borderRadius: 2,
        bgcolor: '#fef2f2',
        border: '1px solid #fecaca'
      }}
    >
      <Box sx={{ color: '#ef4444', mb: 1.5 }}>
        <AlertCircle size={40} />
      </Box>
      <Typography variant="h6" color="#991b1b" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="#7f1d1d" sx={{ maxWidth: 450, mb: onRetry ? 2 : 0 }}>
        {message}
      </Typography>
      {onRetry && (
        <Button variant="outlined" color="error" size="small" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </Box>
  );
}

export default ErrorState;
