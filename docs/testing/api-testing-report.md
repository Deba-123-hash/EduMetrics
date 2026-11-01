# Backend REST API Testing & RBAC Verification Report

## 1. API Architecture Overview
The EduInsight AI backend is constructed as a modular RESTful API built on **Node.js** and **Express.js** using strict **JavaScript ES Modules**.

The server implements a multi-layered separation of concerns:
```
HTTP Request -> Middleware (Helmet, CORS, RateLimit, Logger)
             -> Route Guard (Authenticate, AuthorizeRole, ValidateRequest)
             -> Controller
             -> Service Layer
             -> Repository (PostgreSQL Pool / Parameterized SQL)
             -> Standardized ApiResponse / Centralized ApiError
```

---

## 2. API Endpoint Test Matrix & Results

| HTTP Method | Endpoint | Auth Required | Authorized Roles | Sample Status | Response Payload Summary | Verdict |
| :--- | :--- | :---: | :---: | :---: | :--- | :---: |
| `GET` | `/api/health` | No | Public | `200 OK` | `{ success: true, service: 'EduInsight AI Backend API', environment: 'development' }` | **PASS** |
| `GET` | `/api/health/database`| No | Public | `200 OK` / `503` | Verifies DB connection pool without exposing secrets | **PASS** |
| `POST` | `/api/auth/register` | No | Public | `201 Created` | `{ user: { id, fullName, email, role }, accessToken, refreshToken }` | **PASS** |
| `POST` | `/api/auth/login` | No | Public | `200 OK` | Verifies credentials, returns signed JWT access & refresh tokens | **PASS** |
| `POST` | `/api/auth/refresh` | No | Public | `200 OK` | Accepts refresh token, issues refreshed access token | **PASS** |
| `POST` | `/api/auth/logout` | No | Public | `200 OK` | Standardizes session termination confirmation | **PASS** |
| `GET` | `/api/auth/me` | Yes | All Roles | `200 OK` | Extracts identity from Bearer token; returns current user profile | **PASS** |
| `POST` | `/api/auth/forgot-password`| No | Public | `200 OK` | Validates email syntax, initiates password recovery | **PASS** |
| `GET` | `/api/users` | Yes | `admin` only | `200 OK` / `403` | Returns user accounts; strictly rejects non-admin users | **PASS** |
| `GET` | `/api/audit-logs` | Yes | `admin` only | `200 OK` / `403` | Returns system audit logs; strictly rejects non-admin users | **PASS** |
| `GET` | `/api/departments`| Yes | `admin`, `faculty` | `200 OK` / `403` | Lists academic departments; rejects unauthenticated students | **PASS** |
| `GET` | `/api/classes` | Yes | `admin`, `faculty` | `200 OK` | Returns classes, semesters, and section details | **PASS** |
| `GET` | `/api/subjects` | Yes | `admin`, `faculty` | `200 OK` | Returns curriculum subjects, credits, and syllabus codes | **PASS** |
| `GET` | `/api/students` | Yes | `admin`, `faculty` | `200 OK` | Paginated roster of student demographic and academic profiles | **PASS** |
| `GET` | `/api/faculty` | Yes | `admin`, `faculty` | `200 OK` | Roster of faculty members, departments, and designations | **PASS** |
| `GET` | `/api/exams` | Yes | `admin`, `faculty` | `200 OK` | Scheduled examination events, types, and max marks | **PASS** |
| `GET` | `/api/marks` | Yes | `admin`, `faculty` | `200 OK` | Tabulated marks records with exam and subject foreign keys | **PASS** |
| `GET` | `/api/attendance` | Yes | `admin`, `faculty` | `200 OK` | Attendance logs with dates and present/absent/late status | **PASS** |
| `GET` | `/api/analytics` | Yes | `admin`, `faculty` | `200 OK` | Aggregated institutional performance indicators | **PASS** |
| `GET` | `/api/predictions`| Yes | `admin`, `faculty` | `200 OK` | AI risk score predictions and risk tier classifications | **PASS** |
| `GET` | `/api/ai-insights` | Yes | All Roles | `200 OK` | Explainable student strengths, weaknesses, and trends | **PASS** |
| `GET` | `/api/recommendations`| Yes | All Roles | `200 OK` | Actionable recommendations with completion states | **PASS** |

---

## 3. Role-Based Access Control (RBAC) Enforcement

The application uses fine-grained middleware guards (`authenticate` + `authorizeRole`):

```
                                  +-------------------+
                                  | Incoming Request  |
                                  +---------+---------+
                                            |
                                  +---------v---------+
                                  |    authenticate   |
                                  | (Verify Bearer)   |
                                  +---------+---------+
                                            |
                      +---------------------+---------------------+
                      |                     |                     |
                Valid Token?           Missing Token?       Expired / Invalid?
                      |                     |                     |
                      v                     v                     v
            +-------------------+   +---------------+     +---------------+
            | req.user assigned |   | 401 Unauth    |     | 401 Unauth    |
            +---------+---------+   +---------------+     +---------------+
                      |
            +---------v---------+
            |   authorizeRole   |
            | (Check Role Allow)|
            +---------+---------+
                      |
          +-----------+-----------+
          |                       |
     Role Allowed?          Role Forbidden?
          |                       |
          v                       v
    Next Handler            +---------------+
    (HTTP 200 OK)           | 403 Forbidden |
                            +---------------+
```

### RBAC Test Evidence Matrix

| Role Under Test | Target Endpoint | Intended Permission | Actual HTTP Status | Result |
| :--- | :--- | :---: | :---: | :---: |
| **Unauthenticated** | `GET /api/users` | Denied | `401 Unauthorized` | **PASS** |
| **Student** | `GET /api/users` | Denied | `403 Forbidden` | **PASS** |
| **Faculty** | `GET /api/users` | Denied | `403 Forbidden` | **PASS** |
| **Admin** | `GET /api/users` | Allowed | `200 OK` | **PASS** |
| **Student** | `GET /api/audit-logs` | Denied | `403 Forbidden` | **PASS** |
| **Admin** | `GET /api/audit-logs` | Allowed | `200 OK` | **PASS** |
| **Student** | `GET /api/departments`| Denied | `403 Forbidden` | **PASS** |
| **Faculty** | `GET /api/departments`| Allowed | `200 OK` | **PASS** |
| **Admin** | `GET /api/departments`| Allowed | `200 OK` | **PASS** |

---

## 4. Input Validation & Error Formatting
All mutation routes use **Zod** validation schemas (`validateRequest(schema)`).

- **Malformed JSON Payloads**: Returns HTTP 400 with structured validation issues list:
  ```json
  {
    "success": false,
    "statusCode": 400,
    "message": "Validation error",
    "errors": [
      "body.email: Invalid email format",
      "body.password: Password must be at least 8 characters"
    ]
  }
  ```
- **Undefined Routes (404 Fallback)**: Returns standardized JSON rather than HTML stack traces:
  ```json
  {
    "success": false,
    "statusCode": 404,
    "message": "Resource not found: GET /api/unknown-endpoint",
    "errors": []
  }
  ```

---

## 5. API Testing Conclusion
The API endpoints conform to REST best practices, enforce strict JWT authentication, deliver robust RBAC isolation, validate input payloads with Zod, and output predictable, type-safe JSON envelopes.

