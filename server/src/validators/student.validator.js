import { z } from 'zod';

export const createStudentSchema = z.object({
  body: z.object({
    userId: z.string().uuid(),
    studentId: z.string().min(3),
    departmentId: z.string().uuid(),
    classId: z.string().uuid(),
    enrollmentDate: z.string(),
    dateOfBirth: z.string().optional(),
    gender: z.enum(['male', 'female', 'other']).optional()
  })
});

export default {
  createStudentSchema
};
