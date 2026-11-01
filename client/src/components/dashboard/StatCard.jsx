import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel,
  color = 'primary.main',
  bgColor = '#eff6ff'
}) {
  const isPositive = trend > 0;

  return (
    <Card sx={{ p: 2.5, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          {title}
        </Typography>
        {Icon && (
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: bgColor,
              color: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon size={20} />
          </Box>
        )}
      </Box>

      <Typography variant="h4" component="div" fontWeight={700} color="text.primary" sx={{ mb: 1 }}>
        {value}
      </Typography>

      {trend !== undefined && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 'auto' }}>
          {isPositive ? (
            <ArrowUpRight size={16} color="#10b981" />
          ) : (
            <ArrowDownRight size={16} color="#ef4444" />
          )}
          <Typography
            variant="caption"
            fontWeight={600}
            color={isPositive ? 'success.main' : 'error.main'}
          >
            {Math.abs(trend)}%
          </Typography>
          {trendLabel && (
            <Typography variant="caption" color="text.secondary">
              {trendLabel}
            </Typography>
          )}
        </Box>
      )}
    </Card>
  );
}

export default StatCard;
