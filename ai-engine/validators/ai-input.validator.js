import { z } from 'zod';

export const aiInsightInputSchema = z.object({
  studentId: z.string().uuid(),
  attendancePercentage: z.number().min(0).max(100),
  marks: z.array(
    z.object({
      subjectCode: z.string(),
      marksObtained: z.number().min(0),
      maxMarks: z.number().positive(),
      grade: z.string().optional()
    })
  )
});

export const riskPredictionInputSchema = z.object({
  studentId: z.string().uuid(),
  riskScore: z.number().min(0).max(100),
  riskLevel: z.enum(['low', 'medium', 'high']),
  contributingFactors: z.array(z.string())
});

export default {
  aiInsightInputSchema,
  riskPredictionInputSchema
};
