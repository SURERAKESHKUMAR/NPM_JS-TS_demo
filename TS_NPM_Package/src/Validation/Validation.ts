export function isValidEmail(email: string): boolean {
  if (typeof email !== "string") return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

export function isRequired(value: any): boolean {
  return value !== null && value !== undefined && value !== "";
}
