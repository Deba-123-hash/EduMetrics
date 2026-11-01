# EduInsight AI – AI-Powered Student Performance Analytics and Prediction Dashboard

> **MCA Final-Year Major Project**  
> An enterprise-grade, full-stack educational intelligence platform providing student performance analytics, rule-grounded risk prediction, early warning detection, and personalized learning recommendations.

---

## 1. Project Overview

**EduInsight AI** bridges the gap between raw institutional educational records and proactive academic intervention. By aggregating student marks, attendance trends, assessment histories, and demographic attributes, the platform empowers administrators, faculty, and students with actionable insights driven by explainable analytics and ethical AI.

### Core Key Capabilities
1. **User & Identity Management**: Secure authentication, role assignments (Admin, Faculty, Student), and departmental mappings.
2. **Academic Structure Management**: Departments, semesters, classes, subjects, faculty allocations, and academic year cycles.
3. **Examination & Marks Management**: Multi-type exam scheduling, subject configuration, and grade calculations.
4. **Attendance Tracking**: Real-time session-level attendance recording, status updates (Present, Absent, Late), and compliance monitoring.
5. **Academic Performance Analytics**: Cross-subject and temporal trends, class benchmarks, and cohort analysis with Recharts.
6. **AI Risk Prediction**: Rule-grounded at-risk student identification with explainable factors (Attendance 35%, Marks 35%, Backlogs 20%, Trend 10%).
7. **Personalized Recommendations**: Context-aware academic improvement steps tailored to individual student performance.
8. **AI Academic Assistant**: Interactive, role-permissioned natural language query engine grounded in real institutional data.
9. **Institutional Reporting**: Automated PDF grade cards, attendance reports, and CSV exports.
10. **Enterprise Security & Audit**: Strict RBAC, bcrypt credential hashing, and tamper-resistant audit logs.

---

## 2. Technology Stack

- **Frontend**: React 18, Vite, JavaScript ES6+, JSX, Material UI, Lucide React, Recharts, React Router DOM v6, Axios.
- **Backend**: Node.js 20+, Express.js, JavaScript ES Modules (`"type": "module"`), RESTful APIs, Zod, Helmet, CORS, express-rate-limit.
- **Database**: Neon Serverless PostgreSQL, node-postgres (`pg`), SQL migrations & seeds, UUID primary keys, JSONB metadata.
- **AI Engine**: OpenAI API, prompt templates, rule-based analytics pipelines, deterministic validation, data grounding.
- **Testing**: Node.js Test Runner, Supertest, Vitest architecture (68/68 passed tests).
- **DevOps & Cloud**: Vercel (Client), Render (API Server), GitHub Actions, Neon Console.

> **Strict Language Compliance**: This repository uses **JavaScript + JSX + SQL only**. TypeScript (`.ts`, `.tsx`, `tsconfig.json`) is strictly prohibited.

---

## 3. Directory Structure Overview

```text
eduinsight-ai/
├── client/              # React + Vite Frontend (JSX, Material UI, Recharts)
├── server/              # Express Backend (ES Modules, Layered Architecture)
├── database/            # 22-Table PostgreSQL Schema, Migrations, Seeds, Views
├── ai-engine/           # Prompt Engineering, Risk Calculators, AI Services
├── shared/              # Cross-boundary Constants and Schemas
├── docs/                # Architecture, API, Database ERD, Security, and Testing Reports
│   └── testing/         # 9 Comprehensive QA Reports & Checklists
├── tests/               # Centralized End-to-End, Unit, Security, and Performance Tests
├── postman/             # Postman Collections and Environments
├── scripts/             # Unified Test Runner, Environment, and Setup Scripts
├── deployment/          # Vercel, Render, and Neon Deployment Configurations
├── monitoring/          # Health Checks, Error Logging, and Diagnostics
├── assets/              # Branding, Diagrams, Presentation Assets
├── screenshots/         # Dashboard and Feature UI Previews
├── project-submission/  # Complete MCA Final-Year Dissertation and Viva Material
└── .github/             # GitHub Actions CI Workflows and Issue Templates
```

---

## 4. Pre-Seeded Demo User Credentials

For evaluation, testing, and viva demonstration, pre-seeded accounts are provided:

| Role | Email Address | Password | Permissions & Scope |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@eduinsight.ai` | `Admin@123` | Full institutional access: Users, Departments, Classes, Audit Logs |
| **Faculty Member**| `faculty@eduinsight.ai`| `Faculty@123`| Assigned classes: Mark Attendance, Enter Marks, Course Analytics |
| **Student** | `student@eduinsight.ai`| `Student@123`| Personal profile: My Performance, Attendance, AI Recommendations |

---

## 5. Getting Started & Local Setup

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Neon PostgreSQL Account** (or local PostgreSQL 15+)

### Setup Instructions

1. **Install Workspace Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` templates to `.env`:
   - `client/.env.example` -> `client/.env`
   - `server/.env.example` -> `server/.env`

3. **Database Setup (Neon PostgreSQL)**:
   ```bash
   # Run migrations
   npm run db:migrate --workspace=server

   # Run seeds
   npm run db:seed --workspace=server
   ```

4. **Start Development Servers**:
   ```bash
   # Start backend API (port 5000)
   npm run server

   # Start frontend client (port 5173)
   npm run client

   # Or run both concurrently
   npm run dev
   ```

5. **Execute Complete Test Suite**:
   ```bash
   npm test
   ```

---

## 6. Complete Development Phases Roadmap

| Phase | Description | Deliverables & Status |
| :--- | :--- | :---: |
| **Phase 1** | Planning, Architecture & Setup | Project skeleton, Node/React scaffolding, Health API — **COMPLETED** |
| **Phase 2** | Database Architecture & Migrations | 10 Migrations, 11 Seeds, UUID keys, Stored Views — **COMPLETED** |
| **Phase 3** | Authentication & RBAC | JWT access/refresh tokens, bcrypt 12, route guards — **COMPLETED** |
| **Phase 4** | Frontend Dashboard & Shell | Material UI theme, Responsive Layouts, Navigation — **COMPLETED** |
| **Phase 5** | Academic Core Management | Departments, Classes, Subjects, Faculty, Students — **COMPLETED** |
| **Phase 6** | Performance Analytics | Recharts visualizations, Attendance, Marks trends — **COMPLETED** |
| **Phase 7** | AI Analytics & Risk Prediction | Composite Risk Calculator, Recommendations, Insights — **COMPLETED** |
| **Phase 8** | Reports, Exports & AI Assistant | CSV exports, Scorecard views, AI Chatbot — **COMPLETED** |
| **Phase 9** | System Testing & Security | Helmet, Rate limiting, Parameterized SQL queries — **COMPLETED** |
| **Phase 10** | Production Deployment & Dissertation | Vercel/Render configurations, Dissertation report — **COMPLETED** |
| **Phase 11** | Final QA Audit & Validation | 68/68 passed tests, 9 QA documentation reports — **COMPLETED** |

---

## 7. Submission & Testing Documentation

Detailed reports and academic submission materials are available:
- **[Final Testing Report](docs/testing/final-testing-report.md)**: 68/68 tests verified (100% pass rate).
- **[Live Website Testing](docs/testing/live-website-testing.md)**: Page-by-page audit of 28 views.
- **[Security Audit](docs/testing/security-testing-report.md)**: OWASP Top 10 analysis and threat matrix.
- **[Performance Benchmark](docs/testing/performance-testing-report.md)**: Rollup chunking metrics and latency benchmarks.
- **[Dissertation Report](project-submission/report/)**: Complete academic dissertation chapters.
- **[Viva Voce Preparation](project-submission/viva/)**: 25+ technical Q&A for viva defense.

---

## 8. License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
