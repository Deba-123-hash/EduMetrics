import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Target, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button.jsx';

export function RecommendationCard({
  title,
  description,
  priority = 'medium',
  subject,
  isCompleted = false,
  onComplete
}) {
  const priorityColors = {
    high: 'error',
    medium: 'warning',
    low: 'info'
  };

  return (
    <Card sx={{ p: 2.5, mb: 2, border: '1px solid #e2e8f0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Target size={18} color="#4f46e5" />
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>
        </Box>
        <Chip
          label={`${priority.toUpperCase()} PRIORITY`}
          size="small"
          color={priorityColors[priority] || 'default'}
          sx={{ fontWeight: 600, fontSize: '0.65rem' }}
        />
      </Box>

      {subject && (
        <Typography variant="caption" color="primary.main" fontWeight={600} sx={{ display: 'block', mb: 1 }}>
          Target Subject: {subject}
        </Typography>
      )}

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>

      {onComplete && !isCompleted && (
        <Button
          variant="outlined"
          size="small"
          startIcon={<CheckCircle2 size={16} />}
          onClick={onComplete}
        >
          Mark as Completed
        </Button>
      )}
    </Card>
  );
}

export default RecommendationCard;
