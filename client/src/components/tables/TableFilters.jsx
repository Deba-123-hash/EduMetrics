import React from 'react';
import Box from '@mui/material/Box';
import SearchBar from '../common/SearchBar.jsx';

export function TableFilters({ search, onSearchChange, children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: 2,
        mb: 2.5
      }}
    >
      <Box sx={{ maxWidth: { sm: 300 }, width: '100%' }}>
        <SearchBar value={search} onChange={onSearchChange} />
      </Box>
      {children && (
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

export default TableFilters;
