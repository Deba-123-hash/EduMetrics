import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import PerformanceChart from '../../../components/charts/PerformanceChart.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function MyPerformance() {
  const dummyData = [
    { exam: 'Internal Assessment 1', average: 72, score: 81 },
    { exam: 'Mid-Semester Exam', average: 74, score: 85 },
    { exam: 'Internal Assessment 2', average: 75, score: 89 }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="My Performance Analytics"
        subtitle="Detailed analysis of subject scores, examination averages, and historical trajectories"
      />
      <Box sx={{ mb: 3 }}>
        <PerformanceChart title="Semester 3 Exam Performance Progression" data={dummyData} />
      </Box>

      <Card sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Subject Mastery Analysis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • <strong>Cloud Architecture (CS301)</strong>: 88% (Advanced - Top 5% in cohort)<br />
          • <strong>Machine Learning Foundations (CS302)</strong>: 82% (Proficient)<br />
          • <strong>Software Quality Engineering (CS303)</strong>: 85% (Proficient)
        </Typography>
      </Card>
    </MainLayout>
  );
}

export default MyPerformance;
