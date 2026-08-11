"use client";

import { useState } from "react";
import Badge from "@/components/ui/badge";

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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

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
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <article
              key={faq.question}
              className="flex flex-col rounded-[8px] border border-fs-border bg-white px-5 py-[22px]"
            >
              <h3 className="font-heading text-[16px] leading-[19px] tracking-[-0.96px] text-fs-purple">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span>{faq.question}</span>
                  <svg
                    aria-hidden="true"
                    className={`h-4 w-4 shrink-0 text-fs-purple transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="m4 6 4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={isOpen ? "mt-5 flex flex-col gap-5" : undefined}
              >
                {isOpen ? (
                  <>
                    <div className="h-px w-full bg-fs-border" aria-hidden="true" />
                    <p className="font-body text-[16px] leading-[22px] tracking-[-0.75px] text-fs-grey">
                      {faq.answer}
                    </p>
                  </>
                ) : null}
              </div>
            </article>
          );
        })}
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
