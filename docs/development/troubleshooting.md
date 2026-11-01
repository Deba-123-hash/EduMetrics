# Troubleshooting Common Issues

### 1. Database Connection Timeout
- Verify your internet connection.
- Check that `DATABASE_URL` contains `?sslmode=require`.
- Test directly with `npm run db:check --workspace=server`.

### 2. Port Conflict (5000 / 5173)
- Kill lingering node processes or set `PORT=5001` in `server/.env`.

### 3. Structure Validation Fails
- Run `node scripts/validate-structure.js` to inspect which directory or core file is missing.
