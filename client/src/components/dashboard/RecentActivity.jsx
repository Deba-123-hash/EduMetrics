import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Clock } from 'lucide-react';

export function RecentActivity({ activities = [] }) {
  return (
    <Card sx={{ p: 2.5, height: '100%' }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Recent Activity
      </Typography>

      {activities.length === 0 ? (
        <Typography variant="body2" color="text.secondary" sx={{ py: 3, textAlign: 'center' }}>
          No recent activity logged.
        </Typography>
      ) : (
        <List dense disablePadding>
          {activities.map((item, index) => (
            <ListItem key={index} disableGutters sx={{ py: 1, borderBottom: '1px solid #f1f5f9' }}>
              <Box sx={{ mr: 1.5, color: 'text.disabled' }}>
                <Clock size={16} />
              </Box>
              <ListItemText
                primary={item.title}
                secondary={item.time}
                primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                secondaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Card>
  );
}

export default RecentActivity;
