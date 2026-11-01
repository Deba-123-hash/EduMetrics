# EduInsight AI - Detailed Database Schema Overview

## Relational Architecture Summary

| # | Table Name | Primary Key | Key Foreign Keys | Purpose |
|---|---|---|---|---|
| 1 | `roles` | `id` (UUID) | None | System authorization roles |
| 2 | `permissions` | `id` (UUID) | None | Fine-grained operation permissions |
| 3 | `role_permissions` | `id` (UUID) | `role_id`, `permission_id` | Role-to-permission mapping |
| 4 | `users` | `id` (UUID) | `role_id` | Core authentication identities |
| 5 | `departments` | `id` (UUID) | None | Academic departments |
| 6 | `academic_years` | `id` (UUID) | None | Academic calendar cycles |
| 7 | `classes` | `id` (UUID) | `department_id`, `academic_year_id` | Class sections & semesters |
| 8 | `students` | `id` (UUID) | `user_id`, `department_id`, `class_id` | Student academic profiles |
| 9 | `faculty` | `id` (UUID) | `user_id`, `department_id` | Instructor profiles |
| 10 | `subjects` | `id` (UUID) | `department_id` | Curriculum course units |
| 11 | `class_subjects` | `id` (UUID) | `class_id`, `subject_id`, `faculty_id` | Faculty teaching allocations |
| 12 | `exams` | `id` (UUID) | `academic_year_id`, `class_id` | Institutional examination events |
| 13 | `exam_subjects` | `id` (UUID) | `exam_id`, `subject_id` | Subject exam configurations |
| 14 | `marks` | `id` (UUID) | `student_id`, `exam_subject_id` | Official assessment scores |
| 15 | `attendance` | `id` (UUID) | `student_id`, `subject_id`, `marked_by` | Session attendance records |
| 16 | `ai_insights` | `id` (UUID) | `student_id` | Grounded learning insights |
| 17 | `predictions` | `id` (UUID) | `student_id` | Academic performance estimates |
| 18 | `recommendations` | `id` (UUID) | `student_id` | Actionable remedial suggestions |
| 19 | `notifications` | `id` (UUID) | `user_id` | In-app user notifications |
| 20 | `reports` | `id` (UUID) | `generated_by` | Report export records |
| 21 | `audit_logs` | `id` (UUID) | `user_id` | Immutable system audit log |
| 22 | `system_settings` | `id` (UUID) | None | Dynamic platform parameters |
