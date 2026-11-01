import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useDashboardContext } from '../../context/DashboardContext.jsx';

export function DashboardHeader({ title = 'Dashboard Overview', subtitle, actions }) {
  const { selectedAcademicYear, setSelectedAcademicYear } = useDashboardContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: 2,
        mb: 3.5,
        pb: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'border-color 0.25s ease'
      }}
    >
      <Box>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'text.primary'
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, fontSize: '0.875rem' }}>
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
        {actions}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            Academic Cycle:
          </Typography>
          <FormControl size="small">
            <Select
              value={selectedAcademicYear || '2024-2025'}
              onChange={(e) => setSelectedAcademicYear && setSelectedAcademicYear(e.target.value)}
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                fontSize: '0.825rem',
                fontWeight: 600
              }}
            >
              <MenuItem value="2024-2025">2024–2025</MenuItem>
              <MenuItem value="2025-2026">2025–2026</MenuItem>
              <MenuItem value="2026-2027">2026–2027</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardHeader;
