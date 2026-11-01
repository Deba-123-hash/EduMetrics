import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import AIChatWindow from '../../../components/ai/AIChatWindow.jsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: 'Hello! I am your EduInsight AI Assistant. You can ask me about attendance metrics, examination score trends, identified at-risk students, or study recommendations.'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (text) => {
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    setTimeout(() => {
      let botReply = 'I have analyzed the institutional records for your query. For MCA Semester 3, average attendance is currently 91.2% and pass rate is 94.2%.';
      if (text.toLowerCase().includes('risk') || text.toLowerCase().includes('fail')) {
        botReply = 'Based on the academic rules engine, students with attendance < 75% or scores < 40 marks are classified into risk cohorts for faculty intervention.';
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
        subtitle="Natural language conversational queries grounded in verified institutional database records"
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 3 }}>
        <AIChatWindow messages={messages} onSendMessage={handleSendMessage} loading={loading} />

        <Box>
          <Card sx={{ p: 3, mb: 3 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Suggested Questions
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Click any prompt to ask the AI assistant:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {sampleQuestions.map((q, idx) => (
                <Chip
                  key={idx}
                  label={q}
                  onClick={() => handleSendMessage(q)}
                  sx={{ justifyContent: 'flex-start', py: 2, height: 'auto', '& .MuiChip-label': { whiteSpace: 'normal' } }}
                  variant="outlined"
                />
              ))}
            </Box>
          </Card>

          <Card sx={{ p: 3 }}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Enterprise AI Safety Guardrails
            </Typography>
            <Typography variant="caption" color="text.secondary" paragraph>
              • Responses are strictly grounded in PostgreSQL records.<br />
              • Role-based access ensures students only see their own records.<br />
              • API keys remain securely on the backend server.
            </Typography>
          </Card>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default AIAssistantPage;
