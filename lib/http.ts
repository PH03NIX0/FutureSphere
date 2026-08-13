import { NextResponse } from "next/server";

export function jsonError(error: string, status: number): NextResponse {
  return NextResponse.json({ error }, { status });
}

export function jsonOk(): NextResponse {
  return NextResponse.json({ ok: true });
}

export function methodNotAllowed(): NextResponse {
  return jsonError("Method not allowed.", 405);
}

export type JsonBodyResult =
  | { ok: true; body: unknown }
  | { ok: false; response: NextResponse };

/** Rejects malformed JSON with a safe 400 response. */
export async function readJsonBody(request: Request): Promise<JsonBodyResult> {
  try {
    const body = await request.json();
    return { ok: true, body };
  } catch {
    return { ok: false, response: jsonError("Invalid JSON body.", 400) };
  }
}
