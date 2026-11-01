# Entity Relationships & Integrity Rules

1. **User - Student / Faculty**: One-to-one mapping between `users` authentication records and their specific academic role profiles (`students` or `faculty`).
2. **Department - Class - Student**: A department offers multiple classes. A class enrolls many students. A student is uniquely enrolled in one primary class section per active academic term.
3. **Class - Subject - Faculty**: Many-to-many junction (`class_subjects`) connecting a class section and a curriculum subject to the assigned teaching faculty member.
4. **Examination - Subject - Marks**: An exam defines the testing window; `exam_subjects` assigns maximum and passing marks; `marks` records individual student scores.
5. **Attendance Ledger**: Composite unique constraint `(student_id, subject_id, attendance_date)` ensures idempotency and prevents duplicate attendance recording.
