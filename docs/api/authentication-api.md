# Authentication API Specification

- `POST /api/auth/login`: Authenticate with email and password. Returns access token and sets secure refresh token.
- `POST /api/auth/register`: Public student enrollment (if enabled by policy).
- `POST /api/auth/refresh`: Issue new short-lived JWT using valid refresh token.
- `POST /api/auth/logout`: Revoke active refresh token.
- `GET /api/auth/me`: Retrieve current user identity, role, and permission set.
- `POST /api/auth/forgot-password`: Request password recovery email.
- `POST /api/auth/reset-password`: Set new password using single-use reset token hash.
