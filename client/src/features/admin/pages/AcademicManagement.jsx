import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '../../../components/common/Button.jsx';
import { Calendar, Layers, BookOpen } from 'lucide-react';

export function AcademicManagement() {
  return (
    <MainLayout>
      <PageHeader
        title="Academic Cycle Management"
        subtitle="Configure academic years, semester terms, classes, sections, and curriculum subjects"
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
        <Card sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <Calendar size={24} color="#2563eb" />
            <Typography variant="h6" fontWeight={600}>
              Academic Years
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Current active cycle: <strong>2025–2026</strong>. Configure intake schedules and calendar boundaries.
          </Typography>
          <Button variant="outlined" size="small">
            Manage Cycles
          </Button>
        </Card>

        <Card sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <Layers size={24} color="#4f46e5" />
            <Typography variant="h6" fontWeight={600}>
              Classes & Sections
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Organize student cohorts into sections across Semesters 1 through 6.
          </Typography>
          <Button variant="outlined" size="small">
            Manage Classes
          </Button>
        </Card>

        <Card sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <BookOpen size={24} color="#06b6d4" />
            <Typography variant="h6" fontWeight={600}>
              Curriculum Subjects
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Define credit weights, subject codes, theory/practical classifications, and faculty mapping.
          </Typography>
          <Button variant="outlined" size="small">
            Manage Subjects
          </Button>
        </Card>
      </Box>
    </MainLayout>
  );
}

export default AcademicManagement;
