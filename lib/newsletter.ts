/** Shared newsletter helpers (safe to import from client or server). */

import { isValidEmail, normalizeEmail } from "@/lib/email";

export const NEWSLETTER_COLLECTION = "newsletterSubscriptions";

export const NEWSLETTER_SOURCES = ["newsletter-section"] as const;
export type NewsletterSource = (typeof NEWSLETTER_SOURCES)[number];

export function normalizeNewsletterEmail(email: string): string {
  return normalizeEmail(email);
}

export function isValidNewsletterEmail(email: string): boolean {
  return isValidEmail(email);
}

export function isValidNewsletterSource(
  source: unknown
): source is NewsletterSource {
  return (
    typeof source === "string" &&
    (NEWSLETTER_SOURCES as readonly string[]).includes(source)
  );
}

/** Firestore doc id from email — enables dedupe without public reads. */
export function newsletterDocId(email: string): string {
  return normalizeNewsletterEmail(email).replace(/\//g, "_");
}
