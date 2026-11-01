import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Palette, Shield, Cpu, Save } from 'lucide-react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import { GlassCard } from '../../../components/common/GlassCard.jsx';
import { PremiumButton } from '../../../components/common/PremiumButton.jsx';
import { ThemeSelector } from '../../../components/common/ThemeSelector.jsx';

export function SystemSettings() {
  const [activeTab, setActiveTab] = useState(0);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <MainLayout>
      <PageHeader
        title="System Settings & Customization"
        subtitle="Manage appearance themes, institutional academic policies, AI parameters, and security bounds"
        actions={
          <PremiumButton
            variant="contained"
            color="primary"
            startIcon={<Save size={16} />}
            onClick={handleSave}
            glow
          >
            {savedSuccess ? 'Settings Saved!' : 'Save Changes'}
          </PremiumButton>
        }
      />

      {/* Tabs */}
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(_, val) => setActiveTab(val)}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '0.9rem'
            }
          }}
        >
          <Tab icon={<Palette size={17} />} iconPosition="start" label="Themes & Appearance (6 Themes)" />
          <Tab icon={<Shield size={17} />} iconPosition="start" label="Academic Policies & Thresholds" />
          <Tab icon={<Cpu size={17} />} iconPosition="start" label="AI Engine Parameters" />
        </Tabs>
      </Box>

      {/* Tab 0: Themes Studio */}
      {activeTab === 0 && (
        <GlassCard hover={false} sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 4 }}>
          <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 1 }}>
            Visual Identity & Color Themes
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Choose from 6 handcrafted enterprise themes tailored for high-contrast educational analytics and late-night research sessions.
          </Typography>
          <ThemeSelector />
        </GlassCard>
      )}

      {/* Tab 1: Academic Policies */}
      {activeTab === 1 && (
        <GlassCard hover={false} sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 4 }}>
          <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 1 }}>
            Institutional Compliance & Thresholds
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Define automated early-warning cutoff points for student attendance and credit benchmarks.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 2.5, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Attendance Compliance Cutoff: 75%
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                Students falling below 75% attendance are automatically flagged for attendance risk.
              </Typography>
              <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Enable Automated Attendance Risk Flagging" />
            </Box>

            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 2.5, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Examinations & Result Publication
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                Instantly compute CGPA and trigger notification dispatches upon marks submission.
              </Typography>
              <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Publish Semester Assessment Results Immediately" />
            </Box>
          </Box>
        </GlassCard>
      )}

      {/* Tab 2: AI Engine */}
      {activeTab === 2 && (
        <GlassCard hover={false} sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 4 }}>
          <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, mb: 1 }}>
            AI Engine Integration & Model Grounding
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Configure machine intelligence weighting heuristics and verification boundaries.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 2.5, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Predictive Risk Model: Rule-Grounded Heuristics (v2.1)
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                Formula: Attendance (35%) + Assessment Marks (35%) + Active Backlogs (20%) + Semester Trend (10%).
              </Typography>
              <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Enable Explainable Risk Explanations" />
            </Box>

            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 2.5, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Context-Aware Study Recommendations
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                Generates personalized action items focused on weak subject areas.
              </Typography>
              <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Allow Student Self-Service Recommendation Checklists" />
            </Box>
          </Box>
        </GlassCard>
      )}
    </MainLayout>
  );
}

export default SystemSettings;
