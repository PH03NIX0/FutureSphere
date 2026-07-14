"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface NewsletterFormProps {
  variant?: "mobile" | "desktop";
}

export default function NewsletterForm({ variant = "desktop" }: NewsletterFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    // Future: replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormState("success");
    setTimeout(() => setFormState("idle"), 3000);
  };

  if (variant === "mobile") {
    return (
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email-mobile" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email-mobile"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder="Enter your email"
          className="w-full h-[48px] px-4 bg-white border border-fs-border-light rounded-[12px] font-heading font-normal text-[14px] leading-[17px] placeholder:text-fs-grey/70 outline-none"
        />
        <button
          type="submit"
          disabled={formState === "loading" || formState === "success"}
          className="w-full h-[48px] bg-fs-purple rounded-[12px] shadow-[0_1px_1px_rgba(88,111,54,0.08)] font-heading font-bold text-[12px] leading-[15px] text-white whitespace-nowrap transition-transform duration-150 sm:hover:-translate-y-[1px] disabled:opacity-70"
        >
          {formState === "success" ? "Subscribed!" : formState === "loading" ? "Subscribing..." : "Subscribe to newsletter"}
        </button>
      </form>
    );
  }

  return (
    <form
      className="flex w-full max-w-[470px] h-[48px] items-center bg-white border border-fs-border-light rounded-[12px] p-[3px] shadow-[0_2px_12px_rgba(29,32,36,0.04)] transition-shadow duration-200"
      onSubmit={handleSubmit}
    >
      <label htmlFor="newsletter-email-desktop" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email-desktop"
        type="email"
        autoComplete="email"
        inputMode="email"
        required
        placeholder="Enter your email"
        className="flex-1 h-full px-4 bg-transparent border-none outline-none font-heading font-normal text-[14px] leading-[17px] placeholder:text-fs-grey/70"
      />
      <button
        type="submit"
        disabled={formState === "loading" || formState === "success"}
        className="h-full px-5 bg-fs-purple rounded-[10px] shadow-[0_1px_1px_rgba(88,111,54,0.08)] font-heading font-bold text-[12px] leading-[15px] text-white whitespace-nowrap transition-transform duration-150 sm:hover:-translate-y-[1px] disabled:opacity-70"
      >
        {formState === "success" ? "Subscribed!" : formState === "loading" ? "Subscribing..." : "Subscribe to newsletter"}
      </button>
    </form>
  );
}
