import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Input from '../../../components/common/Input.jsx';
import { PremiumButton } from '../../../components/common/PremiumButton.jsx';
import FormError from '../../../components/forms/FormError.jsx';
import { ROUTES } from '../../../constants/routes.constants.js';

export function RegisterForm({ onSubmit, loading = false, error }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);

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
          placeholder="Aarav Sharma"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <User size={18} color="var(--color-text-muted, #94a3b8)" />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Input
          label="Academic Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          required
          placeholder="aarav@university.edu"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail size={18} color="var(--color-text-muted, #94a3b8)" />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Input
          label="Password (min. 8 characters)"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange('password')}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock size={18} color="var(--color-text-muted, #94a3b8)" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box sx={{ mb: 2.5 }}>
        <Input
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock size={18} color="var(--color-text-muted, #94a3b8)" />
              </InputAdornment>
            )
          }}
        />
      </Box>

      <PremiumButton type="submit" variant="contained" color="primary" fullWidth glow size="large" loading={loading} sx={{ py: 1.2 }}>
        Create Account
      </PremiumButton>

      <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mt: 3, fontSize: '0.875rem' }}>
        Already registered?{' '}
        <RouterLink to={ROUTES.LOGIN} style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
          Sign In
        </RouterLink>
      </Typography>
    </Box>
  );
}

export default RegisterForm;
