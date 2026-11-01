import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useDashboardContext } from '../../context/DashboardContext.jsx';

export function DashboardHeader({ title = 'Dashboard Overview', subtitle }) {
  const { selectedAcademicYear, setSelectedAcademicYear } = useDashboardContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: 2,
        mb: 3
      }}
    >
      <Box>
        <Typography variant="h5" component="h1" fontWeight={700}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Academic Cycle:
        </Typography>
        <FormControl size="small">
          <Select
            value={selectedAcademicYear}
            onChange={(e) => setSelectedAcademicYear(e.target.value)}
            sx={{ bgcolor: '#ffffff', borderRadius: 2 }}
          >
            <MenuItem value="2024-2025">2024–2025</MenuItem>
            <MenuItem value="2025-2026">2025–2026</MenuItem>
            <MenuItem value="2026-2027">2026–2027</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default DashboardHeader;
