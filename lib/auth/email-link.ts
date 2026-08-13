import type { ActionCodeSettings } from "firebase/auth";
import {
  getFirebaseAuthErrorCode,
  mapCommonAuthNetworkError,
} from "@/lib/auth/errors";
import { isValidEmail, normalizeEmail } from "@/lib/email";

/** localStorage key used between send and return (Firebase-recommended pattern). */
export const EMAIL_FOR_SIGN_IN_KEY = "emailForSignIn";

export const MAGIC_LINK_CONTINUE_PATH = "/login";

export type EmailLinkStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;

/**
 * Absolute continue URL for ActionCodeSettings.
 * Uses the current origin so localhost and the production host both work
 * without hardcoding domains. Optional NEXT_PUBLIC_APP_URL overrides origin
 * (useful if the public URL differs from window.location).
 */
export function getMagicLinkContinueUrl(
  origin: string,
  appUrlEnv: string | undefined = process.env.NEXT_PUBLIC_APP_URL
): string {
  const base = (appUrlEnv?.trim() || origin).replace(/\/$/, "");
  return `${base}${MAGIC_LINK_CONTINUE_PATH}`;
}

export function buildEmailLinkActionCodeSettings(
  continueUrl: string
): ActionCodeSettings {
  return {
    url: continueUrl,
    handleCodeInApp: true,
  };
}

export function storeEmailForSignIn(
  email: string,
  storage: EmailLinkStorage
): void {
  storage.setItem(EMAIL_FOR_SIGN_IN_KEY, normalizeEmail(email));
}

export function getEmailForSignIn(storage: EmailLinkStorage): string | null {
  const value = storage.getItem(EMAIL_FOR_SIGN_IN_KEY);
  if (!value) return null;
  const normalized = normalizeEmail(value);
  return isValidEmail(normalized) ? normalized : null;
}

export function clearEmailForSignIn(storage: EmailLinkStorage): void {
  storage.removeItem(EMAIL_FOR_SIGN_IN_KEY);
}

/**
 * Maps Firebase Auth error codes to safe user-facing copy.
 * Never returns Firebase's raw message or internal details.
 */
export function mapEmailLinkAuthError(error: unknown): string {
  const code = getFirebaseAuthErrorCode(error);
  const common = mapCommonAuthNetworkError(code);
  if (common) return common;

  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/missing-email":
      return "Please enter your email to finish signing in.";
    case "auth/invalid-action-code":
      return "This sign-in link is invalid or has already been used. Request a new one.";
    case "auth/expired-action-code":
      return "This sign-in link has expired. Request a new one.";
    default:
      return "Something went wrong. Please try again.";
  }
}

/** True when the URL looks like a Firebase email sign-in link (query/hash params). */
export function looksLikeEmailSignInLink(url: string): boolean {
  try {
    const parsed = new URL(url);
    const params = new URLSearchParams(parsed.search);
    if (params.has("oobCode") && params.get("mode") === "signIn") {
      return true;
    }
    // Some clients deliver params in the hash
    const hash = parsed.hash.startsWith("#")
      ? parsed.hash.slice(1)
      : parsed.hash;
    if (hash) {
      const hashParams = new URLSearchParams(hash);
      if (hashParams.has("oobCode") && hashParams.get("mode") === "signIn") {
        return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}
