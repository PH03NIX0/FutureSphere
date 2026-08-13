/**
 * Shared Firebase Auth error helpers (safe UI mapping; no internals leaked).
 */

export function getFirebaseAuthErrorCode(error: unknown): string {
  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
  ) {
    return (error as { code: string }).code;
  }
  return "";
}

export function mapCommonAuthNetworkError(code: string): string | null {
  switch (code) {
    case "auth/network-request-failed":
      return "Network error. Please check your connection and try again.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    default:
      return null;
  }
}
