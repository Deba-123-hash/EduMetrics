import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    roleId: z.string().uuid('Invalid role ID'),
    fullName: z.string().min(2, 'Name required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Password must be at least 8 chars'),
    phone: z.string().optional()
  })
});

export const updateUserStatusSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid user ID')
  }),
  body: z.object({
    isActive: z.boolean()
  })
});

export default {
  createUserSchema,
  updateUserStatusSchema
};
