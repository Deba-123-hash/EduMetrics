/**
 * Unified Test Runner for EduInsight AI
 * Executes all QA test suites across the stack and outputs execution telemetry.
 */
import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../');

const testSuites = [
  { name: 'AI Engine Unit & Algorithm Tests', path: 'ai-engine/tests' },
  { name: 'API Health, Auth & RBAC Suite', path: 'server/tests/api/auth-and-rbac.test.js' },
  { name: 'Academic & AI Modules API Suite', path: 'server/tests/api/academic-and-ai.test.js' },
  { name: 'Database Schema & Migrations Suite', path: 'tests/unit/database-schema.test.js' },
  { name: 'Security & Vulnerability Audit Suite', path: 'tests/security/security-audit.test.js' },
  { name: 'Performance & Optimization Suite', path: 'tests/performance/performance-benchmark.test.js' },
  { name: 'Client Components & Layouts Suite', path: 'client/tests/components/routes-and-views.test.js' }
];

console.log('===============================================================');
console.log('   EduInsight AI - Final Phase 11 Quality Assurance Test Run   ');
console.log('===============================================================\n');

let totalPassed = 0;
let totalFailed = 0;
const results = [];

for (const suite of testSuites) {
  process.stdout.write(`Executing: ${suite.name}... `);
  const target = suite.path.endsWith('.js')
    ? suite.path
    : path.join(suite.path, '*.test.js');

  const args = ['--test'];
  if (suite.path === 'ai-engine/tests') {
    args.push('ai-engine/tests/performance-analysis.test.js');
    args.push('ai-engine/tests/recommendation.test.js');
    args.push('ai-engine/tests/risk-prediction.test.js');
  } else {
    args.push(suite.path);
  }

  const start = Date.now();
  const run = spawnSync('node', args, { cwd: rootDir, encoding: 'utf-8', shell: true });
  const duration = Date.now() - start;

  const passedMatch = run.stdout ? run.stdout.match(/# pass (\d+)/) : null;
  const failedMatch = run.stdout ? run.stdout.match(/# fail (\d+)/) : null;
  const passed = passedMatch ? parseInt(passedMatch[1], 10) : 0;
  const failed = failedMatch ? parseInt(failedMatch[1], 10) : 0;

  totalPassed += passed;
  totalFailed += failed;

  if (run.status === 0 && failed === 0) {
    console.log(`PASS (${passed} tests, ${duration}ms)`);
    results.push({ name: suite.name, status: 'PASSED', count: passed, duration: `${duration}ms` });
  } else {
    console.log(`FAIL (${failed} failed, ${duration}ms)`);
    results.push({ name: suite.name, status: 'FAILED', count: failed, duration: `${duration}ms` });
    if (run.stderr) console.error(run.stderr);
  }
}

console.log('\n===============================================================');
console.log(`TEST SUMMARY: Total Suites: ${testSuites.length} | Tests Passed: ${totalPassed} | Tests Failed: ${totalFailed}`);
console.log(`Overall Success Rate: ${((totalPassed / (totalPassed + totalFailed || 1)) * 100).toFixed(1)}%`);
console.log('===============================================================');

if (totalFailed > 0) {
  process.exit(1);
}

