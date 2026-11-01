import { calculateAverageScore } from '../analytics/performance-calculator.js';

export const generateRuleBasedInsights = (student, marks, attendanceSessions) => {
  const avg = calculateAverageScore(marks);
  const insights = [];

  if (avg >= 85) {
    insights.push({
      insightType: 'performance',
      title: 'High Academic Distinction',
      description: `Student maintains an outstanding average of ${avg}%.`,
      severity: 'low'
    });
  } else if (avg < 50) {
    insights.push({
      insightType: 'performance',
      title: 'Remedial Support Alert',
      description: `Average performance is currently ${avg}%, requiring targeted faculty counseling.`,
      severity: 'high'
    });
  }

  return insights;
};

export default {
  generateRuleBasedInsights
};
