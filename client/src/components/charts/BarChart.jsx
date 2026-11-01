import React from 'react';
import {
  BarChart as RechartsBar,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import Box from '@mui/material/Box';
import { useThemeContext } from '../../theme/themeContext.jsx';

export function BarChart({ data = [], xKey = 'name', bars = [], height = 300 }) {
  const { activeThemeTokens } = useThemeContext();
  const c = activeThemeTokens.colors;

  return (
    <Box sx={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBar data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={c.border.subtle} />
          <XAxis dataKey={xKey} stroke={c.text.muted} fontSize={12} tickLine={false} />
          <YAxis stroke={c.text.muted} fontSize={12} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: c.background.paper,
              borderRadius: '12px',
              border: `1px solid ${c.border.default}`,
              boxShadow: activeThemeTokens.shadows.card,
              color: c.text.primary,
              fontFamily: 'inherit'
            }}
            itemStyle={{ color: c.text.primary }}
          />
          <Legend wrapperStyle={{ color: c.text.secondary, paddingTop: '8px' }} />
          {bars.map((b, index) => (
            <Bar
              key={b.key || index}
              dataKey={b.key}
              name={b.name || b.key}
              fill={b.color || c.primary.main}
              radius={[6, 6, 0, 0]}
            />
          ))}
        </RechartsBar>
      </ResponsiveContainer>
    </Box>
  );
}

export default BarChart;
