# Neon PostgreSQL Setup & Integration Guide

> **EduInsight AI** — AI-Powered Student Performance Analytics and Prediction Dashboard  
> Final-Year MCA Major Project  
> Database Infrastructure: Serverless PostgreSQL via Neon

---

## 1. Overview

EduInsight AI utilizes **Neon PostgreSQL** as its primary cloud relational database. Neon is a serverless, multi-tenant PostgreSQL platform with native architecture separating compute from storage, instant autoscaling, copy-on-write branching, and built-in connection pooling via PgBouncer.

This document details the configuration, connection management, pooling strategies, security standards, and troubleshooting procedures for operating EduInsight AI with Neon.

---

## 2. Serverless Architecture & Connection Pooling

### Architecture Summary
- **Compute Layer**: Serverless Postgres compute node running in AWS (e.g., `us-east-2`).
- **Connection Pooler**: Managed PgBouncer instance integrated into Neon. The pooler sits in front of the compute node to support high-concurrency client connections without overwhelming database memory.
- **Storage Layer**: Multi-tenant distributed storage architecture with automatic backups and point-in-time recovery (PITR).

```
   +--------------------------------------------------------+
   |             EduInsight AI Backend (Node.js)            |
   |              node-postgres (pg.Pool)                   |
   +--------------------------------------------------------+
                               |
                               | TLS / SSL (sslmode=require)
                               v
   +--------------------------------------------------------+
   |         Neon Connection Pooler (PgBouncer)             |
   |        ep-*-pooler.c-*.aws.neon.tech:5432              |
   +--------------------------------------------------------+
                               |
                               v
   +--------------------------------------------------------+
   |          PostgreSQL 18+ Engine (Compute)               |
   |          Database: neondb | Schema: public             |
   +--------------------------------------------------------+
                               |
                               v
   +--------------------------------------------------------+
   |         Distributed Cloud Storage (Pageserver)         |
   +--------------------------------------------------------+
```

### Direct vs. Pooler Endpoints
- **Pooler Host** (`*-pooler.*.aws.neon.tech`): Recommended for API backend and transactional endpoints with dynamic user traffic. Prevents exhaustion of backend connections during peak activity.
- **Direct Host** (`*.*.aws.neon.tech`): Optional for large DDL operations or non-pooled transactional guarantees if required.

---

## 3. Environment Configuration

### Backend Environment File (`server/.env`)
The database connection string is stored securely in the local backend environment file. It is **never** committed to version control.

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Connection (Neon PostgreSQL)
DATABASE_URL=postgresql://username:password@ep-example-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require

# JWT Secrets
JWT_SECRET=your_jwt_secret_key_change_in_production
JWT_EXPIRES_IN=24h
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key_change_in_production
JWT_REFRESH_EXPIRES_IN=7d

# CORS
CLIENT_URL=http://localhost:5173
```

### Example Environment File (`server/.env.example`)
Only generic placeholders are retained in version-controlled example files:

```env
DATABASE_URL=postgresql://username:password@hostname:5432/database?sslmode=require
```

### Git Exclusion Guarantee
Ensure `.env` is explicitly declared in both the root `.gitignore` and `server/.gitignore`:

```gitignore
# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

---

## 4. Connection Implementation (`server/src/config/database.js`)

The Node.js backend communicates with Neon via `node-postgres` (`pg`):

```javascript
import pg from 'pg';
import { env } from './env.js';

const { Pool } = pg;

const isProduction = env.NODE_ENV === 'production';

// SSL configuration for Neon Cloud PostgreSQL
const sslConfig = {
  rejectUnauthorized: isProduction ? true : false
};

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: sslConfig,
  max: 20,                       // Maximum number of active clients in the pool
  idleTimeoutMillis: 30000,       // Close idle clients after 30 seconds
  connectionTimeoutMillis: 10000 // Fail after 10 seconds if connection cannot be established
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client:', err);
});
```

---

## 5. Security & Credential Rotation

1. **No Frontend Exposure**: The `DATABASE_URL` is used strictly within the server runtime. It is never prefixed with `VITE_` or exposed across REST payloads.
2. **Rotating Connection Strings in Neon**:
   - Navigate to the **Neon Console** -> **Project Settings** -> **Roles & Databases**.
   - Select the role (e.g., `neondb_owner`) and click **Reset password**.
   - Copy the newly generated connection string.
   - Update `DATABASE_URL` in `server/.env`.
   - Restart the server process (`npm run server`).
3. **Log Obfuscation**: The backend database diagnostic utilities (`check.js`, `testDatabase.js`) parse `DATABASE_URL` with `new URL()` and output only the target hostname and database name, completely suppressing embedded passwords from logs.

---

## 6. Connectivity Verification

### Running the Diagnostic Test
Execute the test script to verify connection pool readiness and live schema verification:

```bash
# From repository root
npm run db:test

# Or from server workspace
npm run db:test --workspace=server
```

Expected Output:
```text
======================================================
       Testing Neon PostgreSQL Connection Status      
======================================================
Target Host   : ep-*-pooler.c-7.us-east-2.aws.neon.tech
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

### Checking Tables and Engine Version
```bash
npm run db:check --workspace=server
```

---

## 7. Troubleshooting Guide

| Issue / Error | Cause | Resolution |
| :--- | :--- | :--- |
| `ENOTFOUND hostname` | Network DNS resolution failure or missing internet connectivity. | Verify internet connectivity and ensure target Neon host hostname is spelled correctly in `DATABASE_URL`. |
| `self-signed certificate in certificate chain` | SSL verification failure during TLS handshake. | Set `rejectUnauthorized: false` for development SSL contexts while retaining `sslmode=require`. |
| `password authentication failed for user` | Invalid credentials or rotated password. | Reset password in the Neon Console and update `DATABASE_URL` in `server/.env`. |
| `remaining connection slots are reserved for non-replication superuser connections` | Connection leak or pool size exceeded. | Ensure pool clients are released via `client.release()` in `finally` blocks, and connect via the `-pooler` endpoint. |
| `endpoint is suspended / compute auto-suspend` | Serverless compute scaled down after inactivity. | Neon compute resumes automatically on incoming requests (~500ms wake-up). Increase `connectionTimeoutMillis` to `10000`. |

