import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, AlertTriangle, Sparkles, BarChart2 } from 'lucide-react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import DashboardHeader from '../../../components/dashboard/DashboardHeader.jsx';
import DashboardGrid from '../../../components/dashboard/DashboardGrid.jsx';
import StatCard from '../../../components/dashboard/StatCard.jsx';
import QuickActions from '../../../components/dashboard/QuickActions.jsx';
import RecentActivity from '../../../components/dashboard/RecentActivity.jsx';
import AttendanceChart from '../../../components/charts/AttendanceChart.jsx';
import RiskDistributionChart from '../../../components/charts/RiskDistributionChart.jsx';
import { GlassCard } from '../../../components/common/GlassCard.jsx';
import { DataGalaxy3D } from '../../../three/scenes/DataGalaxy3D.jsx';
import { containerStaggerVariants, cardItemVariants } from '../../../animations/motionVariants.js';
import { useReducedMotion } from '../../../hooks/useReducedMotion.js';

export function AdminDashboard() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);

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
    { title: 'Risk assessment batch generated for Semester 3', time: '3 hours ago' },
    { title: 'Attendance ledger synchronized for MCA Section A', time: '5 hours ago' }
  ];

  const containerAnimation = prefersReducedMotion ? {} : containerStaggerVariants;
  const itemAnimation = prefersReducedMotion ? {} : cardItemVariants;

  return (
    <MainLayout>
      <motion.div initial="hidden" animate="visible" variants={containerAnimation}>
        <motion.div variants={itemAnimation}>
          <DashboardHeader
            title="Institutional Administration"
            subtitle="Campus-wide academic metrics, multi-factor risk classifications, and operational health"
          />
        </motion.div>

        {/* 4 Animated KPI Stat Cards */}
        <motion.div variants={itemAnimation}>
          <DashboardGrid columns={{ xs: 1, sm: 2, md: 4 }}>
            <StatCard
              title="Total Students"
              value={226}
              icon={GraduationCap}
              trend={4.2}
              trendLabel="vs last year"
              color="var(--color-primary, #2563eb)"
              bgColor="action.hover"
            />
            <StatCard
              title="Active Faculty"
              value={28}
              icon={Users}
              trend={0.0}
              trendLabel="stable roster"
              color="var(--color-secondary, #4f46e5)"
              bgColor="action.hover"
            />
            <StatCard
              title="Avg Performance"
              value={76.4}
              icon={Award}
              trend={1.8}
              trendLabel="improvement"
              color="var(--color-success, #10b981)"
              bgColor="action.hover"
            />
            <StatCard
              title="Students at Risk"
              value={14}
              icon={AlertTriangle}
              trend={-2.1}
              trendLabel="risk reduced"
              color="var(--color-danger, #ef4444)"
              bgColor="action.hover"
            />
          </DashboardGrid>
        </motion.div>

        {/* View Tabs: 2D Charts vs 3D Data Galaxy */}
        <motion.div variants={itemAnimation}>
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', mb: 2.5, mt: 1 }}>
            <Tabs
              value={activeTab}
              onChange={(_, val) => setActiveTab(val)}
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }
              }}
            >
              <Tab icon={<BarChart2 size={16} />} iconPosition="start" label="Compliance & Risk Analytics" />
              <Tab icon={<Sparkles size={16} />} iconPosition="start" label="3D Neural Cluster Preview" />
            </Tabs>
          </Box>
        </motion.div>

        {/* Analytics Section */}
        {activeTab === 0 ? (
          <motion.div variants={itemAnimation}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3, mb: 3 }}>
              <GlassCard hover={false} sx={{ p: 2.5 }}>
                <AttendanceChart data={dummyAttendance} />
              </GlassCard>
              <GlassCard hover={false} sx={{ p: 2.5 }}>
                <RiskDistributionChart data={dummyRisk} />
              </GlassCard>
            </Box>
          </motion.div>
        ) : (
          <motion.div variants={itemAnimation}>
            <GlassCard hover={false} sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>
                    3D Academic Neural Cluster
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Multi-dimensional representation of interconnected student assessment, attendance & backlog vectors
                  </Typography>
                </Box>
              </Box>
              <DataGalaxy3D height={340} />
            </GlassCard>
          </motion.div>
        )}

        {/* Quick Operations & Activity Feed */}
        <motion.div variants={itemAnimation}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            <QuickActions />
            <RecentActivity activities={dummyActivity} />
          </Box>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}

export default AdminDashboard;
