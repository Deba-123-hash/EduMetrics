import { calculateCompositeRiskScore } from '../analytics/risk-calculator.js';

export const predictAcademicRisk = (metrics) => {
  const result = calculateCompositeRiskScore(metrics);
  const summary = `Composite risk score calculated at ${result.riskScore}/100. Category: ${result.riskLevel.toUpperCase()}. Based on attendance (${metrics.attendancePct}%) and average score (${metrics.averageScore}%). Note: Predictions are decision-support estimates.`;

  return {
    ...result,
    summary,
    modelVersion: 'EduInsight-Rules-v1.0',
    predictedAt: new Date().toISOString()
  };
};

export default {
  predictAcademicRisk
};
