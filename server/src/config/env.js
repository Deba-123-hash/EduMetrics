import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from server root or project root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '5000', 10),
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT: {
    ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'dev_access_fallback_secret_key_32chars',
    REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'dev_refresh_fallback_secret_key_32chars',
    ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d'
  },
  BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS || '12', 10),
  OPENAI: {
    API_KEY: process.env.OPENAI_API_KEY || '',
    MODEL: process.env.OPENAI_MODEL || 'gpt-4o-mini'
  }
};

export default env;
