# Contributing to EduInsight AI

Thank you for your interest in contributing to **EduInsight AI** – AI-Powered Student Performance Analytics and Prediction Dashboard!

## Development Guidelines

1. **Strict Language Rule**:
   - Use **JavaScript (ES6+) and JSX only**.
   - **TypeScript is strictly prohibited** (`.ts`, `.tsx`, `tsconfig.json`, TypeScript types or interfaces).
2. **Architecture**:
   - Backend follows strict layered architecture: `Routes -> Controllers -> Services -> Repositories -> PostgreSQL`.
   - Frontend follows feature-based modular architecture inside `client/src/features/`.
   - AI Engine logic resides in `ai-engine/` and never directly accesses the database or runs queries.
3. **Database Integrity**:
   - All migrations belong in `database/migrations/` using timestamped or sequential SQL files.
   - All migrations must be idempotent and non-destructive.
4. **Code Quality**:
   - Ensure `npm run lint` and `npm run test` pass before committing.
   - Run `node scripts/validate-structure.js` to ensure directory structure compliance.
