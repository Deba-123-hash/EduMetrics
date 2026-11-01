import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import BarChart from '../../../components/charts/BarChart.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function FacultyAnalytics() {
  const dummyScoreDist = [
    { range: '90-100%', count: 12 },
    { range: '80-89%', count: 18 },
    { range: '70-79%', count: 8 },
    { range: '60-69%', count: 3 },
    { range: '<60%', count: 1 }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Course Analytics & Benchmark"
        subtitle="Distribution of grades, attendance correlation, and cohort learning trends"
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Score Range Distribution (CS301)
          </Typography>
          <BarChart data={dummyScoreDist} xKey="range" bars={[{ key: 'count', name: 'Students', color: '#4f46e5' }]} />
        </Card>

        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Key Diagnostic Findings
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            • <strong>Attendance-Score Correlation</strong>: Students with &gt;85% attendance scored on average 14.2% higher in Mid-Term exams.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            • <strong>Topic Bottleneck</strong>: High error rate observed in Distributed Consensus Algorithms during assessment 2.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • <strong>Action Recommended</strong>: Schedule focused tutorial on Paxos & Raft algorithms.
          </Typography>
        </Card>
      </Box>
    </MainLayout>
  );
}

export default FacultyAnalytics;
