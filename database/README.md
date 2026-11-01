# EduInsight AI Database Architecture

This directory contains the complete database layer for **EduInsight AI**, powered by **Neon Serverless PostgreSQL**.

## Table Catalog (22 Application Tables)

### A. User & Access Management
1. **`roles`**: System roles (`admin`, `faculty`, `student`).
2. **`permissions`**: Granular platform privileges (`manage_users`, `enter_marks`, etc.).
3. **`role_permissions`**: Many-to-many junction mapping permissions to roles.
4. **`users`**: Platform user accounts with bcrypt hashed passwords and active flags.

### B. Academic Management
5. **`departments`**: Academic units (MCA, CSE, IT).
6. **`academic_years`**: Active and historical academic year periods.
7. **`classes`**: Semester cohorts and section groups.
8. **`students`**: Detailed student profile mapping to User and Class records.
9. **`faculty`**: Academic staff profiles mapping to User and Department records.
10. **`subjects`**: Course catalog with credits and course codes.
11. **`class_subjects`**: Teaching assignment mapping faculty to subjects in a class.

### C. Examination Management
12. **`exams`**: Institutional exams (Mid-Term, End-Sem, Internals).
13. **`exam_subjects`**: Subject configuration per exam with max and passing marks.
14. **`marks`**: Individual student score records and assigned grades.

### D. Attendance Management
15. **`attendance`**: Daily session-level attendance status (`present`, `absent`, `late`, `excused`).

### E. AI Analytics
16. **`ai_insights`**: Grounded AI-generated analytical findings and risk alerts.
17. **`predictions`**: Statistical outcome forecasts with confidence bounds.
18. **`recommendations`**: Context-aware personalized study actions.

### F. Notifications & Reports
19. **`notifications`**: Targeted user notifications.
20. **`reports`**: Logged file references for generated academic reports.

### G. System Management & Security
21. **`audit_logs`**: Immutable security and activity audit records with JSONB metadata.
22. **`system_settings`**: Configurable institutional policies, thresholds, and weights.

---

## Migration & Seed Commands

```bash
# Apply all pending SQL migrations
npm run db:migrate --workspace=server

# Seed baseline reference and demo data
npm run db:seed --workspace=server

# Verify database connection and tables
npm run db:check --workspace=server
```
