import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '../../../components/common/Button.jsx';
import { ArrowLeft, Mail, Calendar, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function StudentDetails() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <PageHeader
        title="Student Academic Profile"
        subtitle="Individual student details, enrollment history, and semester metrics"
        actions={
          <Button variant="outlined" startIcon={<ArrowLeft size={16} />} onClick={() => navigate(-1)}>
            Back to Directory
          </Button>
        }
      />

      <Card sx={{ p: 4, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
          <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', fontSize: '1.5rem' }}>
            R
          </Avatar>
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Rahul Verma
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: MCA2024-001 • Department of Computer Applications
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Chip label="ACTIVE ENROLLMENT" size="small" color="success" />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Mail size={18} color="#64748b" />
            <Typography variant="body2">rahul.verma@eduinsight.ai</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GraduationCap size={18} color="#64748b" />
            <Typography variant="body2">Class: MCA 2nd Year - Section A</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Calendar size={18} color="#64748b" />
            <Typography variant="body2">Admission: August 1, 2024</Typography>
          </Box>
        </Box>
      </Card>
    </MainLayout>
  );
}

export default StudentDetails;
