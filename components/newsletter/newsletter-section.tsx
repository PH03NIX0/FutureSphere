import { getCloudinaryUrl } from "@/lib/cloudinary";
import NewsletterForm from "@/components/newsletter/newsletter-form";

export default function NewsletterSection() {
  return (
    <section className="fs-container mx-auto mt-12 sm:mt-16 lg:mt-[80px] px-4 sm:px-6 w-full">
      <div
        className="newsletter-card relative rounded-newsletter border border-fs-border overflow-hidden"
        style={
          {
            "--newsletter-bg": `url(${getCloudinaryUrl("futuresphere/newsletter-bg-rect", { fetch_format: "auto", quality: "auto" })})`,
          } as React.CSSProperties
        }
      >
        <div className="relative flex flex-col items-center gap-6 sm:gap-8 lg:gap-[50px] px-5 sm:px-6 py-12 sm:py-14 lg:py-16">
          <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[14px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/wfqwup4o/image/upload/v1783948712/futuresphere/newsletter-icon-frame.svg"
              alt=""
              aria-hidden="true"
              className="w-[48px] h-[48px] sm:w-[72px] sm:h-[72px]"
            />
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full max-w-[600px]">
            <h2 className="font-heading font-normal text-center w-full text-[28px] leading-[34px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px] tracking-[-0.96px] text-white">
              Do cool things with us.
            </h2>
            <p className="font-body font-normal text-center w-full text-[14px] leading-[20px] sm:text-base sm:leading-[24px] tracking-[-0.96px] text-white/80">
              Stay in the loop with updates from our team and community.
              <br className="hidden sm:block" />
              {" "}Once a month.
            </p>
          </div>

          <div className="w-full max-w-[470px]">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
