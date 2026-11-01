# Database Design Specification

## 1. Design Philosophy
- **Normalization**: Schema normalized to Third Normal Form (3NF) to eliminate data redundancy and anomalies.
- **UUID Keys**: All primary keys utilize standard 128-bit Universally Unique Identifiers (UUIDv4) to prevent enumeration vulnerabilities.
- **Data Integrity Constraints**: Comprehensive foreign keys with explicit `ON DELETE RESTRICT` for historical academic ledgers (e.g. marks and attendance) to prevent accidental loss of student historical data.
- **Timestamps**: Explicit `TIMESTAMPTZ` with automated PostgreSQL triggers keeping `updated_at` updated.
- **JSONB Extensibility**: Flexible JSONB fields utilized only where schema variance is strictly justified (system settings and audit log snapshots).
