import { z } from 'zod';

export const aiAssistantQuerySchema = z.object({
  body: z.object({
    message: z.string().min(1, 'Message is required').max(1000, 'Message too long'),
    conversationId: z.string().uuid().optional()
  })
});

export const triggerRiskAnalysisSchema = z.object({
  body: z.object({
    classId: z.string().uuid().optional(),
    academicYearId: z.string().uuid().optional()
  })
});

export default {
  aiAssistantQuerySchema,
  triggerRiskAnalysisSchema
};
