import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RiskBadge from './RiskBadge.jsx';
import { TrendingUp, Info } from 'lucide-react';

export function PredictionCard({
  predictedScore,
  riskLevel = 'low',
  confidence = 85,
  summary,
  modelVersion = 'v1.0'
}) {
  return (
    <Card sx={{ p: 2.5, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TrendingUp size={20} color="#2563eb" />
          <Typography variant="h6" fontWeight={600}>
            Performance Estimation
          </Typography>
        </Box>
        <RiskBadge level={riskLevel} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
        <Typography variant="h3" fontWeight={700} color="primary.main">
          {predictedScore ? `${predictedScore}%` : 'N/A'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estimated Outcome (±{100 - confidence}%)
        </Typography>
      </Box>

      {summary && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {summary}
        </Typography>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, p: 1, bgcolor: '#f8fafc', borderRadius: 1 }}>
        <Info size={14} color="#64748b" />
        <Typography variant="caption" color="text.secondary">
          Model: {modelVersion} • Note: Academic predictions are decision-support estimates.
        </Typography>
      </Box>
    </Card>
  );
}

export default PredictionCard;
