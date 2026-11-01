import { z } from 'zod';

export const createFacultySchema = z.object({
  body: z.object({
    userId: z.string().uuid(),
    departmentId: z.string().uuid(),
    employeeId: z.string().min(2),
    designation: z.string().min(2)
  })
});

export default {
  createFacultySchema
};
