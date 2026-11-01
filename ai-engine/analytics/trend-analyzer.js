/**
 * Academic Longitudinal Trend Analyzer
 * Evaluates performance difference between consecutive exam assessment cycles.
 */

export function analyzePerformanceTrend(examSeries = []) {
  if (examSeries.length < 2) {
    return {
      delta: 0,
      direction: 'STABLE',
      consecutiveDeclines: 0
    };
  }

  const latest = examSeries[examSeries.length - 1].score;
  const previous = examSeries[examSeries.length - 2].score;
  const delta = parseFloat((latest - previous).toFixed(2));

  let direction = 'STABLE';
  if (delta > 2.0) direction = 'IMPROVING';
  if (delta < -2.0) direction = 'DECLINING';

  let consecutiveDeclines = 0;
  for (let i = examSeries.length - 1; i > 0; i--) {
    if (examSeries[i].score < examSeries[i - 1].score) {
      consecutiveDeclines++;
    } else {
      break;
    }
  }

  return {
    delta,
    direction,
    consecutiveDeclines
  };
}

export default {
  analyzePerformanceTrend
};
