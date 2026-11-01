import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

export function Select({
  label,
  value,
  onChange,
  options = [],
  error,
  helperText,
  disabled = false,
  fullWidth = true,
  name,
  ...props
}) {
  const labelId = `select-${name || 'field'}-label`;

  return (
    <FormControl fullWidth={fullWidth} error={Boolean(error)} size="small" disabled={disabled}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <MuiSelect
        labelId={labelId}
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        {...props}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {(helperText || error) && <FormHelperText>{helperText || error}</FormHelperText>}
    </FormControl>
  );
}

export default Select;
