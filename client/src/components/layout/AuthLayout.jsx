import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Link as RouterLink } from 'react-router-dom';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { GlassCard } from '../common/GlassCard.jsx';
import { AIIntelligenceHero } from '../../three/scenes/AIIntelligenceHero.jsx';
import { ThemeSwitcher } from '../common/ThemeSwitcher.jsx';

export function AuthLayout({ children, title, subtitle }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Absolute top navbar with logo and theme switcher */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          p: { xs: 2, sm: 3 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10
        }}
      >
        <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Box component="img" src="/logo.svg" alt="EduInsight AI" sx={{ height: 32 }} />
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            EduInsight AI
          </Typography>
        </RouterLink>

        <ThemeSwitcher />
      </Box>

      {/* Main Split Screen Container */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        {/* Left Section: Form Container */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '0 0 50%', lg: '0 0 45%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 3, sm: 6 },
            pt: { xs: 12, md: 8 },
            zIndex: 2
          }}
        >
          <GlassCard
            hover={false}
            sx={{
              maxWidth: 460,
              width: '100%',
              p: { xs: 3.5, sm: 4.5 },
              borderRadius: 4,
              boxShadow: 'var(--shadow-elevated)'
            }}
          >
            {title && (
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  textAlign: 'center',
                  mb: 1
                }}
              >
                {title}
              </Typography>
            )}

            {subtitle && (
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                  mb: 3.5,
                  fontSize: '0.9rem'
                }}
              >
                {subtitle}
              </Typography>
            )}

            {children}
          </GlassCard>

          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              mt: 3,
              textAlign: 'center'
            }}
          >
            © 2026 EduInsight AI • MCA Final-Year Major Project
          </Typography>
        </Box>

        {/* Right Section: 3D AI Intelligence Scene & Value Proposition */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flex: { md: '0 0 50%', lg: '0 0 55%' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            p: 6,
            background: 'radial-gradient(circle at 60% 50%, var(--color-primary-glow), transparent 70%)'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 520, height: 420, position: 'relative' }}>
            <AIIntelligenceHero height={420} />
          </Box>

          <Box sx={{ maxWidth: 480, textAlign: 'center', mt: 2, zIndex: 2 }}>
            <Chip
              icon={<Sparkles size={14} />}
              label="Real-Time Neural Predictor"
              color="primary"
              variant="outlined"
              sx={{ mb: 2, fontWeight: 700, backdropFilter: 'blur(8px)' }}
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.015em',
                mb: 1.5,
                color: 'text.primary'
              }}
            >
              Actionable Intelligence for Student Mastery
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              Multi-factor risk prediction, automated trend diagnostics, and explainable intervention prescriptions engineered for higher education institutions.
            </Typography>

            {/* Badges */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <ShieldCheck size={16} color="var(--color-primary)" />
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Enterprise RBAC
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <Zap size={16} color="var(--color-accent)" />
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Serverless Neon DB
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AuthLayout;
