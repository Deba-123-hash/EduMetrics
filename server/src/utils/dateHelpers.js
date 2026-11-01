export const getCurrentTimestamp = () => new Date().toISOString();

export const isDateInRange = (targetDate, startDate, endDate) => {
  const target = new Date(targetDate).getTime();
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  return target >= start && target <= end;
};

export const getMonthName = (dateInput) => {
  const d = new Date(dateInput);
  return d.toLocaleString('en-US', { month: 'short' });
};

export default {
  getCurrentTimestamp,
  isDateInRange,
  getMonthName
};
