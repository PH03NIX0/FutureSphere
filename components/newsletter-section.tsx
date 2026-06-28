"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <section className="w-[1058px] mt-[80px]">
      <div
        className={`newsletter-card relative rounded-[24px] border border-[#EFF0F7] overflow-hidden ${inputFocused ? "newsletter-card-active" : ""}`}
      >

        {/* Content */}
        <div className="relative flex flex-col items-center gap-[50px] px-12 py-16">
          {/* Mail Icon with frame */}
          <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[14px]">
            <img src="/icons/newsletter-icon-frame.svg" alt="Newsletter" className="w-[72px] h-[72px]" decoding="async" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center gap-[16px] w-full max-w-[600px]">
            <h2
              className="font-heading font-normal text-center w-full"
              style={{ fontSize: "48px", lineHeight: "58px", letterSpacing: "-3.8267px", color: "white" }}
            >
              Do cool things with us.
            </h2>
            <p
              className="font-body font-normal text-center w-full"
              style={{ fontSize: "20px", lineHeight: "24px", letterSpacing: "-0.96px", color: "rgba(255,255,255,0.8)" }}
            >
              Stay in the loop with updates from our team and community.
              <br />
              Once a month.
            </p>
          </div>

          {/* Newsletter Form */}
          <form
            className={`
              flex w-[470px] h-[48px] items-center bg-white border border-[#E2E8F1] rounded-[12px] p-[3px]
              shadow-[0_2px_24px_2px_rgba(29,32,36,0.02)] transition-shadow duration-200
              ${inputFocused ? "ring-2" : ""}
              ring-fs-purple
            `}
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="newsletter-input flex-1 h-full px-6 bg-transparent border-none outline-none font-heading font-normal text-[14px] leading-[17px] placeholder:text-[rgba(95,100,134,0.7)]"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            <button
              type="submit"
              className="newsletter-button h-full px-7 bg-[#7F56D9] rounded-[10px] shadow-[0_1px_1px_rgba(88,111,54,0.08)] font-heading font-bold text-[12px] leading-[15px] text-white whitespace-nowrap transition-all duration-150 hover:-translate-y-[1px]"
            >
              Subscribe to newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
