import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "firestore-rules",
    include: ["firebase/tests/**/*.test.ts"],
    testTimeout: 20000,
    hookTimeout: 30000,
    fileParallelism: false,
  },
});
