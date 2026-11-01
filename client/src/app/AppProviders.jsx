import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeProvider } from '../theme/themeContext.jsx';
import { AuthProvider } from '../context/AuthContext.jsx';
import { NotificationProvider } from '../context/NotificationContext.jsx';
import { DashboardProvider } from '../context/DashboardContext.jsx';

export function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <DashboardProvider>{children}</DashboardProvider>
          </NotificationProvider>
        </AuthProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default AppProviders;
