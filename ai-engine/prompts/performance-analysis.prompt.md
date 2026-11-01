# Performance Analysis Prompt Template

Given the following verified student academic history:
- Student Identifier: {{student_id}}
- Enrolled Class: {{class_name}}
- Subject Marks:
{{#each subjects}}
  - {{this.code}}: {{this.marks_obtained}} / {{this.max_marks}} (Grade: {{this.grade}})
{{/each}}
- Overall Attendance: {{attendance_percentage}}%

Analyze the student's academic strengths, subject bottlenecks, and longitudinal changes.
Provide a structured JSON output with title, description, evidence list, and severity.
