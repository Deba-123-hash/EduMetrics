import React, { useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import { animateCounter } from '../../animations/gsapAnimations.js';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

export function AnimatedCounter({
  value,
  duration = 1.0,
  suffix = '',
  prefix = '',
  variant = 'h4',
  sx = {}
}) {
  const numRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const numericVal = typeof value === 'number' ? value : parseFloat(value) || 0;

  useEffect(() => {
    if (prefersReducedMotion || !numRef.current) {
      if (numRef.current) {
        numRef.current.textContent = (numericVal % 1 !== 0 ? numericVal.toFixed(1) : Math.round(numericVal).toLocaleString()) + suffix;
      }
      return;
    }

    const tween = animateCounter(numRef.current, numericVal, duration, suffix);
    return () => {
      if (tween) tween.kill();
    };
  }, [numericVal, duration, suffix, prefersReducedMotion]);

  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: '"IBM Plex Sans", "Space Grotesk", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        display: 'inline-flex',
        alignItems: 'baseline',
        ...sx
      }}
    >
      {prefix}
      <span ref={numRef}>{numericVal}</span>
    </Typography>
  );
}

export default AnimatedCounter;
