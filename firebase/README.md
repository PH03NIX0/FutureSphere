# Firebase foundation

This project uses Firebase for Auth and Firestore. Application features are wired in later stages.

## Local setup

1. Copy `.env.example` → `.env.local` and fill in values.
2. Public `NEXT_PUBLIC_FIREBASE_*` vars come from Firebase Console → Project settings → Your apps.
3. Admin vars come from a service account JSON (Project settings → Service accounts). Never commit that JSON.

## Emulators

```bash
npm run emulators
```

- Emulator UI: http://localhost:4000
- Firestore: `127.0.0.1:8080`
- Auth: `127.0.0.1:9099`

## Security rules tests

Requires **Java 21+** on your PATH (Firestore emulator dependency). Also run `npx firebase login` once.

```bash
npm run test:rules
```

This starts the Firestore emulator, runs Vitest, then stops the emulator.

## Deploy rules (only after tests pass)

```bash
npx firebase deploy --only firestore:rules
```

Do not deploy open/test-mode rules.

## Newsletter

`POST /api/newsletter` accepts `{ email, source }` and writes to `newsletterSubscriptions` via the Admin SDK. Clients cannot read or write this collection (see `firestore.rules`).

## Contact

`POST /api/contact` accepts `{ firstName, lastName, email, subject, message, services, agreed }` and writes to `contactSubmissions` via the Admin SDK. Services must be a non-empty subset of: Web Design, App Design, Consulting, Marketing. Clients cannot read or write this collection.

## Signup requests

`POST /api/signup` accepts `{ name, email, phone, country, dialCode? }` and writes to `signupRequests` via the Admin SDK. `country` must be one of: US, GB, NG, CA. When `dialCode` is provided it must match that country; otherwise the server derives it. Clients cannot read or write this collection.

## Magic link sign-in (Stage 5A)

Client-only flow on `/login` using the Firebase Web SDK:

1. `sendSignInLinkToEmail` with `ActionCodeSettings` (`handleCodeInApp: true`, continue URL `/login`)
2. Email stored in `localStorage` (`emailForSignIn`) for the return trip
3. On return, `isSignInWithEmailLink` + `signInWithEmailLink` complete auth

### Firebase Console (manual)

1. **Authentication → Sign-in method → Email/Password**: enable the provider, then enable **Email link (passwordless sign-in)**.
2. **Authentication → Settings → Authorized domains**: include `localhost` and your production Vercel domain (plus any preview domains you use for magic-link testing).
3. No Admin credentials are used for this flow.

Optional env: `NEXT_PUBLIC_APP_URL` overrides the continue-URL origin (defaults to `window.location.origin`).

## Auth session (Stage 5B)

- `AuthProvider` (root layout) listens with `onAuthStateChanged`.
- Session persistence: Firebase `browserLocalPersistence` (survives refresh and navigation).
- Logout: Firebase Client `signOut`, exposed on `/login` when authenticated.
- No site-wide route gates yet — the marketing site has no authenticated-only areas.
- **`users/{uid}` is intentionally deferred**: Auth alone covers Stage 5B; no feature needs durable user profile documents yet. Existing Firestore rules for `users/{uid}` remain reserved for a later stage and are unchanged.

