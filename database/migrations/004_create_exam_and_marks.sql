-- ===================================================
-- Migration: 004_create_exam_and_marks.sql
-- Description: Examination and Student Assessment Records
-- ===================================================

-- 12. Exams Table
CREATE TABLE IF NOT EXISTS exams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_name VARCHAR(150) NOT NULL,
  exam_type VARCHAR(50) NOT NULL, -- Internal, Mid-Term, End-Sem, Practical
  academic_year_id UUID NOT NULL REFERENCES academic_years(id) ON DELETE RESTRICT,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE RESTRICT,
  exam_date DATE NOT NULL,
  maximum_marks NUMERIC(5, 2) NOT NULL DEFAULT 100.00,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT chk_exam_max_marks CHECK (maximum_marks > 0)
);

-- 13. Exam Subjects Configuration Table
CREATE TABLE IF NOT EXISTS exam_subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_id UUID NOT NULL REFERENCES exams(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE RESTRICT,
  maximum_marks NUMERIC(5, 2) NOT NULL DEFAULT 100.00,
  passing_marks NUMERIC(5, 2) NOT NULL DEFAULT 40.00,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uq_exam_subject UNIQUE (exam_id, subject_id),
  CONSTRAINT chk_exam_subject_marks CHECK (maximum_marks > 0 AND passing_marks <= maximum_marks)
);

-- 14. Marks Table
CREATE TABLE IF NOT EXISTS marks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  exam_subject_id UUID NOT NULL REFERENCES exam_subjects(id) ON DELETE CASCADE,
  marks_obtained NUMERIC(5, 2) NOT NULL,
  grade VARCHAR(5),
  remarks TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uq_student_exam_subject UNIQUE (student_id, exam_subject_id),
  CONSTRAINT chk_marks_obtained CHECK (marks_obtained >= 0)
);
