-- Seed: Demo Assessment Marks
INSERT INTO marks (id, student_id, exam_subject_id, marks_obtained, grade, remarks) VALUES
  (
    '60000000-0000-0000-0000-000000000001',
    '30000000-0000-0000-0000-000000000001', -- Rahul Verma
    '50000000-0000-0000-0000-000000000001', -- CS301
    88.00,
    'A',
    'Demonstrated excellent understanding of cloud virtualization'
  ),
  (
    '60000000-0000-0000-0000-000000000002',
    '30000000-0000-0000-0000-000000000001', -- Rahul Verma
    '50000000-0000-0000-0000-000000000002', -- CS302
    82.00,
    'A',
    'Solid grasp of optimization and loss functions'
  )
ON CONFLICT (student_id, exam_subject_id) DO NOTHING;
