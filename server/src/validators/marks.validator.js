import { z } from 'zod';

export const enterMarksSchema = z.object({
  body: z.object({
    studentId: z.string().uuid(),
    examSubjectId: z.string().uuid(),
    marksObtained: z.number().min(0).max(100),
    remarks: z.string().optional()
  })
});

export const bulkMarksSchema = z.object({
  body: z.object({
    examSubjectId: z.string().uuid(),
    entries: z.array(
      z.object({
        studentId: z.string().uuid(),
        marksObtained: z.number().min(0).max(100),
        remarks: z.string().optional()
      })
    )
  })
});

export default {
  enterMarksSchema,
  bulkMarksSchema
};
