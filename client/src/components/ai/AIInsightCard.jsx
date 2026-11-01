import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Sparkles, ArrowRight } from 'lucide-react';

export function AIInsightCard({
  title,
  description,
  severity = 'medium',
  category = 'performance',
  evidence = [],
  date
}) {
  const severityColors = {
    high: { color: 'error', bg: '#fef2f2' },
    medium: { color: 'warning', bg: '#fffbeb' },
    low: { color: 'success', bg: '#ecfdf5' }
  };

  const currentSeverity = severityColors[severity] || severityColors.medium;

  return (
    <Card sx={{ p: 2.5, mb: 2, border: '1px solid #e2e8f0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Sparkles size={18} color="#2563eb" />
          <Typography variant="subtitle1" fontWeight={600} color="text.primary">
            {title}
          </Typography>
        </Box>
        <Chip
          label={severity.toUpperCase()}
          size="small"
          color={currentSeverity.color}
          sx={{ fontWeight: 600, fontSize: '0.7rem' }}
        />
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>

      {evidence && evidence.length > 0 && (
        <Box sx={{ p: 1.5, bgcolor: '#f8fafc', borderRadius: 1.5, mb: 1.5 }}>
          <Typography variant="caption" fontWeight={600} color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            GROUNDED EVIDENCE:
          </Typography>
          {evidence.map((item, idx) => (
            <Typography key={idx} variant="caption" color="text.secondary" sx={{ display: 'block' }}>
              • {item}
            </Typography>
          ))}
        </Box>
      )}

      {date && (
        <Typography variant="caption" color="text.disabled">
          Generated on {date}
        </Typography>
      )}
    </Card>
  );
}

export default AIInsightCard;
