/**
 * Transparent Rule-Based Academic Risk Calculator
 * Produces a composite risk score (0-100) and classification (low, medium, high).
 */

export function calculateCompositeRiskScore({
  attendancePct = 100,
  averageScore = 100,
  failedCount = 0,
  scoreDelta = 0
}) {
  let riskScore = 0;

  // 1. Attendance contribution (weight: 35%)
  if (attendancePct < 65) {
    riskScore += 35;
  } else if (attendancePct < 75) {
    riskScore += 20;
  } else if (attendancePct < 85) {
    riskScore += 10;
  }

  // 2. Exam marks contribution (weight: 35%)
  if (averageScore < 40) {
    riskScore += 35;
  } else if (averageScore < 50) {
    riskScore += 25;
  } else if (averageScore < 60) {
    riskScore += 15;
  }

  // 3. Failed subject multiplier (weight: 20%)
  riskScore += Math.min(20, failedCount * 10);

  // 4. Trend decline contribution (weight: 10%)
  if (scoreDelta < -10) {
    riskScore += 10;
  } else if (scoreDelta < -5) {
    riskScore += 5;
  }

  riskScore = Math.min(100, Math.max(0, riskScore));

  let riskLevel = 'low';
  if (riskScore >= 60) {
    riskLevel = 'high';
  } else if (riskScore >= 30) {
    riskLevel = 'medium';
  }

  return {
    riskScore: parseFloat(riskScore.toFixed(2)),
    riskLevel
  };
}

export default {
  calculateCompositeRiskScore
};
