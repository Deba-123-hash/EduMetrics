-- View: attendance_summary_view
-- Aggregates student attendance rates by subject
CREATE OR REPLACE VIEW attendance_summary_view AS
SELECT 
  s.id AS student_id,
  s.student_id AS roll_number,
  u.full_name AS student_name,
  sub.id AS subject_id,
  sub.subject_code,
  sub.subject_name,
  COUNT(a.id) AS total_sessions,
  COUNT(a.id) FILTER (WHERE a.status = 'present') AS present_count,
  COUNT(a.id) FILTER (WHERE a.status = 'absent') AS absent_count,
  COUNT(a.id) FILTER (WHERE a.status = 'late') AS late_count,
  COUNT(a.id) FILTER (WHERE a.status = 'excused') AS excused_count,
  CASE 
    WHEN COUNT(a.id) > 0 THEN 
      ROUND(((COUNT(a.id) FILTER (WHERE a.status = 'present' OR a.status = 'late'))::NUMERIC / COUNT(a.id)::NUMERIC) * 100.0, 2)
    ELSE 100.00
  END AS attendance_percentage
FROM students s
JOIN users u ON s.user_id = u.id
JOIN attendance a ON s.id = a.student_id
JOIN subjects sub ON a.subject_id = sub.id
GROUP BY s.id, s.student_id, u.full_name, sub.id, sub.subject_code, sub.subject_name;
