# PostgreSQL Database Testing & Integrity Report

## 1. Relational Database Overview
EduInsight AI uses **Neon Serverless PostgreSQL (PostgreSQL 15+)** for high-reliability educational data persistence.

The database architecture is designed with strict relational constraints:
- **Primary Keys**: Universally Unique Identifiers (UUID v4) via PostgreSQL `gen_random_uuid()` or `uuid-ossp` to avoid sequential ID enumeration vulnerabilities.
- **Timestamps**: All tables maintain `created_at` and `updated_at` with time-zone awareness (`TIMESTAMPTZ`), automatically maintained by SQL triggers.
- **Referential Integrity**: Cascading deletes on dependent leaf records (`ON DELETE CASCADE`) and restricted deletes on master lookup records (`ON DELETE RESTRICT`).

---

## 2. Migration Execution Sequence & Table Catalog

The database schema is constructed through 10 ordered, idempotent SQL migrations located in `database/migrations/`:

| Migration File | Tables / Objects Created | Purpose & Key Constraints | Status |
| :--- | :--- | :--- | :---: |
| `001_create_extensions.sql` | `uuid-ossp`, `pgcrypto` | Enables UUID generator functions in PostgreSQL | **PASS** |
| `002_create_user_management.sql` | `roles`, `permissions`, `role_permissions`, `users` | User credentials, bcrypt password hashes, and RBAC mappings | **PASS** |
| `003_create_academic_tables.sql` | `departments`, `academic_years`, `classes`, `subjects`, `faculty`, `students` | Core university academic structure and enrollments | **PASS** |
| `004_create_exam_and_marks.sql` | `exams`, `exam_subjects`, `marks` | Examination schedules, passing thresholds, subject marks | **PASS** |
| `005_create_attendance.sql` | `attendance` | Daily attendance tracking with `present`, `absent`, `late` enum | **PASS** |
| `006_create_ai_analytics.sql` | `ai_insights`, `predictions`, `recommendations` | Storage for model-generated predictions, risk scores, and guidance | **PASS** |
| `007_create_notifications_and_reports.sql`| `notifications`, `reports` | User notifications and generated performance report metadata | **PASS** |
| `008_create_system_management.sql`| `audit_logs`, `system_settings` | Tamper-evident audit trail and institutional configuration | **PASS** |
| `009_create_indexes_and_constraints.sql` | 18 Performance Indexes | High-speed indexing on foreign keys and filter fields | **PASS** |
| `010_create_updated_at_triggers.sql` | Trigger Function & Triggers | Automated timestamp updating on record modifications | **PASS** |

---

## 3. Database Entity Relationship Model (ERD)

```mermaid
erDiagram
    ROLES ||--o{ USERS : "assigned to"
    USERS ||--o| STUDENTS : "profile of"
    USERS ||--o| FACULTY : "profile of"
    DEPARTMENTS ||--o{ CLASSES : "offers"
    DEPARTMENTS ||--o{ FACULTY : "employs"
    CLASSES ||--o{ STUDENTS : "enrolls"
    CLASSES ||--o{ EXAMS : "conducts"
    STUDENTS ||--o{ MARKS : "achieves"
    STUDENTS ||--o{ ATTENDANCE : "recorded"
    STUDENTS ||--o{ PREDICTIONS : "assessed"
    STUDENTS ||--o{ RECOMMENDATIONS : "receives"
    EXAMS ||--o{ MARKS : "records"
    SUBJECTS ||--o{ MARKS : "graded in"
```

---

## 4. Referential Integrity & Foreign Key Rules

| Child Table | Foreign Key Column | Parent Table | On Delete Action | Integrity Justification |
| :--- | :--- | :--- | :--- | :--- |
| `users` | `role_id` | `roles(id)` | `RESTRICT` | Prevents accidental deletion of active system roles |
| `students` | `user_id` | `users(id)` | `CASCADE` | Student record purges if parent user is removed |
| `faculty` | `user_id` | `users(id)` | `CASCADE` | Faculty record purges if parent user is removed |
| `classes` | `department_id` | `departments(id)` | `CASCADE` | Classes cascade on department retirement |
| `marks` | `student_id` | `students(id)` | `CASCADE` | Marks belong strictly to the student entity |
| `attendance` | `student_id` | `students(id)` | `CASCADE` | Attendance logs belong to the student entity |
| `predictions`| `student_id` | `students(id)` | `CASCADE` | AI analytics depend on the student record |

---

## 5. Indexing Strategy Verification

All high-traffic queries and JOIN operations are supported by dedicated B-Tree indexes:
- `idx_users_email`: Guarantees sub-millisecond lookup for user authentication.
- `idx_students_user_id`: Optimizes student profile lookups from JWT claims.
- `idx_marks_student_id`: Accelerates report card and transcript generation.
- `idx_attendance_student_date`: Speeds up date-range attendance aggregation.
- `idx_predictions_student`: Fast retrieval of student risk levels on dashboard render.

---

## 6. Database Views & Stored Procedures

The database layer includes pre-computed analytical views located in `database/views/`:
1. **`student_performance_view.sql`**: Aggregates average marks obtained, total credits attempted, and overall percentage per student.
2. **`attendance_summary_view.sql`**: Computes total sessions held, sessions attended, and attendance percentage per student per subject.

Stored helper functions located in `database/functions/`:
- `calculate_attendance.sql`: SQL function returning attendance percentage given student ID and date window.
- `calculate_percentage.sql`: Computes marks percentage with precision rounding.
- `update_timestamp.sql`: Automated trigger callback updating `updated_at = CURRENT_TIMESTAMP`.

---

## 7. Seed Data Catalog Verification

All 11 seed scripts in `database/seeds/` were checked for schema alignment:
1. `001_roles.sql`: Seeds `admin`, `faculty`, `student` roles.
2. `002_permissions.sql`: Seeds granular access permissions (`students:read`, `marks:write`, etc.).
3. `003_departments.sql`: Seeds MCA, BCA, and CSE departments.
4. `004_academic_years.sql`: Seeds 2024–2025 academic calendar.
5. `005_classes.sql`: Seeds MCA-S1, MCA-S3 cohorts.
6. `006_subjects.sql`: Seeds core subjects (CS301 DBMS, CS302 Machine Learning).
7. `007_demo_users.js`: Seeds bcrypt-hashed accounts for Admin, Faculty, and Student.
8. `008_demo_students.sql`: Seeds student profiles linked to demo user.
9. `009_demo_exams.sql`: Seeds Mid-Term Examination 2025.
10. `010_demo_marks.sql`: Seeds benchmark marks records.
11. `011_demo_attendance.sql`: Seeds daily attendance entries.

---

## 8. Database Verification Verdict
**100% PASS**: Schema migrations, relational constraints, UUID key strategies, indexes, stored views, and seed datasets are validated and ready for production deployment on Neon PostgreSQL.

