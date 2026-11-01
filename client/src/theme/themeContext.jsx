import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeTokens, THEME_IDS, DEFAULT_THEME_ID, getThemeToken } from './themeTokens.js';
import { getStoredThemeId, setStoredThemeId, getStoredThemeMode, setStoredThemeMode } from './themeStorage.js';
import { buildMuiTheme, applyCssThemeVariables } from './themeConfig.js';

export const ThemeContext = createContext(null);

export function CustomThemeProvider({ children }) {
  const [themeId, setThemeIdState] = useState(() => getStoredThemeId());
  const [themeMode, setThemeModeState] = useState(() => getStoredThemeMode());

  // Determine effective theme tokens based on themeId and system/manual mode
  const activeTokens = useMemo(() => {
    let activeId = themeId;
    if (themeMode === 'light' && themeTokens[activeId].mode === 'dark') {
      activeId = THEME_IDS.PREMIUM_LIGHT;
    } else if (themeMode === 'dark' && themeTokens[activeId].mode === 'light') {
      activeId = THEME_IDS.MIDNIGHT_DARK;
    }
    return getThemeToken(activeId);
  }, [themeId, themeMode]);

  // Apply CSS custom properties whenever tokens change
  useEffect(() => {
    applyCssThemeVariables(activeTokens);
  }, [activeTokens]);

  // Handle system preference changes when mode is 'system'
  useEffect(() => {
    if (themeMode !== 'system') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setThemeIdState(e.matches ? THEME_IDS.MIDNIGHT_DARK : THEME_IDS.PREMIUM_LIGHT);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const setTheme = (newThemeId) => {
    if (themeTokens[newThemeId]) {
      setThemeIdState(newThemeId);
      setStoredThemeId(newThemeId);
      // Synchronize mode with the selected theme's inherent mode
      const targetMode = themeTokens[newThemeId].mode;
      setThemeModeState(targetMode);
      setStoredThemeMode(targetMode);
    }
  };

  const setThemeMode = (mode) => {
    if (['light', 'dark', 'system'].includes(mode)) {
      setThemeModeState(mode);
      setStoredThemeMode(mode);
      if (mode === 'light') {
        setThemeIdState(THEME_IDS.PREMIUM_LIGHT);
        setStoredThemeId(THEME_IDS.PREMIUM_LIGHT);
      } else if (mode === 'dark') {
        setThemeIdState(THEME_IDS.MIDNIGHT_DARK);
        setStoredThemeId(THEME_IDS.MIDNIGHT_DARK);
      }
    }
  };

  const toggleMode = () => {
    if (activeTokens.mode === 'light') {
      setTheme(THEME_IDS.MIDNIGHT_DARK);
    } else {
      setTheme(THEME_IDS.PREMIUM_LIGHT);
    }
  };

  const muiTheme = useMemo(() => {
    return buildMuiTheme(activeTokens);
  }, [activeTokens]);

  const themeList = useMemo(() => {
    return Object.values(themeTokens).map((t) => ({
      id: t.id,
      name: t.name,
      mode: t.mode,
      description: t.description,
      previewColor: t.previewColor,
      previewSecondary: t.previewSecondary
    }));
  }, []);

  const contextValue = {
    currentTheme: activeTokens.id,
    themeMode,
    mode: activeTokens.mode,
    activeThemeTokens: activeTokens,
    tokens: activeTokens,
    setTheme,
    setThemeMode,
    toggleMode,
    toggleTheme: toggleMode,
    themeList
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within CustomThemeProvider');
  }
  return context;
}

export default ThemeContext;
