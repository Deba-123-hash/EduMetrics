import { query } from '../config/database.js';

export const logAuditEvent = async (userId, action, entityType, entityId, details = {}) => {
  try {
    await query(
      `INSERT INTO audit_logs (user_id, action, entity_type, entity_id, details) 
       VALUES ($1, $2, $3, $4, $5);`,
      [userId || null, action, entityType, entityId || null, JSON.stringify(details)]
    );
  } catch (err) {
    console.error('Failed to record audit log:', err.message);
  }
};

export const auditMiddleware = (action, entityType) => (req, res, next) => {
  // Capture response finish and log asynchronously without blocking request
  res.on('finish', () => {
    if (res.statusCode < 400 && req.user) {
      logAuditEvent(req.user.id, action, entityType, req.params.id || null, {
        method: req.method,
        path: req.originalUrl
      });
    }
  });
  next();
};

export default {
  logAuditEvent,
  auditMiddleware
};
