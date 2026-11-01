import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

export function PremiumButton({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  glow = false,
  onClick,
  sx = {},
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  const motionWrapper = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: disabled || loading ? 1 : 1.02 },
        whileTap: { scale: disabled || loading ? 1 : 0.98 },
        transition: { duration: 0.15 }
      };

  return (
    <motion.div {...motionWrapper} style={{ display: 'inline-block', width: sx.fullWidth ? '100%' : 'auto' }}>
      <Button
        variant={variant}
        color={color}
        size={size}
        disabled={disabled || loading}
        onClick={onClick}
        sx={{
          borderRadius: 2.5,
          fontWeight: 600,
          textTransform: 'none',
          position: 'relative',
          overflow: 'hidden',
          ...(glow && {
            boxShadow: 'var(--shadow-glow)',
            '&:hover': {
              boxShadow: '0 0 25px var(--color-primary-glow)'
            }
          }),
          ...sx
        }}
        {...props}
      >
        {loading ? (
          <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
        ) : null}
        {children}
      </Button>
    </motion.div>
  );
}

export const AnimatedButton = PremiumButton;
export default PremiumButton;

