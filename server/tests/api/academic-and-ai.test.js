import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../../src/app.js';

describe('EduInsight AI - Academic & AI Modules Integration Tests', () => {
  let adminToken = '';

  before(async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@eduinsight.ai', password: 'Admin@123' });
    adminToken = loginRes.body.data.accessToken;
  });

  test('GET /api/students should return list of students', async () => {
    const res = await request(app)
      .get('/api/students')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/faculty should return faculty list', async () => {
    const res = await request(app)
      .get('/api/faculty')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/classes should return academic classes', async () => {
    const res = await request(app)
      .get('/api/classes')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/subjects should return subjects inventory', async () => {
    const res = await request(app)
      .get('/api/subjects')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/exams should return exams schedule', async () => {
    const res = await request(app)
      .get('/api/exams')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/marks should return marks records', async () => {
    const res = await request(app)
      .get('/api/marks')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/attendance should return attendance logs', async () => {
    const res = await request(app)
      .get('/api/attendance')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/analytics should return aggregate institutional metrics', async () => {
    const res = await request(app)
      .get('/api/analytics')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/predictions should return AI academic risk predictions', async () => {
    const res = await request(app)
      .get('/api/predictions')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/ai-insights should return grounded student insights', async () => {
    const res = await request(app)
      .get('/api/ai-insights')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });

  test('GET /api/recommendations should return personalized study recommendations', async () => {
    const res = await request(app)
      .get('/api/recommendations')
      .set('Authorization', `Bearer ${adminToken}`);
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.ok(Array.isArray(res.body.data.items));
  });
});

