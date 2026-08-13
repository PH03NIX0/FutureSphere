import { isValidEmail, normalizeEmail } from "@/lib/email";
import {
  normalizeText,
  parseAllowedObjectBody,
  type ValidationResult,
} from "@/lib/validation";

export const SIGNUP_COLLECTION = "signupRequests";

export const SIGNUP_COUNTRIES = [
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "NG", dial: "+234" },
  { code: "CA", dial: "+1" },
] as const;

export type SignupCountryCode = (typeof SIGNUP_COUNTRIES)[number]["code"];

const ALLOWED_BODY_KEYS = new Set([
  "name",
  "email",
  "phone",
  "country",
  "dialCode",
]);

const LIMITS = {
  name: { min: 1, max: 120 },
  phone: { min: 5, max: 30 },
} as const;

const PHONE_PATTERN = /^[0-9+()\-\s.]+$/;

export type SignupPayload = {
  name: string;
  email: string;
  phone: string;
  country: SignupCountryCode;
  dialCode: string;
};

export type SignupValidationResult = ValidationResult<SignupPayload>;

function findCountry(code: unknown) {
  if (typeof code !== "string") return null;
  return SIGNUP_COUNTRIES.find((country) => country.code === code) ?? null;
}

/**
 * Strict server-side validation. Rejects unexpected keys and forged dial codes.
 */
export function validateSignupBody(body: unknown): SignupValidationResult {
  const parsed = parseAllowedObjectBody(body, ALLOWED_BODY_KEYS);
  if (!parsed.ok) return parsed;

  const record = parsed.data;

  const name = normalizeText(record.name);
  if (
    !name ||
    name.length < LIMITS.name.min ||
    name.length > LIMITS.name.max
  ) {
    return { ok: false, error: "Please enter a valid name." };
  }

  if (typeof record.email !== "string" || !isValidEmail(record.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const phone = normalizeText(record.phone);
  if (
    !phone ||
    phone.length < LIMITS.phone.min ||
    phone.length > LIMITS.phone.max ||
    !PHONE_PATTERN.test(phone)
  ) {
    return { ok: false, error: "Please enter a valid phone number." };
  }

  const country = findCountry(record.country);
  if (!country) {
    return { ok: false, error: "Please select a valid country." };
  }

  // dialCode is optional in the body; when present it must match the country.
  if (
    "dialCode" in record &&
    (typeof record.dialCode !== "string" || record.dialCode !== country.dial)
  ) {
    return { ok: false, error: "Invalid country dial code." };
  }

  return {
    ok: true,
    data: {
      name,
      email: normalizeEmail(record.email),
      phone,
      country: country.code,
      dialCode: country.dial,
    },
  };
}
