import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FolderOpen } from 'lucide-react';
import Button from './Button.jsx';
import EmptyState3D from '../../three/components/EmptyState3D.jsx';
import { GlassCard } from './GlassCard.jsx';

export function EmptyState({
  title = 'No records found',
  description = 'There is currently no data available for this view.',
  actionLabel,
  onAction,
  icon: Icon = FolderOpen,
  use3D = true
}) {
  return (
    <GlassCard
      hover={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 6,
        px: 3,
        borderStyle: 'dashed',
        borderColor: 'divider'
      }}
    >
      <Box sx={{ mb: 2 }}>
        {use3D ? (
          <EmptyState3D size={85} />
        ) : (
          <Box
            sx={{
              p: 2,
              borderRadius: '50%',
              bgcolor: 'action.hover',
              color: 'text.secondary',
              display: 'inline-flex'
            }}
          >
            <Icon size={40} strokeWidth={1.5} />
          </Box>
        )}
      </Box>

      <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, mb: 0.5 }}>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 420, mb: actionLabel ? 3 : 0 }}>
        {description}
      </Typography>

      {actionLabel && onAction && (
        <Button variant="contained" color="primary" onClick={onAction} size="small" sx={{ borderRadius: 2 }}>
          {actionLabel}
        </Button>
      )}
    </GlassCard>
  );
}

export default EmptyState;
