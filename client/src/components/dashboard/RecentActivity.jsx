import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Clock } from 'lucide-react';
import { GlassCard } from '../common/GlassCard.jsx';

export function RecentActivity({ activities = [] }) {
  return (
    <GlassCard hover={false} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 0.5 }}>
        Recent Institutional Activity
      </Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary', mb: 2 }}>
        Chronological audit stream of examinations, enrollments & predictions
      </Typography>

      {activities.length === 0 ? (
        <Typography variant="body2" sx={{ color: 'text.secondary', py: 3, textAlign: 'center' }}>
          No recent activity logged.
        </Typography>
      ) : (
        <List dense disablePadding sx={{ mt: 0.5 }}>
          {activities.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
              sx={{
                py: 1.1,
                px: 1,
                borderRadius: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:hover': { bgcolor: 'action.hover' }
              }}
            >
              <Box sx={{ mr: 1.5, color: 'primary.main', display: 'flex' }}>
                <Clock size={16} />
              </Box>
              <ListItemText
                primary={item.title}
                secondary={item.time}
                primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: 600 }}
                secondaryTypographyProps={{ fontSize: '0.72rem', color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </GlassCard>
  );
}

export default RecentActivity;
