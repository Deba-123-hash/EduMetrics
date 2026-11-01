import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import BarChart from '../../../components/charts/BarChart.jsx';

export function SubjectAnalytics() {
  const subjectAverages = [
    { name: 'CS301 Cloud', avg: 82.4 },
    { name: 'CS302 ML', avg: 74.6 },
    { name: 'CS303 SQE', avg: 78.2 },
    { name: 'CS304 BigData', avg: 71.0 }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Subject & Course Analytics"
        subtitle="Evaluate subject pass rates, average scores, and faculty instruction effectiveness"
      />
      <Card sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Semester 3 Subject Average Benchmark
        </Typography>
        <BarChart data={subjectAverages} xKey="name" bars={[{ key: 'avg', name: 'Avg Score (%)', color: '#06b6d4' }]} />
      </Card>
    </MainLayout>
  );
}

export default SubjectAnalytics;
