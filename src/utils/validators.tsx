export function isEmailValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPasswordValid(password: string, minLength: number = 6): boolean {
  return password.length >= minLength;
}
