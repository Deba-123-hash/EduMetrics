import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '../common/Button.jsx';
import { UserPlus, Calendar, Award, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.constants.js';

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card sx={{ p: 2.5, height: '100%' }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Quick Actions
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<UserPlus size={16} />}
          onClick={() => navigate(ROUTES.ADMIN_STUDENTS)}
          size="small"
        >
          Add Student
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<Calendar size={16} />}
          onClick={() => navigate(ROUTES.FACULTY_ATTENDANCE)}
          size="small"
        >
          Attendance
        </Button>
        <Button
          variant="outlined"
          color="info"
          startIcon={<Award size={16} />}
          onClick={() => navigate(ROUTES.ADMIN_EXAMS)}
          size="small"
        >
          Examinations
        </Button>
        <Button
          variant="outlined"
          color="success"
          startIcon={<FileText size={16} />}
          onClick={() => navigate(ROUTES.AI_INSIGHTS)}
          size="small"
        >
          AI Insights
        </Button>
      </Box>
    </Card>
  );
}

export default QuickActions;
