"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { User } from "firebase/auth";

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export type AuthContextValue = {
  status: AuthStatus;
  user: User | null;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Site-wide Firebase Auth state. Uses onAuthStateChanged so magic-link,
 * future Google sign-in, and refresh all share one session model.
 * Persistence is the Firebase browser local persistence (survives refresh).
 *
 * Firebase is loaded via dynamic import so the root layout chunk stays small
 * (static firebase/auth in layout caused multi‑MB ChunkLoadError timeouts).
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let cancelled = false;
    let unsubscribe: (() => void) | undefined;

    void (async () => {
      try {
        const [{ browserLocalPersistence, onAuthStateChanged, setPersistence }, { getClientAuth }] =
          await Promise.all([
            import("firebase/auth"),
            import("@/lib/firebase/client"),
          ]);

        if (cancelled) return;

        const auth = getClientAuth();

        // Ensures future sign-ins persist across refresh; existing sessions already use SDK defaults.
        void setPersistence(auth, browserLocalPersistence).catch(() => {
          // Default SDK persistence still applies if this fails.
        });

        unsubscribe = onAuthStateChanged(
          auth,
          (nextUser) => {
            if (cancelled) return;
            setUser(nextUser);
            setStatus(nextUser ? "authenticated" : "unauthenticated");
          },
          () => {
            if (cancelled) return;
            // Observer error — treat as signed out without exposing internals.
            setUser(null);
            setStatus("unauthenticated");
          }
        );
      } catch {
        if (cancelled) return;
        setUser(null);
        setStatus("unauthenticated");
      }
    })();

    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, []);

  const signOut = useCallback(async () => {
    const [{ signOut: firebaseSignOut }, { getClientAuth }] = await Promise.all([
      import("firebase/auth"),
      import("@/lib/firebase/client"),
    ]);
    await firebaseSignOut(getClientAuth());
  }, []);

  const value = useMemo(
    () => ({
      status,
      user,
      signOut,
    }),
    [status, user, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within AuthProvider.");
  }
  return value;
}
