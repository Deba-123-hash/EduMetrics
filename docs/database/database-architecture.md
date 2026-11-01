# Database Architecture Specification

> **EduInsight AI** — AI-Powered Student Performance Analytics and Prediction Dashboard  
> Final-Year MCA Major Project  
> Database Engine: Neon Serverless PostgreSQL (PostgreSQL 18+)  
> Total Tables: 25

---

## 1. Architectural Principles

EduInsight AI implements an enterprise-grade relational database architecture designed for high consistency, strict referential integrity, and seamless analytical reporting:

1. **Third Normal Form (3NF)**: Eliminates data redundancy and anomaly vulnerabilities across transactional entities.
2. **UUID Primary Keys (UUIDv4)**: Standardized 128-bit Universally Unique Identifiers across all entities via `pgcrypto` (`gen_random_uuid()`), preventing sequential identifier enumeration attacks.
3. **Strict Referential Integrity**:
   - Historical academic ledgers (`marks`, `attendance`, `students`, `faculty`) use `ON DELETE RESTRICT` or `ON DELETE NO ACTION` to guarantee that educational records are never inadvertently purged.
   - Ephemeral session credentials (`refresh_tokens`, `password_reset_tokens`, `role_permissions`) use `ON DELETE CASCADE` to maintain clean authentication lifecycles.
4. **Automated Timestamp Triggers**: High-precision `TIMESTAMPTZ` with database-level triggers enforcing automated `updated_at` timestamps on entity modification.
5. **JSONB Analytics Support**: Structured `JSONB` columns reserved strictly for dynamic metadata, recommendation actions, and audit log delta payloads without breaking schema rigor.

---

## 2. Complete Entity Catalog (25 Tables)

### Domain A: Identity, Authentication & Access Control (7 Tables)
1. **`roles`**: System role definitions (`admin`, `faculty`, `student`).
   - Fields: `id` (UUID PK), `name` (VARCHAR UK), `description` (TEXT), `created_at` (TIMESTAMPTZ).
2. **`permissions`**: Granular operational privileges (e.g., `marks:write`, `ai:predict`, `users:manage`).
   - Fields: `id` (UUID PK), `name` (VARCHAR UK), `description` (TEXT), `created_at` (TIMESTAMPTZ).
3. **`role_permissions`**: Many-to-Many junction table bridging roles and permissions.
   - Fields: `id` (UUID PK), `role_id` (UUID FK -> `roles.id`), `permission_id` (UUID FK -> `permissions.id`).
4. **`users`**: Central account identity table for all platform users.
   - Fields: `id` (UUID PK), `role_id` (UUID FK -> `roles.id`), `full_name` (VARCHAR), `email` (VARCHAR UK), `password_hash` (VARCHAR), `phone` (VARCHAR), `avatar_url` (VARCHAR), `is_active` (BOOLEAN), `last_login_at` (TIMESTAMPTZ), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).
5. **`refresh_tokens`**: Persisted cryptographic refresh tokens for JWT session rotation.
   - Fields: `id` (UUID PK), `user_id` (UUID FK -> `users.id` ON DELETE CASCADE), `token_hash` (VARCHAR UK), `expires_at` (TIMESTAMPTZ), `revoked` (BOOLEAN), `created_at` (TIMESTAMPTZ).
6. **`password_reset_tokens`**: Secure time-limited password recovery tokens.
   - Fields: `id` (UUID PK), `user_id` (UUID FK -> `users.id` ON DELETE CASCADE), `token_hash` (VARCHAR UK), `expires_at` (TIMESTAMPTZ), `used` (BOOLEAN), `created_at` (TIMESTAMPTZ).
7. **`audit_logs`**: Immutable, tamper-evident chronological event log recording administrative and academic mutations.
   - Fields: `id` (UUID PK), `user_id` (UUID FK -> `users.id`), `action` (VARCHAR), `entity_type` (VARCHAR), `entity_id` (UUID), `details` (JSONB), `ip_address` (VARCHAR), `created_at` (TIMESTAMPTZ).

---

### Domain B: Institutional & Academic Core (7 Tables)
8. **`departments`**: Academic divisions (e.g., MCA, Computer Science, IT).
   - Fields: `id` (UUID PK), `department_name` (VARCHAR), `department_code` (VARCHAR UK), `description` (TEXT), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).
9. **`academic_years`**: Institutional academic calendar periods (e.g., 2024-2025).
   - Fields: `id` (UUID PK), `year_name` (VARCHAR UK), `start_date` (DATE), `end_date` (DATE), `is_active` (BOOLEAN), `created_at` (TIMESTAMPTZ).
10. **`classes`**: Semester cohorts offered by departments.
    - Fields: `id` (UUID PK), `department_id` (UUID FK -> `departments.id`), `academic_year_id` (UUID FK -> `academic_years.id`), `class_name` (VARCHAR), `semester` (VARCHAR), `section` (VARCHAR), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).
11. **`subjects`**: Course curriculum catalog with credits and passing criteria.
    - Fields: `id` (UUID PK), `department_id` (UUID FK -> `departments.id`), `subject_name` (VARCHAR), `subject_code` (VARCHAR UK), `credits` (INTEGER), `max_marks` (NUMERIC), `pass_marks` (NUMERIC), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).
12. **`class_subjects`**: Curriculum mappings linking classes, subjects, and assigned faculty instructors.
    - Fields: `id` (UUID PK), `class_id` (UUID FK -> `classes.id`), `subject_id` (UUID FK -> `subjects.id`), `faculty_id` (UUID FK -> `faculty.id`), `created_at` (TIMESTAMPTZ).
13. **`students`**: Student academic profiles linked to user credentials and enrolled classes.
    - Fields: `id` (UUID PK), `user_id` (UUID FK -> `users.id` UK), `department_id` (UUID FK -> `departments.id`), `class_id` (UUID FK -> `classes.id`), `roll_number` (VARCHAR UK), `registration_number` (VARCHAR UK), `admission_date` (DATE), `current_semester` (VARCHAR), `status` (VARCHAR), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).
14. **`faculty`**: Academic instructor profiles linked to departments and employee records.
    - Fields: `id` (UUID PK), `user_id` (UUID FK -> `users.id` UK), `department_id` (UUID FK -> `departments.id`), `employee_code` (VARCHAR UK), `designation` (VARCHAR), `qualification` (VARCHAR), `joining_date` (DATE), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).

---

### Domain C: Examinations & Grading (3 Tables)
15. **`exams`**: Examination events and assessment schedules (Internal 1, Internal 2, Semester Final, Practical).
    - Fields: `id` (UUID PK), `academic_year_id` (UUID FK -> `academic_years.id`), `class_id` (UUID FK -> `classes.id`), `exam_name` (VARCHAR), `exam_type` (VARCHAR), `start_date` (DATE), `end_date` (DATE), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).
16. **`exam_subjects`**: Exam timetable mappings defining subject-specific test dates and thresholds.
    - Fields: `id` (UUID PK), `exam_id` (UUID FK -> `exams.id`), `subject_id` (UUID FK -> `subjects.id`), `exam_date` (DATE), `max_marks` (NUMERIC), `pass_marks` (NUMERIC), `created_at` (TIMESTAMPTZ).
17. **`marks`**: Granular scores recorded per student for each examination subject.
    - Fields: `id` (UUID PK), `exam_subject_id` (UUID FK -> `exam_subjects.id`), `student_id` (UUID FK -> `students.id`), `marks_obtained` (NUMERIC), `grade` (VARCHAR), `remarks` (TEXT), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).

---

### Domain D: Attendance Management (1 Table)
18. **`attendance`**: Daily and subject-session level student attendance ledgers.
    - Fields: `id` (UUID PK), `student_id` (UUID FK -> `students.id`), `class_id` (UUID FK -> `classes.id`), `subject_id` (UUID FK -> `subjects.id`), `faculty_id` (UUID FK -> `faculty.id`), `date` (DATE), `status` (VARCHAR: `present`, `absent`, `late`, `excused`), `remarks` (TEXT), `created_at` (TIMESTAMPTZ).

---

### Domain E: AI & Predictive Analytics (3 Tables)
19. **`predictions`**: AI-generated multi-factor academic risk assessments.
    - Fields: `id` (UUID PK), `student_id` (UUID FK -> `students.id`), `risk_level` (VARCHAR: `low`, `medium`, `high`, `critical`), `risk_score` (NUMERIC: 0.00-100.00), `risk_factors` (JSONB), `confidence_score` (NUMERIC), `prediction_date` (TIMESTAMPTZ), `model_version` (VARCHAR), `created_at` (TIMESTAMPTZ).
20. **`ai_insights`**: Natural-language analytical evaluations synthesizing student trends.
    - Fields: `id` (UUID PK), `student_id` (UUID FK -> `students.id`), `insight_type` (VARCHAR), `summary` (TEXT), `strengths` (JSONB), `weaknesses` (JSONB), `generated_at` (TIMESTAMPTZ), `created_at` (TIMESTAMPTZ).
21. **`recommendations`**: Tailored intervention strategies and action items prescribed to students and advisors.
    - Fields: `id` (UUID PK), `student_id` (UUID FK -> `students.id`), `recommendation_text` (TEXT), `priority` (VARCHAR: `low`, `medium`, `high`), `action_items` (JSONB), `status` (VARCHAR: `pending`, `in_progress`, `completed`), `created_at` (TIMESTAMPTZ), `updated_at` (TIMESTAMPTZ).

---

### Domain F: Platform Operations & Administration (4 Tables)
22. **`notifications`**: In-app notifications alerting users to risks, exam updates, and attendance alerts.
    - Fields: `id` (UUID PK), `user_id` (UUID FK -> `users.id`), `title` (VARCHAR), `message` (TEXT), `type` (VARCHAR), `is_read` (BOOLEAN), `created_at` (TIMESTAMPTZ).
23. **`reports`**: Generated exportable documents (PDF grade cards, CSV analytics).
    - Fields: `id` (UUID PK), `generated_by` (UUID FK -> `users.id`), `report_name` (VARCHAR), `report_type` (VARCHAR), `file_url` (VARCHAR), `parameters` (JSONB), `created_at` (TIMESTAMPTZ).
24. **`system_settings`**: Global configuration key-value storage (institution metadata, risk thresholds).
    - Fields: `id` (UUID PK), `setting_key` (VARCHAR UK), `setting_value` (JSONB), `description` (TEXT), `updated_at` (TIMESTAMPTZ).
25. **`schema_migrations`**: Migration ledger tracking applied SQL scripts and timestamps.
    - Fields: `id` (SERIAL PK), `migration_name` (VARCHAR UK), `applied_at` (TIMESTAMPTZ).

---

## 3. Indexing & Optimization Strategy

To guarantee millisecond query performance on Neon serverless PostgreSQL, composite and B-Tree indexes are deployed across high-traffic lookup paths:

```sql
-- User and Profile Lookups
CREATE INDEX idx_users_role_id ON users(role_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_students_user_id ON students(user_id);
CREATE INDEX idx_students_class_id ON students(class_id);
CREATE INDEX idx_students_department_id ON students(department_id);

-- Academic Ledger & Timetable Lookups
CREATE INDEX idx_class_subjects_class_id ON class_subjects(class_id);
CREATE INDEX idx_class_subjects_subject_id ON class_subjects(subject_id);
CREATE INDEX idx_class_subjects_faculty_id ON class_subjects(faculty_id);

-- Assessment and Performance Queries
CREATE INDEX idx_marks_student_id ON marks(student_id);
CREATE INDEX idx_marks_exam_subject_id ON marks(exam_subject_id);
CREATE UNIQUE INDEX uq_marks_student_exam_subject ON marks(exam_subject_id, student_id);

-- Attendance Aggregate Lookups
CREATE INDEX idx_attendance_student_id ON attendance(student_id);
CREATE INDEX idx_attendance_class_id_date ON attendance(class_id, date);
CREATE INDEX idx_attendance_student_date ON attendance(student_id, date);

-- AI Intelligence Lookups
CREATE INDEX idx_predictions_student_id ON predictions(student_id);
CREATE INDEX idx_predictions_risk_level ON predictions(risk_level);
CREATE INDEX idx_ai_insights_student_id ON ai_insights(student_id);
CREATE INDEX idx_recommendations_student_id ON recommendations(student_id);

-- Audit and Notification Feeds
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at DESC);
CREATE INDEX idx_notifications_user_id_unread ON notifications(user_id) WHERE is_read = false;
```

---

## 4. Trigger Specifications

Automated timestamp maintenance is handled directly by PostgreSQL engine triggers:

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';
```

Applied to: `users`, `departments`, `classes`, `subjects`, `students`, `faculty`, `exams`, `marks`, `recommendations`, and `system_settings`.
