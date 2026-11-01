import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FolderOpen } from 'lucide-react';
import Button from './Button.jsx';

export function EmptyState({
  title = 'No records found',
  description = 'There is currently no data available for this view.',
  actionLabel,
  onAction,
  icon: Icon = FolderOpen
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 6,
        px: 2,
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: '1px dashed #cbd5e1'
      }}
    >
      <Box sx={{ color: 'text.disabled', mb: 2 }}>
        <Icon size={48} strokeWidth={1.5} />
      </Box>
      <Typography variant="h6" color="text.primary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400, mb: actionLabel ? 3 : 0 }}>
        {description}
      </Typography>
      {actionLabel && onAction && (
        <Button variant="contained" onClick={onAction} size="small">
          {actionLabel}
        </Button>
      )}
    </Box>
  );
}

export default EmptyState;
