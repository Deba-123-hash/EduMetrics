import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import AIInsightCard from '../../../components/ai/AIInsightCard.jsx';
import Box from '@mui/material/Box';

export function AIInsightsPage() {
  const demoInsights = [
    {
      id: '1',
      title: 'Attendance Decline Leading to Risk Flag',
      description: 'Pooja Iyer experienced an 18% decline in Cloud Computing attendance over the past 3 weeks, directly correlating with a 15% drop in assessment marks.',
      severity: 'high',
      evidence: ['Attendance: 68% (<75% threshold)', 'Latest Assessment: 42/100'],
      date: 'Nov 1, 2026'
    },
    {
      id: '2',
      title: 'Strong Mastery in Core Algorithmic Concepts',
      description: 'Rahul Verma demonstrated consistent 90%+ scores across Data Structures and Cloud Architecture benchmarks.',
      severity: 'low',
      evidence: ['Average: 88.5%', 'Assignment Score: 95/100'],
      date: 'Nov 1, 2026'
    }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="AI-Powered Academic Insights"
        subtitle="Automated, evidence-grounded insights synthesizing attendance trends and examination performance"
      />
      <Box sx={{ maxWidth: 900 }}>
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
    </MainLayout>
  );
}

export default AIInsightsPage;
