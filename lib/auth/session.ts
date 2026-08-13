/**
 * Safe auth-session error mapping (no Firebase internals to the UI).
 */

import {
  getFirebaseAuthErrorCode,
  mapCommonAuthNetworkError,
} from "@/lib/auth/errors";

export function mapSignOutAuthError(error: unknown): string {
  const code = getFirebaseAuthErrorCode(error);
  const common = mapCommonAuthNetworkError(code);
  if (common) return common;
  return "Something went wrong signing out. Please try again.";
}
