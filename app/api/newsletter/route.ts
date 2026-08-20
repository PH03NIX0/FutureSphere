import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebase/admin";
import {
  jsonError,
  jsonOk,
  methodNotAllowed,
  readJsonBody,
} from "@/lib/http";
import {
  NEWSLETTER_COLLECTION,
  isValidNewsletterEmail,
  isValidNewsletterSource,
  newsletterDocId,
  normalizeNewsletterEmail,
} from "@/lib/newsletter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type NewsletterBody = {
  email?: unknown;
  source?: unknown;
};

/**
 * Public newsletter subscribe endpoint.
 * Writes via Admin SDK (bypasses rules). Clients cannot read this collection.
 */
export async function POST(request: Request) {
  try {
    const parsed = await readJsonBody(request);
    if (!parsed.ok) return parsed.response;

    const body = parsed.body as NewsletterBody;

    if (typeof body.email !== "string" || !isValidNewsletterEmail(body.email)) {
      return jsonError("Please enter a valid email address.", 400);
    }

    const source = body.source ?? "newsletter-section";
    if (!isValidNewsletterSource(source)) {
      return jsonError("Invalid source.", 400);
    }

    const email = normalizeNewsletterEmail(body.email);
    const docId = newsletterDocId(email);
    const db = getAdminFirestore();
    const ref = db.collection(NEWSLETTER_COLLECTION).doc(docId);
    const existing = await ref.get();

    if (existing.exists) {
      await ref.set(
        {
          email,
          source,
          status: "active",
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    } else {
      await ref.set({
        email,
        source,
        status: "active",
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
    }

    // Same response whether new or existing — avoid email enumeration
    return jsonOk();
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return jsonError("Something went wrong. Please try again.", 500);
  }
}

export async function GET() {
  return methodNotAllowed();
}
