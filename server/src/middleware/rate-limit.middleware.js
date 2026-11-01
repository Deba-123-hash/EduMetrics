import { apiLimiter, authLimiter } from '../config/security.js';

export const rateLimitMiddleware = apiLimiter;
export const authRateLimitMiddleware = authLimiter;

export default {
  rateLimitMiddleware,
  authRateLimitMiddleware
};
