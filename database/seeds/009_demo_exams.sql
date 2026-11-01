-- Seed: Demo Examinations and Exam Subjects
INSERT INTO exams (id, exam_name, exam_type, academic_year_id, class_id, exam_date, maximum_marks) VALUES
  (
    '40000000-0000-0000-0000-000000000001',
    'Mid-Term Examination 2025',
    'Mid-Term',
    'd0000000-0000-0000-0000-000000000001',
    'e0000000-0000-0000-0000-000000000001',
    '2025-10-15',
    100.00
  )
ON CONFLICT DO NOTHING;

INSERT INTO exam_subjects (id, exam_id, subject_id, maximum_marks, passing_marks) VALUES
  (
    '50000000-0000-0000-0000-000000000001',
    '40000000-0000-0000-0000-000000000001',
    'f0000000-0000-0000-0000-000000000001', -- CS301
    100.00,
    40.00
  ),
  (
    '50000000-0000-0000-0000-000000000002',
    '40000000-0000-0000-0000-000000000001',
    'f0000000-0000-0000-0000-000000000002', -- CS302
    100.00,
    40.00
  )
ON CONFLICT (exam_id, subject_id) DO NOTHING;
