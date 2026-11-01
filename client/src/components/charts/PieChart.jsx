import React from 'react';
import {
  PieChart as RechartsPie,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import Box from '@mui/material/Box';
import { useThemeContext } from '../../theme/themeContext.jsx';

const DEFAULT_COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

export function PieChart({ data = [], dataKey = 'value', nameKey = 'name', height = 300, colors = DEFAULT_COLORS }) {
  const { activeThemeTokens } = useThemeContext();
  const c = activeThemeTokens.colors;

  return (
    <Box sx={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPie>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={48}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke={c.background.paper} strokeWidth={2} />
            ))}
          </Pie>
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
        </RechartsPie>
      </ResponsiveContainer>
    </Box>
  );
}

export default PieChart;
