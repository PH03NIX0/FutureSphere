"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/auth/auth-button";
import { authInputClassName } from "@/components/auth/auth-styles";
import {
  SIGNUP_COUNTRIES,
  type SignupCountryCode,
} from "@/lib/signup";

type FormState = "idle" | "loading" | "error";

const countryPlaceholders: Record<SignupCountryCode, string> = {
  US: "+1 (555) 000-0000",
  GB: "+44 7700 000000",
  NG: "+234 800 000 0000",
  CA: "+1 (555) 000-0000",
};

const countries = SIGNUP_COUNTRIES.map((country) => ({
  ...country,
  placeholder: countryPlaceholders[country.code],
}));

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState<SignupCountryCode>("US");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong. Please try again."
  );

  const selectedCountry = countries.find((c) => c.code === countryCode) ?? countries[0];

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    setErrorMessage("Something went wrong. Please try again.");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          country: countryCode,
          dialCode: selectedCountry.dial,
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

      router.push("/signup/success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setFormState("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 rounded-blog border border-fs-border bg-white p-5 shadow-[0_8px_30px_rgba(27,21,43,0.06)] sm:gap-6 sm:p-7"
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="signup-name" className="font-body text-[13px] font-medium leading-[18px] text-fs-grey">
          Name
        </label>
        <input
          id="signup-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="futuresphere"
          className={authInputClassName}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="signup-email" className="font-body text-[13px] font-medium leading-[18px] text-fs-grey">
          Email
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="hussain@finesse.com"
          className={authInputClassName}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="signup-phone" className="font-body text-[13px] font-medium leading-[18px] text-fs-grey">
          Phone number
        </label>
        <div className="flex h-[48px] items-center overflow-hidden rounded-input border border-fs-border-light bg-white focus-within:ring-2 focus-within:ring-fs-purple/40 focus-within:border-fs-purple/40">
          <label htmlFor="signup-country" className="sr-only">
            Country code
          </label>
          <div className="relative flex h-full shrink-0 items-center border-r border-fs-border-light pl-3 pr-2">
            <select
              id="signup-country"
              name="country"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value as SignupCountryCode)}
              className="appearance-none bg-transparent pr-5 font-body text-[14px] font-medium text-fs-dark outline-none"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-fs-grey"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <input
            id="signup-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={selectedCountry.placeholder}
            className="h-full min-w-0 flex-1 border-0 bg-transparent px-3 font-body text-[15px] text-fs-dark outline-none placeholder:text-fs-grey/60"
          />
          <span className="pr-3 text-fs-grey/70" aria-hidden="true">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </span>
        </div>
        <input type="hidden" name="dialCode" value={selectedCountry.dial} />
      </div>

      {formState === "error" ? (
        <p className="font-body text-[13px] text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <AuthButton type="submit" variant="solid" fullWidth disabled={formState === "loading"}>
        {formState === "loading" ? "Submitting..." : "Get started"}
      </AuthButton>
    </form>
  );
}
