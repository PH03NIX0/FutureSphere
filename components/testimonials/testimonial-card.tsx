import Image from "next/image";
import SliderNavigation from "@/components/testimonials/slider-navigation";

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
    <div className="border border-fs-border rounded-card bg-white w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[60px] w-full">
        {/* Left: Portrait Image */}
        <div className="relative rounded-card-image overflow-hidden flex-shrink-0 w-full h-[280px] lg:h-[420px] max-w-[460px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>

        {/* Right: Quote + Author + Navigation */}
        <div className="flex flex-col gap-5 lg:gap-[20px] flex-1 w-full">
          {/* Quote */}
          <p className="font-body font-normal text-left text-p2 text-fs-grey">
            {quote}
          </p>

          {/* Author + Navigation */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
              <div className="flex flex-col gap-[4px]">
              <span className="font-heading text-[20px] sm:text-[24px] leading-[24px] sm:leading-[29px] font-normal text-fs-dark">
                {authorName}
              </span>
              <span className="font-heading text-[16px] sm:text-[20px] leading-[22px] sm:leading-[24px] font-normal text-fs-dark">
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
