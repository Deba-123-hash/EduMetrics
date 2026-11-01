/**
 * Pure Mathematical Attendance Calculator
 */

export function calculateAttendanceMetrics(sessions = []) {
  const total = sessions.length;
  if (!total) {
    return { total: 0, presentCount: 0, absentCount: 0, lateCount: 0, attendancePct: 100.0 };
  }

  const presentCount = sessions.filter((s) => s.status === 'present').length;
  const lateCount = sessions.filter((s) => s.status === 'late').length;
  const absentCount = sessions.filter((s) => s.status === 'absent').length;

  // Count late as 0.75 attendance
  const effectivePresent = presentCount + lateCount * 0.75;
  const attendancePct = parseFloat(((effectivePresent / total) * 100).toFixed(2));

  return {
    total,
    presentCount,
    absentCount,
    lateCount,
    attendancePct
  };
}

export default {
  calculateAttendanceMetrics
};
