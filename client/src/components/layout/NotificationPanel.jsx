import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { X, Check, BellRing } from 'lucide-react';
import { useNotifications } from '../../hooks/useNotifications.js';
import { GlassCard } from '../common/GlassCard.jsx';

export function NotificationPanel({ onClose }) {
  const { notifications, removeNotification } = useNotifications();

  return (
    <GlassCard
      hover={false}
      sx={{
        width: { xs: 290, sm: 340 },
        p: 2,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, pb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <BellRing size={16} color="var(--color-primary)" />
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            Notifications
          </Typography>
        </Box>
        {onClose && (
          <IconButton size="small" onClick={onClose} sx={{ color: 'text.secondary' }}>
            <X size={15} />
          </IconButton>
        )}
      </Box>

      {notifications.length === 0 ? (
        <Box sx={{ py: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            All caught up! No unread notifications.
          </Typography>
        </Box>
      ) : (
        <List dense sx={{ maxHeight: 320, overflow: 'auto', p: 0 }}>
          {notifications.map((n) => (
            <ListItem
              key={n.id}
              sx={{
                mb: 1,
                p: 1.2,
                borderRadius: 2,
                bgcolor: 'action.hover',
                border: '1px solid',
                borderColor: 'divider'
              }}
              secondaryAction={
                <IconButton edge="end" size="small" onClick={() => removeNotification(n.id)}>
                  <Check size={14} color="var(--color-success)" />
                </IconButton>
              }
            >
              <ListItemText
                primary={n.title || n.message}
                secondary={n.timestamp ? new Date(n.timestamp).toLocaleTimeString() : 'Just now'}
                primaryTypographyProps={{ fontSize: '0.825rem', fontWeight: 600 }}
                secondaryTypographyProps={{ fontSize: '0.7rem' }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </GlassCard>
  );
}

export default NotificationPanel;
