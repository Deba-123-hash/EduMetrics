import React from 'react';
import Chip from '@mui/material/Chip';

export function RiskBadge({ level = 'low', score }) {
  const normalized = (level || 'low').toLowerCase();

  const configs = {
    low: { label: 'Low Risk', color: 'success' },
    medium: { label: 'Moderate Risk', color: 'warning' },
    high: { label: 'High Risk', color: 'error' }
  };

  const current = configs[normalized] || configs.low;
  const labelText = score !== undefined ? `${current.label} (${score}%)` : current.label;

  return (
    <Chip
      label={labelText}
      color={current.color}
      size="small"
      sx={{ fontWeight: 600, fontSize: '0.75rem' }}
    />
  );
}

export default RiskBadge;
