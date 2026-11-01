import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Input from '../../../components/common/Input.jsx';
import Button from '../../../components/common/Button.jsx';
import FormError from '../../../components/forms/FormError.jsx';
import { ROUTES } from '../../../constants/routes.constants.js';

export function LoginForm({ onSubmit, loading = false, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <FormError message={error} />
      <Box sx={{ mb: 2 }}>
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="name@university.edu"
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <RouterLink to={ROUTES.FORGOT_PASSWORD} style={{ fontSize: '0.875rem' }}>
          Forgot password?
        </RouterLink>
      </Box>

      <Button type="submit" variant="contained" color="primary" fullWidth loading={loading}>
        Sign In
      </Button>

      <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 3 }}>
        Don't have an account?{' '}
        <RouterLink to={ROUTES.REGISTER} style={{ fontWeight: 600 }}>
          Register here
        </RouterLink>
      </Typography>
    </Box>
  );
}

export default LoginForm;
