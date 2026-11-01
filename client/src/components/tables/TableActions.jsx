import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Eye, Edit2, Trash2 } from 'lucide-react';

export function TableActions({ onView, onEdit, onDelete }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      {onView && (
        <Tooltip title="View Details">
          <IconButton size="small" onClick={onView} color="primary">
            <Eye size={16} />
          </IconButton>
        </Tooltip>
      )}
      {onEdit && (
        <Tooltip title="Edit Record">
          <IconButton size="small" onClick={onEdit} color="inherit">
            <Edit2 size={16} />
          </IconButton>
        </Tooltip>
      )}
      {onDelete && (
        <Tooltip title="Delete">
          <IconButton size="small" onClick={onDelete} color="error">
            <Trash2 size={16} />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}

export default TableActions;
