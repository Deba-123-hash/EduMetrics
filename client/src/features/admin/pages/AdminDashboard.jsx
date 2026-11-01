import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import DashboardHeader from '../../../components/dashboard/DashboardHeader.jsx';
import DashboardGrid from '../../../components/dashboard/DashboardGrid.jsx';
import StatCard from '../../../components/dashboard/StatCard.jsx';
import QuickActions from '../../../components/dashboard/QuickActions.jsx';
import RecentActivity from '../../../components/dashboard/RecentActivity.jsx';
import AttendanceChart from '../../../components/charts/AttendanceChart.jsx';
import RiskDistributionChart from '../../../components/charts/RiskDistributionChart.jsx';
import Box from '@mui/material/Box';
import { Users, GraduationCap, Award, AlertTriangle } from 'lucide-react';

export function AdminDashboard() {
  const dummyAttendance = [
    { month: 'Aug', present: 88, absent: 12 },
    { month: 'Sep', present: 91, absent: 9 },
    { month: 'Oct', present: 85, absent: 15 },
    { month: 'Nov', present: 89, absent: 11 }
  ];

  const dummyRisk = [
    { level: 'Low Risk', count: 180 },
    { level: 'Moderate Risk', count: 32 },
    { level: 'High Risk', count: 14 }
  ];

  const dummyActivity = [
    { title: 'Mid-term assessment marks uploaded for CS301', time: '10 mins ago' },
    { title: 'New student enrolled: Arjun Sharma (MCA 2025)', time: '1 hour ago' },
    { title: 'Risk assessment batch generated for Semester 3', time: '3 hours ago' }
  ];

  return (
    <MainLayout>
      <DashboardHeader
        title="Institutional Administration"
        subtitle="Institution-wide academic overview, performance distribution, and system status"
      />

      <DashboardGrid columns={{ xs: 1, sm: 2, md: 4 }}>
        <StatCard title="Total Students" value="226" icon={GraduationCap} trend={4.2} trendLabel="vs last year" color="#2563eb" bgColor="#eff6ff" />
        <StatCard title="Active Faculty" value="28" icon={Users} color="#4f46e5" bgColor="#eef2ff" />
        <StatCard title="Avg Exam Performance" value="76.4%" icon={Award} trend={1.8} trendLabel="improvement" color="#10b981" bgColor="#ecfdf5" />
        <StatCard title="Students Requiring Support" value="14" icon={AlertTriangle} trend={-2.1} trendLabel="reduced risk" color="#ef4444" bgColor="#fef2f2" />
      </DashboardGrid>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3, mb: 3 }}>
        <AttendanceChart data={dummyAttendance} />
        <RiskDistributionChart data={dummyRisk} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <QuickActions />
        <RecentActivity activities={dummyActivity} />
      </Box>
    </MainLayout>
  );
}

export default AdminDashboard;
