# Academic Risk Prediction Prompt Template

Analyze the risk profile for student {{student_id}} with:
- Attendance Compliance: {{attendance_percentage}}% (Threshold: 75%)
- Failed Subjects: {{failed_subjects_count}}
- Score Delta vs Previous Term: {{score_delta}}%
- Calculated Composite Risk Score: {{risk_score}}/100

Synthesize the key contributing factors into an objective, explainable risk summary.
Outputs must explicitly state: "Predictions are decision-support estimates, not guaranteed outcomes."
