import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TrendingUp, Info } from 'lucide-react';
import RiskBadge from './RiskBadge.jsx';
import { GradientCard } from '../common/GlassCard.jsx';
import { AnimatedCounter } from '../common/AnimatedCounter.jsx';

export function PredictionCard({
  predictedScore,
  riskLevel = 'low',
  confidence = 85,
  summary,
  modelVersion = 'v1.0'
}) {
  return (
    <GradientCard hover={true} sx={{ p: 3, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
          <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'action.hover', color: 'primary.main', display: 'flex' }}>
            <TrendingUp size={18} />
          </Box>
          <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>
            Academic Performance Estimation
          </Typography>
        </Box>
        <RiskBadge level={riskLevel} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 1.5 }}>
        {predictedScore ? (
          <AnimatedCounter value={predictedScore} suffix="%" variant="h2" sx={{ color: 'primary.main' }} />
        ) : (
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.secondary' }}>N/A</Typography>
        )}
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Estimated Outcome Score (Confidence: {confidence}%)
        </Typography>
      </Box>

      {summary && (
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.6 }}>
          {summary}
        </Typography>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.2, bgcolor: 'action.hover', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
        <Info size={15} color="var(--color-primary)" />
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Model: {modelVersion} • Academic predictions are calculated with weighted historical heuristics.
        </Typography>
      </Box>
    </GradientCard>
  );
}

export default PredictionCard;
