#!/usr/bin/env node

/**
 * EduInsight AI - Automated Project Structure Validator
 * Verifies that all required folders, configuration files, and architecture artifacts exist.
 * Verifies that strictly NO TypeScript files or configs exist.
 *
 * Usage: node scripts/validate-structure.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// ANSI Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

const REQUIRED_DIRECTORIES = [
  // Root directories
  'client',
  'client/public',
  'client/src',
  'client/src/assets',
  'client/src/assets/images',
  'client/src/assets/icons',
  'client/src/assets/fonts',
  'client/src/assets/styles',
  'client/src/app',
  'client/src/components',
  'client/src/components/common',
  'client/src/components/layout',
  'client/src/components/dashboard',
  'client/src/components/charts',
  'client/src/components/tables',
  'client/src/components/forms',
  'client/src/components/feedback',
  'client/src/components/ai',
  'client/src/features',
  'client/src/features/auth',
  'client/src/features/admin',
  'client/src/features/faculty',
  'client/src/features/student',
  'client/src/features/students',
  'client/src/features/faculty-management',
  'client/src/features/departments',
  'client/src/features/classes',
  'client/src/features/subjects',
  'client/src/features/examinations',
  'client/src/features/marks',
  'client/src/features/attendance',
  'client/src/features/analytics',
  'client/src/features/ai-insights',
  'client/src/features/ai-assistant',
  'client/src/features/reports',
  'client/src/features/notifications',
  'client/src/features/profile',
  'client/src/features/settings',
  'client/src/routes',
  'client/src/context',
  'client/src/hooks',
  'client/src/services',
  'client/src/utils',
  'client/src/constants',
  'client/src/styles',
  'client/tests',

  // Server directories
  'server',
  'server/src',
  'server/src/config',
  'server/src/database',
  'server/src/routes',
  'server/src/controllers',
  'server/src/services',
  'server/src/repositories',
  'server/src/middleware',
  'server/src/validators',
  'server/src/utils',
  'server/src/constants',
  'server/src/jobs',
  'server/tests',

  // Database directories
  'database',
  'database/migrations',
  'database/seeds',
  'database/functions',
  'database/views',
  'database/procedures',
  'database/backups',

  // AI Engine directories
  'ai-engine',
  'ai-engine/config',
  'ai-engine/prompts',
  'ai-engine/services',
  'ai-engine/analytics',
  'ai-engine/validators',
  'ai-engine/utils',
  'ai-engine/tests',

  // Shared
  'shared',
  'shared/constants',
  'shared/schemas',
  'shared/utils',

  // Docs
  'docs',
  'docs/project',
  'docs/architecture',
  'docs/database',
  'docs/api',
  'docs/security',
  'docs/development',
  'docs/phases',

  // Testing
  'tests',
  'tests/unit',
  'tests/integration',
  'tests/end-to-end',
  'tests/performance',
  'tests/security',

  // Postman
  'postman',

  // Scripts
  'scripts',

  // Deployment
  'deployment',
  'deployment/frontend',
  'deployment/backend',
  'deployment/database',

  // Monitoring
  'monitoring',
  'monitoring/health-checks',
  'monitoring/logging',
  'monitoring/error-tracking',

  // Assets & Screenshots
  'assets',
  'assets/branding',
  'assets/diagrams',
  'assets/screenshots',
  'assets/presentation',
  'screenshots',
  'screenshots/landing-page',
  'screenshots/admin-dashboard',
  'screenshots/faculty-dashboard',
  'screenshots/student-dashboard',
  'screenshots/analytics',
  'screenshots/ai-insights',

  // Project Submission
  'project-submission',
  'project-submission/report',
  'project-submission/presentation',
  'project-submission/viva',
  'project-submission/diagrams',

  // GitHub workflows
  '.github',
  '.github/workflows',
  '.github/ISSUE_TEMPLATE'
];

const REQUIRED_FILES = [
  // Root
  '.gitignore',
  '.gitattributes',
  '.editorconfig',
  '.env.example',
  '.prettierrc.json',
  'package.json',
  'README.md',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'LICENSE',

  // Client
  'client/package.json',
  'client/vite.config.js',
  'client/index.html',
  'client/.env.example',
  'client/src/main.jsx',
  'client/src/app/App.jsx',
  'client/src/app/AppProviders.jsx',
  'client/src/app/AppRoutes.jsx',
  'client/src/app/app.config.js',
  'client/src/assets/styles/global.css',
  'client/src/assets/styles/variables.css',

  // Server
  'server/package.json',
  'server/.env.example',
  'server/src/app.js',
  'server/src/server.js',
  'server/src/config/env.js',
  'server/src/config/database.js',
  'server/src/routes/health.routes.js',
  'server/src/controllers/health.controller.js',
  'server/src/database/migrate.js',
  'server/src/database/seed.js',
  'server/src/database/check.js',

  // Database
  'database/README.md',
  'database/schema-overview.md',
  'database/migrations/001_create_extensions.sql',
  'database/migrations/002_create_user_management.sql',
  'database/migrations/003_create_academic_tables.sql',
  'database/migrations/004_create_exam_and_marks.sql',
  'database/migrations/005_create_attendance.sql',
  'database/migrations/006_create_ai_analytics.sql',
  'database/migrations/007_create_notifications_and_reports.sql',
  'database/migrations/008_create_system_management.sql',
  'database/migrations/009_create_indexes_and_constraints.sql',
  'database/migrations/010_create_updated_at_triggers.sql',

  // AI Engine
  'ai-engine/README.md',
  'ai-engine/config/ai.config.js',

  // Scripts
  'scripts/setup.js',
  'scripts/check-environment.js',
  'scripts/validate-structure.js',
  'scripts/clean.js',

  // Docs
  'docs/project/project-overview.md',
  'docs/architecture/system-architecture.md',
  'docs/database/database-design.md',
  'docs/database/database-erd.md'
];

function scanDirectoryForTypeScript(dirPath, tsFilesFound = []) {
  if (!fs.existsSync(dirPath)) return tsFilesFound;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist' || entry.name === 'build') {
      continue;
    }
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      scanDirectoryForTypeScript(fullPath, tsFilesFound);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === '.ts' || ext === '.tsx' || entry.name.toLowerCase().startsWith('tsconfig')) {
        tsFilesFound.push(path.relative(ROOT_DIR, fullPath));
      }
    }
  }

  return tsFilesFound;
}

function runValidation() {
  console.log(`\n${colors.bold}${colors.cyan}====================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}  EduInsight AI - Structure & Architecture Validator ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}====================================================${colors.reset}\n`);

  let missingDirs = [];
  let existingDirsCount = 0;

  for (const dir of REQUIRED_DIRECTORIES) {
    const fullPath = path.join(ROOT_DIR, dir);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
      existingDirsCount++;
    } else {
      missingDirs.push(dir);
    }
  }

  let missingFiles = [];
  let existingFilesCount = 0;

  for (const file of REQUIRED_FILES) {
    const fullPath = path.join(ROOT_DIR, file);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      existingFilesCount++;
    } else {
      missingFiles.push(file);
    }
  }

  const tsFiles = scanDirectoryForTypeScript(ROOT_DIR);

  console.log(`${colors.bold}Directory Inspection Results:${colors.reset}`);
  console.log(`  Existing directories verified: ${colors.green}${existingDirsCount}/${REQUIRED_DIRECTORIES.length}${colors.reset}`);
  if (missingDirs.length > 0) {
    console.log(`  ${colors.red}Missing directories (${missingDirs.length}):${colors.reset}`);
    missingDirs.forEach(d => console.log(`    - ${d}`));
  } else {
    console.log(`  ${colors.green}All required architecture directories are present!${colors.reset}`);
  }

  console.log(`\n${colors.bold}Critical Core File Inspection Results:${colors.reset}`);
  console.log(`  Existing core files verified: ${colors.green}${existingFilesCount}/${REQUIRED_FILES.length}${colors.reset}`);
  if (missingFiles.length > 0) {
    console.log(`  ${colors.red}Missing core files (${missingFiles.length}):${colors.reset}`);
    missingFiles.forEach(f => console.log(`    - ${f}`));
  } else {
    console.log(`  ${colors.green}All required core files are present!${colors.reset}`);
  }

  console.log(`\n${colors.bold}Strict Language Constraint (JS + JSX only):${colors.reset}`);
  if (tsFiles.length > 0) {
    console.log(`  ${colors.red}ERROR: TypeScript files detected! (Strictly Prohibited):${colors.reset}`);
    tsFiles.forEach(f => console.log(`    - ${f}`));
  } else {
    console.log(`  ${colors.green}Passed: Zero TypeScript files found. Pure JavaScript ES6+ & JSX verified.${colors.reset}`);
  }

  console.log(`\n${colors.bold}${colors.cyan}====================================================${colors.reset}`);
  if (missingDirs.length === 0 && missingFiles.length === 0 && tsFiles.length === 0) {
    console.log(`${colors.green}${colors.bold}  STATUS: ALL CHECKS PASSED SUCCESSFULLY (100%)${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}====================================================${colors.reset}\n`);
    process.exit(0);
  } else {
    console.log(`${colors.yellow}${colors.bold}  STATUS: VALIDATION INCOMPLETE OR HAS ISSUES${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}====================================================${colors.reset}\n`);
    process.exit(1);
  }
}

runValidation();
