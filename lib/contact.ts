import { isValidEmail, normalizeEmail } from "@/lib/email";
import {
  normalizeText,
  parseAllowedObjectBody,
  type ValidationResult,
} from "@/lib/validation";

export const CONTACT_COLLECTION = "contactSubmissions";

export const CONTACT_SERVICES = [
  "Web Design",
  "App Design",
  "Consulting",
  "Marketing",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

const ALLOWED_BODY_KEYS = new Set([
  "firstName",
  "lastName",
  "email",
  "subject",
  "message",
  "services",
  "agreed",
]);

const LIMITS = {
  firstName: { min: 1, max: 80 },
  lastName: { min: 1, max: 80 },
  subject: { min: 1, max: 200 },
  message: { min: 1, max: 5000 },
} as const;

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  services: ContactService[];
};

export type ContactValidationResult = ValidationResult<ContactPayload>;

function isAllowedService(value: string): value is ContactService {
  return (CONTACT_SERVICES as readonly string[]).includes(value);
}

function parseServices(value: unknown): ContactService[] | null {
  if (!Array.isArray(value)) return null;

  const normalized: ContactService[] = [];
  for (const item of value) {
    if (typeof item !== "string") return null;
    const service = item.trim();
    if (!isAllowedService(service)) return null;
    if (!normalized.includes(service)) {
      normalized.push(service);
    }
  }

  return normalized.length > 0 ? normalized : null;
}

/**
 * Strict server-side validation. Rejects unexpected keys and invalid services.
 */
export function validateContactBody(body: unknown): ContactValidationResult {
  const parsed = parseAllowedObjectBody(body, ALLOWED_BODY_KEYS);
  if (!parsed.ok) return parsed;

  const record = parsed.data;

  if (record.agreed !== true) {
    return { ok: false, error: "Please agree to the terms before submitting." };
  }

  const firstName = normalizeText(record.firstName);
  const lastName = normalizeText(record.lastName);
  const subject = normalizeText(record.subject);
  const message =
    typeof record.message === "string" ? record.message.trim() : null;

  if (
    !firstName ||
    firstName.length < LIMITS.firstName.min ||
    firstName.length > LIMITS.firstName.max
  ) {
    return { ok: false, error: "Please enter a valid first name." };
  }
  if (
    !lastName ||
    lastName.length < LIMITS.lastName.min ||
    lastName.length > LIMITS.lastName.max
  ) {
    return { ok: false, error: "Please enter a valid last name." };
  }
  if (typeof record.email !== "string" || !isValidEmail(record.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (
    !subject ||
    subject.length < LIMITS.subject.min ||
    subject.length > LIMITS.subject.max
  ) {
    return { ok: false, error: "Please enter a valid subject." };
  }
  if (
    !message ||
    message.length < LIMITS.message.min ||
    message.length > LIMITS.message.max
  ) {
    return { ok: false, error: "Please enter a valid message." };
  }

  const services = parseServices(record.services);
  if (!services) {
    return { ok: false, error: "Please select at least one valid service." };
  }

  return {
    ok: true,
    data: {
      firstName,
      lastName,
      email: normalizeEmail(record.email),
      subject,
      message,
      services,
    },
  };
}
