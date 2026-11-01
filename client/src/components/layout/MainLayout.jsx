import React from 'react';
import Box from '@mui/material/Box';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import { pageTransitionVariants } from '../../animations/motionVariants.js';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

export function MainLayout({ children }) {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'background-color 0.25s ease'
      }}
    >
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3, md: 4 },
            pb: { xs: 9, sm: 5 },
            maxWidth: '1600px',
            width: '100%',
            mx: 'auto',
            overflowX: 'hidden'
          }}
        >
          <Breadcrumbs />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={prefersReducedMotion ? { opacity: 0 } : pageTransitionVariants.initial}
              animate={prefersReducedMotion ? { opacity: 1 } : pageTransitionVariants.animate}
              exit={prefersReducedMotion ? { opacity: 0 } : pageTransitionVariants.exit}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
      <Footer />
      <MobileNavigation />
    </Box>
  );
}

export default MainLayout;
