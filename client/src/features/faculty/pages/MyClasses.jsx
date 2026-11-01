import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '../../../components/common/Button.jsx';
import Chip from '@mui/material/Chip';
import { Users, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes.constants.js';

export function MyClasses() {
  const navigate = useNavigate();

  const assignedClasses = [
    { id: '1', name: 'MCA 2nd Year - Sec A', subject: 'Cloud Computing Architecture (CS301)', studentsCount: 42, semester: 'Semester 3' },
    { id: '2', name: 'MCA 2nd Year - Sec B', subject: 'Cloud Computing Architecture (CS301)', studentsCount: 40, semester: 'Semester 3' },
    { id: '3', name: 'MCA 1st Year - Sec A', subject: 'Data Structures & Algorithms (CS102)', studentsCount: 42, semester: 'Semester 1' }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="My Assigned Classes"
        subtitle="View assigned class cohorts, course curricula, and teaching allocations"
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
        {assignedClasses.map((c) => (
          <Card key={c.id} sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Chip label={c.semester} size="small" color="primary" />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                <Users size={16} />
                <Typography variant="caption">{c.studentsCount} Students</Typography>
              </Box>
            </Box>
            <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
              {c.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {c.subject}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
              <Button size="small" variant="outlined" onClick={() => navigate(ROUTES.FACULTY_ATTENDANCE)}>
                Attendance
              </Button>
              <Button size="small" variant="contained" onClick={() => navigate(ROUTES.FACULTY_MARKS)}>
                Enter Marks
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </MainLayout>
  );
}

export default MyClasses;
