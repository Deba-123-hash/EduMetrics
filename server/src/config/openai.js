import OpenAI from 'openai';
import { env } from './env.js';

let openaiClient = null;

export const getOpenAIClient = () => {
  if (!openaiClient) {
    if (!env.OPENAI.API_KEY) {
      console.warn('Warning: OPENAI_API_KEY is not defined. AI Engine will operate in deterministic offline mode.');
      return null;
    }
    openaiClient = new OpenAI({
      apiKey: env.OPENAI.API_KEY
    });
  }
  return openaiClient;
};

export default {
  getOpenAIClient,
  model: env.OPENAI.MODEL
};
