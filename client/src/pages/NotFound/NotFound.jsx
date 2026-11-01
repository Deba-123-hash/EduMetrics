import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '../../components/common/Button.jsx';
import { Home as HomeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
      <Typography variant="h1" fontWeight={800} color="primary.main" sx={{ fontSize: '6rem', mb: 1 }}>
        404
      </Typography>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        The academic resource or route you requested does not exist or has been relocated.
      </Typography>
      <Button
        variant="contained"
        startIcon={<HomeIcon size={18} />}
        onClick={() => navigate('/')}
      >
        Return to Home
      </Button>
    </Container>
  );
}

export default NotFound;
