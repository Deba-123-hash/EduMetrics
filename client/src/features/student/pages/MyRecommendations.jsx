import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import RecommendationCard from '../../../components/ai/RecommendationCard.jsx';
import Box from '@mui/material/Box';

export function MyRecommendations() {
  const recommendations = [
    {
      id: '1',
      title: 'Practice Kubernetes Multi-Cluster Scenarios',
      description: 'Review hands-on lab exercises for Service Mesh and ingress controllers prior to the end-semester practical.',
      priority: 'medium',
      subject: 'Cloud Computing Architecture (CS301)'
    },
    {
      id: '2',
      title: 'Deep-dive into Gradient Descent Optimization',
      description: 'Focus on Adam vs RMSProp convergence rates to solidify machine learning mathematical foundations.',
      priority: 'high',
      subject: 'Machine Learning Foundations (CS302)'
    }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Personalized Learning Recommendations"
        subtitle="AI-tailored study recommendations grounded in your recent assessment results"
      />
      <Box sx={{ maxWidth: 800 }}>
        {recommendations.map((rec) => (
          <RecommendationCard
            key={rec.id}
            title={rec.title}
            description={rec.description}
            priority={rec.priority}
            subject={rec.subject}
            onComplete={() => console.log('Recommendation completed', rec.id)}
          />
        ))}
      </Box>
    </MainLayout>
  );
}

export default MyRecommendations;
