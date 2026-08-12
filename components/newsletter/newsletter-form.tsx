"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong. Please try again."
  );
  let buttonLabel: string;

  if (formState === "success") {
    buttonLabel = "Subscribed!";
  } else if (formState === "loading") {
    buttonLabel = "Subscribing...";
  } else {
    buttonLabel = "Subscribe to newsletter";
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("Something went wrong. Please try again.");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "newsletter-section",
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok) {
        setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
        setFormState("error");
        return;
      }

      setEmail("");
      setFormState("success");
      setTimeout(() => setFormState("idle"), 3000);
    } catch {
      setFormState("error");
    }
  };

  return (
    <form
      className="flex w-full flex-col gap-2 sm:max-w-[470px]"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0 sm:items-center sm:h-[48px] sm:bg-white sm:border sm:border-fs-border-light sm:rounded-[12px] sm:p-[3px] sm:shadow-[0_2px_12px_rgba(29,32,36,0.04)] sm:transition-shadow sm:duration-200 sm:focus-within:ring-2 sm:focus-within:ring-[#7F56D9] sm:focus-within:ring-offset-0">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (formState === "error") setFormState("idle");
          }}
          placeholder="Enter your email"
          disabled={formState === "loading" || formState === "success"}
          className="newsletter-input w-full h-[48px] px-4 bg-white border border-fs-border-light rounded-[12px] outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent sm:flex-1 sm:h-full sm:bg-transparent sm:border-none sm:focus:ring-0 font-heading font-normal text-[14px] leading-[17px] placeholder:text-fs-grey/70"
        />
        <button
          type="submit"
          disabled={formState === "loading" || formState === "success"}
          className="newsletter-button mx-auto h-[48px] w-[80%] bg-fs-purple rounded-[12px] shadow-[0_1px_1px_rgba(88,111,54,0.08)] sm:mx-0 sm:h-full sm:w-auto sm:px-5 sm:rounded-[10px] font-heading font-bold text-[12px] leading-[15px] text-white whitespace-nowrap transition-transform duration-150 sm:hover:-translate-y-[1px] disabled:opacity-70"
        >
          {buttonLabel}
        </button>
      </div>
      {formState === "error" ? (
        <p className="font-body text-[12px] leading-[16px] text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
