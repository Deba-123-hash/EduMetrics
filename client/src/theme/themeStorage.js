/**
 * Theme persistence storage utilities
 */
import { DEFAULT_THEME_ID, THEME_IDS } from './themeTokens.js';

const THEME_STORAGE_KEY = 'eduinsight_theme_id';
const MODE_STORAGE_KEY = 'eduinsight_theme_mode';

export function getStoredThemeId() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && Object.values(THEME_IDS).includes(stored)) {
      return stored;
    }
  } catch (e) {
    console.warn('Unable to access localStorage for theme ID:', e);
  }
  return DEFAULT_THEME_ID;
}

export function setStoredThemeId(themeId) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch (e) {
    console.warn('Unable to save theme ID to localStorage:', e);
  }
}

export function getStoredThemeMode() {
  try {
    const stored = localStorage.getItem(MODE_STORAGE_KEY);
    if (['light', 'dark', 'system'].includes(stored)) {
      return stored;
    }
  } catch (e) {
    console.warn('Unable to access localStorage for theme mode:', e);
  }
  return 'dark';
}

export function setStoredThemeMode(mode) {
  try {
    localStorage.setItem(MODE_STORAGE_KEY, mode);
  } catch (e) {
    console.warn('Unable to save theme mode to localStorage:', e);
  }
}
