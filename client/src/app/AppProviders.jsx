import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { muiTheme } from '../styles/muiTheme.js';
import { AuthProvider } from '../context/AuthContext.jsx';
import { CustomThemeProvider } from '../context/ThemeContext.jsx';
import { NotificationProvider } from '../context/NotificationContext.jsx';
import { DashboardProvider } from '../context/DashboardContext.jsx';

export function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <CustomThemeProvider>
          <AuthProvider>
            <NotificationProvider>
              <DashboardProvider>{children}</DashboardProvider>
            </NotificationProvider>
          </AuthProvider>
        </CustomThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default AppProviders;
