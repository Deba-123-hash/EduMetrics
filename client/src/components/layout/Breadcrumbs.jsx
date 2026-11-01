import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <MuiBreadcrumbs
      separator={<ChevronRight size={14} />}
      aria-label="breadcrumb"
      sx={{ mb: 2, fontSize: '0.875rem' }}
    >
      <Link component={RouterLink} to="/" underline="hover" color="inherit">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

        return last ? (
          <Typography color="text.primary" key={to} sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
            {label}
          </Typography>
        ) : (
          <Link component={RouterLink} to={to} underline="hover" color="inherit" key={to}>
            {label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}

export default Breadcrumbs;
