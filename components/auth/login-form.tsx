"use client";

import { useState } from "react";
import AuthButton from "@/components/auth/auth-button";

type FormState = "idle" | "loading" | "success" | "error";

const inputClassName =
  "h-[48px] w-full rounded-input border border-fs-border-light bg-white px-3.5 font-body text-[15px] leading-[22px] text-fs-dark outline-none transition-shadow placeholder:text-fs-grey/60 focus:ring-2 focus:ring-fs-purple/40 focus:border-fs-purple/40";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEmail("");
      setFormState("success");
      setTimeout(() => setFormState("idle"), 4000);
    } catch {
      setFormState("error");
    }
  };

  let buttonLabel = "Get Magic Link";
  if (formState === "loading") buttonLabel = "Sending...";
  if (formState === "success") buttonLabel = "Link sent!";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 rounded-blog border border-fs-border bg-white p-5 shadow-[0_8px_30px_rgba(27,21,43,0.06)] sm:gap-6 sm:p-8"
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
          onChange={(e) => setEmail(e.target.value)}
          placeholder="futuresphere@gmail.com"
          className={inputClassName}
          disabled={formState === "loading" || formState === "success"}
        />
      </div>

      {formState === "success" ? (
        <p className="font-body text-[13px] text-fs-purple" role="status">
          Check your inbox for a magic sign-in link.
        </p>
      ) : null}

      {formState === "error" ? (
        <p className="font-body text-[13px] text-red-600" role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <AuthButton
        type="submit"
        variant="magic"
        fullWidth
        disabled={formState === "loading" || formState === "success"}
        showMagicIcon={formState === "idle" || formState === "error"}
      >
        {buttonLabel}
      </AuthButton>
    </form>
  );
}
