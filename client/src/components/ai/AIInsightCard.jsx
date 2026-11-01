import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Sparkles } from 'lucide-react';
import { GradientCard } from '../common/GlassCard.jsx';

export function AIInsightCard({
  title,
  description,
  severity = 'medium',
  category = 'performance',
  evidence = [],
  date
}) {
  const severityColors = {
    high: 'error',
    medium: 'warning',
    low: 'success'
  };

  return (
    <GradientCard hover={true} sx={{ p: 2.5, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ p: 0.8, borderRadius: 2, bgcolor: 'action.hover', color: 'primary.main', display: 'flex' }}>
            <Sparkles size={16} />
          </Box>
          <Typography variant="subtitle1" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: 'text.primary' }}>
            {title}
          </Typography>
        </Box>
        <Chip
          label={severity.toUpperCase()}
          size="small"
          color={severityColors[severity] || 'warning'}
          sx={{ fontWeight: 700, fontSize: '0.68rem', height: 22 }}
        />
      </Box>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
        {description}
      </Typography>

      {evidence && evidence.length > 0 && (
        <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 2, mb: 1.5, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', display: 'block', mb: 0.5, letterSpacing: '0.04em' }}>
            GROUNDED EVIDENCE & METRICS:
          </Typography>
          {evidence.map((item, idx) => (
            <Typography key={idx} variant="caption" sx={{ color: 'text.secondary', display: 'block', my: 0.2 }}>
              • {item}
            </Typography>
          ))}
        </Box>
      )}

      {date && (
        <Typography variant="caption" sx={{ color: 'text.muted', display: 'block', textAlign: 'right' }}>
          Generated {date}
        </Typography>
      )}
    </GradientCard>
  );
}

export default AIInsightCard;
