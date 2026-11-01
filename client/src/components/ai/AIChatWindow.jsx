import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Send, Bot, User } from 'lucide-react';

export function AIChatWindow({ messages = [], onSendMessage, loading = false }) {
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    onSendMessage(input.trim());
    setInput('');
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '550px', border: '1px solid #e2e8f0' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#f8fafc' }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 34, height: 34 }}>
          <Bot size={18} />
        </Avatar>
        <Box>
          <Typography variant="subtitle2" fontWeight={600}>
            EduInsight AI Academic Assistant
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Grounded institutional analytics & guidance
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {messages.length === 0 ? (
          <Box sx={{ my: 'auto', textAlign: 'center', color: 'text.secondary', p: 3 }}>
            <Bot size={40} style={{ opacity: 0.4, marginBottom: 8 }} />
            <Typography variant="body2">
              Ask any academic questions regarding attendance, marks, risk indicators, or personalized improvement plans.
            </Typography>
          </Box>
        ) : (
          messages.map((m, idx) => {
            const isUser = m.sender === 'user';
            return (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  alignSelf: isUser ? 'flex-end' : 'flex-start',
                  maxWidth: '85%'
                }}
              >
                {!isUser && (
                  <Avatar sx={{ width: 28, height: 28, bgcolor: 'secondary.main', mt: 0.5 }}>
                    <Bot size={14} />
                  </Avatar>
                )}
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: isUser ? 'primary.main' : '#f1f5f9',
                    color: isUser ? '#ffffff' : 'text.primary'
                  }}
                >
                  <Typography variant="body2">{m.text}</Typography>
                </Box>
                {isUser && (
                  <Avatar sx={{ width: 28, height: 28, bgcolor: 'primary.dark', mt: 0.5 }}>
                    <User size={14} />
                  </Avatar>
                )}
              </Box>
            );
          })
        )}
      </Box>

      <Box component="form" onSubmit={handleSend} sx={{ p: 2, borderTop: '1px solid #e2e8f0', display: 'flex', gap: 1 }}>
        <TextField
          size="small"
          fullWidth
          placeholder="Type your academic query..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <IconButton color="primary" type="submit" disabled={!input.trim() || loading}>
          <Send size={18} />
        </IconButton>
      </Box>
    </Card>
  );
}

export default AIChatWindow;
