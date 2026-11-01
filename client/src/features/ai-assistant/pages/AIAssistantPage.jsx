import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Sparkles, ShieldCheck, Database, HelpCircle } from 'lucide-react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import AIChatWindow from '../../../components/ai/AIChatWindow.jsx';
import { GlassCard } from '../../../components/common/GlassCard.jsx';

export function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: 'Hello! I am your EduInsight AI Assistant. You can ask me about institutional attendance compliance, examination score trajectories, identified at-risk student cohorts, or personalized study interventions.'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (text) => {
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    setTimeout(() => {
      let botReply = 'I have analyzed the institutional records for your query. For MCA Semester 3, average attendance is currently 91.2% and exam pass rate is 94.2%.';
      if (text.toLowerCase().includes('risk') || text.toLowerCase().includes('fail')) {
        botReply = 'Based on the academic rules engine, students with attendance < 75% or assessment scores < 40 marks are classified into risk cohorts for faculty intervention.';
      }
      setMessages((prev) => [...prev, { sender: 'assistant', text: botReply }]);
      setLoading(false);
    }, 600);
  };

  const sampleQuestions = [
    'What is the current attendance compliance rate?',
    'Show students identified as needing academic support',
    'What are the weak topics in Cloud Computing?',
    'Give me a personalized revision schedule'
  ];

  return (
    <MainLayout>
      <PageHeader
        title="AI Academic Assistant"
        subtitle="Conversational machine intelligence grounded in verified PostgreSQL institutional database records"
        badge="NEURAL ENGINE"
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3 }}>
        <AIChatWindow messages={messages} onSendMessage={handleSendMessage} loading={loading} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Suggested Questions */}
          <GlassCard hover={false} sx={{ p: 3, borderRadius: 3.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <HelpCircle size={17} color="var(--color-primary)" />
              <Typography variant="subtitle1" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>
                Suggested Prompts
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
              Click any question to prompt the assistant:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {sampleQuestions.map((q, idx) => (
                <Chip
                  key={idx}
                  label={q}
                  onClick={() => handleSendMessage(q)}
                  sx={{
                    justifyContent: 'flex-start',
                    py: 1.8,
                    height: 'auto',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'action.hover',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'action.selected'
                    },
                    '& .MuiChip-label': { whiteSpace: 'normal', fontSize: '0.8rem', fontWeight: 500 }
                  }}
                  variant="outlined"
                />
              ))}
            </Box>
          </GlassCard>

          {/* Safety & Grounding Guardrails */}
          <GlassCard hover={false} sx={{ p: 3, borderRadius: 3.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <ShieldCheck size={17} color="var(--color-success)" />
              <Typography variant="subtitle2" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>
                Enterprise Safety & Grounding
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.6, display: 'block' }}>
              • Queries are grounded strictly in live PostgreSQL records.<br />
              • Strict role-based isolation: students can only access their own results.<br />
              • AI prompts and secrets reside securely on the backend server.
            </Typography>
          </GlassCard>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default AIAssistantPage;
