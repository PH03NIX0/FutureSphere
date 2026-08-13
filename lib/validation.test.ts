import { describe, expect, it } from "vitest";
import {
  normalizeText,
  parseAllowedObjectBody,
} from "@/lib/validation";

describe("normalizeText", () => {
  it("trims and collapses whitespace", () => {
    expect(normalizeText("  Ada   Lovelace ")).toBe("Ada Lovelace");
  });

  it("rejects non-strings", () => {
    expect(normalizeText(null)).toBeNull();
    expect(normalizeText(1)).toBeNull();
  });
});

describe("parseAllowedObjectBody", () => {
  const allowed = new Set(["name", "email"]);

  it("accepts allowed keys", () => {
    const result = parseAllowedObjectBody(
      { name: "Ada", email: "a@b.co" },
      allowed
    );
    expect(result.ok).toBe(true);
  });

  it("rejects unexpected keys and non-objects", () => {
    expect(parseAllowedObjectBody({ name: "Ada", status: "new" }, allowed)).toEqual({
      ok: false,
      error: "Invalid request body.",
    });
    expect(parseAllowedObjectBody(null, allowed).ok).toBe(false);
    expect(parseAllowedObjectBody([], allowed).ok).toBe(false);
  });
});
