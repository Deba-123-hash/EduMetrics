# Local Development Setup Guide

1. **Clone repository**:
   ```bash
   git clone <repo-url>
   cd EduMetrics
   ```

2. **Run Workspace Setup**:
   ```bash
   npm run setup
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Configure Environment Variables**:
   Update `server/.env` with your Neon PostgreSQL connection string:
   `DATABASE_URL=postgresql://user:pass@ep-hostname.aws.neon.tech/eduinsight?sslmode=require`

5. **Run Migrations & Seeds**:
   ```bash
   npm run db:migrate --workspace=server
   npm run db:seed --workspace=server
   ```

6. **Start Dev Servers**:
   ```bash
   npm run dev
   ```
