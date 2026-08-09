"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import NewsletterSection from "@/components/newsletter/newsletter-section";
import { offices } from "@/lib/offices";

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

const faqs = [
  {
    question: "What is included in the startup website template?",
    answer:
      "Our startup website template includes a range of essential features and components, such as responsive design, customizable layouts, pre-built sections, integration with popular CMS platforms, and access to a library of high-quality images and icons.",
  },
  {
    question: "Can I customize the template to match my brand's identity?",
    answer:
      "Absolutely! Our startup website template provides easy customization options, allowing you to personalize the colors, fonts, logo, and overall look and feel to align with your brand identity. You can create a unique and captivating online presence that reflects your startup's vision.",
  },
  {
    question: "Is the template optimized for search engines (SEO)?",
    answer:
      "Yes, the template is designed with SEO best practices in mind, including clean code structure, fast loading times, meta tag optimization, and schema markup implementation.",
  },
  {
    question: "Do you offer support and updates for the template?",
    answer:
      "Absolutely. We provide dedicated customer support to address questions or concerns and deliver regular updates to keep your website compatible, secure, and optimized.",
  },
] as const;

type FormState = "idle" | "loading" | "success" | "error";

const inputClassName =
  "h-[44px] w-full rounded-[8px] border border-transparent bg-white px-[14px] py-[10px] font-heading text-[16px] leading-[24px] text-fs-dark outline-none shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08),0px_0px_0px_1px_rgba(103,110,118,0.16),0px_1px_1px_0px_rgba(0,0,0,0.12)] placeholder:text-[#9ea5ad] focus:ring-2 focus:ring-fs-purple";

function ContactFormSection() {
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

function OfficesSection() {
  return (
    <section className="fs-container mx-auto mt-12 sm:mt-16 lg:mt-[90px] flex flex-col items-center gap-8 sm:gap-[50px] px-4 sm:px-6">
      <div className="flex max-w-[880px] flex-col items-center gap-3 sm:gap-5 text-center">
        <Badge>Our Offices</Badge>
        <h2 className="font-heading text-[28px] leading-[34px] font-medium text-fs-dark sm:text-[40px] sm:font-normal sm:leading-[48px] lg:text-[48px] lg:leading-[58px] lg:tracking-[-3.8267px]">
          Discover Our Global Network of Offices
        </h2>
        <p className="font-body text-[15px] leading-[22px] sm:text-[16px] text-fs-grey">
          Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.
        </p>
      </div>

      <div className="grid w-full gap-8 rounded-blog border border-fs-border bg-white px-4 py-5 sm:px-8 sm:py-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-[65px] lg:py-[47px]">
        {offices.map((office) => (
          <article key={office.city} className="flex flex-col gap-5 sm:gap-[30px]">
            <div className="relative h-[200px] overflow-hidden rounded-[8px] sm:h-[260px] lg:h-[301px]">
              <Image src={office.imageSrc} alt={office.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px" className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-[10px] font-heading tracking-[-0.96px]">
              <h3 className="text-[18px] sm:text-[20px] leading-[24px] text-fs-purple">{office.city}</h3>
              <p className="text-[15px] sm:text-[16px] leading-[20px] text-fs-grey">{office.address}</p>
              <p className="text-[15px] sm:text-[16px] leading-[20px] text-fs-dark">{office.phone}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="fs-container mx-auto mt-12 sm:mt-16 lg:mt-[90px] flex flex-col items-center gap-8 sm:gap-[50px] px-4 sm:px-6">
      <div className="flex max-w-[800px] flex-col items-center gap-3 sm:gap-5 text-center">
        <Badge>FAQs</Badge>
        <h2 className="font-heading text-[28px] leading-[34px] font-medium text-fs-dark sm:text-[40px] sm:font-normal sm:leading-[48px] lg:text-[48px] lg:leading-[58px] lg:tracking-[-3.8267px]">
          Answers to some of your questions
        </h2>
        <p className="font-body text-[15px] leading-[22px] sm:text-[16px] text-fs-grey">
          Don&apos;t find the answers you were looking for? Contact us at{" "}
          <a href="mailto:futuresphere@gmail.com" className="font-bold text-fs-purple">
            futuresphere@gmail.com
          </a>
        </p>
      </div>

      <div className="grid w-full gap-[10px] lg:grid-cols-2">
        {faqs.map((faq) => (
          <article key={faq.question} className="flex flex-col gap-5 rounded-[8px] border border-fs-border bg-white px-5 py-[22px]">
            <h3 className="font-heading text-[16px] leading-[19px] tracking-[-0.96px] text-fs-purple">{faq.question}</h3>
            <div className="h-px w-full bg-fs-border" />
            <p className="font-body text-[16px] leading-[22px] tracking-[-0.75px] text-fs-grey">{faq.answer}</p>
          </article>
        ))}
      </div>

      <a href="#faqs" className="group inline-flex items-center gap-2 font-body text-[14px] font-semibold text-fs-dark">
        View All
        <svg aria-hidden="true" className="h-4 w-4 transition-transform duration-150 group-hover:translate-y-[2px]" viewBox="0 0 16 16" fill="none">
          <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="flex w-full flex-col items-center gap-[100px] bg-fs-background pb-0 pt-[15px]">
      <Navbar />
      <section className="fs-container mx-auto flex flex-col items-center gap-5 px-4 text-center sm:px-6">
        <h1 className="font-heading text-[36px] font-normal leading-[44px] text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px]">
          Contact Us
        </h1>
        <p className="max-w-[760px] font-body text-[16px] leading-[22px] text-fs-grey">
          At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change.
        </p>
      </section>
      <ContactFormSection />
      <div className="flex w-full flex-col items-center">
        <OfficesSection />
        <div id="faqs" className="w-full">
          <FaqSection />
        </div>
        <div className="mt-[90px] w-full">
          <NewsletterSection />
        </div>
        <div className="h-[90px]" />
        <Footer />
      </div>
    </main>
  );
}
