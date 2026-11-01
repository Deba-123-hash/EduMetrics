/**
 * Higher-order async handler wrapper for Express routes to eliminate boilerplate try-catch.
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
