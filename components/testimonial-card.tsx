import Image from "next/image";
import SliderNavigation from "@/components/slider-navigation";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  imageSrc: string;
  imageAlt: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function TestimonialCard({
  quote,
  authorName,
  authorTitle,
  imageSrc,
  imageAlt,
  onPrevious,
  onNext,
}: TestimonialCardProps) {
return (
    <div
      className="border border-[#EFF0F7] rounded-[32px] bg-white"
      style={{ width: "1058px", height: "480px", padding: "46px 39px" }}
    >
      <div
        className="flex flex-row items-center justify-between gap-[60px] w-full"
        style={{ minHeight: "388px" }}
      >
        {/* Left: Portrait Image */}
        <div
          className="relative rounded-[16px] overflow-hidden flex-shrink-0"
          style={{ width: "460px", height: "420px" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>

        {/* Right: Quote + Author + Navigation */}
        <div
          className="flex flex-col gap-[20px] flex-1"
        >
          {/* Quote */}
          <p
            className="font-body font-normal text-left"
            style={{
              fontSize: "16px",
              lineHeight: "22px",
              color: "var(--color-fs-grey)",
              letterSpacing: "-0.75px",
            }}
          >
            {quote}
          </p>

          {/* Author + Navigation */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-[4px]">
              <span className="font-heading text-[24px] leading-[29px] tracking-[-0.96px] font-normal text-fs-dark">
                {authorName}
              </span>
              <span className="font-heading text-[20px] leading-[24px] tracking-[-0.96px] font-normal text-fs-dark">
                {authorTitle}
              </span>
            </div>
            <SliderNavigation onPrevious={onPrevious} onNext={onNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
