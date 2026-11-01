-- Seed: Departments
INSERT INTO departments (id, department_name, department_code, description) VALUES
  ('c0000000-0000-0000-0000-000000000001', 'Master of Computer Applications', 'MCA', 'Postgraduate software development, AI, and cloud architecture'),
  ('c0000000-0000-0000-0000-000000000002', 'Computer Science and Engineering', 'CSE', 'Undergraduate computer science and software systems')
ON CONFLICT (department_code) DO NOTHING;
