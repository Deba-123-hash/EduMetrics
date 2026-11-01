# Neon PostgreSQL Production Setup Guide

1. Sign up at [neon.tech](https://neon.com).
2. Create project `eduinsight-ai`.
3. Copy the pooled connection string format:
   `postgresql://[user]:[password]@[endpoint]-pooler.us-east-2.aws.neon.tech/[dbname]?sslmode=require`
4. Set `DATABASE_URL` in Render environment variables.
5. Run migrations via Render deploy hook or CLI:
   `npm run db:migrate`
