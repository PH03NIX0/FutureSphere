/**
 * Shared request-body validation primitives for public form endpoints.
 */

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export function normalizeText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().replace(/\s+/g, " ");
  return trimmed;
}

/**
 * Ensures the body is a non-array object whose keys are a non-empty subset
 * of the allowed set. Rejects unexpected fields.
 */
export function parseAllowedObjectBody(
  body: unknown,
  allowedKeys: ReadonlySet<string>
): ValidationResult<Record<string, unknown>> {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Invalid request body." };
  }

  const record = body as Record<string, unknown>;
  const keys = Object.keys(record);
  if (keys.length === 0 || keys.some((key) => !allowedKeys.has(key))) {
    return { ok: false, error: "Invalid request body." };
  }

  return { ok: true, data: record };
}
