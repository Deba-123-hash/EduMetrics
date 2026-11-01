# Backend Architecture

The backend follows an enterprise multi-tier layered architecture:

```text
Incoming HTTP Request
   ↓
Security Middleware (Helmet, CORS, Rate Limit)
   ↓
Route Handlers (Endpoint definitions)
   ↓
Validation Middleware (Zod schemas)
   ↓
Authentication & RBAC Middleware (JWT & Permission validation)
   ↓
Controllers (Request parsing & HTTP response formatting)
   ↓
Services (Domain logic, rule evaluation, business rules)
   ↓
Repositories (SQL query execution, parameterization, transactions)
   ↓
PostgreSQL Pool (`pg.Pool`)
```

- **Separation of Concerns**: Controllers never write raw SQL. Repositories never manage HTTP status codes.
- **Pure ES Modules**: Built natively with Node.js `"type": "module"`.
