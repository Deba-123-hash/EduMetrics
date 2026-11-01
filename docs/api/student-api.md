# Student Management API Specification

- `GET /api/students`: List students with pagination, search, and department/class filters.
- `POST /api/students`: Create/enroll a new student record (Admin only).
- `GET /api/students/:id`: Retrieve full student profile and academic standing.
- `PUT /api/students/:id`: Update student demographic and contact attributes.
- `PATCH /api/students/:id/status`: Activate or deactivate student enrollment.
