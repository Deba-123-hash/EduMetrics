import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HelpCircle } from 'lucide-react';

export function AIExplanation({ title = 'How was this calculated?', explanation }) {
  if (!explanation) return null;

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: '#f8fafc',
        border: '1px solid #e2e8f0',
        my: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
        <HelpCircle size={16} color="#64748b" />
        <Typography variant="subtitle2" fontWeight={600} color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {explanation}
      </Typography>
    </Box>
  );
}

export default AIExplanation;
