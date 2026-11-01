import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useThemeContext } from '../../theme/themeContext.jsx';

export function ThemeSelector() {
  const { currentTheme, themeMode, setTheme, setThemeMode, themeList } = useThemeContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Mode Switcher: Light / Dark / System */}
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.secondary' }}>
          APPEARANCE MODE
        </Typography>
        <RadioGroup
          row
          value={themeMode}
          onChange={(e) => setThemeMode(e.target.value)}
          sx={{ gap: 2 }}
        >
          {[
            { value: 'light', label: 'Light', icon: Sun },
            { value: 'dark', label: 'Dark', icon: Moon },
            { value: 'system', label: 'System', icon: Laptop }
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = themeMode === item.value;
            return (
              <Box
                key={item.value}
                onClick={() => setThemeMode(item.value)}
                sx={{
                  flex: '1 1 120px',
                  p: 1.5,
                  borderRadius: 2.5,
                  border: '1.5px solid',
                  borderColor: isSelected ? 'primary.main' : 'divider',
                  bgcolor: isSelected ? 'action.selected' : 'background.paper',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  transition: 'all 0.2s'
                }}
              >
                <Icon size={18} />
                <Typography variant="body2" sx={{ fontWeight: isSelected ? 700 : 500 }}>
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </RadioGroup>
      </Box>

      {/* 6 Theme Palette Grid */}
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.secondary' }}>
          PRESET THEMES (6 THEMES)
        </Typography>
        <Grid container spacing={2}>
          {themeList.map((theme) => {
            const isSelected = currentTheme === theme.id;
            return (
              <Grid item xs={12} sm={6} md={4} key={theme.id}>
                <Card
                  onClick={() => setTheme(theme.id)}
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: isSelected ? 'primary.main' : 'divider',
                    position: 'relative',
                    transition: 'all 0.2s',
                    boxShadow: isSelected ? '0 0 16px rgba(0,0,0,0.2)' : 'none',
                    '&:hover': {
                      borderColor: 'primary.light',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          bgcolor: theme.previewColor,
                          boxShadow: `0 0 10px ${theme.previewColor}`
                        }}
                      />
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {theme.name}
                      </Typography>
                    </Box>
                    {isSelected && (
                      <Chip
                        icon={<Check size={13} />}
                        label="Active"
                        size="small"
                        color="primary"
                        sx={{ height: 22, fontSize: '0.7rem' }}
                      />
                    )}
                  </Box>

                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5, minHeight: 32 }}>
                    {theme.description}
                  </Typography>

                  {/* Swatch Previews */}
                  <Box sx={{ display: 'flex', gap: 0.8, alignItems: 'center' }}>
                    <Box sx={{ width: 28, height: 16, borderRadius: 1, bgcolor: theme.previewColor }} />
                    <Box sx={{ width: 28, height: 16, borderRadius: 1, bgcolor: theme.previewSecondary, border: '1px solid', borderColor: 'divider' }} />
                    <Box sx={{ width: 16, height: 16, borderRadius: 1, bgcolor: theme.mode === 'dark' ? '#0f172a' : '#f8fafc', border: '1px solid', borderColor: 'divider' }} />
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default ThemeSelector;

