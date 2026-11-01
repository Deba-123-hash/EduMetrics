import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import DashboardHeader from '../../../components/dashboard/DashboardHeader.jsx';
import DashboardGrid from '../../../components/dashboard/DashboardGrid.jsx';
import StatCard from '../../../components/dashboard/StatCard.jsx';
import PerformanceChart from '../../../components/charts/PerformanceChart.jsx';
import AttendanceChart from '../../../components/charts/AttendanceChart.jsx';
import Box from '@mui/material/Box';
import { BookOpen, Users, CalendarCheck, TrendingUp } from 'lucide-react';

export function FacultyDashboard() {
  const dummyProgression = [
    { exam: 'Unit Test 1', average: 68, score: 72 },
    { exam: 'Mid-Term', average: 71, score: 75 },
    { exam: 'Unit Test 2', average: 74, score: 79 },
    { exam: 'End-Sem Prelim', average: 76, score: 82 }
  ];

  const dummyAttendance = [
    { month: 'Aug', present: 92, absent: 8 },
    { month: 'Sep', present: 88, absent: 12 },
    { month: 'Oct', present: 90, absent: 10 },
    { month: 'Nov', present: 94, absent: 6 }
  ];

  return (
    <MainLayout>
      <DashboardHeader
        title="Faculty Workspace"
        subtitle="Manage assigned classes, mark attendance, enter examination grades, and monitor course analytics"
      />

      <DashboardGrid columns={{ xs: 1, sm: 2, md: 4 }}>
        <StatCard title="Assigned Classes" value="3" icon={BookOpen} color="#2563eb" bgColor="#eff6ff" />
        <StatCard title="Total Enrolled Students" value="124" icon={Users} color="#4f46e5" bgColor="#eef2ff" />
        <StatCard title="Avg Class Attendance" value="91.2%" icon={CalendarCheck} trend={2.4} trendLabel="vs last month" color="#10b981" bgColor="#ecfdf5" />
        <StatCard title="Course Average Score" value="76.8%" icon={TrendingUp} trend={1.2} trendLabel="improving" color="#06b6d4" bgColor="#ecfeff" />
      </DashboardGrid>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 3 }}>
        <PerformanceChart title="Class Performance Trend (CS301)" data={dummyProgression} />
        <AttendanceChart title="Monthly Attendance Compliance" data={dummyAttendance} />
      </Box>
    </MainLayout>
  );
}

export default FacultyDashboard;
