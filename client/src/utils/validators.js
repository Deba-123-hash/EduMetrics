export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

export function isValidPassword(password) {
  if (!password || typeof password !== 'string') return false;
  return password.length >= 8;
}

export function isNonEmptyString(val) {
  return typeof val === 'string' && val.trim().length > 0;
}
