export function formatNumber(value, decimals = 1) {
  if (value === null || value === undefined || isNaN(value)) return '0.0';
  return Number(value).toFixed(decimals);
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value || 0);
}
