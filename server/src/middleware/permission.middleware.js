import ApiError from '../utils/ApiError.js';

export const authorizePermission = (requiredPermission) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(ApiError.unauthorized('User not authenticated'));
    }
    // Admins bypass granular checks; otherwise check permission list
    if (req.user.role === 'admin') {
      return next();
    }
    const userPermissions = req.user.permissions || [];
    if (!userPermissions.includes(requiredPermission)) {
      return next(ApiError.forbidden(`Missing required permission: ${requiredPermission}`));
    }
    next();
  };
};

export default authorizePermission;
