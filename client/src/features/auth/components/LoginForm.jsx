import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import { Link as RouterLink } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, ShieldAlert } from 'lucide-react';
import Input from '../../../components/common/Input.jsx';
import { PremiumButton } from '../../../components/common/PremiumButton.jsx';
import FormError from '../../../components/forms/FormError.jsx';
import { ROUTES } from '../../../constants/routes.constants.js';

export function LoginForm({ onSubmit, loading = false, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  const fillDemoCredentials = (demoEmail, demoPass) => {
    setEmail(demoEmail);
    setPassword(demoPass);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <FormError message={error} />

      {/* Demo Credentials Quick Switcher Pills for Evaluation/Testing */}
      <Box sx={{ mb: 2.5, p: 1.5, borderRadius: 2.5, bgcolor: 'action.hover', border: '1px dashed', borderColor: 'divider' }}>
        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1, letterSpacing: '0.04em' }}>
          DEMO ACCOUNTS (CLICK TO AUTO-FILL):
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            size="small"
            label="Admin"
            onClick={() => fillDemoCredentials('admin@eduinsight.ai', 'Admin@123')}
            sx={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.75rem' }}
          />
          <Chip
            size="small"
            label="Faculty"
            onClick={() => fillDemoCredentials('faculty@eduinsight.ai', 'Faculty@123')}
            sx={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.75rem' }}
          />
          <Chip
            size="small"
            label="Student"
            onClick={() => fillDemoCredentials('student@eduinsight.ai', 'Student@123')}
            sx={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.75rem' }}
          />
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="name@university.edu"
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
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock size={18} color="var(--color-text-muted, #94a3b8)" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2.5 }}>
        <RouterLink to={ROUTES.FORGOT_PASSWORD} style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>
          Forgot password?
        </RouterLink>
      </Box>

      <PremiumButton
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        glow
        size="large"
        loading={loading}
        sx={{ py: 1.2, fontSize: '0.95rem' }}
      >
        Sign In to Portal
      </PremiumButton>

      <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mt: 3, fontSize: '0.875rem' }}>
        Don't have an account?{' '}
        <RouterLink to={ROUTES.REGISTER} style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
          Register here
        </RouterLink>
      </Typography>
    </Box>
  );
}

export default LoginForm;
