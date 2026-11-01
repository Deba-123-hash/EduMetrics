import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import DashboardGrid from '../../../components/dashboard/DashboardGrid.jsx';
import StatCard from '../../../components/dashboard/StatCard.jsx';
import BarChart from '../../../components/charts/BarChart.jsx';
import LineChart from '../../../components/charts/LineChart.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BarChart3, TrendingUp, CheckCircle, AlertOctagon } from 'lucide-react';

export function AnalyticsDashboard() {
  const departmentScores = [
    { name: 'MCA', avg: 79.4 },
    { name: 'CSE', avg: 76.1 },
    { name: 'IT', avg: 74.8 },
    { name: 'ECE', avg: 72.3 }
  ];

  const trendData = [
    { exam: 'Sem 1', avg: 72.0 },
    { exam: 'Sem 2', avg: 74.5 },
    { exam: 'Sem 3', avg: 78.2 }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Institutional Academic Analytics"
        subtitle="Cross-departmental benchmarks, assessment distributions, and performance correlation"
      />

      <DashboardGrid columns={{ xs: 1, sm: 2, md: 4 }}>
        <StatCard title="Overall Institutional Average" value="76.8%" icon={BarChart3} trend={1.4} trendLabel="improvement" color="#2563eb" bgColor="#eff6ff" />
        <StatCard title="Overall Pass Rate" value="94.2%" icon={CheckCircle} color="#10b981" bgColor="#ecfdf5" />
        <StatCard title="High Distinction Rate" value="28.4%" icon={TrendingUp} color="#4f46e5" bgColor="#eef2ff" />
        <StatCard title="Identified Academic At-Risk" value="5.8%" icon={AlertOctagon} color="#ef4444" bgColor="#fef2f2" />
      </DashboardGrid>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Departmental Score Comparison
          </Typography>
          <BarChart data={departmentScores} xKey="name" bars={[{ key: 'avg', name: 'Avg Score (%)', color: '#2563eb' }]} />
        </Card>

        <Card sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Institutional Multi-Term Progression
          </Typography>
          <LineChart data={trendData} xKey="exam" lines={[{ key: 'avg', name: 'Cohort Average (%)', color: '#10b981' }]} />
        </Card>
      </Box>
    </MainLayout>
  );
}

export default AnalyticsDashboard;
