/**
 * Safe JSON Response Parser for LLM Responses
 */
export function parseAIJsonResponse(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    throw new Error('Empty AI response received');
  }

  // Strip markdown code fences if present (```json ... ```)
  const cleanText = rawText
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/, '')
    .replace(/\s*```$/, '')
    .trim();

  try {
    return JSON.parse(cleanText);
  } catch (err) {
    throw new Error(`Failed to parse AI JSON response: ${err.message}. Raw: ${cleanText.slice(0, 100)}...`);
  }
}

export default parseAIJsonResponse;
