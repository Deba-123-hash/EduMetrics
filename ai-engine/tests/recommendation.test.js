import test from 'node:test';
import assert from 'node:assert';
import { generateRecommendations } from '../services/recommendation.service.js';

test('generateRecommendations creates attendance recovery for low attendance', () => {
  const recs = generateRecommendations({
    attendancePct: 68,
    averageScore: 75
  });
  assert.strictEqual(recs.length, 1);
  assert.strictEqual(recs[0].priority, 'high');
  assert.match(recs[0].title, /Attendance Recovery/);
});
