"use client";

import { useEffect, useRef, useState } from "react";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  type Auth,
} from "firebase/auth";
import AuthButton from "@/components/auth/auth-button";
import { authInputClassName } from "@/components/auth/auth-styles";
import { useAuth } from "@/components/auth/auth-provider";
import { isValidEmail, normalizeEmail } from "@/lib/email";
import {
  buildEmailLinkActionCodeSettings,
  clearEmailForSignIn,
  getEmailForSignIn,
  getEmailFromContinueUrl,
  getMagicLinkContinueUrl,
  mapEmailLinkAuthError,
  storeEmailForSignIn,
} from "@/lib/auth/email-link";
import { mapSignOutAuthError } from "@/lib/auth/session";
import { getClientAuth } from "@/lib/firebase/client";

type FormState =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "completing"
  | "awaitingEmail";

const cardClassName =
  "flex w-full flex-col gap-5 rounded-blog border border-fs-border bg-white p-5 shadow-[0_8px_30px_rgba(27,21,43,0.06)] sm:gap-6 sm:p-8";

function stripAuthParamsFromUrl(): void {
  if (typeof window === "undefined") return;
  window.history.replaceState(null, "", "/login");
}

export default function LoginForm() {
  const { status, user, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong. Please try again."
  );
  const [logoutError, setLogoutError] = useState<string | null>(null);
  const [signingOut, setSigningOut] = useState(false);
  /** Full email-link href captured on land — oobCode must not be consumed until the user clicks. */
  const emailLinkHrefRef = useRef<string | null>(null);

  useEffect(() => {
    let auth: Auth;
    try {
      auth = getClientAuth();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setFormState("error");
      return;
    }

    const href = window.location.href;
    if (!isSignInWithEmailLink(auth, href)) return;

    // Do NOT call signInWithEmailLink here. Prefetchers / Safe Links often GET
    // this URL and would burn the one-time oobCode before the user clicks.
    emailLinkHrefRef.current = href;
    const knownEmail =
      getEmailForSignIn(window.localStorage) ?? getEmailFromContinueUrl(href);
    if (knownEmail) {
      setEmail(knownEmail);
    }
    setFormState("awaitingEmail");
  }, []);

  const handleSignOut = async () => {
    setSigningOut(true);
    setLogoutError(null);
    try {
      await signOut();
      setFormState("idle");
      emailLinkHrefRef.current = null;
    } catch (error) {
      setLogoutError(mapSignOutAuthError(error));
    } finally {
      setSigningOut(false);
    }
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setFormState("error");
      return;
    }

    const normalized = normalizeEmail(email);
    const auth = getClientAuth();
    const linkHref = emailLinkHrefRef.current ?? window.location.href;
    const onEmailLinkReturn =
      formState === "awaitingEmail" || Boolean(emailLinkHrefRef.current);

    // Finish sign-in only on an explicit user click (not on mount).
    if (onEmailLinkReturn) {
      if (!isSignInWithEmailLink(auth, linkHref)) {
        setErrorMessage(
          "This sign-in link is invalid or has already been used. Request a new one (some email apps preview links and use them up)."
        );
        setFormState("error");
        emailLinkHrefRef.current = null;
        return;
      }

      setFormState("completing");
      setErrorMessage("Something went wrong. Please try again.");
      try {
        await signInWithEmailLink(auth, normalized, linkHref);
        clearEmailForSignIn(window.localStorage);
        emailLinkHrefRef.current = null;
        stripAuthParamsFromUrl();
      } catch (error) {
        // Keep oobCode in the URL/ref so the user can fix the email and retry
        // once — unless the code was already consumed.
        setErrorMessage(mapEmailLinkAuthError(error));
        setFormState("awaitingEmail");
      }
      return;
    }

    setFormState("loading");
    setErrorMessage("Something went wrong. Please try again.");

    try {
      const continueUrl = getMagicLinkContinueUrl(
        window.location.origin,
        process.env.NEXT_PUBLIC_APP_URL,
        normalized
      );
      const actionCodeSettings = buildEmailLinkActionCodeSettings(continueUrl);
      await sendSignInLinkToEmail(auth, normalized, actionCodeSettings);
      // Same success path for all valid emails — avoid account enumeration.
      storeEmailForSignIn(normalized, window.localStorage);
      setFormState("success");
    } catch (error) {
      setErrorMessage(mapEmailLinkAuthError(error));
      setFormState("error");
    }
  };

  if (status === "loading" && formState !== "completing" && formState !== "awaitingEmail") {
    return (
      <div className={cardClassName} aria-busy="true">
        <p className="font-body text-[13px] text-fs-purple" role="status">
          Checking sign-in...
        </p>
      </div>
    );
  }

  if (status === "authenticated" && user) {
    return (
      <div className={cardClassName}>
        <p className="font-body text-[13px] text-fs-purple" role="status">
          You&apos;re signed in
          {user.email ? ` as ${user.email}` : ""}.
        </p>

        {logoutError ? (
          <p className="font-body text-[13px] text-red-600" role="alert">
            {logoutError}
          </p>
        ) : null}

        <AuthButton
          type="button"
          variant="solid"
          fullWidth
          disabled={signingOut}
          onClick={() => {
            void handleSignOut();
          }}
        >
          {signingOut ? "Signing out..." : "Sign out"}
        </AuthButton>
      </div>
    );
  }

  const inputDisabled =
    formState === "loading" ||
    formState === "success" ||
    formState === "completing";

  const buttonDisabled =
    formState === "loading" ||
    formState === "success" ||
    formState === "completing";

  let buttonLabel = "Get Magic Link";
  if (formState === "loading") buttonLabel = "Sending...";
  if (formState === "success") buttonLabel = "Link sent!";
  if (formState === "completing") buttonLabel = "Signing you in...";
  if (formState === "awaitingEmail") buttonLabel = "Finish sign-in";

  return (
    <form
      onSubmit={handleSubmit}
      className={cardClassName}
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="login-email" className="font-body text-[13px] font-medium leading-[18px] text-fs-grey">
          Email
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (formState === "error") {
              setFormState(emailLinkHrefRef.current ? "awaitingEmail" : "idle");
            }
          }}
          placeholder="futuresphere@gmail.com"
          className={authInputClassName}
          disabled={inputDisabled}
        />
      </div>

      {formState === "success" ? (
        <p className="font-body text-[13px] text-fs-purple" role="status">
          Check your inbox for a magic sign-in link. Open it on this device, then
          tap Finish sign-in.
        </p>
      ) : null}

      {formState === "awaitingEmail" ? (
        <p className="font-body text-[13px] text-fs-purple" role="status">
          Confirm your email and tap Finish sign-in to complete login.
        </p>
      ) : null}

      {formState === "completing" ? (
        <p className="font-body text-[13px] text-fs-purple" role="status">
          Signing you in...
        </p>
      ) : null}

      {formState === "error" ? (
        <p className="font-body text-[13px] text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <AuthButton
        type="submit"
        variant="magic"
        fullWidth
        disabled={buttonDisabled}
        showMagicIcon={
          formState === "idle" ||
          formState === "error" ||
          formState === "awaitingEmail"
        }
      >
        {buttonLabel}
      </AuthButton>
    </form>
  );
}
