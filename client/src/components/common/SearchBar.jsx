import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Search } from 'lucide-react';

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search records...',
  fullWidth = true
}) {
  return (
    <TextField
      variant="outlined"
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search size={18} color="#94a3b8" />
          </InputAdornment>
        )
      }}
    />
  );
}

export default SearchBar;
