import { describe, expect, it } from "vitest";
import { mapSignOutAuthError } from "@/lib/auth/session";

describe("mapSignOutAuthError", () => {
  it("maps network failures safely", () => {
    expect(mapSignOutAuthError({ code: "auth/network-request-failed" })).toBe(
      "Network error. Please check your connection and try again."
    );
  });

  it("never returns Firebase internal details", () => {
    const message = mapSignOutAuthError({
      code: "auth/internal-error",
      message: "SECRET STACK",
    });
    expect(message).toBe(
      "Something went wrong signing out. Please try again."
    );
    expect(message).not.toContain("SECRET");
  });
});
