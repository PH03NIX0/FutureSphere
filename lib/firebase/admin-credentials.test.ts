import { describe, expect, it } from "vitest";
import {
  decodeAdminPrivateKeyBase64,
  getAdminPrivateKeyFromEnv,
  normalizeAdminPrivateKey,
} from "@/lib/firebase/admin-credentials";

const pem = "-----BEGIN PRIVATE KEY-----\nABC\n-----END PRIVATE KEY-----\n";

describe("normalizeAdminPrivateKey", () => {
  it("turns escaped newlines into real PEM newlines", () => {
    expect(
      normalizeAdminPrivateKey(
        "-----BEGIN PRIVATE KEY-----\\nABC\\n-----END PRIVATE KEY-----\\n"
      )
    ).toBe(pem);
  });

  it("strips wrapping quotes added by some hosts", () => {
    expect(
      normalizeAdminPrivateKey(
        '"-----BEGIN PRIVATE KEY-----\\nABC\\n-----END PRIVATE KEY-----\\n"'
      )
    ).toBe(pem);
  });

  it("returns undefined for empty values", () => {
    expect(normalizeAdminPrivateKey(undefined)).toBeUndefined();
    expect(normalizeAdminPrivateKey("   ")).toBeUndefined();
  });
});

describe("decodeAdminPrivateKeyBase64", () => {
  it("decodes a base64 PEM", () => {
    expect(decodeAdminPrivateKeyBase64(Buffer.from(pem, "utf8").toString("base64"))).toBe(
      pem
    );
  });
});

describe("getAdminPrivateKeyFromEnv", () => {
  it("prefers the base64 env var when both are set", () => {
    expect(
      getAdminPrivateKeyFromEnv({
        FIREBASE_ADMIN_PRIVATE_KEY: "ignored",
        FIREBASE_ADMIN_PRIVATE_KEY_BASE64: Buffer.from(pem, "utf8").toString("base64"),
      })
    ).toBe(pem);
  });

  it("falls back to FIREBASE_ADMIN_PRIVATE_KEY", () => {
    expect(
      getAdminPrivateKeyFromEnv({
        FIREBASE_ADMIN_PRIVATE_KEY:
          "-----BEGIN PRIVATE KEY-----\\nABC\\n-----END PRIVATE KEY-----\\n",
      })
    ).toBe(pem);
  });
});
