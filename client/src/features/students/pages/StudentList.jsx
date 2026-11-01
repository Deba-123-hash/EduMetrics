import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import DataTable from '../../../components/tables/DataTable.jsx';
import TableFilters from '../../../components/tables/TableFilters.jsx';
import TableActions from '../../../components/tables/TableActions.jsx';
import Button from '../../../components/common/Button.jsx';
import Chip from '@mui/material/Chip';
import { UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function StudentList() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const columns = [
    { field: 'student_id', headerName: 'Student ID' },
    { field: 'full_name', headerName: 'Student Name' },
    { field: 'department', headerName: 'Department' },
    { field: 'class_name', headerName: 'Class' },
    { field: 'email', headerName: 'Email' },
    {
      field: 'is_active',
      headerName: 'Status',
      renderCell: (row) => (
        <Chip label={row.is_active ? 'Active' : 'Inactive'} size="small" color={row.is_active ? 'success' : 'default'} />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (row) => (
        <TableActions
          onView={() => navigate(`/admin/students/${row.id}`)}
          onEdit={() => navigate(`/admin/students/${row.id}/edit`)}
        />
      )
    }
  ];

  const demoStudents = [
    { id: '1', student_id: 'MCA2024-001', full_name: 'Rahul Verma', department: 'MCA', class_name: 'MCA 2nd Year - Sec A', email: 'rahul.verma@eduinsight.ai', is_active: true },
    { id: '2', student_id: 'MCA2024-002', full_name: 'Pooja Iyer', department: 'MCA', class_name: 'MCA 2nd Year - Sec A', email: 'pooja.iyer@eduinsight.ai', is_active: true },
    { id: '3', student_id: 'MCA2024-003', full_name: 'Aman Patel', department: 'MCA', class_name: 'MCA 2nd Year - Sec A', email: 'aman.patel@eduinsight.ai', is_active: true }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Student Directory"
        subtitle="Comprehensive database of registered students, departmental enrollments, and academic statuses"
        actions={
          <Button startIcon={<UserPlus size={16} />} onClick={() => navigate('/admin/students/add')}>
            Enroll New Student
          </Button>
        }
      />
      <TableFilters search={search} onSearchChange={setSearch} />
      <DataTable columns={columns} rows={demoStudents} />
    </MainLayout>
  );
}

export default StudentList;
