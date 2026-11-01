import React from 'react';
import AppProviders from './AppProviders.jsx';
import AppRoutes from './AppRoutes.jsx';
import '../assets/styles/global.css';

export function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

export default App;
