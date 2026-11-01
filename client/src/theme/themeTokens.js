/**
 * EduInsight AI - Enterprise SaaS Theme Design Tokens
 * 6 Professional Themes:
 *  1. Premium Light
 *  2. Midnight Dark
 *  3. Ocean Blue
 *  4. Emerald Intelligence
 *  5. Violet AI
 *  6. Graphite Minimal
 */

export const THEME_IDS = {
  PREMIUM_LIGHT: 'premium-light',
  MIDNIGHT_DARK: 'midnight-dark',
  OCEAN_BLUE: 'ocean-blue',
  EMERALD_INTELLIGENCE: 'emerald-intelligence',
  VIOLET_AI: 'violet-ai',
  GRAPHITE_MINIMAL: 'graphite-minimal'
};

export const themeTokens = {
  [THEME_IDS.PREMIUM_LIGHT]: {
    id: THEME_IDS.PREMIUM_LIGHT,
    name: 'Premium Light',
    mode: 'light',
    description: 'Clean, professional enterprise light theme with crisp sapphire accents and subtle soft shadows.',
    previewColor: '#2563eb',
    previewSecondary: '#f8fafc',
    colors: {
      primary: {
        main: '#2563eb',
        light: '#60a5fa',
        dark: '#1d4ed8',
        contrastText: '#ffffff',
        glow: 'rgba(37, 99, 235, 0.25)'
      },
      secondary: {
        main: '#4f46e5',
        light: '#818cf8',
        dark: '#3730a3',
        contrastText: '#ffffff'
      },
      accent: {
        main: '#06b6d4',
        light: '#67e8f9',
        glow: 'rgba(6, 182, 212, 0.2)'
      },
      background: {
        default: '#f8fafc',
        paper: '#ffffff',
        subtle: '#f1f5f9',
        elevated: '#ffffff',
        glass: 'rgba(255, 255, 255, 0.82)',
        glassBorder: 'rgba(226, 232, 240, 0.8)'
      },
      text: {
        primary: '#0f172a',
        secondary: '#475569',
        muted: '#94a3b8',
        inverse: '#ffffff'
      },
      border: {
        subtle: '#f1f5f9',
        default: '#e2e8f0',
        highlight: '#cbd5e1'
      },
      status: {
        success: '#10b981',
        successBg: '#ecfdf5',
        warning: '#f59e0b',
        warningBg: '#fffbeb',
        error: '#ef4444',
        errorBg: '#fef2f2',
        info: '#3b82f6',
        infoBg: '#eff6ff'
      },
      chartColors: ['#2563eb', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']
    },
    shadows: {
      card: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
      elevated: '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
      glow: '0 0 20px rgba(37, 99, 235, 0.18)'
    }
  },

  [THEME_IDS.MIDNIGHT_DARK]: {
    id: THEME_IDS.MIDNIGHT_DARK,
    name: 'Midnight Dark',
    mode: 'dark',
    description: 'Deep navy charcoal background with glowing electric blue highlights and subtle glass depth.',
    previewColor: '#38bdf8',
    previewSecondary: '#090d16',
    colors: {
      primary: {
        main: '#38bdf8',
        light: '#7dd3fc',
        dark: '#0284c7',
        contrastText: '#090d16',
        glow: 'rgba(56, 189, 248, 0.35)'
      },
      secondary: {
        main: '#818cf8',
        light: '#a5b4fc',
        dark: '#4f46e5',
        contrastText: '#ffffff'
      },
      accent: {
        main: '#3b82f6',
        light: '#60a5fa',
        glow: 'rgba(59, 130, 246, 0.3)'
      },
      background: {
        default: '#090d16',
        paper: '#0f172a',
        subtle: '#131d33',
        elevated: '#1e293b',
        glass: 'rgba(15, 23, 42, 0.78)',
        glassBorder: 'rgba(51, 65, 85, 0.55)'
      },
      text: {
        primary: '#f8fafc',
        secondary: '#94a3b8',
        muted: '#64748b',
        inverse: '#090d16'
      },
      border: {
        subtle: '#1e293b',
        default: '#334155',
        highlight: '#475569'
      },
      status: {
        success: '#34d399',
        successBg: 'rgba(16, 185, 129, 0.15)',
        warning: '#fbbf24',
        warningBg: 'rgba(245, 158, 11, 0.15)',
        error: '#f87171',
        errorBg: 'rgba(239, 68, 68, 0.15)',
        info: '#60a5fa',
        infoBg: 'rgba(59, 130, 246, 0.15)'
      },
      chartColors: ['#38bdf8', '#818cf8', '#34d399', '#fbbf24', '#f472b6', '#a78bfa']
    },
    shadows: {
      card: '0 4px 6px -1px rgba(0, 0, 0, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.25)',
      elevated: '0 20px 30px -10px rgba(0, 0, 0, 0.6), 0 10px 15px -5px rgba(0, 0, 0, 0.4)',
      glow: '0 0 25px rgba(56, 189, 248, 0.25)'
    }
  },

  [THEME_IDS.OCEAN_BLUE]: {
    id: THEME_IDS.OCEAN_BLUE,
    name: 'Ocean Blue',
    mode: 'dark',
    description: 'Immersive deep maritime oceanic palette with vibrant cyan and turquoise neon accents.',
    previewColor: '#00fff0',
    previewSecondary: '#0b192c',
    colors: {
      primary: {
        main: '#06b6d4',
        light: '#22d3ee',
        dark: '#0891b2',
        contrastText: '#041527',
        glow: 'rgba(6, 182, 212, 0.35)'
      },
      secondary: {
        main: '#0284c7',
        light: '#38bdf8',
        dark: '#0369a1',
        contrastText: '#ffffff'
      },
      accent: {
        main: '#00fff0',
        light: '#67fffa',
        glow: 'rgba(0, 255, 240, 0.3)'
      },
      background: {
        default: '#071324',
        paper: '#0c1e38',
        subtle: '#102646',
        elevated: '#17335d',
        glass: 'rgba(12, 30, 56, 0.8)',
        glassBorder: 'rgba(21, 62, 110, 0.6)'
      },
      text: {
        primary: '#f0f9ff',
        secondary: '#93c5fd',
        muted: '#60a5fa',
        inverse: '#071324'
      },
      border: {
        subtle: '#132d52',
        default: '#1e447a',
        highlight: '#2a5ea6'
      },
      status: {
        success: '#10b981',
        successBg: 'rgba(16, 185, 129, 0.16)',
        warning: '#f59e0b',
        warningBg: 'rgba(245, 158, 11, 0.16)',
        error: '#f43f5e',
        errorBg: 'rgba(244, 63, 94, 0.16)',
        info: '#06b6d4',
        infoBg: 'rgba(6, 182, 212, 0.16)'
      },
      chartColors: ['#00fff0', '#38bdf8', '#34d399', '#f59e0b', '#c084fc', '#f43f5e']
    },
    shadows: {
      card: '0 4px 10px rgba(4, 21, 39, 0.4)',
      elevated: '0 20px 35px -5px rgba(2, 12, 24, 0.7)',
      glow: '0 0 25px rgba(0, 255, 240, 0.25)'
    }
  },

  [THEME_IDS.EMERALD_INTELLIGENCE]: {
    id: THEME_IDS.EMERALD_INTELLIGENCE,
    name: 'Emerald Intelligence',
    mode: 'dark',
    description: 'Distinctive dark jade and emerald green aesthetic evoking high-growth intelligence.',
    previewColor: '#10b981',
    previewSecondary: '#061a14',
    colors: {
      primary: {
        main: '#10b981',
        light: '#34d399',
        dark: '#059669',
        contrastText: '#041c15',
        glow: 'rgba(16, 185, 129, 0.35)'
      },
      secondary: {
        main: '#14b8a6',
        light: '#2dd4bf',
        dark: '#0d9488',
        contrastText: '#ffffff'
      },
      accent: {
        main: '#6ee7b7',
        light: '#a7f3d0',
        glow: 'rgba(110, 231, 183, 0.28)'
      },
      background: {
        default: '#041611',
        paper: '#0a231b',
        subtle: '#0f2f25',
        elevated: '#174033',
        glass: 'rgba(10, 35, 27, 0.82)',
        glassBorder: 'rgba(26, 75, 59, 0.6)'
      },
      text: {
        primary: '#ecfdf5',
        secondary: '#a7f3d0',
        muted: '#6ee7b7',
        inverse: '#041611'
      },
      border: {
        subtle: '#12382c',
        default: '#1a4e3e',
        highlight: '#256d56'
      },
      status: {
        success: '#34d399',
        successBg: 'rgba(52, 211, 153, 0.16)',
        warning: '#facc15',
        warningBg: 'rgba(250, 204, 21, 0.16)',
        error: '#f87171',
        errorBg: 'rgba(248, 113, 113, 0.16)',
        info: '#38bdf8',
        infoBg: 'rgba(56, 189, 248, 0.16)'
      },
      chartColors: ['#10b981', '#2dd4bf', '#38bdf8', '#facc15', '#f87171', '#a78bfa']
    },
    shadows: {
      card: '0 4px 8px rgba(0, 0, 0, 0.4)',
      elevated: '0 20px 30px rgba(3, 20, 15, 0.6)',
      glow: '0 0 25px rgba(16, 185, 129, 0.25)'
    }
  },

  [THEME_IDS.VIOLET_AI]: {
    id: THEME_IDS.VIOLET_AI,
    name: 'Violet AI',
    mode: 'dark',
    description: 'Futuristic AI neural aesthetic with deep royal violet, soft lavender and glowing magenta.',
    previewColor: '#a855f7',
    previewSecondary: '#0c0a1d',
    colors: {
      primary: {
        main: '#a855f7',
        light: '#c084fc',
        dark: '#7e22ce',
        contrastText: '#ffffff',
        glow: 'rgba(168, 85, 247, 0.35)'
      },
      secondary: {
        main: '#ec4899',
        light: '#f472b6',
        dark: '#be185d',
        contrastText: '#ffffff'
      },
      accent: {
        main: '#e879f9',
        light: '#f0abfc',
        glow: 'rgba(232, 121, 249, 0.3)'
      },
      background: {
        default: '#0a0818',
        paper: '#13102c',
        subtle: '#1c1742',
        elevated: '#28215c',
        glass: 'rgba(19, 16, 44, 0.82)',
        glassBorder: 'rgba(67, 56, 125, 0.55)'
      },
      text: {
        primary: '#faf5ff',
        secondary: '#d8b4fe',
        muted: '#a855f7',
        inverse: '#0a0818'
      },
      border: {
        subtle: '#211a4c',
        default: '#372d73',
        highlight: '#4e3f9c'
      },
      status: {
        success: '#10b981',
        successBg: 'rgba(16, 185, 129, 0.16)',
        warning: '#f59e0b',
        warningBg: 'rgba(245, 158, 11, 0.16)',
        error: '#f43f5e',
        errorBg: 'rgba(244, 63, 94, 0.16)',
        info: '#a855f7',
        infoBg: 'rgba(168, 85, 247, 0.16)'
      },
      chartColors: ['#a855f7', '#ec4899', '#38bdf8', '#34d399', '#fbbf24', '#e879f9']
    },
    shadows: {
      card: '0 4px 10px rgba(0, 0, 0, 0.45)',
      elevated: '0 20px 35px rgba(8, 6, 20, 0.7)',
      glow: '0 0 25px rgba(168, 85, 247, 0.3)'
    }
  },

  [THEME_IDS.GRAPHITE_MINIMAL]: {
    id: THEME_IDS.GRAPHITE_MINIMAL,
    name: 'Graphite Minimal',
    mode: 'dark',
    description: 'Monochrome enterprise minimalist aesthetic with rich carbon surfaces and crisp silver highlights.',
    previewColor: '#e2e8f0',
    previewSecondary: '#0c0e12',
    colors: {
      primary: {
        main: '#e2e8f0',
        light: '#f8fafc',
        dark: '#94a3b8',
        contrastText: '#0f172a',
        glow: 'rgba(226, 232, 240, 0.25)'
      },
      secondary: {
        main: '#94a3b8',
        light: '#cbd5e1',
        dark: '#64748b',
        contrastText: '#0f172a'
      },
      accent: {
        main: '#ffffff',
        light: '#f1f5f9',
        glow: 'rgba(255, 255, 255, 0.2)'
      },
      background: {
        default: '#0a0c10',
        paper: '#12151c',
        subtle: '#181d26',
        elevated: '#222834',
        glass: 'rgba(18, 21, 28, 0.85)',
        glassBorder: 'rgba(51, 60, 77, 0.5)'
      },
      text: {
        primary: '#f8fafc',
        secondary: '#94a3b8',
        muted: '#64748b',
        inverse: '#0a0c10'
      },
      border: {
        subtle: '#1c222d',
        default: '#2d3748',
        highlight: '#4a5568'
      },
      status: {
        success: '#34d399',
        successBg: 'rgba(52, 211, 153, 0.12)',
        warning: '#fbbf24',
        warningBg: 'rgba(251, 191, 36, 0.12)',
        error: '#f87171',
        errorBg: 'rgba(248, 113, 113, 0.12)',
        info: '#94a3b8',
        infoBg: 'rgba(148, 163, 184, 0.12)'
      },
      chartColors: ['#e2e8f0', '#94a3b8', '#34d399', '#fbbf24', '#f87171', '#38bdf8']
    },
    shadows: {
      card: '0 4px 6px rgba(0, 0, 0, 0.35)',
      elevated: '0 20px 30px rgba(0, 0, 0, 0.65)',
      glow: '0 0 20px rgba(226, 232, 240, 0.15)'
    }
  }
};

export const DEFAULT_THEME_ID = THEME_IDS.MIDNIGHT_DARK;

export function getThemeToken(themeId) {
  return themeTokens[themeId] || themeTokens[DEFAULT_THEME_ID];
}

