import ApiError from '../utils/ApiError.js';

export const validateRequest = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });
    next();
  } catch (err) {
    const errorDetails = err.errors ? err.errors.map((e) => `${e.path.join('.')}: ${e.message}`) : [err.message];
    next(ApiError.badRequest('Validation error', errorDetails));
  }
};

export default validateRequest;
