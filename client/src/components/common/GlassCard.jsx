import React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

export function GlassCard({
  children,
  elevation = 0,
  hover = true,
  glow = false,
  sx = {},
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = (!prefersReducedMotion && hover)
    ? {
        whileHover: { y: -3, scale: 1.008 },
        transition: { duration: 0.2, ease: 'easeOut' }
      }
    : {};

  return (
    <motion.div {...motionProps} style={{ height: '100%' }}>
      <Card
        elevation={elevation}
        sx={{
          background: 'var(--color-bg-glass, rgba(15, 23, 42, 0.75))',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--color-border-glass, rgba(255, 255, 255, 0.1))',
          borderRadius: 3.5,
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          ...(glow && {
            boxShadow: 'var(--shadow-glow)'
          }),
          '&:hover': {
            borderColor: 'var(--color-primary)'
          },
          ...sx
        }}
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  );
}

export function GradientCard({
  children,
  gradientBorder = true,
  sx = {},
  ...props
}) {
  return (
    <GlassCard
      sx={{
        ...(gradientBorder && {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), transparent)',
            opacity: 0.9
          }
        }),
        ...sx
      }}
      {...props}
    >
      {children}
    </GlassCard>
  );
}

export default GlassCard;

