import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export function Toast({ open, message, severity = 'info', onClose, autoHideDuration = 4000 }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <MuiAlert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%', borderRadius: 2 }}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default Toast;
