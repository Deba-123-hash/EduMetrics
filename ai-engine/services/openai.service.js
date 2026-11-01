import { getOpenAIClient, model } from '../../server/src/config/openai.js';
import { aiConfig } from '../config/ai.config.js';

export const callOpenAI = async (messages, responseFormat = null) => {
  const client = getOpenAIClient();
  if (!client) {
    throw new Error('OpenAI client is not configured (missing OPENAI_API_KEY)');
  }

  const payload = {
    model: aiConfig.model || model,
    messages,
    temperature: aiConfig.temperature,
    max_tokens: aiConfig.maxTokens
  };

  if (responseFormat) {
    payload.response_format = responseFormat;
  }

  const completion = await client.chat.completions.create(payload);
  return completion.choices[0]?.message?.content || '';
};

export default {
  callOpenAI
};
