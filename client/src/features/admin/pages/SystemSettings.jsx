import React from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '../../../components/common/Button.jsx';

export function SystemSettings() {
  return (
    <MainLayout>
      <PageHeader
        title="System Settings"
        subtitle="Configure institution policies, analytics calculation rules, AI parameters, and security bounds"
      />

      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Academic Policy & Thresholds
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Attendance cutoff threshold: <strong>75%</strong> (Students below this mark are automatically flagged).
        </Typography>
        <FormControlLabel control={<Switch defaultChecked />} label="Enable Automated Attendance Risk Warnings" />
        <Box sx={{ mt: 1 }}>
          <FormControlLabel control={<Switch defaultChecked />} label="Publish Semester Examination Results Immediately" />
        </Box>
      </Card>

      <Card sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          AI Engine Integration
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Configured Model: <strong>OpenAI GPT-4o-mini</strong> with strict temperature 0.2 for reproducible evidence-grounded insights.
        </Typography>
        <FormControlLabel control={<Switch defaultChecked />} label="Enable Grounded AI Recommendation Generation" />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained">Save Settings</Button>
        </Box>
      </Card>
    </MainLayout>
  );
}

export default SystemSettings;
