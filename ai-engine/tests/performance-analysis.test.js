import test from 'node:test';
import assert from 'node:assert';
import { calculateAverageScore } from '../analytics/performance-calculator.js';

test('calculateAverageScore returns correct percentage', () => {
  const marks = [
    { marks_obtained: 80, maximum_marks: 100 },
    { marks_obtained: 90, maximum_marks: 100 }
  ];
  const avg = calculateAverageScore(marks);
  assert.strictEqual(avg, 85.0);
});

test('calculateAverageScore returns 0 for empty list', () => {
  assert.strictEqual(calculateAverageScore([]), 0);
});
