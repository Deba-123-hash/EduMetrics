import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { UserPlus, Calendar, Award, Sparkles, FileText, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GlassCard } from '../common/GlassCard.jsx';
import { PremiumButton } from '../common/PremiumButton.jsx';
import { ROUTES } from '../../constants/routes.constants.js';

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <GlassCard hover={false} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 0.5 }}>
        Quick Operations
      </Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary', mb: 2 }}>
        Direct short-cuts to high-frequency administrative workflows
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mt: 'auto' }}>
        <PremiumButton
          variant="outlined"
          color="primary"
          startIcon={<UserPlus size={16} />}
          onClick={() => navigate(ROUTES.ADMIN_STUDENTS)}
          size="small"
        >
          Add Student
        </PremiumButton>
        <PremiumButton
          variant="outlined"
          color="secondary"
          startIcon={<Calendar size={16} />}
          onClick={() => navigate(ROUTES.FACULTY_ATTENDANCE)}
          size="small"
        >
          Take Attendance
        </PremiumButton>
        <PremiumButton
          variant="outlined"
          color="info"
          startIcon={<Award size={16} />}
          onClick={() => navigate(ROUTES.ADMIN_EXAMS)}
          size="small"
        >
          Examinations
        </PremiumButton>
        <PremiumButton
          variant="outlined"
          color="success"
          startIcon={<Sparkles size={16} />}
          onClick={() => navigate(ROUTES.AI_INSIGHTS)}
          size="small"
        >
          AI Risk Batch
        </PremiumButton>
      </Box>
    </GlassCard>
  );
}

export default QuickActions;
