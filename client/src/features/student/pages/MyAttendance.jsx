import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import AttendanceChart from '../../../components/charts/AttendanceChart.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export function MyAttendance() {
  const dummyMonthly = [
    { month: 'Aug', present: 95, absent: 5 },
    { month: 'Sep', present: 90, absent: 10 },
    { month: 'Oct', present: 92, absent: 8 },
    { month: 'Nov', present: 96, absent: 4 }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="My Attendance Profile"
        subtitle="Track personal session compliance across all enrolled semester courses"
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, mb: 3 }}>
        <AttendanceChart title="My Monthly Attendance Record" data={dummyMonthly} />
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Compliance Status
          </Typography>
          <Box sx={{ my: 2 }}>
            <Chip label="COMPLIANT (92.5%)" color="success" sx={{ fontWeight: 700 }} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            You exceed the mandatory 75% institutional attendance threshold. No academic risk detected for examinations.
          </Typography>
        </Card>
      </Box>
    </MainLayout>
  );
}

export default MyAttendance;
