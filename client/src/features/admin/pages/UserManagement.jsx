import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import DataTable from '../../../components/tables/DataTable.jsx';
import TableFilters from '../../../components/tables/TableFilters.jsx';
import TableActions from '../../../components/tables/TableActions.jsx';
import Button from '../../../components/common/Button.jsx';
import Chip from '@mui/material/Chip';
import { UserPlus } from 'lucide-react';

export function UserManagement() {
  const [search, setSearch] = useState('');

  const columns = [
    { field: 'full_name', headerName: 'Full Name' },
    { field: 'email', headerName: 'Email' },
    {
      field: 'role',
      headerName: 'Role',
      renderCell: (row) => (
        <Chip
          label={row.role.toUpperCase()}
          size="small"
          color={row.role === 'admin' ? 'primary' : row.role === 'faculty' ? 'secondary' : 'default'}
        />
      )
    },
    {
      field: 'is_active',
      headerName: 'Status',
      renderCell: (row) => (
        <Chip
          label={row.is_active ? 'Active' : 'Inactive'}
          size="small"
          color={row.is_active ? 'success' : 'default'}
        />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: () => <TableActions onEdit={() => {}} onView={() => {}} />
    }
  ];

  const demoUsers = [
    { id: '1', full_name: 'Dr. Ramesh Kumar', email: 'ramesh.admin@eduinsight.ai', role: 'admin', is_active: true },
    { id: '2', full_name: 'Prof. Ananya Gupta', email: 'ananya.faculty@eduinsight.ai', role: 'faculty', is_active: true },
    { id: '3', full_name: 'Rahul Verma', email: 'rahul.student@eduinsight.ai', role: 'student', is_active: true }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="User & Access Management"
        subtitle="Manage user credentials, assign institutional roles, and configure system permissions"
        actions={<Button startIcon={<UserPlus size={16} />}>Create User</Button>}
      />
      <TableFilters search={search} onSearchChange={setSearch} />
      <DataTable columns={columns} rows={demoUsers} />
    </MainLayout>
  );
}

export default UserManagement;
