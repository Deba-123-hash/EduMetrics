import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Bell, Info, AlertTriangle, CheckCircle } from 'lucide-react';

const icons = {
  info: <Info size={18} color="#3b82f6" />,
  warning: <AlertTriangle size={18} color="#f59e0b" />,
  success: <CheckCircle size={18} color="#10b981" />,
  default: <Bell size={18} color="#64748b" />
};

export function Notification({ title, message, type = 'default', time, isRead = false }) {
  return (
    <Card
      sx={{
        p: 2,
        mb: 1.5,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        bgcolor: isRead ? '#ffffff' : '#f8fafc',
        borderLeft: isRead ? '1px solid #e2e8f0' : '4px solid #2563eb'
      }}
    >
      <Box sx={{ mt: 0.25 }}>{icons[type] || icons.default}</Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
        {time && (
          <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5, display: 'block' }}>
            {time}
          </Typography>
        )}
      </Box>
    </Card>
  );
}

export default Notification;
