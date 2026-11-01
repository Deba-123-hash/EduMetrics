-- ===================================================
-- Migration: 009_create_indexes_and_constraints.sql
-- Description: Composite and secondary indexes for performance optimization
-- ===================================================

CREATE INDEX IF NOT EXISTS idx_classes_dept_year ON classes(department_id, academic_year_id);
CREATE INDEX IF NOT EXISTS idx_students_dept_class ON students(department_id, class_id);
CREATE INDEX IF NOT EXISTS idx_faculty_dept ON faculty(department_id);
CREATE INDEX IF NOT EXISTS idx_subjects_dept ON subjects(department_id);
CREATE INDEX IF NOT EXISTS idx_marks_student_exam ON marks(student_id, exam_subject_id);
CREATE INDEX IF NOT EXISTS idx_exams_class_year ON exams(class_id, academic_year_id);
