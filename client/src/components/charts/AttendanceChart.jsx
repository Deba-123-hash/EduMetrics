import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import BarChart from './BarChart.jsx';

export function AttendanceChart({ title = 'Monthly Attendance Compliance', data = [] }) {
  const bars = [
    { key: 'present', name: 'Present Rate (%)', color: '#10b981' },
    { key: 'absent', name: 'Absent Rate (%)', color: '#ef4444' }
  ];

  return (
    <Card sx={{ p: 2.5 }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <BarChart data={data} xKey="month" bars={bars} height={260} />
    </Card>
  );
}

export default AttendanceChart;
