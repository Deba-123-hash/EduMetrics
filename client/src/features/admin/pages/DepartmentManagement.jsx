import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import DataTable from '../../../components/tables/DataTable.jsx';
import TableFilters from '../../../components/tables/TableFilters.jsx';
import TableActions from '../../../components/tables/TableActions.jsx';
import Button from '../../../components/common/Button.jsx';
import { Plus } from 'lucide-react';

export function DepartmentManagement() {
  const [search, setSearch] = useState('');

  const columns = [
    { field: 'department_code', headerName: 'Code' },
    { field: 'department_name', headerName: 'Department Name' },
    { field: 'description', headerName: 'Description' },
    { field: 'actions', headerName: 'Actions', renderCell: () => <TableActions onEdit={() => {}} onView={() => {}} /> }
  ];

  const demoDepartments = [
    { id: '1', department_code: 'MCA', department_name: 'Master of Computer Applications', description: 'Advanced computer applications and software engineering' },
    { id: '2', department_code: 'CSE', department_name: 'Computer Science and Engineering', description: 'Undergraduate computer science curriculum' },
    { id: '3', department_code: 'IT', department_name: 'Information Technology', description: 'Information systems and cloud infrastructure' }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Department Management"
        subtitle="Manage academic departments, faculties, and departmental course structures"
        actions={<Button startIcon={<Plus size={16} />}>Add Department</Button>}
      />
      <TableFilters search={search} onSearchChange={setSearch} />
      <DataTable columns={columns} rows={demoDepartments} />
    </MainLayout>
  );
}

export default DepartmentManagement;
