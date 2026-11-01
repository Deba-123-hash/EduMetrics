-- Function: calculate_score_percentage
CREATE OR REPLACE FUNCTION calculate_score_percentage(
  p_obtained NUMERIC,
  p_maximum NUMERIC
)
RETURNS NUMERIC AS $$
BEGIN
  IF p_maximum IS NULL OR p_maximum <= 0 THEN
    RETURN 0.00;
  END IF;
  RETURN ROUND((p_obtained / p_maximum) * 100.00, 2);
END;
$$ LANGUAGE plpgsql;
