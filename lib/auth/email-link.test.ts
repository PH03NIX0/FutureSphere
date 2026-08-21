import { describe, expect, it } from "vitest";
import {
  EMAIL_FOR_SIGN_IN_KEY,
  buildEmailLinkActionCodeSettings,
  clearEmailForSignIn,
  getEmailForSignIn,
  getEmailFromContinueUrl,
  getMagicLinkContinueUrl,
  looksLikeEmailSignInLink,
  mapEmailLinkAuthError,
  storeEmailForSignIn,
} from "@/lib/auth/email-link";

function memoryStorage(initial: Record<string, string> = {}) {
  const store = { ...initial };
  return {
    getItem(key: string) {
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key]! : null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
    _store: store,
  };
}

describe("getMagicLinkContinueUrl", () => {
  it("uses origin + /login by default", () => {
    expect(getMagicLinkContinueUrl("http://localhost:3000", undefined)).toBe(
      "http://localhost:3000/login"
    );
  });

  it("supports production origin", () => {
    expect(
      getMagicLinkContinueUrl("https://futuresphere.vercel.app", undefined)
    ).toBe("https://futuresphere.vercel.app/login");
  });

  it("prefers NEXT_PUBLIC_APP_URL when provided", () => {
    expect(
      getMagicLinkContinueUrl(
        "http://localhost:3000",
        "https://futuresphere.vercel.app/"
      )
    ).toBe("https://futuresphere.vercel.app/login");
  });

  it("embeds email for cross-device completion", () => {
    expect(
      getMagicLinkContinueUrl(
        "https://future-sphere-blush.vercel.app",
        undefined,
        "Ada@Example.COM"
      )
    ).toBe(
      "https://future-sphere-blush.vercel.app/login?email=ada%40example.com"
    );
  });
});

describe("getEmailFromContinueUrl", () => {
  it("reads and normalizes email query param", () => {
    expect(
      getEmailFromContinueUrl(
        "https://example.com/login?mode=signIn&email=Ada%40Example.COM&oobCode=x"
      )
    ).toBe("ada@example.com");
  });

  it("returns null when missing or invalid", () => {
    expect(getEmailFromContinueUrl("https://example.com/login")).toBeNull();
    expect(
      getEmailFromContinueUrl("https://example.com/login?email=not-an-email")
    ).toBeNull();
  });
});

describe("buildEmailLinkActionCodeSettings", () => {
  it("sets handleCodeInApp and continue url", () => {
    expect(
      buildEmailLinkActionCodeSettings("http://localhost:3000/login")
    ).toEqual({
      url: "http://localhost:3000/login",
      handleCodeInApp: true,
    });
  });
});

describe("email for sign-in storage", () => {
  it("stores normalized email and clears it", () => {
    const storage = memoryStorage();
    storeEmailForSignIn("Ada@Example.COM", storage);
    expect(storage._store[EMAIL_FOR_SIGN_IN_KEY]).toBe("ada@example.com");
    expect(getEmailForSignIn(storage)).toBe("ada@example.com");
    clearEmailForSignIn(storage);
    expect(getEmailForSignIn(storage)).toBeNull();
  });

  it("returns null for invalid stored values", () => {
    const storage = memoryStorage({ [EMAIL_FOR_SIGN_IN_KEY]: "not-an-email" });
    expect(getEmailForSignIn(storage)).toBeNull();
  });
});

describe("looksLikeEmailSignInLink", () => {
  it("detects mode=signIn with oobCode in query", () => {
    expect(
      looksLikeEmailSignInLink(
        "http://localhost:3000/login?mode=signIn&oobCode=abc&apiKey=x"
      )
    ).toBe(true);
  });

  it("rejects unrelated urls", () => {
    expect(looksLikeEmailSignInLink("http://localhost:3000/login")).toBe(false);
    expect(looksLikeEmailSignInLink("not-a-url")).toBe(false);
  });
});

describe("mapEmailLinkAuthError", () => {
  it("maps known codes to safe messages", () => {
    expect(mapEmailLinkAuthError({ code: "auth/invalid-action-code" })).toContain(
      "invalid or has already been used"
    );
    expect(mapEmailLinkAuthError({ code: "auth/expired-action-code" })).toBe(
      "This sign-in link has expired. Request a new one."
    );
    expect(mapEmailLinkAuthError({ code: "auth/invalid-email" })).toBe(
      "Please enter a valid email address."
    );
    expect(
      mapEmailLinkAuthError({ code: "auth/unauthorized-continue-uri" })
    ).toContain("Authorized domains");
    expect(
      mapEmailLinkAuthError({ code: "auth/operation-not-allowed" })
    ).toContain("Email link");
  });

  it("never returns Firebase internal details", () => {
    const message = mapEmailLinkAuthError({
      code: "auth/internal-error",
      message: "SECRET STACK TRACE",
    });
    expect(message).toBe("Something went wrong. Please try again.");
    expect(message).not.toContain("SECRET");
  });
});
