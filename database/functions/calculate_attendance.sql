-- Function: calculate_student_attendance_percentage
-- Computes the percentage of present sessions for a given student and subject
CREATE OR REPLACE FUNCTION calculate_student_attendance_percentage(
  p_student_id UUID,
  p_subject_id UUID DEFAULT NULL
)
RETURNS NUMERIC AS $$
DECLARE
  v_total_sessions INT;
  v_present_sessions INT;
  v_percentage NUMERIC(5, 2);
BEGIN
  IF p_subject_id IS NULL THEN
    SELECT COUNT(*), COUNT(*) FILTER (WHERE status = 'present' OR status = 'late')
    INTO v_total_sessions, v_present_sessions
    FROM attendance
    WHERE student_id = p_student_id;
  ELSE
    SELECT COUNT(*), COUNT(*) FILTER (WHERE status = 'present' OR status = 'late')
    INTO v_total_sessions, v_present_sessions
    FROM attendance
    WHERE student_id = p_student_id AND subject_id = p_subject_id;
  END IF;

  IF v_total_sessions = 0 THEN
    RETURN 100.00;
  END IF;

  v_percentage := ROUND((v_present_sessions::NUMERIC / v_total_sessions::NUMERIC) * 100.00, 2);
  RETURN v_percentage;
END;
$$ LANGUAGE plpgsql;
