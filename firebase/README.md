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

