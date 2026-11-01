# Role-Based Access Control (RBAC) Matrix

| Resource / Endpoint | Admin | Faculty | Student |
|---|:---:|:---:|:---:|
| User Management | Full CRUD | None | None |
| Department & Class Config | Full CRUD | Read-Only | Read-Only |
| Enter Marks | All | Assigned Subjects | None |
| Record Attendance | All | Assigned Classes | None |
| View Individual Student Record | All | Assigned Students | Self Only |
| AI Insights & Predictions | All | Assigned Students | Self Only |
| Audit Logs | Read-Only | None | None |
