import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import DashboardHeader from '../../../components/dashboard/DashboardHeader.jsx';
import DashboardGrid from '../../../components/dashboard/DashboardGrid.jsx';
import StatCard from '../../../components/dashboard/StatCard.jsx';
import PerformanceChart from '../../../components/charts/PerformanceChart.jsx';
import AIInsightCard from '../../../components/ai/AIInsightCard.jsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Award, CalendarCheck, TrendingUp, Sparkles } from 'lucide-react';

export function StudentDashboard() {
  const dummyProgression = [
    { exam: 'Unit Test 1', average: 70, score: 78 },
    { exam: 'Mid-Term', average: 72, score: 84 },
    { exam: 'Unit Test 2', average: 75, score: 88 }
  ];

  return (
    <MainLayout>
      <DashboardHeader
        title="Student Academic Portal"
        subtitle="Track personal performance metrics, attendance compliance, exam grades, and AI study tips"
      />

      <DashboardGrid columns={{ xs: 1, sm: 2, md: 4 }}>
        <StatCard title="Overall Academic Grade" value="84.2%" icon={Award} trend={3.4} trendLabel="improving" color="#2563eb" bgColor="#eff6ff" />
        <StatCard title="Attendance Rate" value="92.0%" icon={CalendarCheck} color="#10b981" bgColor="#ecfdf5" />
        <StatCard title="Class Standing" value="Top 10%" icon={TrendingUp} color="#4f46e5" bgColor="#eef2ff" />
        <StatCard title="Active Recommendations" value="2" icon={Sparkles} color="#06b6d4" bgColor="#ecfeff" />
      </DashboardGrid>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3 }}>
        <PerformanceChart title="My Performance vs Class Benchmark" data={dummyProgression} />
        <Box>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Latest AI Insights
          </Typography>
          <AIInsightCard
            title="Consistent Upward Trajectory"
            description="Your performance in Cloud Computing and Algorithms has improved by 6% compared to Semester 2."
            severity="low"
            evidence={['Unit Test 2: 88%', 'Mid-Term: 84%']}
            date="Today"
          />
        </Box>
      </Box>
    </MainLayout>
  );
}

export default StudentDashboard;
