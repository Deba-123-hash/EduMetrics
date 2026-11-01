import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';
import MobileNavigation from './MobileNavigation.jsx';

export function MainLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3 },
            pb: { xs: 8, sm: 4 },
            maxWidth: '1600px',
            width: '100%',
            mx: 'auto'
          }}
        >
          <Breadcrumbs />
          {children}
        </Box>
      </Box>
      <Footer />
      <MobileNavigation />
    </Box>
  );
}

export default MainLayout;
