# EduInsight AI - REST API Overview

All endpoints follow strict REST conventions, mounting under `/api`.

## Common Response Formats

### Success Response (HTTP 200 / 201)
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Resource fetched successfully",
  "data": { ... }
}
```

### Error Response (HTTP 4xx / 5xx)
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Validation error",
  "errors": [ ... ]
}
```
