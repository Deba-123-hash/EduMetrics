import test from 'node:test';
import assert from 'node:assert';
import { calculateCompositeRiskScore } from '../analytics/risk-calculator.js';

test('calculateCompositeRiskScore flags low attendance as high risk', () => {
  const result = calculateCompositeRiskScore({
    attendancePct: 55, // +35
    averageScore: 35,   // +35
    failedCount: 1,     // +10
    scoreDelta: -12     // +10
  });
  assert.strictEqual(result.riskScore, 90.0);
  assert.strictEqual(result.riskLevel, 'high');
});

test('calculateCompositeRiskScore classifies perfect student as low risk', () => {
  const result = calculateCompositeRiskScore({
    attendancePct: 95,
    averageScore: 88,
    failedCount: 0,
    scoreDelta: 4
  });
  assert.strictEqual(result.riskScore, 0);
  assert.strictEqual(result.riskLevel, 'low');
});
