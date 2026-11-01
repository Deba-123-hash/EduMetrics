import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import DataTable from '../../../components/tables/DataTable.jsx';
import TableFilters from '../../../components/tables/TableFilters.jsx';
import TableActions from '../../../components/tables/TableActions.jsx';
import RiskBadge from '../../../components/ai/RiskBadge.jsx';

export function MyStudents() {
  const [search, setSearch] = useState('');

  const columns = [
    { field: 'student_id', headerName: 'Student ID' },
    { field: 'full_name', headerName: 'Student Name' },
    { field: 'class_name', headerName: 'Class' },
    { field: 'attendance_pct', headerName: 'Attendance', renderCell: (row) => `${row.attendance_pct}%` },
    { field: 'avg_score', headerName: 'Avg Score', renderCell: (row) => `${row.avg_score}%` },
    { field: 'risk_level', headerName: 'Risk Level', renderCell: (row) => <RiskBadge level={row.risk_level} /> },
    { field: 'actions', headerName: 'Actions', renderCell: () => <TableActions onView={() => {}} /> }
  ];

  const demoStudents = [
    { id: '1', student_id: 'MCA2024-001', full_name: 'Rahul Verma', class_name: 'MCA 2nd Year - Sec A', attendance_pct: 92, avg_score: 84.5, risk_level: 'low' },
    { id: '2', student_id: 'MCA2024-002', full_name: 'Pooja Iyer', class_name: 'MCA 2nd Year - Sec A', attendance_pct: 68, avg_score: 54.0, risk_level: 'high' },
    { id: '3', student_id: 'MCA2024-003', full_name: 'Aman Patel', class_name: 'MCA 2nd Year - Sec A', attendance_pct: 82, avg_score: 72.0, risk_level: 'medium' }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="My Students"
        subtitle="Roster of students enrolled in your assigned subjects with attendance and performance indicators"
      />
      <TableFilters search={search} onSearchChange={setSearch} />
      <DataTable columns={columns} rows={demoStudents} />
    </MainLayout>
  );
}

export default MyStudents;
