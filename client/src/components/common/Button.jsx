import React from 'react';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export function Button({
  children,
  variant = 'contained',
  color = 'primary',
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  type = 'button',
  fullWidth = false,
  className = '',
  ...props
}) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      startIcon={loading ? <CircularProgress size={18} color="inherit" /> : startIcon}
      endIcon={endIcon}
      className={className}
      {...props}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
