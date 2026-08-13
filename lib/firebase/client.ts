import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirebaseWebConfig } from "@/lib/firebase/config";

/**
 * Browser-only Firebase app. Do not import this from Server Components
 * or Route Handlers — use `@/lib/firebase/admin` on the server instead.
 *
 * Keep this module auth-only: importing Firestore here would pull that SDK
 * into every client that needs Auth (including the root layout provider).
 */
export function getFirebaseApp(): FirebaseApp {
  if (typeof window === "undefined") {
    throw new Error(
      "getFirebaseApp() is client-only. Use the Admin SDK on the server."
    );
  }

  if (getApps().length > 0) {
    return getApp();
  }

  return initializeApp(getFirebaseWebConfig());
}

export function getClientAuth(): Auth {
  return getAuth(getFirebaseApp());
}
