# Academic Management API Specification

- `GET /api/departments`: List all academic departments.
- `GET /api/classes`: List class cohorts filtered by department and academic year.
- `GET /api/subjects`: List course subjects.
- `GET /api/exams`: List scheduled examinations.
- `POST /api/marks`: Record or update student subject marks (Authorized faculty & admin).
- `POST /api/marks/bulk`: Bulk marks insertion with transactional safety.
- `POST /api/attendance`: Record session attendance.
- `POST /api/attendance/bulk`: Record class session attendance in batch.
