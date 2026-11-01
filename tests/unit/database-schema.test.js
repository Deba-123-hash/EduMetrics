import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');
const migrationsDir = path.join(rootDir, 'database', 'migrations');
const seedsDir = path.join(rootDir, 'database', 'seeds');

describe('Database Schema & Migrations Validation Suite', () => {
  const expectedMigrations = [
    '001_create_extensions.sql',
    '002_create_user_management.sql',
    '003_create_academic_tables.sql',
    '004_create_exam_and_marks.sql',
    '005_create_attendance.sql',
    '006_create_ai_analytics.sql',
    '007_create_notifications_and_reports.sql',
    '008_create_system_management.sql',
    '009_create_indexes_and_constraints.sql',
    '010_create_updated_at_triggers.sql'
  ];

  test('All 10 required database migration files must exist', () => {
    expectedMigrations.forEach((file) => {
      const fullPath = path.join(migrationsDir, file);
      assert.ok(fs.existsSync(fullPath), `Migration file missing: ${file}`);
      const stat = fs.statSync(fullPath);
      assert.ok(stat.size > 0, `Migration file is empty: ${file}`);
    });
  });

  test('001_create_extensions.sql must enable UUID extension', () => {
    const content = fs.readFileSync(path.join(migrationsDir, '001_create_extensions.sql'), 'utf-8');
    assert.match(content, /CREATE EXTENSION IF NOT EXISTS ("uuid-ossp"|uuid-ossp|"pgcrypto"|pgcrypto)/i);
  });

  test('002_create_user_management.sql must declare roles, permissions, users tables with UUID keys', () => {
    const content = fs.readFileSync(path.join(migrationsDir, '002_create_user_management.sql'), 'utf-8');
    assert.match(content, /CREATE TABLE IF NOT EXISTS roles/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS permissions/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS users/i);
    assert.match(content, /id UUID PRIMARY KEY/i);
    assert.match(content, /idx_users_email/i);
  });

  test('003_create_academic_tables.sql must declare departments, academic_years, classes, subjects, faculty, students', () => {
    const content = fs.readFileSync(path.join(migrationsDir, '003_create_academic_tables.sql'), 'utf-8');
    assert.match(content, /CREATE TABLE IF NOT EXISTS departments/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS academic_years/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS classes/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS subjects/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS faculty/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS students/i);
  });

  test('004_create_exam_and_marks.sql must declare exams and marks tables', () => {
    const content = fs.readFileSync(path.join(migrationsDir, '004_create_exam_and_marks.sql'), 'utf-8');
    assert.match(content, /CREATE TABLE IF NOT EXISTS exams/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS marks/i);
    assert.match(content, /marks_obtained/i);
  });

  test('005_create_attendance.sql must declare attendance table with status constraints', () => {
    const content = fs.readFileSync(path.join(migrationsDir, '005_create_attendance.sql'), 'utf-8');
    assert.match(content, /CREATE TABLE IF NOT EXISTS attendance/i);
    assert.match(content, /status/i);
  });

  test('006_create_ai_analytics.sql must declare predictions, ai_insights, recommendations', () => {
    const content = fs.readFileSync(path.join(migrationsDir, '006_create_ai_analytics.sql'), 'utf-8');
    assert.match(content, /CREATE TABLE IF NOT EXISTS predictions/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS ai_insights/i);
    assert.match(content, /CREATE TABLE IF NOT EXISTS recommendations/i);
  });

  test('009_create_indexes_and_constraints.sql must define performance indexing', () => {
    const content = fs.readFileSync(path.join(migrationsDir, '009_create_indexes_and_constraints.sql'), 'utf-8');
    assert.match(content, /CREATE INDEX IF NOT EXISTS/i);
  });

  test('010_create_updated_at_triggers.sql must define automated timestamp trigger function', () => {
    const content = fs.readFileSync(path.join(migrationsDir, '010_create_updated_at_triggers.sql'), 'utf-8');
    assert.match(content, /CREATE OR REPLACE FUNCTION/i);
    assert.match(content, /TRIGGER/i);
  });

  test('Database seeds folder must contain all 11 seed modules', () => {
    const expectedSeeds = [
      '001_roles.sql',
      '002_permissions.sql',
      '003_departments.sql',
      '004_academic_years.sql',
      '005_classes.sql',
      '006_subjects.sql',
      '007_demo_users.js',
      '008_demo_students.sql',
      '009_demo_exams.sql',
      '010_demo_marks.sql',
      '011_demo_attendance.sql'
    ];
    expectedSeeds.forEach((file) => {
      const fullPath = path.join(seedsDir, file);
      assert.ok(fs.existsSync(fullPath), `Seed file missing: ${file}`);
    });
  });
});
