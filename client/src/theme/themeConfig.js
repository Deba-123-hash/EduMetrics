import { createTheme } from '@mui/material/styles';

/**
 * Injects CSS variables onto the root document element matching the active theme tokens.
 */
export function applyCssThemeVariables(tokens) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const c = tokens.colors;

  root.style.setProperty('--color-primary', c.primary.main);
  root.style.setProperty('--color-primary-light', c.primary.light);
  root.style.setProperty('--color-primary-dark', c.primary.dark);
  root.style.setProperty('--color-primary-glow', c.primary.glow);
  root.style.setProperty('--color-secondary', c.secondary.main);
  root.style.setProperty('--color-accent', c.accent.main);
  root.style.setProperty('--color-accent-glow', c.accent.glow);

  root.style.setProperty('--color-bg-main', c.background.default);
  root.style.setProperty('--color-bg-card', c.background.paper);
  root.style.setProperty('--color-bg-subtle', c.background.subtle);
  root.style.setProperty('--color-bg-elevated', c.background.elevated);
  root.style.setProperty('--color-bg-glass', c.background.glass);
  root.style.setProperty('--color-border-glass', c.background.glassBorder);

  root.style.setProperty('--color-text-primary', c.text.primary);
  root.style.setProperty('--color-text-secondary', c.text.secondary);
  root.style.setProperty('--color-text-muted', c.text.muted);

  root.style.setProperty('--color-border', c.border.default);
  root.style.setProperty('--color-border-subtle', c.border.subtle);
  root.style.setProperty('--color-border-highlight', c.border.highlight);

  root.style.setProperty('--color-success', c.status.success);
  root.style.setProperty('--color-success-bg', c.status.successBg);
  root.style.setProperty('--color-warning', c.status.warning);
  root.style.setProperty('--color-warning-bg', c.status.warningBg);
  root.style.setProperty('--color-danger', c.status.error);
  root.style.setProperty('--color-danger-bg', c.status.errorBg);
  root.style.setProperty('--color-info', c.status.info);
  root.style.setProperty('--color-info-bg', c.status.infoBg);

  root.style.setProperty('--shadow-card', tokens.shadows.card);
  root.style.setProperty('--shadow-elevated', tokens.shadows.elevated);
  root.style.setProperty('--shadow-glow', tokens.shadows.glow);

  // Set color scheme attribute for browser UI & scrollbars
  root.setAttribute('data-theme', tokens.id);
  root.setAttribute('data-mode', tokens.mode);
  root.style.colorScheme = tokens.mode;
}

/**
 * Builds a comprehensive Material UI theme from EduInsight design tokens.
 */
export function buildMuiTheme(tokens) {
  const isDark = tokens.mode === 'dark';
  const c = tokens.colors;

  return createTheme({
    palette: {
      mode: tokens.mode,
      primary: {
        main: c.primary.main,
        light: c.primary.light,
        dark: c.primary.dark,
        contrastText: c.primary.contrastText
      },
      secondary: {
        main: c.secondary.main,
        light: c.secondary.light,
        dark: c.secondary.dark,
        contrastText: c.secondary.contrastText || '#ffffff'
      },
      background: {
        default: c.background.default,
        paper: c.background.paper
      },
      text: {
        primary: c.text.primary,
        secondary: c.text.secondary,
        disabled: c.text.muted
      },
      divider: c.border.default,
      error: {
        main: c.status.error
      },
      warning: {
        main: c.status.warning
      },
      info: {
        main: c.status.info
      },
      success: {
        main: c.status.success
      }
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontFamily: '"Space Grotesk", "Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.025em'
      },
      h2: {
        fontFamily: '"Space Grotesk", "Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.02em'
      },
      h3: {
        fontFamily: '"Space Grotesk", "Plus Jakarta Sans", sans-serif',
        fontWeight: 600,
        letterSpacing: '-0.015em'
      },
      h4: {
        fontFamily: '"Space Grotesk", "Plus Jakarta Sans", sans-serif',
        fontWeight: 600
      },
      h5: {
        fontFamily: '"Space Grotesk", "Plus Jakarta Sans", sans-serif',
        fontWeight: 600
      },
      h6: {
        fontFamily: '"Space Grotesk", "Plus Jakarta Sans", sans-serif',
        fontWeight: 600
      },
      subtitle1: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 500
      },
      subtitle2: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 500
      },
      body1: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontSize: '0.95rem',
        lineHeight: 1.6
      },
      body2: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontSize: '0.875rem',
        lineHeight: 1.55
      },
      button: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '0.01em'
      }
    },
    shape: {
      borderRadius: 12
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: c.background.default,
            color: c.text.primary,
            transition: 'background-color 0.25s ease, color 0.25s ease'
          }
        }
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '8px 18px',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: tokens.shadows.glow
            }
          },
          containedPrimary: {
            background: isDark
              ? `linear-gradient(135deg, ${c.primary.main} 0%, ${c.primary.dark} 100%)`
              : `linear-gradient(135deg, ${c.primary.main} 0%, ${c.primary.dark} 100%)`,
            color: c.primary.contrastText,
            '&:hover': {
              background: `linear-gradient(135deg, ${c.primary.light} 0%, ${c.primary.main} 100%)`
            }
          },
          outlined: {
            borderColor: c.border.default,
            '&:hover': {
              borderColor: c.primary.main,
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)'
            }
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: c.background.paper,
            borderRadius: 16,
            border: `1px solid ${c.border.default}`,
            boxShadow: tokens.shadows.card,
            backgroundImage: 'none',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
            '&:hover': {
              borderColor: isDark ? c.primary.main : c.border.highlight
            }
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: c.background.paper,
            backgroundImage: 'none'
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: c.background.glass,
            backdropFilter: 'blur(16px)',
            borderBottom: `1px solid ${c.border.default}`,
            color: c.text.primary,
            boxShadow: 'none'
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: c.background.paper,
            borderRight: `1px solid ${c.border.default}`
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 10,
              backgroundColor: isDark ? 'rgba(0,0,0,0.2)' : '#ffffff',
              '& fieldset': {
                borderColor: c.border.default
              },
              '&:hover fieldset': {
                borderColor: c.border.highlight
              },
              '&.Mui-focused fieldset': {
                borderColor: c.primary.main,
                boxShadow: `0 0 0 3px ${c.primary.glow}`
              }
            }
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${c.border.subtle}`,
            padding: '14px 16px',
            color: c.text.primary
          },
          head: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
            color: c.text.secondary,
            backgroundColor: isDark ? c.background.subtle : '#f1f5f9'
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 600
          }
        }
      }
    }
  });
}
