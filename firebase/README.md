# Firebase foundation

This project uses Firebase for Auth and Firestore. Application features are wired in later stages.

## Local setup

1. Copy `.env.example` → `.env.local` and fill in values.
2. Public `NEXT_PUBLIC_FIREBASE_*` vars come from Firebase Console → Project settings → Your apps.
3. Admin vars come from a service account JSON (Project settings → Service accounts). Never commit that JSON.

## Deploying (Vercel / Netlify)

The backend is the Next.js route handlers under `app/api/` (`/api/contact`, `/api/newsletter`, `/api/signup`, `/api/upload`). They run locally because `.env.local` is loaded by `next dev`. That file is gitignored, so hosts never see those secrets unless you add them in the dashboard.

### Environment variables

Copy every key from `.env.example` into the host:

- **Vercel:** Project → Settings → Environment Variables (Production + Preview), then Redeploy.
- **Netlify:** Site configuration → Environment variables, then trigger a new deploy.

`NEXT_PUBLIC_*` values are inlined at **build** time. Changing them requires a fresh deploy, not just a runtime update.

For `FIREBASE_ADMIN_PRIVATE_KEY`, paste the PEM as one quoted line with `\n` for newlines. If the host still rejects the key, set `FIREBASE_ADMIN_PRIVATE_KEY_BASE64` instead (base64 of the full PEM).

### Netlify

This app is not a static site. Netlify must use the Next.js runtime (`publish = .next` in `netlify.toml`). A static publish directory (`out`, `dist`, or drag-and-drop HTML) will serve the UI and 404 every `/api/*` route.

**Secrets scanning:** Do not mark `FIREBASE_ADMIN_PROJECT_ID` (or any `NEXT_PUBLIC_*` / Cloudinary cloud name) as “Contains secret values”. The project ID is public — it lives in `.firebaserc` and is inlined into the client bundle via `NEXT_PUBLIC_FIREBASE_PROJECT_ID`. Marking it secret makes Netlify fail the build. `netlify.toml` already sets `SECRETS_SCAN_OMIT_KEYS` for those non-secret keys. Keep secret only real credentials (`FIREBASE_ADMIN_PRIVATE_KEY`, `FIREBASE_ADMIN_CLIENT_EMAIL`, `CLOUDINARY_API_SECRET`, etc.). Admin already falls back to `NEXT_PUBLIC_FIREBASE_PROJECT_ID` if `FIREBASE_ADMIN_PROJECT_ID` is unset.

### Firebase Auth domains

Magic-link `sendSignInLinkToEmail` fails with Firebase `UNAUTHORIZED_DOMAIN` / `auth/unauthorized-continue-uri` (UI used to show only “Something went wrong”) when the continue-URL host is missing from Authorized domains.

Continue URL is `{window.location.origin}/login` unless `NEXT_PUBLIC_APP_URL` overrides the origin at build time.

For the current Vercel production host, add:

- `future-sphere-blush.vercel.app`

Also add any Netlify hostname and custom domain you use. `localhost` is allowed by default. Do **not** set `NEXT_PUBLIC_APP_URL` to a host that isn’t allowlisted (or to localhost in a production build).

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

1. `sendSignInLinkToEmail` with `ActionCodeSettings` (`handleCodeInApp: true`, continue URL `/login?email=...`)
2. Email stored in `localStorage` (`emailForSignIn`) and embedded in the continue URL for the return trip
3. On return, the page **does not** auto-complete sign-in (email prefetchers would burn the one-time `oobCode`). The user confirms email and clicks **Finish sign-in**, which calls `signInWithEmailLink`

### Firebase Console (manual)

1. **Authentication → Sign-in method → Email/Password**: enable the provider, then enable **Email link (passwordless sign-in)**.
2. **Authentication → Settings → Authorized domains**: include `localhost`, your production Vercel domain (e.g. `future-sphere-blush.vercel.app`), plus any Netlify / custom domains you use for magic-link testing.
3. No Admin credentials are used for this flow.

Optional env: `NEXT_PUBLIC_APP_URL` overrides the continue-URL origin (defaults to `window.location.origin`).

## Auth session (Stage 5B)

- `AuthProvider` (root layout) listens with `onAuthStateChanged`.
- Session persistence: Firebase `browserLocalPersistence` (survives refresh and navigation).
- Logout: Firebase Client `signOut`, exposed on `/login` when authenticated.
- No site-wide route gates yet — the marketing site has no authenticated-only areas.
- **`users/{uid}` is intentionally deferred**: Auth alone covers Stage 5B; no feature needs durable user profile documents yet. Existing Firestore rules for `users/{uid}` remain reserved for a later stage and are unchanged.

