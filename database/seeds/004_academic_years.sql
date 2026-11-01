-- Seed: Academic Years
INSERT INTO academic_years (id, year_name, start_date, end_date, is_active) VALUES
  ('d0000000-0000-0000-0000-000000000001', '2025-2026', '2025-08-01', '2026-07-31', true),
  ('d0000000-0000-0000-0000-000000000002', '2024-2025', '2024-08-01', '2025-07-31', false)
ON CONFLICT (year_name) DO NOTHING;
