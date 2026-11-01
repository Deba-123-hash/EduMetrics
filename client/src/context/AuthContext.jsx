import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../features/auth/services/auth.service.js';
import { ROLES } from '../constants/roles.constants.js';

const AuthContext = createContext(null);

const DEMO_CREDENTIALS = {
  'admin@eduinsight.ai': { role: ROLES.ADMIN, fullName: 'Dr. Ramesh Kumar', password: 'Admin@123' },
  'faculty@eduinsight.ai': { role: ROLES.FACULTY, fullName: 'Prof. Ananya Gupta', password: 'Faculty@123' },
  'student@eduinsight.ai': { role: ROLES.STUDENT, fullName: 'Rahul Verma', password: 'Student@123' }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore authenticated session from localStorage on startup
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('access_token');
      const storedUser = localStorage.getItem('user_data');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.warn('Failed to parse cached session:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    try {
      let responseUser = null;
      let accessToken = null;

      try {
        // Attempt backend API login
        const response = await authService.login(credentials);
        responseUser = response.data?.user || response.user;
        accessToken = response.data?.accessToken || response.accessToken;
      } catch (apiError) {
        // Fallback for offline/mock demo users
        const emailKey = credentials?.email?.toLowerCase();
        const demo = DEMO_CREDENTIALS[emailKey];
        if (demo && demo.password === credentials.password) {
          responseUser = {
            id: `demo-${demo.role}`,
            email: emailKey,
            fullName: demo.fullName,
            role: demo.role,
            isActive: true
          };
          accessToken = `mock-token-${Date.now()}`;
        } else {
          throw apiError;
        }
      }

      if (responseUser && accessToken) {
        setUser(responseUser);
        setToken(accessToken);
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('user_data', JSON.stringify(responseUser));
        return responseUser;
      }
      throw new Error('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    try {
      authService.logout().catch(() => {});
    } catch {}
    setUser(null);
    setToken(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_data');
  };

  const register = async (userData) => {
    const res = await authService.register(userData);
    const registeredUser = res.data?.user || res.user;
    const accessToken = res.data?.accessToken || res.accessToken;
    if (registeredUser && accessToken) {
      setUser(registeredUser);
      setToken(accessToken);
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('user_data', JSON.stringify(registeredUser));
    }
    return registeredUser;
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    register
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
