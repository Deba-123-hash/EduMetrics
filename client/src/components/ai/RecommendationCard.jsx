import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Target, CheckCircle2 } from 'lucide-react';
import { GradientCard } from '../common/GlassCard.jsx';
import { PremiumButton } from '../common/PremiumButton.jsx';

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
    <GradientCard hover={true} sx={{ p: 2.8, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
          <Box sx={{ p: 0.8, borderRadius: 2, bgcolor: 'action.hover', color: 'secondary.main', display: 'flex' }}>
            <Target size={17} />
          </Box>
          <Typography variant="subtitle1" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>
            {title}
          </Typography>
        </Box>
        <Chip
          label={`${priority.toUpperCase()} PRIORITY`}
          size="small"
          color={priorityColors[priority] || 'default'}
          sx={{ fontWeight: 700, fontSize: '0.68rem', height: 22 }}
        />
      </Box>

      {subject && (
        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, display: 'block', mb: 1 }}>
          Target Subject: {subject}
        </Typography>
      )}

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
        {description}
      </Typography>

      {onComplete && !isCompleted && (
        <PremiumButton
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<CheckCircle2 size={15} />}
          onClick={onComplete}
        >
          Mark as Completed
        </PremiumButton>
      )}
    </GradientCard>
  );
}

export default RecommendationCard;
