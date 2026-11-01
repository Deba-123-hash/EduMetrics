# Security Architecture Overview

EduInsight AI implements defense-in-depth security principles across all layers:
1. **Network & Transport Layer**: Mandatory TLS/HTTPS on all production endpoints.
2. **HTTP Headers**: Strict security headers via Helmet (CSP, X-Frame-Options, HSTS).
3. **Authentication Layer**: Dual JWT strategy (short-lived access tokens + rotating refresh tokens).
4. **Data Protection Layer**: Bcrypt password hashing (work factor 12) and parameterized SQL queries to prevent SQL injection.
5. **Rate Limiting**: Tiered endpoint rate limiting preventing brute-force login and DoS attacks.
