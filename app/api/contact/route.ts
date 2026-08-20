import { FieldValue } from "firebase-admin/firestore";
import { CONTACT_COLLECTION, validateContactBody } from "@/lib/contact";
import { getAdminFirestore } from "@/lib/firebase/admin";
import {
  jsonError,
  jsonOk,
  methodNotAllowed,
  readJsonBody,
} from "@/lib/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Public contact form endpoint.
 * Writes via Admin SDK (bypasses rules). Clients cannot read/write this collection.
 */
export async function POST(request: Request) {
  try {
    const parsed = await readJsonBody(request);
    if (!parsed.ok) return parsed.response;

    const validated = validateContactBody(parsed.body);
    if (!validated.ok) {
      return jsonError(validated.error, 400);
    }

    const { data } = validated;
    const db = getAdminFirestore();

    await db.collection(CONTACT_COLLECTION).add({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      subject: data.subject,
      message: data.message,
      services: data.services,
      status: "new",
      createdAt: FieldValue.serverTimestamp(),
    });

    return jsonOk();
  } catch (error) {
    console.error("Contact submit error:", error);
    return jsonError("Something went wrong. Please try again.", 500);
  }
}

export async function GET() {
  return methodNotAllowed();
}
