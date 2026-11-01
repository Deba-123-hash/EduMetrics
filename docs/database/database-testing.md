# Database Testing & Verification Guide

> **EduInsight AI** — AI-Powered Student Performance Analytics and Prediction Dashboard  
> Final-Year MCA Major Project  
> Database Testing Suite: Unit, Integration, Health Check Endpoints & Live Verification

---

## 1. Overview

EduInsight AI includes a multi-layered testing and diagnostic architecture to validate Neon PostgreSQL database connectivity, transaction execution, query latency, schema integrity, and live API endpoints.

---

## 2. CLI Diagnostic Scripts

### 1. Connection & Schema Verification (`npm run db:test`)
Script: `server/src/config/testDatabase.js`

Executes an explicit handshake with the Neon connection pool, runs standard verification queries, inspects the table catalog, and asserts overall health:

```bash
npm run db:test --workspace=server
```

**Verification Queries**:
```sql
-- Pool Handshake Query
SELECT NOW() AS current_time, current_database() AS database_name;

-- Schema Table Count Query
SELECT COUNT(*) AS total_tables 
FROM information_schema.tables 
WHERE table_schema = 'public';
```

**Standard Success Output**:
```text
======================================================
       Testing Neon PostgreSQL Connection Status      
======================================================
Target Host   : ep-summer-fire-b5nq0ydc-pooler.c-7.us-east-2.aws.neon.tech
Database Name : neondb
SSL Mode      : require
Acquiring client from PostgreSQL connection pool...
Connection pool client acquired successfully!

--- Query Verification Results ---
Current Time  : Mon Nov 02 2026 01:05:06 GMT+0530 (India Standard Time)
Database Name : neondb
PostgreSQL Responded : YES
Connection Pool Status: HEALTHY
Total Tables in 'public' schema: 25

======================================================
STATUS: NEON DATABASE CONNECTED SUCCESSFULLY
======================================================
```

---

### 2. Full Catalog & Engine Check (`npm run db:check`)
Script: `server/src/database/check.js`

Retrieves engine version, timestamps, and full listing of all 25 public application tables:

```bash
npm run db:check --workspace=server
```

**Output**:
```text
PostgreSQL Engine Version: PostgreSQL 18.6 on aarch64-unknown-linux-gnu
Application Tables Detected (25): [
  'academic_years', 'ai_insights', 'attendance', 'audit_logs',
  'class_subjects', 'classes', 'departments', 'exam_subjects',
  'exams', 'faculty', 'marks', 'notifications',
  'password_reset_tokens', 'permissions', 'predictions', 'recommendations',
  'refresh_tokens', 'reports', 'role_permissions', 'roles',
  'schema_migrations', 'students', 'subjects', 'system_settings', 'users'
]
Database diagnostic check PASSED.
```

---

## 3. Live Health Check API Endpoints

The backend exposes dedicated HTTP endpoints for live health checks and uptime monitors:

### 1. `GET /api/health`
Basic operational status of the Node.js API server.

**Response**:
```json
{
  "success": true,
  "message": "EduInsight AI API Server is active and operational",
  "data": {
    "status": "healthy",
    "timestamp": "2026-11-02T01:05:06.123Z",
    "environment": "development"
  }
}
```

### 2. `GET /api/health/db` (or `/api/health/database`)
Validates live connection to Neon PostgreSQL and confirms database responsiveness.

**Response**:
```json
{
  "success": true,
  "message": "Database connected successfully",
  "data": {
    "status": "connected",
    "database": "neondb",
    "currentTime": "2026-11-02T01:05:06.123Z",
    "connectionPool": "healthy"
  }
}
```

---

## 4. Automated Integration Test Suite

All API endpoints, auth middleware, and academic data repositories run automated end-to-end integration tests using Node.js built-in test runner (`node:test`) and `supertest`:

```bash
# Run all project test suites
npm test
```

### Test Suite Summary
| Test Suite | File | Tests | Status |
| :--- | :--- | :---: | :---: |
| **AI Engine Unit & Algorithm Tests** | `ai-engine/tests/*.test.js` | 5 | PASSED |
| **API Health, Auth & RBAC Suite** | `server/tests/api/auth-and-rbac.test.js` | 27 | PASSED |
| **Academic & AI Modules API Suite** | `server/tests/api/academic-and-ai.test.js` | 11 | PASSED |
| **Database Schema & Migrations Suite** | `tests/unit/database-schema.test.js` | 10 | PASSED |
| **Security & Vulnerability Audit Suite** | `tests/security/security-audit.test.js` | 6 | PASSED |
| **Performance & Optimization Suite** | `tests/performance/performance-benchmark.test.js` | 5 | PASSED |
| **Client Components & Layouts Suite** | `client/tests/components/routes-and-views.test.js` | 5 | PASSED |
| **TOTAL** | **7 Suites** | **69** | **100% PASS** |

