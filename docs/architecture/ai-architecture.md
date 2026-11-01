# AI Engine Architecture

The AI subsystem maintains complete isolation from direct database writes and raw user queries:

1. **Context Preparation**: The backend service retrieves authenticated, verified student academic records.
2. **Deterministic Risk Evaluation**: The `risk-calculator.js` module computes a transparent mathematical risk score.
3. **Prompt Interpolation**: The `prompt-builder.js` inserts validated metrics into prompt templates.
4. **Structured Generation**: OpenAI GPT-4o-mini produces JSON responses parsed by `response-parser.js`.
5. **Output Validation**: Zod schemas validate that the AI output contains required fields before persistence.
6. **Data Privacy**: No credentials, passwords, or unnecessary personally identifiable data are ever transmitted to the LLM.
