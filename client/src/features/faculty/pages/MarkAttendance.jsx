import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '../../../components/common/Button.jsx';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Check, Save } from 'lucide-react';

export function MarkAttendance() {
  const [attendance, setAttendance] = useState({
    '1': 'present',
    '2': 'present',
    '3': 'present'
  });

  const students = [
    { id: '1', roll: 'MCA2024-001', name: 'Rahul Verma' },
    { id: '2', roll: 'MCA2024-002', name: 'Pooja Iyer' },
    { id: '3', roll: 'MCA2024-003', name: 'Aman Patel' }
  ];

  const handleStatusChange = (id, status) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  const markAll = (status) => {
    const updated = {};
    students.forEach((s) => {
      updated[s.id] = status;
    });
    setAttendance(updated);
  };

  return (
    <MainLayout>
      <PageHeader
        title="Mark Daily Attendance"
        subtitle="Record session attendance for MCA 2nd Year - Cloud Computing (CS301)"
        actions={
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button size="small" variant="outlined" onClick={() => markAll('present')}>
              Mark All Present
            </Button>
            <Button size="small" variant="contained" startIcon={<Save size={16} />}>
              Save Attendance
            </Button>
          </Box>
        }
      />

      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: 2 }}>
        <Table size="small">
          <TableHead sx={{ bgcolor: '#f8fafc' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Roll Number</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Student Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">Attendance Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((s) => (
              <TableRow key={s.id} hover>
                <TableCell>{s.roll}</TableCell>
                <TableCell>{s.name}</TableCell>
                <TableCell align="center">
                  <RadioGroup
                    row
                    value={attendance[s.id] || 'present'}
                    onChange={(e) => handleStatusChange(s.id, e.target.value)}
                    sx={{ justifyContent: 'center' }}
                  >
                    <FormControlLabel value="present" control={<Radio size="small" color="success" />} label="Present" />
                    <FormControlLabel value="absent" control={<Radio size="small" color="error" />} label="Absent" />
                    <FormControlLabel value="late" control={<Radio size="small" color="warning" />} label="Late" />
                    <FormControlLabel value="excused" control={<Radio size="small" color="info" />} label="Excused" />
                  </RadioGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
}

export default MarkAttendance;
