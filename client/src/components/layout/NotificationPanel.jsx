import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { X, Check } from 'lucide-react';
import { useNotifications } from '../../hooks/useNotifications.js';

export function NotificationPanel({ onClose }) {
  const { notifications, removeNotification } = useNotifications();

  return (
    <Box
      sx={{
        width: 320,
        p: 2,
        bgcolor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: 2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          Notifications
        </Typography>
        {onClose && (
          <IconButton size="small" onClick={onClose}>
            <X size={16} />
          </IconButton>
        )}
      </Box>

      {notifications.length === 0 ? (
        <Typography variant="body2" color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
          No new notifications.
        </Typography>
      ) : (
        <List dense>
          {notifications.map((n) => (
            <ListItem
              key={n.id}
              secondaryAction={
                <IconButton edge="end" size="small" onClick={() => removeNotification(n.id)}>
                  <Check size={14} />
                </IconButton>
              }
            >
              <ListItemText primary={n.message} secondary={n.type} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default NotificationPanel;
