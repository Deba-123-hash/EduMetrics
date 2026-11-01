import { z } from 'zod';

export const recordAttendanceSchema = z.object({
  body: z.object({
    studentId: z.string().uuid(),
    subjectId: z.string().uuid(),
    attendanceDate: z.string(),
    status: z.enum(['present', 'absent', 'late', 'excused'])
  })
});

export const bulkAttendanceSchema = z.object({
  body: z.object({
    subjectId: z.string().uuid(),
    attendanceDate: z.string(),
    records: z.array(
      z.object({
        studentId: z.string().uuid(),
        status: z.enum(['present', 'absent', 'late', 'excused'])
      })
    )
  })
});

export default {
  recordAttendanceSchema,
  bulkAttendanceSchema
};
