/**
 * Host-safe Firebase Admin credential parsing.
 * Vercel and Netlify often wrap PEM keys in quotes and keep `\n` as two characters.
 */

export function normalizeAdminPrivateKey(
  raw: string | undefined
): string | undefined {
  if (!raw) return undefined;

  let key = raw;
  const trimmed = key.trim();
  if (!trimmed) return undefined;

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    key = trimmed.slice(1, -1);
  }

  key = key.replace(/\\n/g, "\n");
  if (!key.trim()) return undefined;
  return key;
}

export function decodeAdminPrivateKeyBase64(
  raw: string | undefined
): string | undefined {
  if (!raw?.trim()) return undefined;

  try {
    const decoded = Buffer.from(raw.trim(), "base64").toString("utf8");
    return normalizeAdminPrivateKey(decoded);
  } catch {
    return undefined;
  }
}

export function getAdminPrivateKeyFromEnv(
  env: NodeJS.ProcessEnv = process.env
): string | undefined {
  return (
    decodeAdminPrivateKeyBase64(env.FIREBASE_ADMIN_PRIVATE_KEY_BASE64) ??
    normalizeAdminPrivateKey(env.FIREBASE_ADMIN_PRIVATE_KEY)
  );
}
