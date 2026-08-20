import "server-only";

import {
  applicationDefault,
  cert,
  getApps,
  initializeApp,
  type App,
} from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getAdminPrivateKeyFromEnv } from "@/lib/firebase/admin-credentials";

/**
 * Server-only Firebase Admin. Never import this into client components.
 * Admin credentials bypass Security Rules — keep them out of the browser.
 */

function createAdminApp(): App {
  if (getApps().length > 0) {
    return getApps()[0]!;
  }

  const projectId =
    process.env.FIREBASE_ADMIN_PROJECT_ID ??
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey = getAdminPrivateKeyFromEnv();

  // Prefer explicit service-account fields (local / most hosts).
  if (projectId && clientEmail && privateKey) {
    return initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
      projectId,
    });
  }

  // Fallback for environments that inject Application Default Credentials
  // (e.g. some Google Cloud / CI setups). Still requires a project id.
  if (projectId && process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return initializeApp({
      credential: applicationDefault(),
      projectId,
    });
  }

  throw new Error(
    "Firebase Admin is not configured. Set FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL, and FIREBASE_ADMIN_PRIVATE_KEY (or FIREBASE_ADMIN_PRIVATE_KEY_BASE64) in .env.local and in your host's environment variables (see .env.example)."
  );
}

let adminApp: App | undefined;

export function getAdminApp(): App {
  if (!adminApp) {
    adminApp = createAdminApp();
  }
  return adminApp;
}

export function getAdminAuth(): Auth {
  return getAuth(getAdminApp());
}

export function getAdminFirestore(): Firestore {
  return getFirestore(getAdminApp());
}
