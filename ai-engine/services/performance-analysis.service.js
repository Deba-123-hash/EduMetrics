import { callOpenAI } from './openai.service.js';
import { parseAIJsonResponse } from '../utils/response-parser.js';
import { aiInsightOutputSchema } from '../validators/ai-output.validator.js';

export const analyzeStudentPerformance = async (studentData) => {
  const prompt = `You are EduInsight AI. Analyze this verified student record and output valid JSON:
Student: ${studentData.studentId}
Attendance: ${studentData.attendancePct}%
Marks: ${JSON.stringify(studentData.marks)}

Required JSON Schema:
{
  "title": string,
  "description": string,
  "severity": "low" | "medium" | "high",
  "evidence": string[]
}`;

  const responseText = await callOpenAI([
    { role: 'system', content: 'You are a grounded educational data analyst. Output valid JSON only.' },
    { role: 'user', content: prompt }
  ], { type: 'json_object' });

  const parsed = parseAIJsonResponse(responseText);
  return aiInsightOutputSchema.parse(parsed);
};

export default {
  analyzeStudentPerformance
};
