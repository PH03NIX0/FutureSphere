/** Shared email helpers for public form endpoints. */

const EMAIL_MAX_LENGTH = 320;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string): boolean {
  const normalized = normalizeEmail(email);
  return (
    normalized.length >= 5 &&
    normalized.length <= EMAIL_MAX_LENGTH &&
    EMAIL_PATTERN.test(normalized)
  );
}
