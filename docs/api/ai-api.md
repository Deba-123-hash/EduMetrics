# AI Engine API Specification

- `GET /api/ai-insights`: Retrieve generated evidence-grounded insights for authorized user scope.
- `POST /api/ai-insights/generate`: Trigger batch AI insight generation for an exam cycle.
- `GET /api/predictions/:studentId`: Retrieve statistical outcome prediction and uncertainty bounds.
- `GET /api/recommendations/:studentId`: Fetch personalized learning interventions.
- `POST /api/ai-assistant/chat`: Natural language assistant query processing with verified context.
