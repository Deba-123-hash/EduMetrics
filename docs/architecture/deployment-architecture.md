# Deployment Architecture

```mermaid
flowchart LR
    User([End Users]) -->|HTTPS| Vercel["Vercel CDN (Frontend SPA)"]
    Vercel -->|API Reverse Proxy / CORS| Render["Render Web Service (Express API)"]
    Render -->|Encrypted TLS (SSL Mode)| Neon["Neon Cloud (Serverless PostgreSQL)"]
    Render -->|API Key Auth| OpenAI["OpenAI API Cloud"]
```

- **Frontend**: Hosted on Vercel with automated continuous deployment from the `main` branch.
- **Backend**: Hosted on Render as a Node.js web service running `npm start`.
- **Database**: Serverless PostgreSQL managed on Neon Cloud with SSL enabled.
