import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import { getAdminFirestore } from "@/lib/firebase/admin";
import {
  NEWSLETTER_COLLECTION,
  isValidNewsletterEmail,
  isValidNewsletterSource,
  newsletterDocId,
  normalizeNewsletterEmail,
} from "@/lib/newsletter";

export const runtime = "nodejs";

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
    let body: NewsletterBody;
    try {
      body = (await request.json()) as NewsletterBody;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    if (typeof body.email !== "string" || !isValidNewsletterEmail(body.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const source = body.source ?? "newsletter-section";
    if (!isValidNewsletterSource(source)) {
      return NextResponse.json({ error: "Invalid source." }, { status: 400 });
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
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
