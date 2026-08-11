"use client";

import { useState } from "react";
import Image from "next/image";

const contactHeroImage = "https://res.cloudinary.com/wfqwup4o/image/upload/v1786007376/Box_wcez6q.png";

const services = ["Web Design", "App Design", "Consulting", "Marketing"] as const;

const contactMethods = [
  {
    title: "Sales and Business",
    detail: "sales@futuresphere.com",
    iconSrc: "https://res.cloudinary.com/wfqwup4o/image/upload/v1786007375/briefcase_xw5iyp.svg",
    iconAlt: "Briefcase",
  },
  {
    title: "Partners",
    detail: "partners@futuresphere.com",
    iconSrc: "https://res.cloudinary.com/wfqwup4o/image/upload/v1786007375/shaking-hands_hrdmrn.svg",
    iconAlt: "Shaking hands",
  },
  {
    title: "Customer Support",
    detail: "support@futuresphere.com",
    iconSrc: "https://res.cloudinary.com/wfqwup4o/image/upload/v1786007375/headset_fgk65l.svg",
    iconAlt: "Headset",
  },
] as const;

type FormState = "idle" | "loading" | "success" | "error";

const inputClassName =
  "h-[44px] w-full rounded-[8px] border border-transparent bg-white px-[14px] py-[10px] font-heading text-[16px] leading-[24px] text-fs-dark outline-none shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08),0px_0px_0px_1px_rgba(103,110,118,0.16),0px_1px_1px_0px_rgba(0,0,0,0.12)] placeholder:text-[#9ea5ad] focus:ring-2 focus:ring-fs-purple";

export default function ContactFormSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Design"]);
  const [agreed, setAgreed] = useState(true);
  const [formState, setFormState] = useState<FormState>("idle");

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service],
    );
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!agreed) {
      setFormState("error");
      return;
    }

    setFormState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormState("success");
    setTimeout(() => setFormState("idle"), 3000);
  };

  let submitLabel = "Submit";
  if (formState === "loading") submitLabel = "Sending...";
  if (formState === "success") submitLabel = "Sent!";

  return (
    <section className="fs-container mx-auto flex flex-col gap-[30px] px-4 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,720px)_1fr] lg:items-start">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[30px] rounded-card border border-fs-border bg-white px-[22px] py-[36px]"
          aria-label="Contact form"
        >
          <div className="grid gap-[30px] sm:grid-cols-2">
            <label className="flex flex-col gap-2 font-heading text-[14px] font-medium leading-[20px] text-[#454c52]">
              First Name
              <input name="firstName" required autoComplete="given-name" className={inputClassName} placeholder="Ali" />
            </label>
            <label className="flex flex-col gap-2 font-heading text-[14px] font-medium leading-[20px] text-[#454c52]">
              Last Name
              <input name="lastName" required autoComplete="family-name" className={inputClassName} placeholder="Osama" />
            </label>
            <label className="flex flex-col gap-2 font-heading text-[14px] font-medium leading-[20px] text-[#454c52]">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClassName}
                placeholder="osama17007@gmail.com"
              />
            </label>
            <label className="flex flex-col gap-2 font-heading text-[14px] font-medium leading-[20px] text-[#454c52]">
              Subject
              <input name="subject" required className={inputClassName} placeholder="Partnership inquiry" />
            </label>
          </div>

          <fieldset>
            <legend className="font-heading text-[14px] font-medium leading-[20px] text-[#454c52]">Services</legend>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              {services.map((service) => {
                const selected = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleService(service)}
                    className={`rounded-[4px] px-2 py-[2px] font-heading text-[12px] font-medium leading-[18px] transition-colors duration-150 ${
                      selected ? "bg-fs-purple text-white" : "bg-[#f6f7f9] text-[#24292e]"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
            <input type="hidden" name="services" value={selectedServices.join(", ")} />
          </fieldset>

          <label className="flex flex-col gap-2 font-heading text-[14px] font-medium leading-[20px] text-[#454c52]">
            Messages
            <textarea
              name="message"
              required
              className="min-h-[150px] w-full resize-none rounded-[8px] border border-transparent bg-white px-[14px] py-[10px] font-heading text-[16px] leading-[24px] text-fs-dark outline-none shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08),0px_0px_0px_1px_rgba(103,110,118,0.16),0px_1px_1px_0px_rgba(0,0,0,0.12)] placeholder:text-[#9ea5ad] focus:ring-2 focus:ring-fs-purple"
              placeholder="Add Text"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center gap-[5px] font-body text-[12px] text-fs-dark">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                className="h-4 w-4 rounded-[4px] accent-fs-dark"
              />
              I agree with terms of usage and privacy policy.
            </label>
            <button
              type="submit"
              disabled={formState === "loading" || formState === "success"}
              className="h-[35px] rounded-button bg-fs-purple px-[30px] font-heading text-[16px] font-medium tracking-[-0.96px] text-white transition-transform duration-150 sm:hover:-translate-y-[1px] disabled:opacity-70"
            >
              {submitLabel}
            </button>
          </div>

          {formState === "error" && (
            <p className="font-body text-[12px] text-red-600" role="alert">
              Please agree to the terms before submitting.
            </p>
          )}
          {formState === "success" && (
            <p className="font-body text-[12px] text-fs-purple" role="status">
              Thanks — we&apos;ll get back to you shortly.
            </p>
          )}
        </form>

        <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[594px]">
          <Image
            src={contactHeroImage}
            alt="Purple geometric box"
            width={360}
            height={420}
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
            className="h-auto w-full max-w-[280px] object-contain sm:max-w-[320px] lg:max-w-[360px]"
          />
        </div>
      </div>

      <div className="grid w-full max-w-[720px] gap-6 rounded-blog border border-fs-border bg-white px-6 py-4 sm:grid-cols-3 sm:items-center sm:gap-0 sm:px-[46px] sm:py-[13px]">
        {contactMethods.map((method, index) => (
          <div key={method.title} className="relative flex flex-col items-center gap-[10px] px-3 text-center">
            {index > 0 && (
              <span className="absolute left-0 top-1/2 hidden h-[84px] w-px -translate-y-1/2 bg-fs-border sm:block" aria-hidden="true" />
            )}
            <Image src={method.iconSrc} alt={method.iconAlt} width={46} height={38} unoptimized className="h-[38px] w-auto" />
            <h2 className="font-heading text-[20px] leading-[24px] tracking-[-0.96px] text-fs-dark">{method.title}</h2>
            <a href={`mailto:${method.detail}`} className="font-heading text-[16px] leading-[19px] tracking-[-0.96px] text-fs-grey hover:text-fs-purple">
              {method.detail}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
