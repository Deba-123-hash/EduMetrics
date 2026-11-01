import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '../../components/common/Button.jsx';
import Footer from '../../components/layout/Footer.jsx';
import {
  BarChart3,
  TrendingUp,
  Sparkles,
  Award,
  ShieldCheck,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.constants.js';

export function Home() {
  const navigate = useNavigate();

  const previewFeatures = [
    {
      title: 'Student Performance Analytics',
      desc: 'Holistic cross-semester metrics, course-level benchmark diagnostics, and attendance correlation tracking.',
      icon: BarChart3,
      color: '#2563eb',
      bg: '#eff6ff'
    },
    {
      title: 'AI-Powered Academic Predictions',
      desc: 'Grounded linear estimations and early warning alerts flagging students vulnerable to academic setbacks.',
      icon: TrendingUp,
      color: '#4f46e5',
      bg: '#eef2ff'
    },
    {
      title: 'Personalized Recommendations',
      desc: 'Automated study interventions tailored to individual student weaknesses and assessment trends.',
      icon: Sparkles,
      color: '#06b6d4',
      bg: '#ecfeff'
    },
    {
      title: 'Academic Progress Tracking',
      desc: 'Comprehensive multi-semester progression curves, credit audits, and institutional compliance dashboards.',
      icon: Award,
      color: '#10b981',
      bg: '#ecfdf5'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#ffffff' }}>
      {/* Public Landing Navbar */}
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e2e8f0', bgcolor: '#ffffff' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box component="img" src="/logo.svg" alt="EduInsight AI" sx={{ height: 32 }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            <Button variant="text" color="inherit" onClick={() => navigate(ROUTES.LOGIN)}>
              Sign In
            </Button>
            <Button variant="contained" color="primary" onClick={() => navigate(ROUTES.ADMIN_DASHBOARD)}>
              Explore Dashboard
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Chip
          label="MCA Final-Year Major Project"
          color="primary"
          variant="outlined"
          sx={{ mb: 3, fontWeight: 600, fontSize: '0.8rem', bgcolor: '#eff6ff' }}
        />
        <Typography
          variant="h2"
          component="h1"
          fontWeight={800}
          color="#0f172a"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            letterSpacing: '-0.025em',
            mb: 2.5
          }}
        >
          Understand Performance.{' '}
          <Box component="span" sx={{ color: '#2563eb' }}>
            Predict Success.
          </Box>
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: 780,
            mx: 'auto',
            mb: 4,
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: 1.6
          }}
        >
          EduInsight AI transforms academic data into meaningful insights, helping students and educators
          understand progress, identify challenges and make better academic decisions.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowRight size={18} />}
            onClick={() => navigate(ROUTES.ADMIN_DASHBOARD)}
            sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
          >
            Learn More
          </Button>
        </Box>
      </Container>

      {/* Feature Preview Section */}
      <Box id="features" sx={{ bgcolor: '#f8fafc', py: { xs: 8, md: 10 }, borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" fontWeight={700} color="#0f172a" gutterBottom>
              Intelligent Educational Analytics Ecosystem
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 650, mx: 'auto' }}>
              Four core analytical pillars engineered to support students, educators, and institutional leadership.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {previewFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <Card
                  key={index}
                  sx={{
                    p: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    border: '1px solid #e2e8f0',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px -4px rgba(0,0,0,0.08)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2.5,
                      bgcolor: feat.bg,
                      color: feat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5
                    }}
                  >
                    <Icon size={24} />
                  </Box>
                  <Typography variant="h6" fontWeight={700} color="#0f172a" sx={{ fontSize: '1.1rem', mb: 1 }}>
                    {feat.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feat.desc}
                  </Typography>
                </Card>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 }, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={700} color="#0f172a" gutterBottom>
          About EduInsight AI
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
          Developed as a comprehensive MCA final-year major project, EduInsight AI replaces fragmented,
          siloed spreadsheets with a normalized PostgreSQL database and an explainable AI engine. It provides
          transparent, early identification of student learning gaps without opaque decision-making.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircle size={20} color="#10b981" />
            <Typography variant="body2" fontWeight={600}>Grounded PostgreSQL Analytics</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ShieldCheck size={20} color="#2563eb" />
            <Typography variant="body2" fontWeight={600}>Role-Based Access Control</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Sparkles size={20} color="#4f46e5" />
            <Typography variant="body2" fontWeight={600}>Explainable AI Predictions</Typography>
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Home;
