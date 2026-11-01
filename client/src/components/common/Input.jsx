import React from 'react';
import TextField from '@mui/material/TextField';

export function Input({
  label,
  value,
  onChange,
  error,
  helperText,
  type = 'text',
  placeholder,
  required = false,
  fullWidth = true,
  disabled = false,
  name,
  ...props
}) {
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      error={Boolean(error)}
      helperText={helperText || error}
      type={type}
      placeholder={placeholder}
      required={required}
      fullWidth={fullWidth}
      disabled={disabled}
      name={name}
      size="small"
      {...props}
    />
  );
}

export default Input;
