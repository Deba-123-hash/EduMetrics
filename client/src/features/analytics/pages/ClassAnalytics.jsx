import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import BarChart from '../../../components/charts/BarChart.jsx';

export function ClassAnalytics() {
  const classComparison = [
    { name: 'MCA-1A', avg: 74.2 },
    { name: 'MCA-1B', avg: 72.8 },
    { name: 'MCA-2A', avg: 81.5 },
    { name: 'MCA-2B', avg: 79.1 }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Class Performance Benchmarks"
        subtitle="Compare academic performance distributions across sections and semesters"
      />
      <Card sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Section Average Comparison
        </Typography>
        <BarChart data={classComparison} xKey="name" bars={[{ key: 'avg', name: 'Class Avg (%)', color: '#4f46e5' }]} />
      </Card>
    </MainLayout>
  );
}

export default ClassAnalytics;
