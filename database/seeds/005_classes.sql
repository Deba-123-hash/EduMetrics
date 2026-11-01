-- Seed: Classes
INSERT INTO classes (id, department_id, academic_year_id, class_name, semester, section) VALUES
  ('e0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000001', 'MCA 2nd Year - Sec A', 'Semester 3', 'A'),
  ('e0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000001', 'MCA 2nd Year - Sec B', 'Semester 3', 'B')
ON CONFLICT (department_id, academic_year_id, semester, section) DO NOTHING;
