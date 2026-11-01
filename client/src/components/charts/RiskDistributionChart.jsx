import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import PieChart from './PieChart.jsx';

export function RiskDistributionChart({ title = 'Academic Risk Classification', data = [] }) {
  const riskColors = ['#10b981', '#f59e0b', '#ef4444']; // Low, Medium, High

  return (
    <Card sx={{ p: 2.5 }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <PieChart data={data} dataKey="count" nameKey="level" colors={riskColors} height={260} />
    </Card>
  );
}

export default RiskDistributionChart;
