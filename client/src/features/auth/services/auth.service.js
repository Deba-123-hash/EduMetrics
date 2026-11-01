import apiClient from '../../../services/apiClient.js';
import { API_ENDPOINTS } from '../../../constants/api.constants.js';

export const authService = {
  login: (credentials) => apiClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials),
  register: (data) => apiClient.post(API_ENDPOINTS.AUTH.REGISTER, data),
  logout: () => apiClient.post(API_ENDPOINTS.AUTH.LOGOUT),
  refresh: () => apiClient.post(API_ENDPOINTS.AUTH.REFRESH),
  getCurrentUser: () => apiClient.get(API_ENDPOINTS.AUTH.ME),
  forgotPassword: (email) => apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email }),
  resetPassword: (payload) => apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, payload)
};

export default authService;
