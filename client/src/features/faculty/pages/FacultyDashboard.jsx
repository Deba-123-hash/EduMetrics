import React from 'react';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { BookOpen, Users, CalendarCheck, TrendingUp } from 'lucide-react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import DashboardHeader from '../../../components/dashboard/DashboardHeader.jsx';
import DashboardGrid from '../../../components/dashboard/DashboardGrid.jsx';
import StatCard from '../../../components/dashboard/StatCard.jsx';
import PerformanceChart from '../../../components/charts/PerformanceChart.jsx';
import AttendanceChart from '../../../components/charts/AttendanceChart.jsx';
import { GlassCard } from '../../../components/common/GlassCard.jsx';
import { containerStaggerVariants, cardItemVariants } from '../../../animations/motionVariants.js';
import { useReducedMotion } from '../../../hooks/useReducedMotion.js';

export function FacultyDashboard() {
  const prefersReducedMotion = useReducedMotion();

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

  const containerAnimation = prefersReducedMotion ? {} : containerStaggerVariants;
  const itemAnimation = prefersReducedMotion ? {} : cardItemVariants;

  return (
    <MainLayout>
      <motion.div initial="hidden" animate="visible" variants={containerAnimation}>
        <motion.div variants={itemAnimation}>
          <DashboardHeader
            title="Faculty Workspace"
            subtitle="Manage assigned classes, mark session attendance, enter examination grades, and monitor course analytics"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <DashboardGrid columns={{ xs: 1, sm: 2, md: 4 }}>
            <StatCard
              title="Assigned Classes"
              value={3}
              icon={BookOpen}
              color="var(--color-primary, #2563eb)"
              bgColor="action.hover"
            />
            <StatCard
              title="Enrolled Students"
              value={124}
              icon={Users}
              trend={3.1}
              trendLabel="active cohort"
              color="var(--color-secondary, #4f46e5)"
              bgColor="action.hover"
            />
            <StatCard
              title="Class Attendance"
              value={91.2}
              icon={CalendarCheck}
              trend={2.4}
              trendLabel="vs last month"
              color="var(--color-success, #10b981)"
              bgColor="action.hover"
            />
            <StatCard
              title="Course Avg Score"
              value={76.8}
              icon={TrendingUp}
              trend={1.2}
              trendLabel="improving"
              color="var(--color-accent, #06b6d4)"
              bgColor="action.hover"
            />
          </DashboardGrid>
        </motion.div>

        <motion.div variants={itemAnimation}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 3, mt: 1 }}>
            <GlassCard hover={false} sx={{ p: 2.5 }}>
              <PerformanceChart title="Class Performance Trend (CS301)" data={dummyProgression} />
            </GlassCard>
            <GlassCard hover={false} sx={{ p: 2.5 }}>
              <AttendanceChart title="Monthly Attendance Compliance" data={dummyAttendance} />
            </GlassCard>
          </Box>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}

export default FacultyDashboard;
