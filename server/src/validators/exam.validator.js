import { z } from 'zod';

export const createExamSchema = z.object({
  body: z.object({
    examName: z.string().min(2),
    examType: z.string().min(2),
    academicYearId: z.string().uuid(),
    classId: z.string().uuid(),
    examDate: z.string(),
    maximumMarks: z.number().positive()
  })
});

export default {
  createExamSchema
};
