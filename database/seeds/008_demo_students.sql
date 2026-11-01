-- Seed: Demo Students
INSERT INTO students (id, user_id, student_id, department_id, class_id, enrollment_date, date_of_birth, gender) VALUES
  (
    '30000000-0000-0000-0000-000000000001',
    '10000000-0000-0000-0000-000000000003',
    'MCA2024-001',
    'c0000000-0000-0000-0000-000000000001',
    'e0000000-0000-0000-0000-000000000001',
    '2024-08-01',
    '2002-05-14',
    'male'
  )
ON CONFLICT (student_id) DO NOTHING;
