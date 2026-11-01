import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import DataTable from '../../../components/tables/DataTable.jsx';
import Chip from '@mui/material/Chip';

export function MyResults() {
  const columns = [
    { field: 'subject_code', headerName: 'Subject Code' },
    { field: 'subject_name', headerName: 'Subject Name' },
    { field: 'exam_type', headerName: 'Exam' },
    { field: 'max_marks', headerName: 'Max Marks' },
    { field: 'marks_obtained', headerName: 'Marks' },
    {
      field: 'grade',
      headerName: 'Grade',
      renderCell: (row) => <Chip label={row.grade} size="small" color="primary" />
    },
    {
      field: 'status',
      headerName: 'Result',
      renderCell: (row) => (
        <Chip label={row.status} size="small" color={row.status === 'PASS' ? 'success' : 'error'} />
      )
    }
  ];

  const demoResults = [
    { id: '1', subject_code: 'CS301', subject_name: 'Cloud Computing Architecture', exam_type: 'Mid-Term Exam', max_marks: 100, marks_obtained: 88, grade: 'A', status: 'PASS' },
    { id: '2', subject_code: 'CS302', subject_name: 'Machine Learning Foundations', exam_type: 'Mid-Term Exam', max_marks: 100, marks_obtained: 82, grade: 'A', status: 'PASS' },
    { id: '3', subject_code: 'CS303', subject_name: 'Software Quality Engineering', exam_type: 'Mid-Term Exam', max_marks: 100, marks_obtained: 85, grade: 'A', status: 'PASS' }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Official Examination Results"
        subtitle="Published academic marksheets, subject grades, and credit completion records"
      />
      <DataTable columns={columns} rows={demoResults} />
    </MainLayout>
  );
}

export default MyResults;
