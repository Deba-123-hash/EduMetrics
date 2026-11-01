import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Input from '../../../components/common/Input.jsx';
import Button from '../../../components/common/Button.jsx';
import FormError from '../../../components/forms/FormError.jsx';
import Alert from '../../../components/feedback/Alert.jsx';
import { ROUTES } from '../../../constants/routes.constants.js';

export function ForgotPasswordForm({ onSubmit, loading = false, error, success }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <FormError message={error} />
      {success && (
        <Alert severity="success">
          If an account exists with this email, password reset instructions have been sent.
        </Alert>
      )}

      <Box sx={{ mb: 2.5 }}>
        <Input
          label="Registered Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Box>

      <Button type="submit" variant="contained" color="primary" fullWidth loading={loading}>
        Send Reset Link
      </Button>

      <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 3 }}>
        Remembered your password?{' '}
        <RouterLink to={ROUTES.LOGIN} style={{ fontWeight: 600 }}>
          Back to Login
        </RouterLink>
      </Typography>
    </Box>
  );
}

export default ForgotPasswordForm;
