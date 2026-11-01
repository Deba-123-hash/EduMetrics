/**
 * Simple Template Interpolator for AI Prompts
 */
export function buildPrompt(template, variables = {}) {
  let result = template;
  for (const [key, val] of Object.entries(variables)) {
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(placeholder, typeof val === 'object' ? JSON.stringify(val) : String(val));
  }
  return result;
}

export default buildPrompt;
