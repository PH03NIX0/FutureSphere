/**
 * Public Firebase web config (safe for the browser).
 * Secrets must never live here — use Admin env vars server-side only.
 */
export type FirebaseWebConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
};

function requiredPublicEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Add it to .env.local (see .env.example).`
    );
  }
  return value;
}

export function getFirebaseWebConfig(): FirebaseWebConfig {
  const config: FirebaseWebConfig = {
    apiKey: requiredPublicEnv("NEXT_PUBLIC_FIREBASE_API_KEY"),
    authDomain: requiredPublicEnv("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"),
    projectId: requiredPublicEnv("NEXT_PUBLIC_FIREBASE_PROJECT_ID"),
    storageBucket: requiredPublicEnv("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: requiredPublicEnv(
      "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
    ),
    appId: requiredPublicEnv("NEXT_PUBLIC_FIREBASE_APP_ID"),
  };

  const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;
  if (measurementId) {
    config.measurementId = measurementId;
  }

  return config;
}
