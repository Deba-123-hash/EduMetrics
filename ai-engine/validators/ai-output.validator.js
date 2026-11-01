import { z } from 'zod';

export const aiInsightOutputSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  severity: z.enum(['low', 'medium', 'high']),
  evidence: z.array(z.string()).min(1)
});

export const recommendationOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      priority: z.enum(['low', 'medium', 'high']),
      targetSubject: z.string().optional()
    })
  )
});

export default {
  aiInsightOutputSchema,
  recommendationOutputSchema
};
