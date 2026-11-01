import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Sun, Moon, Palette, Check } from 'lucide-react';
import { useThemeContext } from '../../theme/themeContext.jsx';

export function ThemeSwitcher() {
  const { currentTheme, mode, toggleMode, setTheme, themeList } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectTheme = (themeId) => {
    setTheme(themeId);
    handleCloseMenu();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      {/* Quick Mode Toggle (Sun / Moon) */}
      <Tooltip title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
        <IconButton
          size="small"
          onClick={toggleMode}
          sx={{
            color: 'text.secondary',
            p: 1,
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'divider',
            transition: 'all 0.2s',
            '&:hover': {
              color: 'primary.main',
              borderColor: 'primary.main',
              bgcolor: 'action.hover'
            }
          }}
          aria-label="Toggle theme mode"
        >
          {mode === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </IconButton>
      </Tooltip>

      {/* 6-Theme Palette Picker */}
      <Tooltip title="Choose Color Theme (6 Themes)">
        <IconButton
          size="small"
          onClick={handleOpenMenu}
          sx={{
            color: 'text.secondary',
            p: 1,
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'divider',
            transition: 'all 0.2s',
            '&:hover': {
              color: 'primary.main',
              borderColor: 'primary.main',
              bgcolor: 'action.hover'
            }
          }}
          aria-label="Select theme preset"
        >
          <Palette size={17} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 220,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
            p: 0.5
          }
        }}
      >
        <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: '0.05em' }}>
            PREMIUM THEMES
          </Typography>
        </Box>

        {themeList.map((theme) => {
          const isSelected = currentTheme === theme.id;
          return (
            <MenuItem
              key={theme.id}
              onClick={() => handleSelectTheme(theme.id)}
              selected={isSelected}
              sx={{
                borderRadius: 2,
                my: 0.3,
                px: 1.5,
                py: 0.9,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&.Mui-selected': {
                  bgcolor: 'action.selected'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    bgcolor: theme.previewColor,
                    boxShadow: `0 0 8px ${theme.previewColor}`
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: isSelected ? 700 : 500 }}>
                    {theme.name}
                  </Typography>
                </Box>
              </Box>
              {isSelected && <Check size={16} color={theme.previewColor} />}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}

export default ThemeSwitcher;

