-- Seed: Roles
INSERT INTO roles (id, name, description) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'admin', 'Institutional administrator with full platform governance privileges'),
  ('a0000000-0000-0000-0000-000000000002', 'faculty', 'Faculty member with grading, attendance, and course analytics access'),
  ('a0000000-0000-0000-0000-000000000003', 'student', 'Enrolled student with personal progress, marks, and AI recommendations access')
ON CONFLICT (name) DO NOTHING;
