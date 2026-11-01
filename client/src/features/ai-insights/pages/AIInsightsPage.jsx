import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { Sparkles, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import AIInsightCard from '../../../components/ai/AIInsightCard.jsx';
import PredictionCard from '../../../components/ai/PredictionCard.jsx';
import RecommendationCard from '../../../components/ai/RecommendationCard.jsx';
import StatCard from '../../../components/dashboard/StatCard.jsx';
import { containerStaggerVariants, cardItemVariants } from '../../../animations/motionVariants.js';
import { useReducedMotion } from '../../../hooks/useReducedMotion.js';

export function AIInsightsPage() {
  const prefersReducedMotion = useReducedMotion();

  const demoInsights = [
    {
      id: '1',
      title: 'Attendance Decline Leading to Risk Flag',
      description: 'Pooja Iyer experienced an 18% decline in Cloud Computing attendance over the past 3 weeks, directly correlating with a 15% drop in assessment scores.',
      severity: 'high',
      evidence: ['Attendance: 68% (<75% threshold)', 'Latest Assessment: 42/100', 'Calculated Risk Score: 78.5%'],
      date: 'Nov 1, 2026'
    },
    {
      id: '2',
      title: 'Strong Mastery in Core Algorithmic Concepts',
      description: 'Rahul Verma demonstrated consistent 90%+ scores across Data Structures and Cloud Architecture benchmarks with exemplary attendance.',
      severity: 'low',
      evidence: ['Course Average: 88.5%', 'Assignment Score: 95/100', 'Attendance: 96%'],
      date: 'Nov 1, 2026'
    }
  ];

  const containerAnimation = prefersReducedMotion ? {} : containerStaggerVariants;
  const itemAnimation = prefersReducedMotion ? {} : cardItemVariants;

  return (
    <MainLayout>
      <motion.div initial="hidden" animate="visible" variants={containerAnimation}>
        <motion.div variants={itemAnimation}>
          <PageHeader
            title="AI-Powered Academic Insights"
            subtitle="Automated, evidence-grounded insights synthesizing attendance trends and examination performance"
            badge="EXPLAINABLE AI"
          />
        </motion.div>

        {/* Top Intelligence KPI Bar */}
        <motion.div variants={itemAnimation}>
          <Box sx={{ mb: 3.5 }}>
            <Grid container spacing={2.5}>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard title="Flagged at Risk" value={14} icon={AlertTriangle} trend={-2.1} trendLabel="risk reduced" color="var(--color-danger, #ef4444)" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard title="Model Confidence" value={94.2} icon={TrendingUp} trend={1.4} trendLabel="high precision" color="var(--color-primary, #2563eb)" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard title="Interventions Active" value={28} icon={Sparkles} color="var(--color-accent, #06b6d4)" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard title="Resolved Cases" value={42} icon={CheckCircle} trend={5.2} trendLabel="improved" color="var(--color-success, #10b981)" />
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* Main Content Layout */}
        <motion.div variants={itemAnimation}>
          <Grid container spacing={3}>
            {/* Left Column: Automated Insights */}
            <Grid item xs={12} lg={7}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {demoInsights.map((ins) => (
                  <AIInsightCard
                    key={ins.id}
                    title={ins.title}
                    description={ins.description}
                    severity={ins.severity}
                    evidence={ins.evidence}
                    date={ins.date}
                  />
                ))}
              </Box>
            </Grid>

            {/* Right Column: Prediction & Recommendations */}
            <Grid item xs={12} lg={5}>
              <PredictionCard
                predictedScore={74.8}
                riskLevel="medium"
                confidence={92}
                summary="Cohort linear regression projects a 74.8% semester pass rate. Intervention is recommended for students with attendance < 75%."
                modelVersion="v2.1"
              />

              <RecommendationCard
                title="Targeted Revision: Distributed Systems"
                description="Conduct additional tutorial sessions on distributed consensus algorithms and CAP theorem for MCA Section A."
                priority="high"
                subject="Cloud Computing (CS301)"
              />
            </Grid>
          </Grid>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}

export default AIInsightsPage;
