-- ===================================================
-- Migration: 001_create_extensions.sql
-- Description: Enables required PostgreSQL extensions (UUID and crypto)
-- ===================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
