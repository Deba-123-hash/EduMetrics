import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../../src/app.js';

describe('EduInsight AI - Backend API & RBAC Test Suite', () => {
  let adminToken = '';
  let facultyToken = '';
  let studentToken = '';
  let refreshToken = '';

  // 1. Core Health Checks
  describe('Health Check Endpoints', () => {
    test('GET /api/health should return 200 and operational status', async () => {
      const res = await request(app).get('/api/health');
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
      assert.equal(res.body.service, 'EduInsight AI Backend API');
      assert.ok(res.body.timestamp);
    });

    test('GET /api/health/database should handle connection gracefully without leaking credentials', async () => {
      const res = await request(app).get('/api/health/database');
      // If DB is offline, returns 503; if online, returns 200. Both are safe.
      assert.ok([200, 503].includes(res.status));
      if (res.status === 503) {
        assert.equal(res.body.success, false);
        assert.equal(res.body.error, 'DATABASE_UNAVAILABLE');
      }
    });
  });

  // 2. Authentication Functional Tests
  describe('Authentication Module Tests', () => {
    test('POST /api/auth/register should reject empty/invalid payload with 400', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({});
      assert.equal(res.status, 400);
      assert.equal(res.body.success, false);
      assert.ok(res.body.errors.length > 0);
    });

    test('POST /api/auth/register should reject short passwords with 400', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          fullName: 'Test User',
          email: 'newuser@eduinsight.ai',
          password: '123'
        });
      assert.equal(res.status, 400);
      assert.equal(res.body.success, false);
    });

    test('POST /api/auth/login should reject empty credentials with 400', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({});
      assert.equal(res.status, 400);
      assert.equal(res.body.success, false);
    });

    test('POST /api/auth/login should reject invalid credentials with 401', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'admin@eduinsight.ai',
          password: 'WrongPassword!999'
        });
      assert.equal(res.status, 401);
      assert.equal(res.body.success, false);
    });

    test('POST /api/auth/login should authenticate Admin demo account', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'admin@eduinsight.ai',
          password: 'Admin@123'
        });
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
      assert.equal(res.body.data.user.role, 'admin');
      assert.ok(res.body.data.accessToken);
      assert.ok(res.body.data.refreshToken);
      adminToken = res.body.data.accessToken;
      refreshToken = res.body.data.refreshToken;
    });

    test('POST /api/auth/login should authenticate Faculty demo account', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'faculty@eduinsight.ai',
          password: 'Faculty@123'
        });
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
      assert.equal(res.body.data.user.role, 'faculty');
      assert.ok(res.body.data.accessToken);
      facultyToken = res.body.data.accessToken;
    });

    test('POST /api/auth/login should authenticate Student demo account', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'student@eduinsight.ai',
          password: 'Student@123'
        });
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
      assert.equal(res.body.data.user.role, 'student');
      assert.ok(res.body.data.accessToken);
      studentToken = res.body.data.accessToken;
    });

    test('POST /api/auth/refresh should issue a new access token for valid refresh token', async () => {
      const res = await request(app)
        .post('/api/auth/refresh')
        .send({ refreshToken });
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
      assert.ok(res.body.data.accessToken);
    });

    test('POST /api/auth/refresh should reject invalid refresh token with 401', async () => {
      const res = await request(app)
        .post('/api/auth/refresh')
        .send({ refreshToken: 'invalid.token.here' });
      assert.equal(res.status, 401);
      assert.equal(res.body.success, false);
    });

    test('POST /api/auth/forgot-password should validate email format', async () => {
      const badRes = await request(app)
        .post('/api/auth/forgot-password')
        .send({ email: 'not-an-email' });
      assert.equal(badRes.status, 400);

      const goodRes = await request(app)
        .post('/api/auth/forgot-password')
        .send({ email: 'student@eduinsight.ai' });
      assert.equal(goodRes.status, 200);
    });

    test('POST /api/auth/logout should succeed', async () => {
      const res = await request(app).post('/api/auth/logout');
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
    });
  });

  // 3. Protected Profile & Session Tests
  describe('Protected Profile Endpoint Tests', () => {
    test('GET /api/auth/me without token should return 401 Unauthorized', async () => {
      const res = await request(app).get('/api/auth/me');
      assert.equal(res.status, 401);
      assert.equal(res.body.success, false);
    });

    test('GET /api/auth/me with invalid token should return 401 Unauthorized', async () => {
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer invalid_token_123');
      assert.equal(res.status, 401);
    });

    test('GET /api/auth/me with valid Admin token should return Admin profile', async () => {
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${adminToken}`);
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
      assert.equal(res.body.data.email, 'admin@eduinsight.ai');
      assert.equal(res.body.data.role, 'admin');
    });
  });

  // 4. Role-Based Access Control (RBAC) Enforcement Tests
  describe('Role-Based Access Control (RBAC) Tests', () => {
    test('Admin route GET /api/users without token should return 401', async () => {
      const res = await request(app).get('/api/users');
      assert.equal(res.status, 401);
    });

    test('Admin route GET /api/users with Student token should return 403 Forbidden', async () => {
      const res = await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${studentToken}`);
      assert.equal(res.status, 403);
      assert.match(res.body.message, /Access forbidden/i);
    });

    test('Admin route GET /api/users with Faculty token should return 403 Forbidden', async () => {
      const res = await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${facultyToken}`);
      assert.equal(res.status, 403);
    });

    test('Admin route GET /api/users with Admin token should be Authorized (status 200)', async () => {
      const res = await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${adminToken}`);
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
    });

    test('Admin-only Audit Logs GET /api/audit-logs with Student token should return 403', async () => {
      const res = await request(app)
        .get('/api/audit-logs')
        .set('Authorization', `Bearer ${studentToken}`);
      assert.equal(res.status, 403);
    });

    test('Admin-only Audit Logs GET /api/audit-logs with Admin token should be Authorized (status 200)', async () => {
      const res = await request(app)
        .get('/api/audit-logs')
        .set('Authorization', `Bearer ${adminToken}`);
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
    });

    test('Departments GET /api/departments with Student token should return 403 Forbidden', async () => {
      const res = await request(app)
        .get('/api/departments')
        .set('Authorization', `Bearer ${studentToken}`);
      assert.equal(res.status, 403);
    });

    test('Departments GET /api/departments with Faculty token should be Authorized (status 200)', async () => {
      const res = await request(app)
        .get('/api/departments')
        .set('Authorization', `Bearer ${facultyToken}`);
      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
    });
  });

  // 5. Security Headers & Error Handling
  describe('Security Headers & Centralized Error Handling', () => {
    test('Response should include Helmet security headers', async () => {
      const res = await request(app).get('/api/health');
      assert.equal(res.headers['x-content-type-options'], 'nosniff');
      assert.equal(res.headers['x-frame-options'], 'SAMEORIGIN');
    });

    test('GET unknown endpoint should return standardized 404', async () => {
      const res = await request(app).get('/api/nonexistent-endpoint-test');
      assert.equal(res.status, 404);
      assert.equal(res.body.success, false);
      assert.ok(res.body.message);
    });
  });
});

