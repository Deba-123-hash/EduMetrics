-- Seed: Subjects
INSERT INTO subjects (id, department_id, subject_code, subject_name, credits) VALUES
  ('f0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'CS301', 'Cloud Computing Architecture', 4.0),
  ('f0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000001', 'CS302', 'Machine Learning Foundations', 4.0),
  ('f0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000001', 'CS303', 'Software Quality Engineering', 3.0)
ON CONFLICT (subject_code) DO NOTHING;
