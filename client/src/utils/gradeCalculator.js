export function calculateGrade(percentage) {
  const p = Number(percentage);
  if (isNaN(p) || p < 0) return 'F';
  if (p >= 90) return 'A+';
  if (p >= 80) return 'A';
  if (p >= 70) return 'B+';
  if (p >= 60) return 'B';
  if (p >= 50) return 'C';
  if (p >= 40) return 'D';
  return 'F';
}

export function isPassingGrade(grade) {
  return grade !== 'F';
}

export default calculateGrade;
