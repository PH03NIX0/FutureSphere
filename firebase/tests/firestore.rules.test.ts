import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  type RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import { doc, getDoc, setDoc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { afterAll, beforeAll, beforeEach, describe, it } from "vitest";

const PROJECT_ID = "celtic-current-369406";
const RULES_PATH = resolve(process.cwd(), "firestore.rules");

let testEnv: RulesTestEnvironment;

beforeAll(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      rules: readFileSync(RULES_PATH, "utf8"),
      host: "127.0.0.1",
      port: 8080,
    },
  });
});

afterAll(async () => {
  await testEnv.cleanup();
});

beforeEach(async () => {
  await testEnv.clearFirestore();
});

describe("Firestore security rules", () => {
  it("denies unauthenticated read of users/{uid}", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "users/user-a"), {
        email: "a@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const anon = testEnv.unauthenticatedContext();
    await assertFails(getDoc(doc(anon.firestore(), "users/user-a")));
  });

  it("allows a user to read their own profile", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "users/user-a"), {
        email: "a@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const user = testEnv.authenticatedContext("user-a");
    await assertSucceeds(getDoc(doc(user.firestore(), "users/user-a")));
  });

  it("denies a user reading another user's profile", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "users/user-a"), {
        email: "a@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const other = testEnv.authenticatedContext("user-b");
    await assertFails(getDoc(doc(other.firestore(), "users/user-a")));
  });

  it("allows a user to create their own valid profile", async () => {
    const user = testEnv.authenticatedContext("user-a");
    await assertSucceeds(
      setDoc(doc(user.firestore(), "users/user-a"), {
        email: "a@example.com",
        displayName: "Ada",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    );
  });

  it("denies profile create with disallowed fields (e.g. role)", async () => {
    const user = testEnv.authenticatedContext("user-a");
    await assertFails(
      setDoc(doc(user.firestore(), "users/user-a"), {
        email: "a@example.com",
        role: "admin",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    );
  });

  it("denies creating a profile for another uid", async () => {
    const user = testEnv.authenticatedContext("user-a");
    await assertFails(
      setDoc(doc(user.firestore(), "users/user-b"), {
        email: "b@example.com",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    );
  });

  it("allows updating displayName only", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "users/user-a"), {
        email: "a@example.com",
        displayName: "Ada",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const user = testEnv.authenticatedContext("user-a");
    await assertSucceeds(
      updateDoc(doc(user.firestore(), "users/user-a"), {
        displayName: "Ada Lovelace",
        updatedAt: serverTimestamp(),
      })
    );
  });

  it("denies client changing email", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "users/user-a"), {
        email: "a@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const user = testEnv.authenticatedContext("user-a");
    await assertFails(
      updateDoc(doc(user.firestore(), "users/user-a"), {
        email: "hacker@example.com",
        updatedAt: serverTimestamp(),
      })
    );
  });

  it("denies client delete of own profile", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "users/user-a"), {
        email: "a@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const user = testEnv.authenticatedContext("user-a");
    await assertFails(deleteDoc(doc(user.firestore(), "users/user-a")));
  });

  it("denies unauthenticated create on newsletterSubscriptions", async () => {
    const anon = testEnv.unauthenticatedContext();
    await assertFails(
      setDoc(doc(anon.firestore(), "newsletterSubscriptions/abc"), {
        email: "n@example.com",
      })
    );
  });

  it("denies authenticated create on contactSubmissions", async () => {
    const user = testEnv.authenticatedContext("user-a");
    await assertFails(
      setDoc(doc(user.firestore(), "contactSubmissions/abc"), {
        email: "c@example.com",
        message: "hello",
      })
    );
  });

  it("denies unauthenticated create on contactSubmissions", async () => {
    const anon = testEnv.unauthenticatedContext();
    await assertFails(
      setDoc(doc(anon.firestore(), "contactSubmissions/abc"), {
        firstName: "Ada",
        lastName: "Lovelace",
        email: "ada@example.com",
        subject: "Hello",
        message: "Test",
        services: ["Web Design"],
      })
    );
  });

  it("denies unauthenticated read of contactSubmissions", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "contactSubmissions/abc"), {
        email: "c@example.com",
        message: "secret",
      });
    });

    const anon = testEnv.unauthenticatedContext();
    await assertFails(getDoc(doc(anon.firestore(), "contactSubmissions/abc")));
  });

  it("denies authenticated read of signupRequests", async () => {
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "signupRequests/abc"), {
        email: "s@example.com",
        name: "Sam",
      });
    });

    const user = testEnv.authenticatedContext("user-a");
    await assertFails(getDoc(doc(user.firestore(), "signupRequests/abc")));
  });
});
