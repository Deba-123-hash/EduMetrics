import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import PredictionCard from '../../../components/ai/PredictionCard.jsx';
import Box from '@mui/material/Box';

export function PredictionsPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Performance Outcome Predictions"
        subtitle="Statistical linear projection and time-series estimation of end-term academic performance"
      />
      <Box sx={{ maxWidth: 800 }}>
        <PredictionCard
          predictedScore={84.5}
          riskLevel="low"
          confidence={88}
          summary="Based on 3 historical assessment rounds and 92% attendance, the model projects an end-term outcome in the Distinction bracket."
          modelVersion="Reg-Ridge-v1.2"
        />
      </Box>
    </MainLayout>
  );
}

export default PredictionsPage;
