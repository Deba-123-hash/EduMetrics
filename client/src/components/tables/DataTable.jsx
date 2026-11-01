import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '../common/Skeleton.jsx';
import EmptyState from '../common/EmptyState.jsx';

export function DataTable({
  columns = [],
  rows = [],
  loading = false,
  emptyMessage = 'No records available'
}) {
  if (loading) {
    return <Skeleton count={5} height={48} />;
  }

  if (!rows || rows.length === 0) {
    return <EmptyState description={emptyMessage} />;
  }

  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: 2 }}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead sx={{ bgcolor: '#f8fafc' }}>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.field}
                align={col.align || 'left'}
                sx={{ fontWeight: 600, color: 'text.secondary', py: 1.5 }}
              >
                {col.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id || index} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {columns.map((col) => (
                <TableCell key={col.field} align={col.align || 'left'} sx={{ py: 1.25 }}>
                  {col.renderCell ? col.renderCell(row) : row[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
