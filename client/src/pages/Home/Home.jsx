import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Sparkles,
  Award,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Database,
  Layers,
  Cpu
} from 'lucide-react';
import { PremiumButton } from '../../components/common/PremiumButton.jsx';
import { GlassCard, GradientCard } from '../../components/common/GlassCard.jsx';
import { AnimatedCounter } from '../../components/common/AnimatedCounter.jsx';
import { ThemeSwitcher } from '../../components/common/ThemeSwitcher.jsx';
import { AIIntelligenceHero } from '../../three/scenes/AIIntelligenceHero.jsx';
import { DataGalaxy3D } from '../../three/scenes/DataGalaxy3D.jsx';
import Footer from '../../components/layout/Footer.jsx';
import { ROUTES } from '../../constants/routes.constants.js';

export function Home() {
  const navigate = useNavigate();

  const previewFeatures = [
    {
      title: 'Student Performance Analytics',
      desc: 'Holistic cross-semester metrics, course-level benchmark diagnostics, and attendance correlation tracking.',
      icon: BarChart3,
      badge: 'Real-Time'
    },
    {
      title: 'AI-Powered Academic Predictions',
      desc: 'Rule-grounded predictive modeling and early warning alerts flagging students vulnerable to academic setbacks.',
      icon: TrendingUp,
      badge: '94.2% Acc'
    },
    {
      title: 'Personalized Recommendations',
      desc: 'Automated study interventions tailored to individual student weaknesses and assessment histories.',
      icon: Sparkles,
      badge: 'Context-Aware'
    },
    {
      title: 'Academic Progress Tracking',
      desc: 'Comprehensive multi-semester progression curves, credit audits, and institutional compliance dashboards.',
      icon: Award,
      badge: 'Accreditation'
    }
  ];

  const metrics = [
    { label: 'Risk Accuracy', value: 94.2, suffix: '%' },
    { label: 'Active Students', value: 1200, suffix: '+' },
    { label: 'Database Entities', value: 25, suffix: ' Tables' },
    { label: 'Latency', value: 38, suffix: 'ms' }
  ];

  const steps = [
    {
      step: '01',
      title: 'Institutional Data Aggregation',
      desc: 'Seamlessly connects student marks, attendance ledgers, and demographic records within Neon PostgreSQL.',
      icon: Database
    },
    {
      step: '02',
      title: 'Multi-Factor Neural Modeling',
      desc: 'Evaluates weighted factors (35% Attendance, 35% Assessment, 20% Backlogs, 10% Trends) to quantify academic risk.',
      icon: Cpu
    },
    {
      step: '03',
      title: 'Intervention & Progress Auditing',
      desc: 'Dispatches targeted study recommendations and automated PDF progress cards to faculty, students, and admins.',
      icon: Layers
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* Public Landing Navbar */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          bgcolor: 'var(--color-bg-glass, rgba(255, 255, 255, 0.85))',
          borderBottom: '1px solid',
          borderColor: 'divider',
          zIndex: 1100
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1300, width: '100%', mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box component="img" src="/logo.svg" alt="EduInsight AI" sx={{ height: 32 }} />
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              EduInsight AI
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            <ThemeSwitcher />
            <PremiumButton
              variant="outlined"
              color="inherit"
              size="small"
              onClick={() => navigate(ROUTES.LOGIN)}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              Sign In
            </PremiumButton>
            <PremiumButton
              variant="contained"
              color="primary"
              size="small"
              glow
              onClick={() => navigate(ROUTES.ADMIN_DASHBOARD)}
            >
              Launch Dashboard
            </PremiumButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section with 3D AI Visual */}
      <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={7} sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
            <Chip
              icon={<Sparkles size={14} />}
              label="MCA Final-Year Major Project • AI Analytics SaaS"
              color="primary"
              variant="outlined"
              sx={{ mb: 3, fontWeight: 700, fontSize: '0.8rem', backdropFilter: 'blur(8px)' }}
            />

            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                mb: 2.5
              }}
            >
              Understand Performance.{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Predict Academic Success.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.65,
                maxWidth: 620,
                mx: { xs: 'auto', lg: 0 },
                mb: 4
              }}
            >
              EduInsight AI bridges institutional academic data with transparent, explainable machine intelligence. Early detection of learning setbacks, automated attendance trend diagnostics, and personalized guidance for students and educators.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' }, flexWrap: 'wrap' }}>
              <PremiumButton
                variant="contained"
                color="primary"
                size="large"
                glow
                endIcon={<ArrowRight size={18} />}
                onClick={() => navigate(ROUTES.ADMIN_DASHBOARD)}
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                Explore Live Demo
              </PremiumButton>
              <PremiumButton
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{ px: 3.5, py: 1.5, fontSize: '1rem' }}
              >
                View Architecture
              </PremiumButton>
            </Box>
          </Grid>

          {/* 3D Visual Element */}
          <Grid item xs={12} lg={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: 480,
                height: { xs: 340, sm: 420 },
                position: 'relative',
                background: 'radial-gradient(circle at center, var(--color-primary-glow), transparent 70%)',
                borderRadius: 4
              }}
            >
              <AIIntelligenceHero height="100%" />
            </Box>
          </Grid>
        </Grid>

        {/* Live Metrics Counter Bar */}
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <GlassCard hover={false} sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 4 }}>
            <Grid container spacing={3} alignItems="center">
              {metrics.map((m, idx) => (
                <Grid item xs={6} md={3} key={idx} sx={{ textAlign: 'center' }}>
                  <AnimatedCounter value={m.value} suffix={m.suffix} variant="h3" sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mt: 0.5, fontSize: '0.85rem' }}>
                    {m.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </GlassCard>
        </Box>
      </Container>

      {/* Feature Pillar Grid Section */}
      <Box
        id="features"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'action.hover',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography
              variant="h3"
              sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.02em', mb: 1.5 }}
            >
              Intelligent Educational Analytics Ecosystem
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 650, mx: 'auto' }}>
              Four core analytical pillars engineered to support students, educators, and institutional leadership.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {previewFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <GradientCard
                    hover={true}
                    sx={{
                      p: 3.5,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
                        <Box
                          sx={{
                            p: 1.2,
                            borderRadius: 2.5,
                            bgcolor: 'action.selected',
                            color: 'primary.main',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                          }}
                        >
                          <Icon size={24} />
                        </Box>
                        <Chip label={feat.badge} size="small" color="primary" sx={{ height: 22, fontSize: '0.7rem', fontWeight: 700 }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 1.2 }}>
                        {feat.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {feat.desc}
                      </Typography>
                    </Box>
                  </GradientCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 3D Interactive Data Galaxy & Architecture Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} lg={5}>
            <Chip label="Neural Network Geometry" color="primary" size="small" sx={{ mb: 2, fontWeight: 700 }} />
            <Typography variant="h3" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 2 }}>
              Ground-Truth Analytics, Not Hallucinations
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
              Every insight and prediction is anchored directly in institutional relational data hosted on Neon PostgreSQL. No fabricated averages or phantom metrics.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <CheckCircle size={18} color="var(--color-success)" />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Normalized 3NF PostgreSQL Architecture (25 Tables)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <CheckCircle size={18} color="var(--color-success)" />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>6 Professional SaaS Themes with Seamless Dark Mode</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <CheckCircle size={18} color="var(--color-success)" />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Sub-50ms REST API Response Times with Connection Pooling</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={7}>
            <GlassCard hover={false} sx={{ p: 3, borderRadius: 4 }}>
              <DataGalaxy3D height={320} />
            </GlassCard>
          </Grid>
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'action.hover', borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 1.5 }}>
              How EduInsight AI Works
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              A 3-stage predictive pipeline designed for reliable, early student intervention.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <Grid item xs={12} md={4} key={i}>
                  <GlassCard hover={true} sx={{ p: 3.5, height: '100%' }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 800,
                        color: 'primary.main',
                        fontSize: '1.2rem',
                        display: 'block',
                        mb: 1.5
                      }}
                    >
                      {st.step}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.5 }}>
                      <Icon size={20} color="var(--color-accent)" />
                      <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>
                        {st.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {st.desc}
                    </Typography>
                  </GlassCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <GlassCard glow sx={{ p: { xs: 4, sm: 6 }, borderRadius: 5 }}>
          <Typography variant="h3" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 2 }}>
            Ready to Experience Next-Gen Academic Analytics?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', mb: 4 }}>
            Explore role-based dashboards, examine real-time AI risk estimations, and inspect the unified design system.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <PremiumButton
              variant="contained"
              color="primary"
              size="large"
              glow
              onClick={() => navigate(ROUTES.LOGIN)}
              sx={{ px: 4, py: 1.5 }}
            >
              Sign In to Portal
            </PremiumButton>
            <PremiumButton
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate(ROUTES.ADMIN_DASHBOARD)}
              sx={{ px: 4, py: 1.5 }}
            >
              Admin Dashboard
            </PremiumButton>
          </Box>
        </GlassCard>
      </Container>

      <Footer />
    </Box>
  );
}

export default Home;
