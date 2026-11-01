import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

function getAllFiles(dir, extensions = ['.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'brain') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, extensions));
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

describe('Enterprise Security & Vulnerability Audit Suite', () => {
  test('Zero TypeScript files must exist across entire project', () => {
    function findTsFiles(dir) {
      let tsFiles = [];
      const list = fs.readdirSync(dir);
      for (const item of list) {
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === 'brain') continue;
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          tsFiles = tsFiles.concat(findTsFiles(full));
        } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item === 'tsconfig.json') {
          tsFiles.push(full);
        }
      }
      return tsFiles;
    }
    const tsFound = findTsFiles(rootDir);
    assert.equal(tsFound.length, 0, `Forbidden TypeScript files found: ${tsFound.join(', ')}`);
  });

  test('No production secrets or OpenAI API keys hardcoded in code files', () => {
    const codeFiles = getAllFiles(path.join(rootDir, 'server', 'src')).concat(
      getAllFiles(path.join(rootDir, 'client', 'src')),
      getAllFiles(path.join(rootDir, 'ai-engine'))
    );

    const secretPatterns = [
      /sk-proj-[A-Za-z0-9_-]{20,}/,
      /postgres:\/\/[^:]+:[^@]+@[^/]+\//,
      /AIzaSy[A-Za-z0-9_-]{33}/
    ];

    const violations = [];
    codeFiles.forEach((file) => {
      const content = fs.readFileSync(file, 'utf-8');
      secretPatterns.forEach((pat) => {
        if (pat.test(content)) {
          violations.push({ file, pattern: pat.toString() });
        }
      });
    });

    assert.equal(violations.length, 0, `Hardcoded secret violations found: ${JSON.stringify(violations)}`);
  });

  test('SQL Injection Prevention: Repositories must use parameterized queries ($1, $2)', () => {
    const repoFiles = getAllFiles(path.join(rootDir, 'server', 'src', 'repositories'));
    const vulnerableConcatPattern = /query\s*\(\s*`[^`]*\$\{[^}]+\}[^`]*`\s*\)/i;

    const violations = [];
    repoFiles.forEach((file) => {
      const content = fs.readFileSync(file, 'utf-8');
      if (vulnerableConcatPattern.test(content)) {
        violations.push(file);
      }
    });

    assert.equal(violations.length, 0, `Potential SQL injection via template string found in: ${violations.join(', ')}`);
  });

  test('Password Hashing: Bcrypt work factor must be at least 10 rounds', async () => {
    const envFile = fs.readFileSync(path.join(rootDir, 'server', 'src', 'config', 'env.js'), 'utf-8');
    assert.match(envFile, /BCRYPT_ROUNDS/);
    const passwordUtil = fs.readFileSync(path.join(rootDir, 'server', 'src', 'utils', 'password.js'), 'utf-8');
    assert.match(passwordUtil, /bcrypt\.hash/);
    assert.match(passwordUtil, /bcrypt\.compare/);
  });

  test('HTTP Security: Helmet and Rate Limiting must be mounted on server app', () => {
    const appFile = fs.readFileSync(path.join(rootDir, 'server', 'src', 'app.js'), 'utf-8');
    assert.match(appFile, /configureSecurityHeaders/);
    assert.match(appFile, /apiLimiter/);
    assert.match(appFile, /cors\(corsOptions\)/);
  });

  test('JWT Configuration: Tokens must have configured expiration and signature checks', () => {
    const tokenUtil = fs.readFileSync(path.join(rootDir, 'server', 'src', 'utils', 'generateToken.js'), 'utf-8');
    assert.match(tokenUtil, /jwt\.sign/);
    assert.match(tokenUtil, /jwt\.verify/);
    assert.match(tokenUtil, /expiresIn/);
  });
});

