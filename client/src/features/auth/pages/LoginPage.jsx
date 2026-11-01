import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../../components/layout/AuthLayout.jsx';
import LoginForm from '../components/LoginForm.jsx';
import { useAuth } from '../../../hooks/useAuth.js';
import { ROUTES } from '../../../constants/routes.constants.js';
import { ROLES } from '../../../constants/roles.constants.js';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const user = await login(credentials);
      if (user?.role === ROLES.ADMIN) {
        navigate(ROUTES.ADMIN_DASHBOARD);
      } else if (user?.role === ROLES.FACULTY) {
        navigate(ROUTES.FACULTY_DASHBOARD);
      } else {
        navigate(ROUTES.STUDENT_DASHBOARD);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your academic journey with EduInsight AI"
    >
      <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
    </AuthLayout>
  );
}

export default LoginPage;
