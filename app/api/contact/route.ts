import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import { CONTACT_COLLECTION, validateContactBody } from "@/lib/contact";
import { getAdminFirestore } from "@/lib/firebase/admin";

export const runtime = "nodejs";

/**
 * Public contact form endpoint.
 * Writes via Admin SDK (bypasses rules). Clients cannot read/write this collection.
 */
export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    const validated = validateContactBody(body);
    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
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

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submit error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
