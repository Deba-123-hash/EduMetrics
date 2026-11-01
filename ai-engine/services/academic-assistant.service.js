import { callOpenAI } from './openai.service.js';

export const handleAssistantQuery = async (query, role, userContext) => {
  const systemPrompt = `You are the EduInsight AI Academic Assistant.
Current User Role: ${role}
Available Context Data: ${JSON.stringify(userContext)}

Rules:
1. Answer strictly based on the provided context data.
2. Refuse requests outside the user's role authority or data scope.
3. Be concise, polite, and academically helpful.`;

  try {
    const reply = await callOpenAI([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: query }
    ]);
    return reply;
  } catch (err) {
    // Offline deterministic fallback
    return `[Offline Mode] Verified records indicate you are authenticated as ${role}. For query "${query}", please review the official marks and attendance tabs.`;
  }
};

export default {
  handleAssistantQuery
};
