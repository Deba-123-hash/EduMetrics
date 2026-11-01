import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Award, CalendarCheck, TrendingUp, Sparkles } from 'lucide-react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import DashboardHeader from '../../../components/dashboard/DashboardHeader.jsx';
import DashboardGrid from '../../../components/dashboard/DashboardGrid.jsx';
import StatCard from '../../../components/dashboard/StatCard.jsx';
import PerformanceChart from '../../../components/charts/PerformanceChart.jsx';
import AIInsightCard from '../../../components/ai/AIInsightCard.jsx';
import { GlassCard } from '../../../components/common/GlassCard.jsx';
import { containerStaggerVariants, cardItemVariants } from '../../../animations/motionVariants.js';
import { useReducedMotion } from '../../../hooks/useReducedMotion.js';

export function StudentDashboard() {
  const prefersReducedMotion = useReducedMotion();

  const dummyProgression = [
    { exam: 'Unit Test 1', average: 70, score: 78 },
    { exam: 'Mid-Term', average: 72, score: 84 },
    { exam: 'Unit Test 2', average: 75, score: 88 }
  ];

  const containerAnimation = prefersReducedMotion ? {} : containerStaggerVariants;
  const itemAnimation = prefersReducedMotion ? {} : cardItemVariants;

  return (
    <MainLayout>
      <motion.div initial="hidden" animate="visible" variants={containerAnimation}>
        <motion.div variants={itemAnimation}>
          <DashboardHeader
            title="Student Academic Portal"
            subtitle="Monitor your assessment scores, attendance compliance, GPA trajectory, and personalized AI tips"
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <DashboardGrid columns={{ xs: 1, sm: 2, md: 4 }}>
            <StatCard
              title="Overall Academic Score"
              value={84.2}
              icon={Award}
              trend={3.4}
              trendLabel="improving"
              color="var(--color-primary, #2563eb)"
              bgColor="action.hover"
            />
            <StatCard
              title="Attendance Rate"
              value={92.0}
              icon={CalendarCheck}
              trend={1.2}
              trendLabel="above 75% cutoff"
              color="var(--color-success, #10b981)"
              bgColor="action.hover"
            />
            <StatCard
              title="Class Standing"
              value="Top 10%"
              icon={TrendingUp}
              color="var(--color-secondary, #4f46e5)"
              bgColor="action.hover"
            />
            <StatCard
              title="Study Interventions"
              value={2}
              icon={Sparkles}
              color="var(--color-accent, #06b6d4)"
              bgColor="action.hover"
            />
          </DashboardGrid>
        </motion.div>

        <motion.div variants={itemAnimation}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3, mt: 1 }}>
            <GlassCard hover={false} sx={{ p: 2.5 }}>
              <PerformanceChart title="My Performance vs Class Benchmark" data={dummyProgression} />
            </GlassCard>

            <Box>
              <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 1.5 }}>
                Latest AI Insights
              </Typography>
              <AIInsightCard
                title="Consistent Upward Trajectory"
                description="Your score in Cloud Computing and Algorithms has improved by 6% compared to Semester 2 assessments."
                severity="low"
                evidence={['Unit Test 2: 88%', 'Mid-Term: 84%', 'Class Benchmark: 75%']}
                date="Today"
              />
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}

export default StudentDashboard;
