import React from 'react';
import {
  LineChart as RechartsLine,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import Box from '@mui/material/Box';
import { useThemeContext } from '../../theme/themeContext.jsx';

export function LineChart({ data = [], xKey = 'name', lines = [], height = 300 }) {
  const { activeThemeTokens } = useThemeContext();
  const c = activeThemeTokens.colors;

  return (
    <Box sx={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLine data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
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
          {lines.map((l, index) => (
            <Line
              key={l.key || index}
              type="monotone"
              dataKey={l.key}
              name={l.name || l.key}
              stroke={l.color || c.primary.main}
              strokeWidth={2.5}
              dot={{ r: 4, fill: l.color || c.primary.main }}
              activeDot={{ r: 7 }}
            />
          ))}
        </RechartsLine>
      </ResponsiveContainer>
    </Box>
  );
}

export default LineChart;
