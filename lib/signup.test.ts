import { describe, expect, it } from "vitest";
import { validateSignupBody } from "@/lib/signup";

const validBody = {
  name: "Ada Lovelace",
  email: "Ada@Example.COM",
  phone: "+1 (555) 000-0000",
  country: "US",
  dialCode: "+1",
};

describe("validateSignupBody", () => {
  it("accepts a valid payload and normalizes email", () => {
    const result = validateSignupBody(validBody);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.email).toBe("ada@example.com");
    expect(result.data.country).toBe("US");
    expect(result.data.dialCode).toBe("+1");
  });

  it("rejects non-object bodies", () => {
    expect(validateSignupBody(null).ok).toBe(false);
    expect(validateSignupBody([]).ok).toBe(false);
    expect(validateSignupBody("x").ok).toBe(false);
  });

  it("rejects unexpected fields", () => {
    const result = validateSignupBody({
      ...validBody,
      status: "new",
    });
    expect(result).toEqual({ ok: false, error: "Invalid request body." });
  });

  it("rejects missing required fields", () => {
    const { name: _name, ...withoutName } = validBody;
    expect(validateSignupBody(withoutName).ok).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = validateSignupBody({ ...validBody, email: "not-an-email" });
    expect(result).toEqual({
      ok: false,
      error: "Please enter a valid email address.",
    });
  });

  it("rejects invalid phone", () => {
    const result = validateSignupBody({ ...validBody, phone: "abc" });
    expect(result.ok).toBe(false);
  });

  it("rejects unknown country", () => {
    const result = validateSignupBody({ ...validBody, country: "ZZ" });
    expect(result).toEqual({
      ok: false,
      error: "Please select a valid country.",
    });
  });

  it("rejects mismatched dialCode", () => {
    const result = validateSignupBody({ ...validBody, dialCode: "+999" });
    expect(result).toEqual({
      ok: false,
      error: "Invalid country dial code.",
    });
  });

  it("accepts payload without dialCode and derives it", () => {
    const { dialCode: _dialCode, ...withoutDial } = validBody;
    const result = validateSignupBody(withoutDial);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.dialCode).toBe("+1");
  });

  it("rejects oversized name", () => {
    const result = validateSignupBody({
      ...validBody,
      name: "a".repeat(121),
    });
    expect(result.ok).toBe(false);
  });
});
