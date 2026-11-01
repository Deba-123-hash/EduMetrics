import apiClient from './apiClient.js';

export const healthApi = {
  checkHealth: () => apiClient.get('/health'),
  checkDatabase: () => apiClient.get('/health/database')
};

export default {
  health: healthApi
};
