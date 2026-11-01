# Production Pre-Flight Checklist

- [ ] All database migrations applied (`schema_migrations` verified).
- [ ] Database connection pooling configured with SSL mode enabled.
- [ ] Random 64-character JWT secrets configured in environment variables.
- [ ] CORS allowlist restricted to production frontend domain.
- [ ] OpenAI API key configured and rate limits tested.
- [ ] Automated structure and code quality checks passing (`node scripts/validate-structure.js`).
- [ ] Zero TypeScript dependencies or compiler artifacts in build output.
