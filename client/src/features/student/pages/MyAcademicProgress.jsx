import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import AreaChart from '../../../components/charts/AreaChart.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function MyAcademicProgress() {
  const dummyProgress = [
    { name: 'Sem 1', value: 78.5 },
    { name: 'Sem 2', value: 81.2 },
    { name: 'Sem 3', value: 84.6 },
    { name: 'Sem 4 (Est)', value: 87.0 }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Multi-Semester Academic Progress"
        subtitle="Cumulative GPA progression, credit completion milestones, and degree progress"
      />
      <Box sx={{ mb: 3 }}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Cumulative CGPA Trajectory
          </Typography>
          <AreaChart data={dummyProgress} xKey="name" yKey="value" color="#10b981" height={280} />
        </Card>
      </Box>
    </MainLayout>
  );
}

export default MyAcademicProgress;
