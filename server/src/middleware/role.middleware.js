import ApiError from '../utils/ApiError.js';

export const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(ApiError.unauthorized('User not authenticated'));
    }
    if (!allowedRoles.includes(req.user.role)) {
      return next(ApiError.forbidden(`Access forbidden for role: ${req.user.role}`));
    }
    next();
  };
};

export default authorizeRole;
