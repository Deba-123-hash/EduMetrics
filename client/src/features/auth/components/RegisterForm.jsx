import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Input from '../../../components/common/Input.jsx';
import Button from '../../../components/common/Button.jsx';
import FormError from '../../../components/forms/FormError.jsx';
import { ROUTES } from '../../../constants/routes.constants.js';

export function RegisterForm({ onSubmit, loading = false, error }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <FormError message={error} />
      <Box sx={{ mb: 2 }}>
        <Input
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange('fullName')}
          required
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Input
          label="Academic Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          required
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Input
          label="Password (min. 8 characters)"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          required
        />
      </Box>
      <Box sx={{ mb: 2.5 }}>
        <Input
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          required
        />
      </Box>

      <Button type="submit" variant="contained" color="primary" fullWidth loading={loading}>
        Create Account
      </Button>

      <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 3 }}>
        Already registered?{' '}
        <RouterLink to={ROUTES.LOGIN} style={{ fontWeight: 600 }}>
          Sign In
        </RouterLink>
      </Typography>
    </Box>
  );
}

export default RegisterForm;
