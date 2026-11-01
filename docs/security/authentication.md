# Authentication Security Specification

- **Password Policy**: Minimum 8 characters with bcrypt salt hashing. Plaintext passwords are never logged or stored.
- **JWT Lifetimes**: 15 minutes for access tokens; 7 days for refresh tokens.
- **Token Invalidation**: Server-side token revocation table (`refresh_tokens`) enables immediate session revocation and prevents token reuse replay attacks.
