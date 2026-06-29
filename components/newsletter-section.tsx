"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <section className="w-full max-w-[1058px] mt-[80px] px-4 sm:px-6">
      <div
        className={`newsletter-card relative rounded-[24px] border border-[#EFF0F7] overflow-hidden ${inputFocused ? "newsletter-card-active" : ""}`}
      >

        {/* Content */}
        <div className="relative flex flex-col items-center gap-[50px] px-6 sm:px-12 py-16">
          {/* Mail Icon with frame */}
          <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[14px]">
            <img src="/icons/newsletter-icon-frame.svg" alt="Newsletter" className="w-[48px] h-[48px] sm:w-[72px] sm:h-[72px]" decoding="async" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center gap-[16px] w-full max-w-[600px]">
            <h2
              className="font-heading font-normal text-center w-full text-[32px] sm:text-[40px] lg:text-[48px] leading-[38px] sm:leading-[48px] lg:leading-[58px] tracking-[-3.8267px] text-white"
            >
              Do cool things with us.
            </h2>
            <p
              className="font-body font-normal text-center w-full text-base sm:text-[20px] leading-[22px] sm:leading-[24px] tracking-[-0.96px] text-white/80"
            >
              Stay in the loop with updates from our team and community.
              <br />
              Once a month.
            </p>
          </div>

          {/* Newsletter Form */}
          <form
            className="newsletter-form group flex w-full max-w-[470px] h-[48px] items-center bg-white border border-[#E2E8F1] rounded-[12px] p-[3px] shadow-[0_2px_24px_2px_rgba(29,32,36,0.02)] transition-shadow duration-200"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="newsletter-input flex-1 h-full px-4 sm:px-6 bg-transparent border-none outline-none font-heading font-normal text-[14px] leading-[17px] placeholder:text-[rgba(95,100,134,0.7)]"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            <button
              type="submit"
              className="newsletter-button h-full px-5 sm:px-7 bg-[#7F56D9] rounded-[10px] shadow-[0_1px_1px_rgba(88,111,54,0.08)] font-heading font-bold text-[11px] sm:text-[12px] leading-[15px] text-white whitespace-nowrap transition-all duration-150 hover:-translate-y-[1px]"
            >
              Subscribe to newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
