import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import LineChart from './LineChart.jsx';

export function PerformanceChart({ title = 'Student Performance Progression', data = [] }) {
  const lines = [
    { key: 'average', name: 'Class Average (%)', color: '#64748b' },
    { key: 'score', name: 'Student Score (%)', color: '#2563eb' }
  ];

  return (
    <Card sx={{ p: 2.5 }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <LineChart data={data} xKey="exam" lines={lines} height={260} />
    </Card>
  );
}

export default PerformanceChart;
