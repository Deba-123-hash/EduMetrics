import bcrypt from 'bcrypt';
import { env } from '../config/env.js';

export const hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, env.BCRYPT_ROUNDS);
};

export const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export default {
  hashPassword,
  comparePassword
};
