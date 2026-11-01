# Database Migrations Guide

> **EduInsight AI** — AI-Powered Student Performance Analytics and Prediction Dashboard  
> Final-Year MCA Major Project  
> Migration Framework: Custom Node.js Transactional Migration Runner

---

## 1. Migration System Overview

EduInsight AI includes an automated, transactional SQL migration runner located at:
`server/src/database/migrate.js`

### Key Features
- **Strict Idempotency**: Each migration script is tracked in the `schema_migrations` table by name. Previously executed migrations are automatically skipped.
- **Transactional Safety**: Every individual migration runs inside an isolated `BEGIN ... COMMIT` block. If any query or DDL statement fails, a `ROLLBACK` is triggered immediately, leaving the database in a consistent state.
- **Deterministic Ordering**: Migration files are ordered lexicographically by numeric prefix (`001_`, `002_`, ..., `010_`), guaranteeing that foreign keys and dependencies are created in the proper sequence.

---

## 2. Migration Execution Commands

```bash
# Execute migrations via server workspace
npm run db:migrate --workspace=server

# Direct Node execution
node server/src/database/migrate.js
```

---

## 3. Migration Inventory

| Step | File Name | Primary Purpose | Entities / Actions Created |
| :---: | :--- | :--- | :--- |
| **001** | `001_create_extensions.sql` | Enable Postgres engine extensions | `uuid-ossp`, `pgcrypto` for UUID generation |
| **002** | `002_create_user_management.sql` | Identity and access control schema | `roles`, `permissions`, `role_permissions`, `users`, `refresh_tokens`, `password_reset_tokens`, `audit_logs` |
| **003** | `003_create_academic_tables.sql` | Departmental and curriculum hierarchy | `departments`, `academic_years`, `classes`, `subjects`, `class_subjects`, `faculty`, `students` |
| **004** | `004_create_exam_and_marks.sql` | Assessment and gradebook structures | `exams`, `exam_subjects`, `marks` |
| **005** | `005_create_attendance.sql` | Class session attendance tracking | `attendance` table with status constraints (`present`, `absent`, `late`, `excused`) |
| **006** | `006_create_ai_analytics.sql` | AI predictions, recommendations & insights | `predictions`, `ai_insights`, `recommendations` with JSONB metrics |
| **007** | `007_create_notifications_and_reports.sql` | Alert feeds and document tracking | `notifications`, `reports` |
| **008** | `008_create_system_management.sql` | Dynamic runtime system settings | `system_settings` key-value repository |
| **009** | `009_create_indexes_and_constraints.sql` | Query performance optimization | B-Tree foreign key indexes, composite uniqueness constraints, audit ordering |
| **010** | `010_create_updated_at_triggers.sql` | Automated entity timestamp triggers | `update_updated_at_column()` PL/pgSQL function and table event triggers |

---

## 4. `schema_migrations` Table Definition

```sql
CREATE TABLE IF NOT EXISTS schema_migrations (
    id SERIAL PRIMARY KEY,
    migration_name VARCHAR(255) UNIQUE NOT NULL,
    applied_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

To verify currently applied migrations in Neon:
```sql
SELECT id, migration_name, applied_at FROM schema_migrations ORDER BY id ASC;
```

---

## 5. Rollback & Forward Migration Best Practices

1. **Forward Migrations Only in Production**: In production environments, never alter existing migration files that have already been deployed. Always write a new incremented migration (e.g., `011_add_column_to_table.sql`).
2. **Schema Branching in Neon**: Neon supports instant copy-on-write branching. Before applying risky DDL migrations to the primary branch, developers can branch `main` to a test branch (e.g., `test-migration-011`), verify `npm run db:migrate`, and then merge or apply directly.
3. **Data Loss Prevention**: Never issue destructive commands (`DROP TABLE`, `TRUNCATE`) in existing migration files. Use non-destructive `ALTER TABLE ... ADD COLUMN` or deprecation flags.

