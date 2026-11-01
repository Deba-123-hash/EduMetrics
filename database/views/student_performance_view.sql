-- View: student_performance_view
-- Aggregates student scores, examination subjects, and grade distributions
CREATE OR REPLACE VIEW student_performance_view AS
SELECT 
  s.id AS student_id,
  s.student_id AS roll_number,
  u.full_name AS student_name,
  d.department_code,
  c.class_name,
  sub.subject_code,
  sub.subject_name,
  e.exam_name,
  e.exam_type,
  m.marks_obtained,
  es.maximum_marks,
  es.passing_marks,
  ROUND((m.marks_obtained / es.maximum_marks) * 100.0, 2) AS percentage,
  m.grade,
  CASE WHEN m.marks_obtained >= es.passing_marks THEN 'PASS' ELSE 'FAIL' END AS result_status
FROM marks m
JOIN students s ON m.student_id = s.id
JOIN users u ON s.user_id = u.id
JOIN exam_subjects es ON m.exam_subject_id = es.id
JOIN exams e ON es.exam_id = e.id
JOIN subjects sub ON es.subject_id = sub.id
JOIN classes c ON s.class_id = c.id
JOIN departments d ON s.department_id = d.id;
