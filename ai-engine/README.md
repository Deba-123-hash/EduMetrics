# EduInsight AI Engine Architecture

The **AI Engine** module operates independently from the web layer and core academic database transactions. It is responsible for:

1. **Deterministic Analytics**: Calculating compound risk scores, weighted attendance percentages, and historical score deltas.
2. **Context-Grounded LLM Reasoning**: Transforming validated PostgreSQL metrics into clear, actionable, evidence-backed narrative summaries without data fabrication.
3. **Structured Validation**: Enforcing strict Zod validation on both the input payload to the AI service and the output JSON received from OpenAI.
4. **Safety & Privacy**: Filtering personal identifiers (PII), enforcing backend role-based data boundaries, and keeping API credentials strictly on the backend.
