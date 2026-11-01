import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import BarChart from '../../../components/charts/BarChart.jsx';

export function DepartmentAnalytics() {
  const data = [
    { name: 'MCA', passRate: 96.2, attendance: 92.4 },
    { name: 'CSE', passRate: 94.0, attendance: 88.5 },
    { name: 'IT', passRate: 91.8, attendance: 86.2 }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Departmental Comparative Analytics"
        subtitle="Institution-wide KPIs, pass rates, and attendance compliance across departments"
      />
      <Card sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Pass Rate vs Attendance Compliance
        </Typography>
        <BarChart
          data={data}
          xKey="name"
          bars={[
            { key: 'passRate', name: 'Pass Rate (%)', color: '#10b981' },
            { key: 'attendance', name: 'Attendance Compliance (%)', color: '#2563eb' }
          ]}
        />
      </Card>
    </MainLayout>
  );
}

export default DepartmentAnalytics;
