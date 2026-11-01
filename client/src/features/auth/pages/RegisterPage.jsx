import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../../components/layout/AuthLayout.jsx';
import RegisterForm from '../components/RegisterForm.jsx';
import { useAuth } from '../../../hooks/useAuth.js';
import { ROUTES } from '../../../constants/routes.constants.js';

export function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await register(data);
      navigate(ROUTES.STUDENT_DASHBOARD);
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join EduInsight AI to monitor and optimize your academic trajectory"
    >
      <RegisterForm onSubmit={handleRegister} loading={loading} error={error} />
    </AuthLayout>
  );
}

export default RegisterPage;
