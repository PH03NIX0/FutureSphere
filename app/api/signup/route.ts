import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebase/admin";
import {
  jsonError,
  jsonOk,
  methodNotAllowed,
  readJsonBody,
} from "@/lib/http";
import { SIGNUP_COLLECTION, validateSignupBody } from "@/lib/signup";

export const runtime = "nodejs";

/**
 * Public signup-request endpoint.
 * Writes via Admin SDK (bypasses rules). Clients cannot read/write this collection.
 */
export async function POST(request: Request) {
  try {
    const parsed = await readJsonBody(request);
    if (!parsed.ok) return parsed.response;

    const validated = validateSignupBody(parsed.body);
    if (!validated.ok) {
      return jsonError(validated.error, 400);
    }

    const { data } = validated;
    const db = getAdminFirestore();

    await db.collection(SIGNUP_COLLECTION).add({
      name: data.name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      dialCode: data.dialCode,
      status: "new",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return jsonOk();
  } catch (error) {
    console.error("Signup request error:", error);
    return jsonError("Something went wrong. Please try again.", 500);
  }
}

export async function GET() {
  return methodNotAllowed();
}
