import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext(null);

export function DashboardProvider({ children }) {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState('2025-2026');
  const [selectedDepartment, setSelectedDepartment] = useState('ALL');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <DashboardContext.Provider
      value={{
        selectedAcademicYear,
        setSelectedAcademicYear,
        selectedDepartment,
        setSelectedDepartment,
        sidebarOpen,
        toggleSidebar
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardContext() {
  return useContext(DashboardContext);
}

export default DashboardContext;
