import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import DataTable from '../../../components/tables/DataTable.jsx';
import TableFilters from '../../../components/tables/TableFilters.jsx';
import Chip from '@mui/material/Chip';

export function AuditLogs() {
  const [search, setSearch] = useState('');

  const columns = [
    { field: 'created_at', headerName: 'Timestamp' },
    { field: 'user_name', headerName: 'User' },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (row) => (
        <Chip label={row.action} size="small" variant="outlined" color="primary" />
      )
    },
    { field: 'entity_type', headerName: 'Entity' },
    { field: 'entity_id', headerName: 'Entity ID' },
    { field: 'details', headerName: 'Details' }
  ];

  const demoLogs = [
    { id: '1', created_at: '2026-11-01 10:30', user_name: 'Dr. Ramesh Kumar', action: 'LOGIN_SUCCESS', entity_type: 'users', entity_id: 'usr_001', details: 'IP: 192.168.1.10' },
    { id: '2', created_at: '2026-11-01 11:15', user_name: 'Prof. Ananya Gupta', action: 'MARKS_ENTRY_BULK', entity_type: 'marks', entity_id: 'exm_sub_04', details: 'Updated 45 student records for CS301' },
    { id: '3', created_at: '2026-11-01 12:00', user_name: 'System Engine', action: 'AI_INSIGHT_BATCH', entity_type: 'ai_insights', entity_id: 'batch_20261101', details: 'Processed 226 student risk profiles' }
  ];

  return (
    <MainLayout>
      <PageHeader
        title="Audit Logs & Compliance Trail"
        subtitle="Immutable security trail tracking user activities, academic modifications, and system events"
      />
      <TableFilters search={search} onSearchChange={setSearch} />
      <DataTable columns={columns} rows={demoLogs} />
    </MainLayout>
  );
}

export default AuditLogs;
