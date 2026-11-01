import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { GradientCard } from '../common/GlassCard.jsx';
import { AnimatedCounter } from '../common/AnimatedCounter.jsx';

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel,
  color = 'primary.main',
  bgColor = 'action.hover'
}) {
  const isPositive = trend > 0;
  const isNumeric = typeof value === 'number' || (!isNaN(parseFloat(value)) && isFinite(value));

  return (
    <GradientCard
      hover={true}
      sx={{
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 145,
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            fontSize: '0.75rem'
          }}
        >
          {title}
        </Typography>
        {Icon && (
          <Box
            sx={{
              p: 1.1,
              borderRadius: 2.5,
              bgcolor: bgColor,
              color: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.08)'
              }
            }}
          >
            <Icon size={19} />
          </Box>
        )}
      </Box>

      <Box sx={{ my: 0.5 }}>
        {isNumeric ? (
          <AnimatedCounter value={value} variant="h4" sx={{ color: 'text.primary' }} />
        ) : (
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"IBM Plex Sans", "Space Grotesk", sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'text.primary'
            }}
          >
            {value}
          </Typography>
        )}
      </Box>

      {trend !== undefined && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mt: 1 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 0.8,
              py: 0.2,
              borderRadius: 1.5,
              bgcolor: isPositive ? 'var(--color-success-bg, rgba(16,185,129,0.12))' : 'var(--color-danger-bg, rgba(239,68,68,0.12))'
            }}
          >
            {isPositive ? (
              <ArrowUpRight size={14} color="var(--color-success, #10b981)" />
            ) : (
              <ArrowDownRight size={14} color="var(--color-danger, #ef4444)" />
            )}
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: isPositive ? 'success.main' : 'error.main',
                fontSize: '0.75rem'
              }}
            >
              {Math.abs(trend)}%
            </Typography>
          </Box>
          {trendLabel && (
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
              {trendLabel}
            </Typography>
          )}
        </Box>
      )}
    </GradientCard>
  );
}

export default StatCard;
