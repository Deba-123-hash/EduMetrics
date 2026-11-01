import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Button from '../../../components/common/Button.jsx';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { Save } from 'lucide-react';
import { calculateGrade } from '../../../utils/gradeCalculator.js';

export function EnterMarks() {
  const [marks, setMarks] = useState({
    '1': 85,
    '2': 42,
    '3': 74
  });

  const students = [
    { id: '1', roll: 'MCA2024-001', name: 'Rahul Verma', maxMarks: 100 },
    { id: '2', roll: 'MCA2024-002', name: 'Pooja Iyer', maxMarks: 100 },
    { id: '3', roll: 'MCA2024-003', name: 'Aman Patel', maxMarks: 100 }
  ];

  const handleMarkChange = (id, val) => {
    const num = Math.min(100, Math.max(0, Number(val) || 0));
    setMarks((prev) => ({ ...prev, [id]: num }));
  };

  return (
    <MainLayout>
      <PageHeader
        title="Enter Examination Marks"
        subtitle="Mid-Term Examination (Maximum Marks: 100, Passing: 40) - Cloud Computing (CS301)"
        actions={
          <Button variant="contained" startIcon={<Save size={16} />}>
            Save All Marks
          </Button>
        }
      />

      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: 2 }}>
        <Table size="small">
          <TableHead sx={{ bgcolor: '#f8fafc' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Roll Number</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Student Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Max Marks</TableCell>
              <TableCell sx={{ fontWeight: 600 }} width={160}>Marks Obtained</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Calculated Grade</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((s) => {
              const obtained = marks[s.id] ?? 0;
              const grade = calculateGrade(obtained);
              const isPass = obtained >= 40;

              return (
                <TableRow key={s.id} hover>
                  <TableCell>{s.roll}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.maxMarks}</TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      type="number"
                      value={obtained}
                      onChange={(e) => handleMarkChange(s.id, e.target.value)}
                      inputProps={{ min: 0, max: 100 }}
                      sx={{ width: 100 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip label={grade} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={isPass ? 'PASS' : 'FAIL'}
                      size="small"
                      color={isPass ? 'success' : 'error'}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
}

export default EnterMarks;
