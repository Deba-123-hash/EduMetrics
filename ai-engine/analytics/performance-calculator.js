/**
 * Pure Mathematical Performance Calculator
 * Calculates percentage, averages, and weighted GPAs deterministically.
 */

export function calculateAverageScore(marksList = []) {
  if (!marksList.length) return 0;
  const total = marksList.reduce((acc, curr) => acc + Number(curr.marks_obtained || 0), 0);
  const maxTotal = marksList.reduce((acc, curr) => acc + Number(curr.maximum_marks || 100), 0);
  return maxTotal > 0 ? parseFloat(((total / maxTotal) * 100).toFixed(2)) : 0;
}

export function identifySubjectGaps(marksList = [], passThreshold = 40.0) {
  return marksList.filter((m) => {
    const pct = (Number(m.marks_obtained) / Number(m.maximum_marks || 100)) * 100;
    return pct < passThreshold;
  });
}

export default {
  calculateAverageScore,
  identifySubjectGaps
};
