export const aiConfig = {
  provider: 'openai',
  model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  temperature: 0.2, // Low temperature for deterministic, hallucination-resistant outputs
  maxTokens: 1500,
  timeoutMs: 30000,
  retries: 2,
  riskThresholds: {
    attendanceWarningPct: 75.0,
    marksPassingPct: 40.0,
    consecutiveDeclineThreshold: 2
  }
};

export default aiConfig;
