export const RISK_LEVELS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

export const RISK_THRESHOLDS = {
  ATTENDANCE_CRITICAL: 75.0, // < 75% attendance triggers warning
  MARKS_PASSING: 40.0,        // < 40% triggers fail flag
  HIGH_RISK_SCORE: 70.0       // Calculated compound risk score > 70
};

export default {
  RISK_LEVELS,
  RISK_THRESHOLDS
};
