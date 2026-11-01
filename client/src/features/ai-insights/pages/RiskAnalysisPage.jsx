import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import DataTable from '../../../components/tables/DataTable.jsx';
import TableFilters from '../../../components/tables/TableFilters.jsx';
import RiskBadge from '../../../components/ai/RiskBadge.jsx';
import Chip from '@mui/material/Chip';

export function RiskAnalysisPage() {
  const [search, setSearch] = useState('');

  const columns = [
    { field: 'student_id', headerName: 'Student ID' },
    { field: 'full_name', headerName: 'Student Name' },
    { field: 'department', headerName: 'Department' },
    {
      field: 'risk_level',
      headerName: 'Risk Level',
      renderCell: (row) => <RiskBadge level={row.risk_level} score={row.risk_score} />
    },
    { field: 'trigger_reason', headerName: 'Primary Risk Factor' },
    {
      field: 'status',
      headerName: 'Intervention',
      renderCell: (row) => (
        <Chip
          label={row.status}
          size="small"
          color={row.status === 'UNDER_REVIEW' ? 'warning' : 'default'}
        />
      )
    }
  ];

  const demoRiskStudents = [
    { id: '1', student_id: 'MCA2024-002', full_name: 'Pooja Iyer', department: 'MCA', risk_level: 'high', risk_score: 82, trigger_reason: 'Attendance (68%) & Assessment Failure (42%)', status: 'UNDER_REVIEW' },
    { id: '2', student_id: 'MCA2024-003', full_name: 'Aman Patel', department: 'MCA', risk_level: 'medium', risk_score: 55, trigger_reason: 'Declining score in SQE (-12%)', status: 'NOTIFIED' }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="At-Risk Student Identification"
        subtitle="Transparent, rule-based screening identifying students requiring immediate faculty counseling"
      />
      <TableFilters search={search} onSearchChange={setSearch} />
      <DataTable columns={columns} rows={demoRiskStudents} />
    </MainLayout>
  );
}

export default RiskAnalysisPage;
