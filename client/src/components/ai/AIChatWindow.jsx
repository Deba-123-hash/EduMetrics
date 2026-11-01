import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { GlassCard } from '../common/GlassCard.jsx';

export function AIChatWindow({ messages = [], onSendMessage, loading = false }) {
  const [input, setInput] = useState('');
  const chatBottomRef = useRef(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    onSendMessage(input.trim());
    setInput('');
  };

  return (
    <GlassCard hover={false} sx={{ display: 'flex', flexDirection: 'column', height: '560px', borderRadius: 4 }}>
      {/* Chat Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          bgcolor: 'action.hover'
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            width: 36,
            height: 36,
            boxShadow: '0 0 12px var(--color-primary-glow)'
          }}
        >
          <Bot size={20} />
        </Avatar>
        <Box>
          <Typography variant="subtitle2" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>
            EduInsight AI Assistant
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Sparkles size={11} color="var(--color-primary)" />
            Grounded in live institutional records
          </Typography>
        </Box>
      </Box>

      {/* Messages Scroll Area */}
      <Box sx={{ flexGrow: 1, p: 2.5, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {messages.length === 0 ? (
          <Box sx={{ my: 'auto', textAlign: 'center', color: 'text.secondary', p: 3 }}>
            <Bot size={44} style={{ opacity: 0.35, marginBottom: 8 }} />
            <Typography variant="body2" sx={{ maxWidth: 360, mx: 'auto' }}>
              Ask any academic question regarding attendance compliance, marks trends, risk indicators, or personalized study interventions.
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
                  gap: 1.2,
                  alignSelf: isUser ? 'flex-end' : 'flex-start',
                  maxWidth: '85%'
                }}
              >
                {!isUser && (
                  <Avatar sx={{ width: 28, height: 28, bgcolor: 'secondary.main', mt: 0.5 }}>
                    <Bot size={15} />
                  </Avatar>
                )}
                <Box
                  sx={{
                    p: 1.8,
                    borderRadius: 3,
                    bgcolor: isUser ? 'primary.main' : 'action.selected',
                    color: isUser ? 'primary.contrastText' : 'text.primary',
                    border: '1px solid',
                    borderColor: isUser ? 'transparent' : 'divider',
                    boxShadow: isUser ? '0 2px 8px var(--color-primary-glow)' : 'none'
                  }}
                >
                  <Typography variant="body2" sx={{ lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                    {m.text}
                  </Typography>
                </Box>
                {isUser && (
                  <Avatar sx={{ width: 28, height: 28, bgcolor: 'primary.dark', mt: 0.5 }}>
                    <User size={15} />
                  </Avatar>
                )}
              </Box>
            );
          })
        )}

        {loading && (
          <Box sx={{ display: 'flex', gap: 1.2, alignSelf: 'flex-start', alignItems: 'center' }}>
            <Avatar sx={{ width: 28, height: 28, bgcolor: 'secondary.main' }}>
              <Bot size={15} />
            </Avatar>
            <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: 'action.selected', border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1 }}>
              <CircularProgress size={16} sx={{ color: 'primary.main' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Synthesizing academic evidence...
              </Typography>
            </Box>
          </Box>
        )}
        <div ref={chatBottomRef} />
      </Box>

      {/* Input Form */}
      <Box
        component="form"
        onSubmit={handleSend}
        sx={{
          p: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          gap: 1.5,
          bgcolor: 'action.hover'
        }}
      >
        <TextField
          size="small"
          fullWidth
          placeholder="Ask about marks, attendance, or risk indicators..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2.5,
              bgcolor: 'background.paper'
            }
          }}
        />
        <IconButton
          color="primary"
          type="submit"
          disabled={!input.trim() || loading}
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 2.5,
            width: 40,
            height: 40,
            '&:hover': {
              bgcolor: 'primary.dark'
            },
            '&.Mui-disabled': {
              bgcolor: 'action.disabledBackground',
              color: 'text.disabled'
            }
          }}
          aria-label="Send message"
        >
          <Send size={18} />
        </IconButton>
      </Box>
    </GlassCard>
  );
}

export default AIChatWindow;
