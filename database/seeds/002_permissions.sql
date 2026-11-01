/* @datacloud.settings
{
  "version": 1,
  "service": "SPARK",
  "connectionInfo": {},
  "dialect": "ANSI_SQL"
}
*/

-- Seed: Permissions
INSERT INTO permissions (id, name, description) VALUES
  ('b0000000-0000-0000-0000-000000000001', 'manage_users', 'Provision, update, or disable user accounts'),
  ('b0000000-0000-0000-0000-000000000002', 'manage_academics', 'Configure departments, classes, and subjects'),
  ('b0000000-0000-0000-0000-000000000003', 'enter_marks', 'Record examination marks for assigned classes'),
  ('b0000000-0000-0000-0000-000000000004', 'mark_attendance', 'Log daily student session attendance'),
  ('b0000000-0000-0000-0000-000000000005', 'view_analytics', 'Access analytical dashboards and risk reports')
ON CONFLICT (name) DO NOTHING;
