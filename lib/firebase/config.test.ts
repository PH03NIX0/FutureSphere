import { describe, expect, it } from "vitest";
import { getFirebaseWebConfig } from "@/lib/firebase/config";

describe("getFirebaseWebConfig", () => {
  it("reads statically referenced NEXT_PUBLIC Firebase env vars", () => {
    const previous = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    process.env.NEXT_PUBLIC_FIREBASE_API_KEY = "test-api-key";
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = "example.firebaseapp.com";
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = "example";
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = "example.appspot.com";
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "123";
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID = "1:123:web:abc";

    try {
      expect(getFirebaseWebConfig()).toMatchObject({
        apiKey: "test-api-key",
        authDomain: "example.firebaseapp.com",
        projectId: "example",
        storageBucket: "example.appspot.com",
        messagingSenderId: "123",
        appId: "1:123:web:abc",
      });
    } finally {
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY = previous.apiKey;
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = previous.authDomain;
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = previous.projectId;
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = previous.storageBucket;
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID =
        previous.messagingSenderId;
      process.env.NEXT_PUBLIC_FIREBASE_APP_ID = previous.appId;
    }
  });
});
