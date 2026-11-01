import React, { useState } from 'react';
import AuthLayout from '../../../components/layout/AuthLayout.jsx';
import ForgotPasswordForm from '../components/ForgotPasswordForm.jsx';
import { authService } from '../services/auth.service.js';

export function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleForgotPassword = async ({ email }) => {
    setLoading(true);
    setError(null);
    try {
      await authService.forgotPassword(email);
      setSuccess(true);
    } catch (err) {
      // In preview/demo, also show success message gracefully
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive recovery instructions"
    >
      <ForgotPasswordForm
        onSubmit={handleForgotPassword}
        loading={loading}
        error={error}
        success={success}
      />
    </AuthLayout>
  );
}

export default ForgotPasswordPage;
